import React from 'react'
import { FaSignInAlt, FaUserPlus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";   

function Auth() {

  const navigate = useNavigate();   
  return (
    <section className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-6 text-center">
        {/* Title */}
        <h2 className="text-3xl font-bold text-slate-900">
          Ready to simplify your health?
        </h2>
        <p className="text-slate-500 mt-3">
          Choose how you'd like to proceed and take control of your
          medication adherence today.
        </p>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-8 mt-12">
          {/* Sign In */}
          <div className="bg-white border rounded-2xl p-8 shadow-sm hover:shadow-md transition hover:bg-blue-50 border hover:border-blue-200">
            <div className="w-14 h-14 mx-auto flex items-center justify-center rounded-full bg-blue-50 text-blue-600">
              <FaSignInAlt size={22} />
            </div>

            <h3 className="text-xl font-semibold mt-6">Sign In</h3>
            <p className="text-slate-500 text-sm mt-2">
              Access your dashboard, manage your prescriptions,
              and view your adherence history.
            </p>

            <button
              onClick={() => navigate("/LogIn")}
              className="mt-6 w-full py-3 rounded-lg border border-slate-300 text-slate-700 font-medium hover:bg-slate-100 transition cursor-pointer"
            >
              Log In to Account
            </button>
          </div>

          {/* Sign Up */}
          <div className="hover:bg-blue-50 border hover:border-blue-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition relative">
            <span className="absolute top-4 right-4 text-xs bg-blue-600 text-white px-3 py-1 rounded-full">
              New User
            </span>

            <div className="w-14 h-14 mx-auto flex items-center justify-center rounded-full bg-blue-600 text-white">
              <FaUserPlus size={22} />
            </div>

            <h3 className="text-xl font-semibold mt-6">
              Sign Up 
            </h3>
            <p className="text-slate-600 text-sm mt-2">
              Join thousands of users improving their health.
              Create your account in less than 2 minutes.
            </p>

            <button
              onClick={() => navigate("/SignUp")}
              className="mt-6 w-full py-3 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition cursor-pointer"
            >
              Create Account
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Auth;
