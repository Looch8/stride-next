'use client';

import { useState, type ChangeEvent, type FormEvent } from 'react';
import emailjs from '@emailjs/browser';

type BookingForm = {
  fullName: string;
  phone: string;
  email: string;
  suburb: string;
  reason: string;
};

type MessageState = { type: 'success' | 'error' | ''; text: string };

const initialForm: BookingForm = {
  fullName: '',
  phone: '',
  email: '',
  suburb: '',
  reason: '',
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

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_BOOKING_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setMessage({
        type: 'error',
        text: 'Online bookings are temporarily unavailable. Please call or email us directly.',
      });
      setIsLoading(false);
      return;
    }

    const templateParams = {
      from_full_name: formData.fullName,
      from_phone: formData.phone,
      from_email: formData.email,
      from_suburb: formData.suburb,
      reason_for_visit: formData.reason,
    };

    try {
      await emailjs.send(serviceId, templateId, templateParams, publicKey);
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
      <form className="booking-form" onSubmit={handleSubmit}>
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

        <button
          type="submit"
          className={`submit-button ${isLoading ? 'loading' : ''}`}
          disabled={isLoading}
        >
          {isLoading ? 'Sending…' : 'Book Appointment'}
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
