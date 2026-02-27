import React, { useState } from "react";
import { Eye, EyeOff, Clock } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import AxiosWrapper from "../Https/AxiosWrapper"; 

function SignUp() {
  const navigate = useNavigate();

  // ================================
  // 🔹 Show/Hide Password States
  // ================================
  const [showPass, setShowPass] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  // ================================
  // 🔹 Form State
  // ================================
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirm: "",
    agree: false,
  });

  // ================================
  // 🔹 Error + Loading State
  // ================================
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // ================================
  // 🔹 Handle Input Change
  // ================================
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  // ================================
  // 🔹 Handle Submit
  // ================================
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Reset previous error
    setError("");

    // ============================
    // ✅ Frontend Validation
    // ============================

    if (form.password !== form.confirm) {
      setError("Passwords do not match");
      return;
    }

    if (!form.agree) {
      setError("You must agree to Terms & Conditions");
      return;
    }

    try {
      setLoading(true);

      // ============================
      // ✅ Send data to backend
      // ============================
      const response = await AxiosWrapper.post("/auth/register", {
        name: form.name,
        email: form.email,
        password: form.password,
      });

      // ============================
      // ✅ If backend returns token
      // ============================
      const { token } = response.data;

      // Save token
      localStorage.setItem("token", token);

      // Go to dashboard
      navigate("/DashBoard");

    } catch (err) {
      // ============================
      // ❌ Handle Backend Errors
      // ============================
      if (err.response && err.response.data.message) {
        setError(err.response.data.message);
      } else {
        setError("Registration failed. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-200 px-4">
      <div className="bg-white shadow-xl rounded-2xl w-full mt-30 mb-20 max-w-md p-8">

        {/* ================= Logo + Title ================= */}
        <div className="flex flex-col items-center mb-6">
          <Clock className="w-8 h-8 text-blue-500" />
          <h1 className="text-2xl font-bold mt-2">MediRemind</h1>
          <h2 className="text-lg font-semibold text-gray-700 mt-1">
            Create Your Account
          </h2>
        </div>

        {/* ================= Form ================= */}
        <form onSubmit={handleSubmit} className="space-y-4">

          {/* Full Name */}
          <div>
            <label className="text-sm text-gray-600">Full Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your Name"
              className="w-full mt-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={form.name}
              onChange={handleChange}
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="text-sm text-gray-600">Email Address</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your Email"
              className="w-full mt-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>

          {/* Password */}
          <div className="relative">
            <label className="text-sm text-gray-600">Password</label>
            <input
              type={showPass ? "text" : "password"}
              name="password"
              placeholder="Enter your password"
              className="w-full mt-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={form.password}
              onChange={handleChange}
              required
            />

            <button
              type="button"
              onClick={() => setShowPass(!showPass)}
              className="absolute right-3 top-[2.7rem] text-gray-500 cursor-pointer"
            >
              {showPass ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>

          {/* Confirm Password */}
          <div className="relative">
            <label className="text-sm text-gray-600">Confirm Password</label>
            <input
              type={showConfirm ? "text" : "password"}
              name="confirm"
              placeholder="Confirm your password"
              className="w-full mt-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={form.confirm}
              onChange={handleChange}
              required
            />

            <button
              type="button"
              onClick={() => setShowConfirm(!showConfirm)}
              className="absolute right-3 top-[2.7rem] text-gray-500 cursor-pointer"
            >
              {showConfirm ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>

          {/* Terms */}
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <input
              type="checkbox"
              name="agree"
              checked={form.agree}
              onChange={handleChange}
            />
            <span>
              I agree to the{" "}
              <span className="text-blue-500">Terms of Service</span>{" "}
              and{" "}
              <span className="text-blue-500">Privacy Policy</span>.
            </span>
          </div>

          {/* ================= Error Message ================= */}
          {error && (
            <p className="text-red-500 text-sm text-center">
              {error}
            </p>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg font-medium transition disabled:opacity-50"
          >
            {loading ? "Creating Account..." : "Create Account"}
          </button>
        </form>

        {/* Login Link */}
        <p className="text-center text-sm text-gray-600 mt-4">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-500 hover:underline">
            Log In
          </Link>
        </p>
      </div>
    </div>
  );
}

export default SignUp;
