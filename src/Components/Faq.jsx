import React, { useState } from "react";

function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "How to use this component?",
      answer:
        "To use this component, you need to import it in your project and use it in your JSX code.",
    },
    {
      question: "Are there any other components available?",
      answer:
        "Yes, there are many other components available in this library.",
    },
    {
      question: "Are components responsive?",
      answer:
        "Yes, all components are responsive and can be used on different screen sizes.",
    },
    {
      question: "Can I customize the components?",
      answer:
        "Yes, you can customize the components by passing props to them.",
    },
  ];

  return (
    <>
      <div className="max-w-xl mx-auto flex flex-col items-center justify-center px-6 py-12 md:px-0">
        <p className="text-indigo-600 text-sm font-medium">FAQ's</p>

        <h1 className="text-3xl font-semibold text-center">
          Looking for answer?
        </h1>

        <p className="text-sm text-slate-500 mt-2 pb-8 text-center">
          Ship Beautiful Frontends Without the Overhead
        </p>

        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border-b border-slate-200 py-4 cursor-pointer w-full"
            onClick={() =>
              setOpenIndex(openIndex === index ? null : index)
            }
          >
            <div className="flex items-center justify-between">
              <h3 className="text-base font-medium">
                {faq.question}
              </h3>

              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                className={`transition-transform duration-300 ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              >
                <path
                  d="m4.5 7.2 3.793 3.793a1 1 0 0 0 1.414 0L13.5 7.2"
                  stroke="#1D293D"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            <p
              className={`text-sm text-slate-500 transition-all duration-300 ${
                openIndex === index
                  ? "opacity-100 max-h-40 pt-4"
                  : "opacity-0 max-h-0 overflow-hidden"
              }`}
            >
              {faq.answer}
            </p>
          </div>
        ))}
      </div>
    </>
  );
}

export default Faq;
