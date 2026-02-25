import React from "react";

function Works() {
  const steps = [
    {
      number: "1",
      title: "Create Account",
      description:
        "Sign up and enter your basic health profile securely.",
    },
    {
      number: "2",
      title: "Add Medications",
      description:
        "Add your medications and doctor appointments easily.",
    },
    {
      number: "3",
      title: "Get Reminded",
      description:
        "Receive timely alerts and never miss an important dose.",
    },
  ];

  return (
    <section className="py-16 px-6 bg-[#f6f7f9]">
      {/* Title */}
      <h2 className="text-3xl font-bold text-center mb-2">
        How It Works
      </h2>

      {/* Subtitle */}
      <p className="text-gray-500 text-center mb-12">
        Get started in three simple steps.
      </p>

      {/* Steps */}
      <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto text-center">
        {steps.map((step, index) => (
          <div key={index} className="flex flex-col items-center">
            
            {/* Circle Number */}
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-600 text-white font-bold mb-4">
              {step.number}
            </div>

            {/* Title */}
            <h3 className="text-lg font-semibold mb-2">
              {step.title}
            </h3>

            {/* Description */}
            <p className="text-sm text-gray-500 max-w-xs">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Works;

