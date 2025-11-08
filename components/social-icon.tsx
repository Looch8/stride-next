type SocialIconProps = {
  name: 'facebook' | 'instagram';
};

export default function SocialIcon({ name }: SocialIconProps) {
  if (name === 'instagram') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M16.5 3h-9A4.5 4.5 0 0 0 3 7.5v9A4.5 4.5 0 0 0 7.5 21h9A4.5 4.5 0 0 0 21 16.5v-9A4.5 4.5 0 0 0 16.5 3Zm-4.5 13a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm5-7.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z" />
        <circle cx="12" cy="12" r="2.7" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M21 12.07C21 6.55 16.52 2 11 2S1 6.55 1 12.07C1 17.1 4.66 21.28 9.44 22v-7.03H7.23V12.1h2.21V9.98c0-2.2 1.3-3.41 3.29-3.41.95 0 1.95.17 1.95.17v2.15h-1.1c-1.08 0-1.42.68-1.42 1.38v1.66h2.41l-.39 2.87h-2.02V22C17.34 21.28 21 17.1 21 12.07Z" />
    </svg>
  );
}
