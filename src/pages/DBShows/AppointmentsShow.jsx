import React, { useState } from "react";
import { useTheme } from "@mui/material/styles";

function AppointmentsShow() {
  const [recurring, setRecurring] = useState(false);
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  return (
    <div
      className={`min-h-screen flex justify-center items-center p-6 transition-colors duration-300 ${
        isDark ? "bg-[#121212]" : "bg-gray-100"
      }`}
    >
      <div
        className={`w-full max-w-3xl rounded-2xl shadow-lg p-8 transition-colors duration-300 ${
          isDark ? "bg-[#1e1e1e] text-white" : "bg-white text-black"
        }`}
      >
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold">
            New Appointment
          </h1>
          <p className={`${isDark ? "text-gray-400" : "text-gray-500"} mt-2`}>
            Fill in the details to schedule your next appointment.
          </p>
        </div>

        {/* Appointment Title */}
        <div className="mb-6">
          <label className="block text-sm font-medium mb-2">
            Appointment Title
          </label>
          <input
            type="text"
            placeholder="e.g., Annual Check-up"
            className={`w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 ${
              isDark
                ? "bg-[#2a2a2a] border-gray-600 text-white"
                : "bg-white border-gray-300 text-black"
            }`}
          />
        </div>

        {/* Date & Time */}
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div>
            <label className="block text-sm font-medium mb-2">Date</label>
            <input
              type="date"
              className={`w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400 ${
                isDark
                  ? "bg-[#2a2a2a] border-gray-600 text-white"
                  : "bg-white border-gray-300 text-black"
              }`}
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Time</label>
            <input
              type="time"
              className={`w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400 ${
                isDark
                  ? "bg-[#2a2a2a] border-gray-600 text-white"
                  : "bg-white border-gray-300 text-black"
              }`}
            />
          </div>
        </div>

        {/* Doctor & Specialty */}
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div>
            <label className="block text-sm font-medium mb-2">
              Doctor's Name
            </label>
            <input
              type="text"
              placeholder="e.g., Dr. Smith"
              className={`w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400 ${
                isDark
                  ? "bg-[#2a2a2a] border-gray-600 text-white"
                  : "bg-white border-gray-300 text-black"
              }`}
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">
              Specialty
            </label>
            <input
              type="text"
              placeholder="e.g., Cardiology"
              className={`w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400 ${
                isDark
                  ? "bg-[#2a2a2a] border-gray-600 text-white"
                  : "bg-white border-gray-300 text-black"
              }`}
            />
          </div>
        </div>

        {/* Location */}
        <div className="mb-6">
          <label className="block text-sm font-medium mb-2">
            Location
          </label>
          <input
            type="text"
            placeholder="e.g., City Hospital"
            className={`w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400 ${
              isDark
                ? "bg-[#2a2a2a] border-gray-600 text-white"
                : "bg-white border-gray-300 text-black"
            }`}
          />
        </div>

        <hr className={`my-6 ${isDark ? "border-gray-600" : "border-gray-300"}`} />

        {/* Recurring */}
        <div className="flex justify-between items-center mb-6">
          <span className="font-medium">
            Recurring Appointment
          </span>

          <button
            type="button"
            onClick={() => setRecurring(!recurring)}
            className={`w-12 h-6 flex items-center rounded-full p-1 transition ${
              recurring
                ? "bg-blue-500"
                : isDark
                ? "bg-gray-600"
                : "bg-gray-300"
            }`}
          >
            <div
              className={`bg-white w-4 h-4 rounded-full shadow-md transform transition ${
                recurring ? "translate-x-6" : ""
              }`}
            />
          </button>
        </div>

        {recurring && (
          <div className="grid md:grid-cols-3 gap-6 mb-6">
            <div>
              <label className="block text-sm font-medium mb-2">
                Repeats
              </label>
              <select
                className={`w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400 ${
                  isDark
                    ? "bg-[#2a2a2a] border-gray-600 text-white"
                    : "bg-white border-gray-300 text-black"
                }`}
              >
                <option>Daily</option>
                <option>Weekly</option>
                <option>Monthly</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Repeat every
              </label>
              <div className="flex items-center">
                <input
                  type="number"
                  defaultValue="1"
                  className={`w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400 ${
                    isDark
                      ? "bg-[#2a2a2a] border-gray-600 text-white"
                      : "bg-white border-gray-300 text-black"
                  }`}
                />
                <span className={`ml-2 ${isDark ? "text-gray-400" : "text-gray-500"}`}>
                  days
                </span>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Ends
              </label>
              <select
                className={`w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400 ${
                  isDark
                    ? "bg-[#2a2a2a] border-gray-600 text-white"
                    : "bg-white border-gray-300 text-black"
                }`}
              >
                <option>Never</option>
                <option>On Date</option>
              </select>
            </div>
          </div>
        )}

        {/* Notes */}
        <div className="mb-8">
          <label className="block text-sm font-medium mb-2">
            Notes
          </label>
          <textarea
            rows="4"
            placeholder="Add any additional information here..."
            className={`w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-400 ${
              isDark
                ? "bg-[#2a2a2a] border-gray-600 text-white"
                : "bg-white border-gray-300 text-black"
            }`}
          />
        </div>

        {/* Buttons */}
        <div className="flex justify-end gap-4">
          <button
            className={`px-6 py-2 rounded-lg transition ${
              isDark
                ? "bg-gray-700 hover:bg-gray-600 text-white"
                : "bg-gray-200 hover:bg-gray-300 text-black"
            }`}
          >
            Cancel
          </button>

          <button className="px-6 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition">
            Add Appointment
          </button>
        </div>
      </div>
    </div>
  );
}

export default AppointmentsShow;
