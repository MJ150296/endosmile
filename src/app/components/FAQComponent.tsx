"use client";

import React, { useState } from "react";

const faqData = [
  {
    question: "How often should I visit the dentist?",
    answer:
      "The appropriate interval depends on your oral health, risk factors, age, and treatment needs. Many people benefit from a routine examination about every six months, while others may need more or less frequent visits.",
  },
  {
    question: "What is the best way to prevent cavities?",
    answer:
      "Brush twice a day with fluoride toothpaste, floss daily, and limit sugary foods and drinks. Regular dental check-ups are also essential for cavity prevention.",
  },
  {
    question: "Are teeth whitening treatments safe?",
    answer:
      "Whitening can be appropriate for some patients after an examination. Temporary sensitivity or gum irritation can occur, and existing restorations do not change color. A dentist can discuss the expected result, risks, and suitable method.",
  },
  {
    question: "What should I do if I have a toothache?",
    answer:
      "Arrange a dental assessment, particularly if pain is persistent or accompanied by swelling, fever, trauma, or difficulty swallowing. Seek urgent medical care for facial swelling that affects breathing or swallowing. Do not place aspirin directly on the tooth or gums.",
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
    <div className="max-w-4xl mx-auto px-10 py-20 mb-10">
      <h5 className="text-green-600 tracking-wide font-semibold text-3xl mb-5">
        Common Questions About Dental Care
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
