import React, { useState, useEffect } from "react";

const Login = () => {
  const [showOtpScreen, setShowOtpScreen] = useState(false);
  const [timer, setTimer] = useState(30);

  const handleSendOtp = () => {
    setShowOtpScreen(true);
    setTimer(30);
  };

  useEffect(() => {
    let countdown;
    if (showOtpScreen && timer > 0) {
      countdown = setInterval(() => setTimer((prev) => prev - 1), 1000);
    }
    return () => clearInterval(countdown);
  }, [showOtpScreen, timer]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-teal-400 to-blue-600">
      {!showOtpScreen ? (
        <div className="bg-teal-900 bg-opacity-50 rounded-3xl shadow-lg p-10 flex w-3/4 max-w-4xl">
          <div className="w-1/2 text-center text-white">
            <h2 className="text-3xl font-bold mb-6">Sign In</h2>
            <input
              type="email"
              placeholder="E-mail"
              className="w-3/4 p-3 rounded-md bg-gray-800 text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-500 shadow-inner mb-4"
            />
            <button
              onClick={handleSendOtp}
              className="w-3/4 py-3 bg-green-600 hover:bg-green-700 rounded-full text-white font-semibold shadow-md transition duration-300"
            >
              Send Otp
            </button>
          </div>
          <div className="w-1/2 flex items-center justify-center text-white">
            <p className="text-lg">Web Application with Analytics Dashboard</p>
          </div>
        </div>
      ) : (
        <div className="bg-teal-900 bg-opacity-50 rounded-3xl shadow-lg p-10 flex w-3/4 max-w-4xl">
          <div className="w-1/2 text-center text-white">
            <h2 className="text-3xl font-bold mb-6">Enter Otp sent to Email</h2>
            <input
              type="text"
              placeholder="OTP"
              className="w-3/4 p-3 rounded-md bg-gray-800 text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-500 shadow-inner mb-4"
            />
            <div className="flex justify-between w-3/4 mx-auto text-gray-400 text-sm mb-4">
              <span>resend otp</span>
              <span>{`0:${timer < 10 ? `0${timer}` : timer} sec`}</span>
            </div>
            <button className="w-3/4 py-3 bg-green-600 hover:bg-green-700 rounded-full text-white font-semibold shadow-md transition duration-300">
              Validate
            </button>
          </div>
          <div className="w-1/2 flex items-center justify-center text-white">
            <p className="text-lg">Web Application with Analytics Dashboard</p>
          </div>
        </div>
      )}
      <footer className="absolute bottom-0 w-full text-center text-white py-2 bg-teal-900 bg-opacity-80">
        © 2025, Greendzine Technologies Pvt. Ltd. All Rights Reserved.
      </footer>
    </div>
  );
};

export default Login;
