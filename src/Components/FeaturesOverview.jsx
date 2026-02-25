import React from "react";
import {
  Pill,
  CalendarCheck,
  Store,
  BarChart3,
} from "lucide-react";

export default function FeaturesOverview() {
  const features = [
    {
      icon: <Pill size={22} />,
      title: "Medication Tracking",
      desc: "Receive timely push notifications and track adherence history effortlessly. Never wonder if you took your pill.",
    },
    {
      icon: <CalendarCheck size={22} />,
      title: "Appointment Scheduling",
      desc: "Sync with your calendar and get reminders for upcoming doctor visits so you're always prepared.",
    },
    {
      icon: <Store size={22} />,
      title: "Pharmacy Integration",
      desc: "Refill prescriptions with one tap directly at your local pharmacy. We handle the communication for you.",
    },
    {
      icon: <BarChart3 size={22} />,
      title: "Health Insights",
      desc: "Visualize your adherence trends and share detailed reports with your doctor to improve your treatment plan.",
    },
  ];

  return (
    <section className="bg-gray-100 py-24 px-6">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="mb-16">
          <p className="text-blue-600 font-semibold text-sm tracking-wide uppercase">
            Key Features
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-3">
            Everything you need to stay on track
          </h2>

          <p className="text-gray-500 mt-4 max-w-2xl">
            Our comprehensive tools are designed to give you peace of mind and
            better health outcomes without the complexity.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition duration-300"
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-blue-100 text-blue-600 mb-6">
                {feature.icon}
              </div>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                {feature.title}
              </h3>

              <p className="text-gray-500 leading-relaxed">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
