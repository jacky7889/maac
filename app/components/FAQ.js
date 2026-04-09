"use client";
import { useState } from "react";
import "./../styles/home.css";

export default function FAQ() {
  const [open, setOpen] = useState(null);

  const faqs = [
    "Is MAAC good?",
    "Course duration?",
    "Placement support?",
  ];

  return (
    <section className="faq">
      <h2>FAQs</h2>

      {faqs.map((q, i) => (
        <div key={i} className="faq-item">
          <div onClick={() => setOpen(open === i ? null : i)}>
            {q}
          </div>
          {open === i && <p>Answer goes here...</p>}
        </div>
      ))}
    </section>
  );
}