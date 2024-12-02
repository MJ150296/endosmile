"use client";

import React, { useState } from "react";

const faqData = [
  {
    question: "How often should I visit the dentist?",
    answer:
      "It&apos;s recommended to visit your dentist every six months for a routine check-up and cleaning. However, your dentist may suggest more frequent visits based on your oral health needs.",
  },
  {
    question: "What is the best way to prevent cavities?",
    answer:
      "Brush twice a day with fluoride toothpaste, floss daily, and limit sugary foods and drinks. Regular dental check-ups are also essential for cavity prevention.",
  },
  {
    question: "Are teeth whitening treatments safe?",
    answer:
      "Yes, teeth whitening treatments performed by a dentist are safe and effective. Over-the-counter products should be used cautiously and as directed.",
  },
  {
    question: "What should I do if I have a toothache?",
    answer:
      "If you have a toothache, rinse your mouth with warm water, floss to remove food debris, and avoid extreme temperatures. Schedule a visit to your dentist as soon as possible.",
  },
  {
    question: "What is the difference between a filling and a crown?",
    answer:
      "A filling is used to repair a small area of tooth decay, while a crown covers the entire tooth, protecting it when damage or decay is extensive.",
  },
];

const FAQComponent: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto p-10 mb-10">
      <h5 className="text-green-600 tracking-wide font-semibold text-3xl mb-5">
        Got Questions About Your Smile?
        <span className="text-blue-600">We&apos;ve Got Answers!</span>
      </h5>
      <div className="space-y-4">
        {faqData.map((faq, index) => (
          <div
            key={index}
            className="rounded-lg shadow-lg border border-gray-200 overflow-hidden"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className={`flex justify-between items-center w-full px-6 py-4 bg-blue-600 text-white font-semibold text-lg transition duration-200 hover:bg-blue-700 ${
                activeIndex === index ? "rounded-t-lg" : "rounded-lg"
              }`}
            >
              {faq.question}
              <span
                className={`ml-2 transform ${
                  activeIndex === index ? "rotate-180" : "rotate-0"
                } transition-transform duration-300`}
              >
                ▼
              </span>
            </button>
            {activeIndex === index && (
              <div className="px-6 py-4 bg-green-600 text-white text-base font-semibold">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQComponent;
