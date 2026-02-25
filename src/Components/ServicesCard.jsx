import React from "react";
import { FaPills, FaUserMd, FaBell, FaStopwatch } from "react-icons/fa";

function ServicesCard() {
  const services = [
    {
      icon: <FaPills size={40} className="text-blue-600" />,
      title: "Medication Reminders",
      description:
        "We help patients never miss their medications by sending timely reminders at the exact prescribed time.",
    },
    {
      icon: <FaUserMd size={40} className="text-blue-600" />,
      title: "Doctor Appointment Alerts",
      description:
        "Our platform reminds patients of their upcoming doctor appointments in advance to avoid missed visits.",
    },
    {
      icon: <FaStopwatch size={40} className="text-blue-600" />,
      title: "Smart Notifications",
      description:
        "Patients receive clear and simple notifications, making it easy for all age groups to stay informed.",
    },
  ];

  return (
    <section className="py-12 px-6 bg-[#f6f7f9]">
      {/* Title */}
      <h2 className="text-3xl font-bold text-center mb-2">
        Our Services
      </h2>

      {/* Subtitle */}
      <p className="text-lg text-gray-600 text-center mb-10">
        Our comprehensive medical reminder program is designed with powerful
        br
        tools to keep you healthy
      </p>

      {/* Cards */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <div
            key={index}
            className="
              bg-white rounded-2xl shadow-lg 
              p-6 flex flex-col items-center text-center
              transition-all duration-300 ease-in-out
              hover:-translate-y-3 hover:shadow-2xl
            "
          >
            {/* Icon */}
            <div className="mb-4">
              {service.icon}
            </div>

            {/* Title */}
            <h3 className="text-xl font-bold text-[#1e2939] mb-2">
              {service.title}
            </h3>

            {/* Description */}
            <p className="text-sm text-gray-500 leading-relaxed">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ServicesCard;
