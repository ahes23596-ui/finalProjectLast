import React from "react";
import {
  Clock,
  Bell,
  Shield,
  Pill,
  FileText,
  Smartphone,
} from "lucide-react";

export default function FeaturesSection() {
  const features = [
    {
      icon: <Clock size={22} />,
      title: "Smart Scheduling",
      desc: "Automatic adjustments based on your prescription data so you never have to guess. Complex types are handled automatically.",
    },
    {
      icon: <Bell size={22} />,
      title: "Caregiver Alerts",
      desc: "Automatically notify designated family members if a critical dose is missed, providing peace of mind for everyone involved.",
    },
    {
      icon: <Shield size={22} />,
      title: "Privacy First",
      desc: "Fully HIPAA compliant with bank-level encryption for your sensitive health data. Your privacy is our absolute priority.",
    },
    {
      icon: <Pill size={22} />,
      title: "Drug Interaction Check",
      desc: "Instantly checks for potential interactions between your medications and alerts you to discuss with your doctor.",
    },
    {
      icon: <FileText size={22} />,
      title: "Adherence Reports",
      desc: "Generate simple PDF reports of your medication history to share with your healthcare provider during visits.",
    },
    {
      icon: <Smartphone size={22} />,
      title: "Multi-Device Sync",
      desc: "Seamlessly syncs across your phone, tablet, and smartwatch so you receive reminders wherever you are.",
    },
  ];

  return (
    <section className="bg-gray-100 py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        {/* Header */}
        <h2 className="text-3xl font-bold text-gray-800">
          Key Features
        </h2>
        <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
          Our comprehensive medical reminder program is designed with powerful
          tools to keep you healthy.
        </p>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-8 mt-14">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition duration-300 text-left"
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-blue-100 text-blue-600 mb-4">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
