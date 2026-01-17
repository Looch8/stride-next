'use client';

import { useState } from 'react';

export type FAQItem = {
  question: string;
  answer: string;
};

type FAQListProps = {
  items: FAQItem[];
};

export default function FAQList({ items }: FAQListProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="faq-list">
      {items.map((item, index) => (
        <div
          key={item.question}
          className={`faq-item ${openIndex === index ? 'open' : ''}`}
        >
          <button
            className="faq-item-header"
            type="button"
            aria-expanded={openIndex === index}
            aria-controls={`faq-answer-${index}`}
            onClick={() => toggleFAQ(index)}
          >
            <span className="faq-question">{item.question}</span>
            <span className="faq-icon">{openIndex === index ? '−' : '+'}</span>
          </button>
          {openIndex === index && (
            <div className="faq-answer" id={`faq-answer-${index}`}>
              <p>{item.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
