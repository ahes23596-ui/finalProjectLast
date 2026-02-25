import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import MedicalServicesOutlinedIcon from "@mui/icons-material/MedicalServicesOutlined";
import IconButton from "@mui/material/IconButton";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";


function LogIn() {
  const navigate = useNavigate();

  const [showPass, setShowPass] = useState(false);

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-200 px-4 mt-12">
      <div className="bg-white shadow-xl rounded-2xl w-full max-w-md p-8">

        {/* Icon */}
        <div className="flex flex-col items-center mb-10">
          <IconButton
            color="primary"
            onClick={() => navigate("/")}
            size="large"
          >
            <MedicalServicesOutlinedIcon color="primary" style={{ fontSize: 60 }} />
          </IconButton>

          <h1 className="text-black text-3xl font-bold mt-4 mb-4 font-bold">Welcome Back</h1>
          <p className="text-gray-500 text-sm">Log in to your account</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6  ">

          {/* Email */}
          <div>
            <label className="text-sm text-gray-600 mb-2">Username or Email</label>
            <input
              type="text"
              name="email"
              placeholder ="Enter your username or email"
              className="w-full mt-1 p-3 border-gray-300 border rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>

          {/* Password */}
          <div className="relative">
            <label className="text-sm text-gray-600 mb-2">Password</label>

            <input
              type={showPass ? "text" : "password"}
              name="password"
              placeholder="Enter your password"
              className="w-full mt-1 p-3 pr-10 border-gray-300 border rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={form.password}
              onChange={handleChange}
              required
            />

            <button
              type="button"
              onClick={() => setShowPass(!showPass)}
              className="absolute right-3 top-[2.7rem] text-gray-500 hover:text-gray-700 cursor-pointer"
            >
              {showPass ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>

          {/* Forgot */}
             <div className="text-right">
               <Link
                 to="/ForgotPassword"
                 className="text-sm text-blue-500 hover:underline"
               >
                 Forgot Password?
               </Link>
             </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg font-medium transition cursor-pointer"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default LogIn;
