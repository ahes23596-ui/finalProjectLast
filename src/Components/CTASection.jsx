import React from "react";

export default function CTASection() {
  return (
    <section className="bg-gray-100 py-20 px-6">
      <div className="max-w-3xl mx-auto text-center">
        
        {/* Title */}
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
          Ready to take control of your health?
        </h2>

        {/* Subtitle */}
        <p className="text-gray-500 mb-8">
          Join thousands of users who trust MedRemind for their daily health routine.
        </p>

        {/* Button */}
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-8 py-3 rounded-lg transition duration-300 shadow-sm cursor-pointer">
          Get Started for Free
        </button>

        {/* Small Note */}
        <p className="text-gray-400 text-sm mt-4">
          No credit card required for basic plan.
        </p>

      </div>
    </section>
  );
}
