// Lightweight in-memory, per-IP rate limiter.
//
// Note: on Vercel's serverless runtime each instance has its own memory, so
// this is a best-effort throttle rather than a hard global guarantee — it
// stops a single client hammering one instance (basic flooding / accidental
// double-submits) without any external service. For a strict distributed
// limit, swap this for Upstash/Redis later.

type Entry = { count: number; resetAt: number };

const store = new Map<string, Entry>();

function prune(now: number): void {
  // Opportunistically drop expired entries so the map can't grow unbounded.
  for (const [key, entry] of store) {
    if (entry.resetAt <= now) {
      store.delete(key);
    }
  }
}

export type RateLimitResult = { ok: boolean; retryAfter: number };

export function rateLimit(
  key: string,
  limit: number,
  windowMs: number,
): RateLimitResult {
  const now = Date.now();
  const entry = store.get(key);

  if (!entry || entry.resetAt <= now) {
    if (store.size > 5000) {
      prune(now);
    }
    store.set(key, { count: 1, resetAt: now + windowMs });
    return { ok: true, retryAfter: 0 };
  }

  if (entry.count >= limit) {
    return { ok: false, retryAfter: Math.ceil((entry.resetAt - now) / 1000) };
  }

  entry.count += 1;
  return { ok: true, retryAfter: 0 };
}

export function getClientIp(request: Request): string {
  const forwarded = request.headers.get('x-forwarded-for');
  if (forwarded) {
    // May be a comma-separated list; the first entry is the client.
    return forwarded.split(',')[0]?.trim() || 'unknown';
  }
  return request.headers.get('x-real-ip')?.trim() || 'unknown';
}
