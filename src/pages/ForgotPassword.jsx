import React, { useState } from "react";
import AddBoxIcon from '@mui/icons-material/AddBox';
import IconButton from "@mui/material/IconButton";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";



function ForgotPassword() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Reset link sent to ${email}`);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-4">
      <div className="flex items-center space-x-2 mb-6">
        <IconButton
            color="primary"
            size="large"
          >
            <AddBoxIcon color="primary" style={{ fontSize: 60 }} />
          </IconButton>
        <h1 className="text-3xl text-black font-extrabold">MediRemind</h1>
      </div>

      <h2 className="text-2xl text-black font-bold mb-2">Forgot Your Password?</h2>
      <p className="text-gray-600 mb-6 text-center  max-w-sm">
        No problem. Enter the email address associated with your account, and we'll send you a link to reset your password.
      </p>

      <form onSubmit={handleSubmit} className="w-full max-w-sm">
        <label className="block text-sm text-black font-medium mb-1">Email Address</label>
        <input
          type="email"
          required
          placeholder="Enter your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-2 mb-4 text-gray-600 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 cursor-pointer rounded-md hover:bg-blue-600 transition"
        >
          Send Reset Link
        </button>
      </form>

      <div className="mt-4">
        <a href="/login" className="text-sm text-gray-700 hover:underline">
          Back to Login
        </a>
      </div>
    </div>
  );
}

export default ForgotPassword;
