import React from "react";
import { Shield, ClipboardCheck, Heart, Zap } from "lucide-react";

export default function CoreValuesSection() {
  const values = [
    {
      icon: <Shield size={22} />,
      title: "Privacy First",
      desc: "Your health data is sacred. We employ bank-level encryption to keep your information secure and private.",
    },
    {
      icon: <ClipboardCheck size={22} />,
      title: "Clinical Accuracy",
      desc: "We collaborate with medical professionals to ensure our reminders and tracking logic are clinically sound.",
    },
    {
      icon: <Heart size={22} />,
      title: "Empathy",
      desc: "We design for humans, not users. We understand the anxiety of medication management and build to alleviate it.",
    },
    {
      icon: <Zap size={22} />,
      title: "Reliability",
      desc: "A reminder app cannot fail. We obsess over uptime and notification delivery rates so you don’t have to.",
    },
  ];

  return (
    <section className="bg-gray-100 py-24 px-6">
      <div className="max-w-6xl mx-auto text-center">
        
        {/* Header */}
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
          Core Values
        </h2>

        <p className="text-gray-500 max-w-2xl mx-auto mb-16">
          The principles that guide every feature we build and every decision we make.
        </p>

        {/* Values Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          {values.map((value, index) => (
            <div key={index} className="text-center">
              
              {/* Icon Circle */}
              <div className="w-14 h-14 mx-auto flex items-center justify-center rounded-full bg-blue-100 text-blue-600 mb-6">
                {value.icon}
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-gray-800 mb-3">
                {value.title}
              </h3>

              {/* Description */}
              <p className="text-gray-500 text-sm leading-relaxed">
                {value.desc}
              </p>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
