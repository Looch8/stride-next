'use client';

import { useEffect, useRef, useState } from 'react';

const SCROLL_HIDE_THRESHOLD = 12;
const SCROLL_TOP_BUFFER = 64;

export default function MobileCtaBar() {
  const [isHidden, setIsHidden] = useState(false);
  const lastScrollY = useRef(0);
  const ticking = useRef(false);

  useEffect(() => {
    lastScrollY.current = window.scrollY;

    const handleScroll = () => {
      if (ticking.current) return;
      ticking.current = true;

      window.requestAnimationFrame(() => {
        const currentScroll = window.scrollY;
        const delta = currentScroll - lastScrollY.current;

        if (currentScroll <= SCROLL_TOP_BUFFER) {
          setIsHidden(false);
        } else if (delta > SCROLL_HIDE_THRESHOLD) {
          setIsHidden(true);
        } else if (delta < -SCROLL_HIDE_THRESHOLD) {
          setIsHidden(false);
        }

        lastScrollY.current = currentScroll;
        ticking.current = false;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={`mobile-cta-bar ${isHidden ? 'is-hidden' : ''}`}
      role="region"
      aria-label="Quick actions"
      aria-hidden={isHidden}
    >
      <a
        href="tel:+61468518993"
        className="mobile-cta phone"
        tabIndex={isHidden ? -1 : undefined}
      >
        Call 0468 518 993
      </a>
      <a
        href="/booking"
        className="mobile-cta book"
        tabIndex={isHidden ? -1 : undefined}
      >
        Book
      </a>
    </div>
  );
}
