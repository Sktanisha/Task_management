import React, { useState } from "react";
import { Link, useNavigate } from "react-router";
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../../firebase.config";
import toast from "react-hot-toast";

const ResetPassword = () => {
  let [details, setDetails] = useState({
    email: "",
  });
  let navigate = useNavigate();
  let [showPassword, setShowPassword] = useState(false);
  let handleChange = (e) => {
    setDetails({
      ...details,
      [e.target.name]: e.target.value,
    });
  };
  let handleSignin = () => {
    sendPasswordResetEmail(auth, details.email)
      .then(() => {
        toast.success("Email sent successfully");
        navigate("/signin");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };
  return (
  <div className="min-h-screen flex items-center justify-center p-4 bg-slate-50">
    <div className="w-full max-w-md bg-white rounded-2xl shadow-lg border border-slate-100 p-8">
      
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold text-slate-900">Reset Password</h1>
        <p className="text-sm text-slate-600 mt-2">
          Enter your email and we'll send you a reset link.
        </p>
      </div>

      <form className="space-y-6">
        <div>
          <label className="text-slate-900 text-sm font-medium block mb-2">
            Email Address
          </label>

          <div className="relative">
            <input
              onChange={handleChange}
              name="email"
              type="email"
              className="w-full border border-slate-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-blue-600"
              placeholder="you@example.com"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#94a3b8"
              viewBox="0 0 24 24"
              className="w-5 h-5 absolute right-3 top-3"
            >
              <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 4-8 5-8-5V6l8 5 8-5v2Z" />
            </svg>
          </div>
        </div>

        <button
          onClick={handleSignin}
          type="button"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 rounded-lg transition"
        >
          Send Reset Link
        </button>
      </form>

      <div className="mt-6 text-center text-sm text-slate-600">
        Remembered your password?{" "}
        <Link to="/Signin" className="text-blue-600 hover:underline">
          Sign in
        </Link>
      </div>
    </div>
  </div>
);

};

export default ResetPassword;
