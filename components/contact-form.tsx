'use client';

import { useMemo, useState, type ChangeEvent, type FormEvent } from 'react';
import emailjs from '@emailjs/browser';

type MessageState = { type: 'success' | 'error' | ''; text: string };

type FormState = {
  name: string;
  email: string;
  message: string;
};

const initialForm: FormState = { name: '', email: '', message: '' };

export default function ContactForm() {
  const [formData, setFormData] = useState<FormState>(initialForm);
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState<MessageState>({ type: '', text: '' });

  const templateParams = useMemo(
    () => ({
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
    }),
    [formData],
  );

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setStatus({ type: '', text: '' });
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    setStatus({ type: '', text: '' });

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setStatus({
        type: 'error',
        text: 'Email is temporarily unavailable. Please call or email us directly.',
      });
      setIsLoading(false);
      return;
    }

    try {
      await emailjs.send(serviceId, templateId, templateParams, publicKey);
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
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Your Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Your Email</label>
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
          <label htmlFor="message">Your Message</label>
          <textarea
            id="message"
            name="message"
            placeholder="How can we help you?"
            rows={5}
            value={formData.message}
            onChange={handleChange}
            required
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
        <div className={`message ${status.type}-message`}>{status.text}</div>
      )}
    </>
  );
}
