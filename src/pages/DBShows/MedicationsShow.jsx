import React, { useState } from "react";
import { useTheme } from "@mui/material/styles";

export default function MedicationsShow() {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  const [selectedDays, setSelectedDays] = useState(["Mon", "Thu", "Sat"]);
  const [recurring, setRecurring] = useState(false);

  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  const toggleDay = (day) => {
    if (selectedDays.includes(day)) {
      setSelectedDays(selectedDays.filter((d) => d !== day));
    } else {
      setSelectedDays([...selectedDays, day]);
    }
  };

  return (
    <div
      className="min-h-screen p-6 flex justify-center"
      style={{
        backgroundColor: isDark ? "#121212" : "#f3f4f6",
      }}
    >
      <div
        className="w-full max-w-5xl rounded-2xl shadow-lg p-8"
        style={{
          backgroundColor: isDark ? "#1e1e1e" : "#ffffff",
          color: isDark ? "#ffffff" : "#000000",
        }}
      >
        <h1 className="text-3xl font-bold mb-2">Add New Medication</h1>
        <p className="mb-8 opacity-70">
          Fill in the details below to add a new medication to your list.
        </p>

        {/* Top Inputs */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <input
            type="text"
            placeholder="Medication Name"
            className="p-3 rounded-lg border"
            style={{
              backgroundColor: isDark ? "#2c2c2c" : "#fff",
              borderColor: isDark ? "#444" : "#ccc",
              color: isDark ? "#fff" : "#000",
            }}
          />
          <input
            type="number"
            placeholder="Dosage"
            className="p-3 rounded-lg border"
            style={{
              backgroundColor: isDark ? "#2c2c2c" : "#fff",
              borderColor: isDark ? "#444" : "#ccc",
              color: isDark ? "#fff" : "#000",
            }}
          />
          <input
            type="text"
            placeholder="Unit"
            className="p-3 rounded-lg border"
            style={{
              backgroundColor: isDark ? "#2c2c2c" : "#fff",
              borderColor: isDark ? "#444" : "#ccc",
              color: isDark ? "#fff" : "#000",
            }}
          />
        </div>

        {/* Recurring */}
        <div
          className="p-6 rounded-xl mb-8"
          style={{
            backgroundColor: isDark ? "#2a2a2a" : "#f9fafb",
          }}
        >
          <label className="flex items-center gap-3 mb-6">
            <input
              type="checkbox"
              checked={recurring}
              onChange={() => setRecurring(!recurring)}
            />
            Set recurring reminder
          </label>

          {recurring && (
            <>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <select
                  className="p-3 rounded-lg border"
                  style={{
                    backgroundColor: isDark ? "#2c2c2c" : "#fff",
                    borderColor: isDark ? "#444" : "#ccc",
                    color: isDark ? "#fff" : "#000",
                  }}
                >
                  <option>Daily</option>
                  <option>Weekly</option>
                  <option>Monthly</option>
                </select>

                <input
                  type="time"
                  className="p-3 rounded-lg border"
                  style={{
                    backgroundColor: isDark ? "#2c2c2c" : "#fff",
                    borderColor: isDark ? "#444" : "#ccc",
                    color: isDark ? "#fff" : "#000",
                  }}
                />
              </div>

              <div className="flex flex-wrap gap-3 mb-6">
                {days.map((day) => (
                  <button
                    key={day}
                    onClick={() => toggleDay(day)}
                    className="px-4 py-2 rounded-full"
                    style={{
                      backgroundColor: selectedDays.includes(day)
                        ? "#1976d2"
                        : isDark
                        ? "#444"
                        : "#e5e7eb",
                      color: selectedDays.includes(day)
                        ? "#fff"
                        : isDark
                        ? "#fff"
                        : "#000",
                    }}
                  >
                    {day}
                  </button>
                ))}
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <input
                  type="date"
                  className="p-3 rounded-lg border"
                  style={{
                    backgroundColor: isDark ? "#2c2c2c" : "#fff",
                    borderColor: isDark ? "#444" : "#ccc",
                    color: isDark ? "#fff" : "#000",
                  }}
                />
                <input
                  type="date"
                  className="p-3 rounded-lg border"
                  style={{
                    backgroundColor: isDark ? "#2c2c2c" : "#fff",
                    borderColor: isDark ? "#444" : "#ccc",
                    color: isDark ? "#fff" : "#000",
                  }}
                />
              </div>
            </>
          )}
        </div>

        <textarea
          rows="4"
          placeholder="Instructions..."
          className="w-full p-3 rounded-lg border mb-8"
          style={{
            backgroundColor: isDark ? "#2c2c2c" : "#fff",
            borderColor: isDark ? "#444" : "#ccc",
            color: isDark ? "#fff" : "#000",
          }}
        />

        <div className="flex justify-end gap-4">
          <button className={`px-6 py-2 rounded-lg transition ${
              isDark
                ? "bg-gray-700 hover:bg-gray-600 text-white"
                : "bg-gray-200 hover:bg-gray-300 text-black"
            }`}>
            Cancel
          </button>
          <button className="px-6 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition">
            Add Medication
          </button>
        </div>
      </div>
    </div>
  );
}
