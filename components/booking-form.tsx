'use client';

import { useState, type ChangeEvent, type FormEvent } from 'react';

type BookingForm = {
  fullName: string;
  phone: string;
  email: string;
  suburb: string;
  reason: string;
  website: string;
};

type MessageState = { type: 'success' | 'error' | ''; text: string };

const initialForm: BookingForm = {
  fullName: '',
  phone: '',
  email: '',
  suburb: '',
  reason: '',
  website: '',
};

export default function BookingForm() {
  const [formData, setFormData] = useState<BookingForm>(initialForm);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState<MessageState>({ type: '', text: '' });

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setMessage({ type: '', text: '' });
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    setMessage({ type: '', text: '' });

    try {
      const response = await fetch('/api/booking', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Booking API request failed');
      }

      setMessage({
        type: 'success',
        text: "Your booking request has been sent successfully! We'll contact you shortly to schedule your appointment.",
      });
      setFormData(initialForm);
    } catch (error) {
      console.error('Error sending booking request', error);
      setMessage({
        type: 'error',
        text: 'Failed to send your booking request. Please try again later or contact us directly.',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <form className="booking-form" onSubmit={handleSubmit} autoComplete="off">
        <div className="form-group">
          <label htmlFor="fullName">Full Name</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Enter your full name"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="phone">Phone</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Enter your phone number"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email address"
          />
        </div>

        <div className="form-group">
          <label htmlFor="suburb">Suburb</label>
          <input
            type="text"
            id="suburb"
            name="suburb"
            value={formData.suburb}
            onChange={handleChange}
            placeholder="Enter your suburb"
          />
        </div>

        <div className="form-group" id="booking-reason">
          <label htmlFor="reason">Reason for Visit</label>
          <textarea
            id="reason"
            name="reason"
            rows={5}
            value={formData.reason}
            onChange={handleChange}
            placeholder="Foot pain, orthotic review, nail care, etc."
          />
        </div>
        <div
          className="form-group"
          style={{
            position: 'absolute',
            left: '-10000px',
            width: '1px',
            height: '1px',
            overflow: 'hidden',
          }}
          aria-hidden="true"
        >
          <label htmlFor="website">Website</label>
          <input
            type="text"
            id="website"
            name="website"
            value={formData.website}
            onChange={handleChange}
            tabIndex={-1}
            autoComplete="nope"
          />
        </div>

				<button
					type="submit"
					className={`submit-button ${isLoading ? 'loading' : ''}`}
					disabled={isLoading}
				>
					{isLoading ? 'Sending…' : 'Request Booking'}
				</button>
      </form>

      {message.type && (
        <div className={`${message.type}-message`} role="status" aria-live="polite">
          {message.text}
        </div>
      )}
    </>
  );
}
