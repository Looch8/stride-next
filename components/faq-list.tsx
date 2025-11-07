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
          onClick={() => toggleFAQ(index)}
        >
          <div className="faq-item-header">
            <h2 className="faq-question">{item.question}</h2>
            <span className="faq-icon">{openIndex === index ? '−' : '+'}</span>
          </div>
          {openIndex === index && (
            <div className="faq-answer">
              <p>{item.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
