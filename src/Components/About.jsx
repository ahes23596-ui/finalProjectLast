import React from "react";

function About() {
  return (
    <section className="py-16 px-6 bg-[#f6f7f9]">
      
      {/* Section Title */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-slate-800 mb-4">
          About Us
        </h2>
        <p className="text-slate-500 max-w-2xl mx-auto">
          Caring for your health, one reminder at a time
        </p>
      </div>

      {/* Card */}
      <div className="max-w-7xl mx-auto">
        <div
          className="
            bg-white rounded-3xl shadow-2xl
            p-8 md:p-12
            transition-all duration-300
          "
        >
          <p className="text-slate-700 leading-relaxed text-lg">
            We believe that good health starts with consistency and care.<br/> 
            Our platform was created to support patients who struggle with 
            remembering their medication schedules and doctor appointments.
            <br/>
            We aim to make healthcare management simple, reliable, and accessible 
            for everyone, especially elderly patients and those with chronic conditions.<br/>
            By using smart reminders and an easy-to-use system, we help patients stay 
            on track, reduce stress, and focus on what truly matters — their health.
          </p>
        </div>
      </div>

    </section>
  );
}

export default About;
