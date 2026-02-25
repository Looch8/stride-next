'use client';

import { useState, type ChangeEvent, type FormEvent } from 'react';

type MessageState = { type: 'success' | 'error' | ''; text: string };

type FormState = {
  name: string;
  email: string;
  phone: string;
  preferredContactMethod: 'email' | 'phone' | 'either';
  message: string;
  website: string;
};

const initialForm: FormState = {
  name: '',
  email: '',
  phone: '',
  preferredContactMethod: 'either',
  message: '',
  website: '',
};

export default function ContactForm() {
  const [formData, setFormData] = useState<FormState>(initialForm);
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState<MessageState>({ type: '', text: '' });

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setStatus({ type: '', text: '' });
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    setStatus({ type: '', text: '' });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Contact API request failed');
      }

      setStatus({
        type: 'success',
        text: "Your message has been sent successfully! We'll get back to you soon.",
      });
      setFormData(initialForm);
    } catch (error) {
      console.error('Error sending contact message', error);
      setStatus({
        type: 'error',
        text: 'Failed to send your message. Please try again later or contact us directly.',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <form className="contact-form" onSubmit={handleSubmit} autoComplete="off">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your full name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone (optional)</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="Enter your phone number"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="preferredContactMethod">Preferred Contact Method</label>
          <select
            id="preferredContactMethod"
            name="preferredContactMethod"
            value={formData.preferredContactMethod}
            onChange={handleChange}
            required
          >
            <option value="either">Either</option>
            <option value="phone">Phone</option>
            <option value="email">Email</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            placeholder="How can we help? Ask us any question and we’ll get back to you."
            rows={5}
            value={formData.message}
            onChange={handleChange}
            required
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
          {isLoading ? 'Sending…' : 'Send Message'}
        </button>
      </form>

      {status.type && (
        <div
          className={`message ${status.type}-message`}
          role="status"
          aria-live="polite"
        >
          {status.text}
        </div>
      )}
    </>
  );
}
