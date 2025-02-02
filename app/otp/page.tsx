"use client";

import React, { useState } from "react";
import Image from "next/image";
import Foto from "@/app/Assets/genshin.jpeg";
import Logo from "@/app/Assets/logo el top ap biru.png";
import { SiVerizon } from "react-icons/si";
import { MdSend } from "react-icons/md";

export default function OtpVerification() {
  const [otp, setOtp] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (otp.length === 6) {
      // Add OTP verification logic here
      console.log('OTP submitted:', otp);
      setError('');
    } else {
      setError('Please enter a valid 6-digit OTP.');
    }
  };

  const handleResend = () => {
    // Add logic to resend the OTP code
    console.log('Resend OTP code');
    setError(''); // Reset error if any
  };

  const handleClose = () => {
    // Add logic to close or navigate away from OTP verification
    console.log('Close OTP verification');
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Left side section (form) */}
      <div className="w-1/2 bg-white p-8 relative">
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-blue-600 font-bold text-xl hover:text-blue-800"
          onClick={handleClose}
          aria-label="Close"
        >
          ✕
        </button>

        <div className="max-w-md mx-auto text-left">
          {/* Logo Section */}
          <div className="mb-0 text-left">
            <Image src={Logo} width={120} height={120} alt="Logo" className="ml-0" />
          </div>

          <h2 className="text-2xl font-bold text-blue-600 text-left mb-4">OTP Verification</h2>
          <p className="mt-4 text-gray-600 text-left">
            Terima kasih telah mendaftar! Agar akun mu aktif, silahkan masukkan kode OTP yang baru saja kami kirimkan melalui WhatsApp/Email. Jika tidak menerima WhatsApp/Email dari kami, silahkan hubungi admin.
          </p>

          <form onSubmit={handleSubmit} className="mt-6">
            <input
              type="text"
              placeholder="6 digit kode OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              className="w-full border border-blue-600 bg-blue-100 rounded-md p-2 text-blue-600 focus:ring-blue-600 focus:border-blue-600"
              maxLength={6}
            />
            {error && <p className="text-red-500 mt-2 text-sm">{error}</p>}

            {/* Flex container for buttons */}
            <div className="flex space-x-4 mt-4">
              <button
                type="submit"
                className="w-1/2 bg-yellow-400 text-white py-2 rounded-md flex items-center justify-center font-bold"
              >
                <SiVerizon className="mr-2" />
                Submit
              </button>
              <button
                onClick={handleResend}
                className="w-1/2 bg-blue-500 text-white py-2 rounded-md flex items-center justify-center font-bold"
              >
                <MdSend className="mr-2" />
                Resend OTP code
              </button>
            </div>
          </form>

          <p className="mt-4 text-center text-blue-600">
            Memiliki kendala? Hubungi Admin.
          </p>

        </div>
      </div>

       {/* Image Section */}
       <div className="w-1/2 relative">
        <Image
          src={Foto}
          fill
          objectFit="cover"
          alt="foto"
          className="relative z-10"
        />
      </div>
    </div>
  );
}
