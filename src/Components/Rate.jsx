import { FaUsers, FaBell, FaStar } from "react-icons/fa";


function Rate() {
  const stats = [
    {
      icon: <FaUsers size={40} className="text-blue-500" />,
      value: "10k+",
      label: "Active Patients",
    },
    {
      icon: <FaBell size={40} className="text-blue-500" />,
      value: "1M+",
      label: "Reminders Sent",
    },
    {
      icon: <FaStar size={40} className="text-blue-500" />,
      value: "4.9/5",
      label: "App Rating",
    },
  ];

  return (
    <div className="flex flex-row justify-center sm:gap-12 lg:gap-40 p-10 flex-wrap">
      {stats.map((item, index) => {
        return (
          <div
            key={index}
            className="flex flex-col items-center bg-slate-50  rounded-xl px-8 py-6 shadow-sm w-44"
          >
            <div className="mb-4">{item.icon}</div>
            <h3 className="text-xl font-bold text-slate-900">
              {item.value}
            </h3>
            <p className="text-sm text-slate-500">{item.label}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Rate;
