import React from "react";
import { Moon, Globe, Clock, MapPin } from "lucide-react";

function SettingShow({ darkMode, setDarkMode }) {
  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold dark:text-white">General Settings</h1>
        <p className="text-gray-500 dark:text-slate-400 mt-1">Customize your app experience</p>
      </div>

      <div className="bg-white dark:bg-[#1e1e1e] border border-gray-200 dark:border-slate-700 rounded-xl p-6 shadow-sm mb-6 transition-colors duration-300">
        <h2 className="text-lg font-semibold mb-4 dark:text-white">Appearance</h2>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="bg-gray-100 dark:bg-slate-700 p-3 rounded-lg">
              <Moon className="w-5 h-5 text-gray-600 dark:text-gray-300" />
            </div>
            <span className="font-medium dark:text-white">Dark Mode</span>
          </div>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`w-12 h-6 flex items-center rounded-full p-1 transition-all duration-300 ${
              darkMode ? "bg-blue-600" : "bg-gray-300"
            }`}
          >
            <div
              className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-all duration-300 ${
                darkMode ? "translate-x-6" : "translate-x-0"
              }`}
            />
          </button>
        </div>
      </div>

      {/* Localization */}
      <div className="bg-white dark:bg-[#1e1e1e] border border-gray-200 dark:border-slate-700 rounded-xl p-6 shadow-sm transition-colors duration-300">
        <h2 className="text-lg font-semibold mb-4 dark:text-white">Localization</h2>
        <div className="flex items-center justify-between py-4 border-b border-gray-200 dark:border-slate-700">
          <div className="flex items-center gap-4">
            <div className="bg-gray-100 dark:bg-slate-700 p-3 rounded-lg">
              <MapPin className="w-5 h-5 text-gray-600 dark:text-gray-300" />
            </div>
            <span className="font-medium dark:text-white">Time Zone</span>
          </div>
          <button className="text-blue-500 hover:underline">Change</button>
        </div>

        <div className="flex items-center justify-between py-4 border-b border-gray-200 dark:border-slate-700">
          <div className="flex items-center gap-4">
            <div className="bg-gray-100 dark:bg-slate-700 p-3 rounded-lg">
              <Clock className="w-5 h-5 text-gray-600 dark:text-gray-300" />
            </div>
            <span className="font-medium dark:text-white">Time Format</span>
          </div>
          <button className="text-blue-500 hover:underline">Change</button>
        </div>

        <div className="flex items-center justify-between py-4">
          <div className="flex items-center gap-4">
            <div className="bg-gray-100 dark:bg-slate-700 p-3 rounded-lg">
              <Globe className="w-5 h-5 text-gray-600 dark:text-gray-300" />
            </div>
            <span className="font-medium dark:text-white">Language</span>
          </div>

          <select className="border border-gray-300 dark:border-slate-600 bg-gray-50 dark:bg-slate-800 dark:text-white rounded-lg px-3 py-2">
            <option>English</option>
            <option>Arabic</option>
          </select>
        </div>
      </div>

      <div className="flex justify-end mt-8">
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors duration-300">
          Save Changes
        </button>
      </div>
    </div>
  );
}

export default SettingShow;
