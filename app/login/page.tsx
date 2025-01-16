"use client";

import React, { useState } from "react";
import Image from "next/image";
import Logo from "@/app/Assets/logo el top ap kuning.png";
import Foto from "@/app/Assets/reserve.jpg";

export default function Home() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex h-screen bg-yellow-500">
      {/* Form Section */}
      <div className="w-2/3 p-16 relative bg-white flex flex-col justify-center mx-auto shadow-lg rounded-xl">
        <div className="relative">
          {/* Close Button */}
          <button
            className="absolute top-4 right-4 text-white font-bold text-lg bg-yellow-500 inline-flex items-center justify-center rounded-md py-1 px-2 hover:bg-yellow-600"
            aria-label="Close"
          >
            ✕
          </button>

          <div className="max-w-lg mx-auto text-left w-full">
            {/* Logo Section */}
            <div className="mb-10 text-left">
              <Image src={Logo} width={150} height={150} alt="Logo" />
            </div>

            <h1 className="text-5xl font-bold text-yellow-500 mb-6">Masuk</h1>
            <p className="text-yellow-500 mb-6 text-lg">
              Silahkan masuk ke akun anda yang telah terdaftar
            </p>

            <form className="space-y-6">
              {/* Username */}
              <div>
                <label className="block text-lg font-bold text-yellow-500 mb-2">
                  Username
                  <span className="text-red-500 ml-1">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Username"
                  className="w-full border border-yellow-500 bg-yellow-500 rounded-md p-4 text-white text-base placeholder-white focus:ring-yellow-500 focus:border-yellow-500"
                />
              </div>

              {/* Password */}
              <div>
                <label className="block text-lg font-bold text-yellow-500 mb-2">
                  Password
                  <span className="text-red-500 ml-1">*</span>
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    className="w-full border border-yellow-500 bg-yellow-500 rounded-md p-4 text-white text-base placeholder-white focus:ring-yellow-500 focus:border-yellow-500"
                  />
                  <button
                    type="button"
                    onClick={togglePasswordVisibility}
                    className="absolute inset-y-0 right-3 flex items-center text-white hover:text-gray-300"
                    aria-label="Toggle password visibility"
                  >
                    {showPassword ? "🙈" : "👁️"}
                  </button>
                </div>
              </div>

              {/* Checkbox */}
              <div className="flex items-center text-base">
                <input
                  type="checkbox"
                  id="remember"
                  className="mr-2 text-yellow-500 focus:ring-yellow-500"
                />
                <label htmlFor="remember" className="text-blue-500">
                  Ingatkan saya.
                </label>
              </div>

              {/* Button Masuk */}
              <button
                type="submit"
                className="w-full bg-yellow-500 text-white py-3 rounded-md font-medium text-lg hover:bg-yellow-600 transition"
              >
                Masuk
              </button>

              {/* Teks "Tidak memiliki akun?" */}
              <p className="text-center text-yellow-500 mt-6 text-base">
                Tidak memiliki akun?{" "}
                <a
                  href="/register"
                  className="text-blue-500 hover:underline font-medium"
                >
                  Daftar
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>

      {/* Image Section */}
      <div className="lg:block w-1/2 relative bg-yellow-500 flex items-center justify-center">
        <Image
          src={Foto}
          fill
          objectFit="cover"
          alt="Game Reverse: 1999"
          className="absolute inset-0 z-10"
        />
        <div className="absolute bottom-4 left-4 bg-white bg-opacity-50 px-4 py-2 rounded-md">
          <p className="text-sm font-medium text-blue-800">Game: Reverse: 1999</p>
        </div>
      </div>
    </div>
  );
}
