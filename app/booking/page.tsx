import type { Metadata } from 'next';

import BookingForm from '@/components/booking-form';

export const metadata: Metadata = {
  title: 'Book a Mobile Podiatrist | Stride Podiatry Adelaide',
  description:
    'Request a mobile podiatry home visit in Adelaide. No referral needed. We accept Medicare CDM (GPMP/TCA), NDIS and private patients.',
  alternates: { canonical: 'https://www.stride-podiatry.com.au/booking/' },
};

export default function BookingPage() {
  return (
    <div className="booking-container">
      <h1>Request a Home Visit</h1>
      <p>We&apos;ll contact you to schedule an appointment at your home.</p>
      <BookingForm />
    </div>
  );
}
