import React from 'react'
import { Link } from "react-router-dom";

function DashBoardShow() {
  return (
    <div className="p-6">

      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Good Morning, Khaled</h1>

        <div className="flex gap-3">
          <Link
            to="MedicationsShow"
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
          >
            + Add New Medication
          </Link>

          <Link
            to="AppointmentsShow"
            className="bg-gray-300 px-4 py-2 rounded-lg hover:bg-gray-400"
          >
            Schedule Appointment
          </Link>
        </div>
      </div>

{/* Cards */}
<div className="grid md:grid-cols-2 gap-6">

  {/* Card */}
  <div className="bg-gray-#1e1e1e dark:bg-[#1e1e1e] border border-gray-200 dark:border-slate-700 rounded-xl p-5 shadow transition">
    <h2 className="font-semibold mb-3">Today's Reminders</h2>
    <p className="text-gray-500 dark:text-slate-400">No data yet...</p>
  </div>

  {/* Card */}
  <div className="bg-gray-#1e1e1e dark:bg-[#1e1e1e] border border-gray-200 dark:border-slate-700 rounded-xl p-5 shadow transition">
    <h2 className="font-semibold mb-3">Medication Adherence</h2>
    <div className="text-3xl font-bold text-green-500 dark:text-green-400">
      88%
    </div>
  </div>

  {/* Card */}
  <div className="bg-gray-#1e1e1e dark:bg-[#1e1e1e] border border-gray-200 dark:border-slate-700 rounded-xl p-5 shadow transition">
    <h2 className="font-semibold mb-3">Doctor's Appointments</h2>
    <p className="text-gray-600 dark:text-slate-400">
      No appointments yet...
    </p>
  </div>

  {/* Card */}
  <div className="bg-gray-#1e1e1e dark:bg-[#1e1e1e] border border-gray-200 dark:border-slate-700 rounded-xl p-5 shadow transition">
    <h2 className="font-semibold mb-3">Recent Health Logs</h2>
    <p className="text-gray-500 dark:text-slate-400">No logs yet...</p>
  </div>


</div>

      </div>
  );
}

export default DashBoardShow;