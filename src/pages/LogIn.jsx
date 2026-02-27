import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import MedicalServicesOutlinedIcon from "@mui/icons-material/MedicalServicesOutlined";
import IconButton from "@mui/material/IconButton";
import { useNavigate, Link } from "react-router-dom";
import AxiosWrapper from "../Https/AxiosWrapper";

function LogIn() {
  const navigate = useNavigate();

  // ✅ state لإظهار/إخفاء الباسورد
  const [showPass, setShowPass] = useState(false);

  // ✅ state لتخزين بيانات الفورم
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  // ✅ state لرسالة الخطأ
  const [error, setError] = useState("");

  // ✅ state للتحميل (Loading)
  const [loading, setLoading] = useState(false);

  // =========================================================
  // 🔹 Handle Input Change
  // أي تغيير في الانبوت بيتخزن في state
  // =========================================================
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  // =========================================================
  // 🔹 Handle Form Submit
  // لما المستخدم يضغط Login
  // =========================================================
  const handleSubmit = async (e) => {
    e.preventDefault(); // منع الريلود

    try {
      setLoading(true); // تشغيل اللودينج
      setError(""); // تصفير أي Error قديم

      // ✅ إرسال request للباك إند
      const response = await AxiosWrapper.post("/auth/login", {
        email: form.email,
        password: form.password,
      });

      // ✅ لو اللوجين نجح
      const { token } = response.data;

      // تخزين التوكن في localStorage
      localStorage.setItem("token", token);

      // تحويل المستخدم لصفحة الداشبورد
      navigate("/DashBoard");

    } catch (err) {
      // ✅ لو حصل Error من الباك إند
      if (err.response && err.response.data.message) {
        setError(err.response.data.message);
      } else {
        setError("Login failed. Please try again.");
      }
    } finally {
      setLoading(false); // إيقاف اللودينج
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-200 px-4 mt-12">
      <div className="bg-white shadow-xl rounded-2xl w-full max-w-md p-8">

        {/* ================= Icon Section ================= */}
        <div className="flex flex-col items-center mb-10">
          <IconButton
            color="primary"
            onClick={() => navigate("/")}
            size="large"
          >
            <MedicalServicesOutlinedIcon
              color="primary"
              style={{ fontSize: 60 }}
            />
          </IconButton>

          <h1 className="text-black text-3xl font-bold mt-4">
            Welcome Back
          </h1>
          <p className="text-gray-500 text-sm">
            Log in to your account
          </p>
        </div>

        {/* ================= Form Section ================= */}
        <form onSubmit={handleSubmit} className="space-y-6">

          {/* Email Input */}
          <div>
            <label className="text-sm text-gray-600">
              Username or Email
            </label>
            <input
              type="text"
              name="email"
              placeholder="Enter your username or email"
              className="w-full mt-1 p-3 border-gray-300 border rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>

          {/* Password Input */}
          <div className="relative">
            <label className="text-sm text-gray-600">
              Password
            </label>

            <input
              type={showPass ? "text" : "password"} // تبديل النوع
              name="password"
              placeholder="Enter your password"
              className="w-full mt-1 p-3 pr-10 border-gray-300 border rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={form.password}
              onChange={handleChange}
              required
            />

            {/* زرار إظهار/إخفاء الباسورد */}
            <button
              type="button"
              onClick={() => setShowPass(!showPass)}
              className="absolute right-3 top-[2.7rem] text-gray-500 hover:text-gray-700"
            >
              {showPass ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>

          {/* Forgot Password */}
          <div className="text-right">
            <Link
              to="/ForgotPassword"
              className="text-sm text-blue-500 hover:underline"
            >
              Forgot Password?
            </Link>
          </div>

          {/* ================= Error Message ================= */}
          {error && (
            <p className="text-red-500 text-sm text-center">
              {error}
            </p>
          )}

          {/* ================= Submit Button ================= */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg font-medium transition disabled:opacity-50"
          >
            {loading ? "Logging in..." : "Login"}
          </button>

        </form>
      </div>
    </div>
  );
}

export default LogIn;
