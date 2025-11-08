export type SocialPlatform = 'facebook' | 'instagram';

export type SocialLink = {
  href: string;
  label: string;
  icon: SocialPlatform;
};

export const socialLinks: SocialLink[] = [
  {
    href: 'https://www.facebook.com/profile.php?id=61570588927493',
    label: 'Facebook',
    icon: 'facebook',
  },
  {
    href: 'https://www.instagram.com/stride.podiatry/?hl=en',
    label: 'Instagram',
    icon: 'instagram',
  },
];
