import React from 'react';
import { useNavigate } from 'react-router-dom';

function ResendOTP() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>OTP Expired or Incorrect</h1>
      <button onClick={() => navigate('/')}>Resend OTP</button>
    </div>
  );
}

export default ResendOTP;