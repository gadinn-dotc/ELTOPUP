"use client";

import React from "react";
import Image from "next/image";
import Foto from "@/app/Assets/genshin.jpeg";
import Logo from "@/app/Assets/logo el top ap biru.png";

export default function Home() {
  return (
    <div className="flex h-screen">
      {/* Form Section */}
      <div className="w-1/2 bg-white p-10 flex flex-col justify-center relative">
        {/* Close Button */}
        <button
          className="absolute top-24 right-8 text-white font-bold text-xl bg-blue-500 inline-flex items-center justify-center rounded-lg px-4 py-2 hover:bg-blue-600"
          aria-label="Close"
        >
          ✕
        </button>

        <div className="max-w-md mx-auto text-left">
          {/* Logo Section */}
          <div className="mb-0 text-left">
            <Image src={Logo} width={120} height={120} alt="Logo" className="ml-0" />
          </div>

          <h1 className="text-4xl font-bold text-blue-600 mb-4">Daftar</h1>
          <p className="text-blue-600 mb-6">
            Silahkan isi format berikut untuk mendaftarkan akun anda di EllTopup
          </p>

          <form className="space-y-6">
            {/* Nama Lengkap dan Username */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-blue-600 mb-1">
                  Nama Lengkap
                </label>
                <input
                  type="text"
                  placeholder="Nama Lengkap"
                  className="w-full border border-blue-600 bg-blue-100 rounded-md p-2 text-blue-600 focus:ring-blue-600 focus:border-blue-600"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-blue-600 mb-1">
                  Username
                </label>
                <input
                  type="text"
                  placeholder="Username"
                  className="w-full border border-blue-600 bg-blue-100 rounded-md p-2 text-blue-600 focus:ring-blue-600 focus:border-blue-600"
                />
              </div>
            </div>

            {/* Email dan Nomor Telepon */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-blue-600 mb-1">E-Mail</label>
                <input
                  type="email"
                  placeholder="E-Mail"
                  className="w-full border border-blue-600 bg-blue-100 rounded-md p-2 text-blue-600 focus:ring-blue-600 focus:border-blue-600"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-blue-600 mb-1">
                  Nomor Telepon
                </label>
                <input
                  type="text"
                  placeholder="Nomor Telepon"
                  className="w-full border border-blue-600 bg-blue-100 rounded-md p-2 text-blue-600 focus:ring-blue-600 focus:border-blue-600"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-semibold text-blue-600 mb-1">Password</label>
              <input
                type="password"
                placeholder="Password"
                className="w-full border border-blue-600 bg-blue-100 rounded-md p-2 text-blue-600 focus:ring-blue-600 focus:border-blue-600"
              />
            </div>

            {/* Konfirmasi Password */}
            <div>
              <label className="block text-sm font-semibold text-blue-600 mb-1">
                Konfirmasi Ulang Password
              </label>
              <input
                type="password"
                placeholder="Konfirmasi Ulang Password"
                className="w-full border border-blue-600 bg-blue-100 rounded-md p-2 text-blue-600 focus:ring-blue-600 focus:border-blue-600"
              />
            </div>

            {/* Checkbox */}
            <div className="flex items-center">
              <input
                type="checkbox"
                id="terms"
                className="mr-2 text-blue-600 focus:ring-blue-600"
                aria-checked="false"
              />
              <label htmlFor="terms" className="text-sm text-blue-600">
                Saya setuju dengan{" "}
                <span className="text-blue-800">Syarat dan Ketentuan</span> dan{" "}
                <span className="text-blue-800">Kebijakan Privasi</span>.
              </label>
            </div>
          </form>

          <p className="text-center text-blue-600 mt-6">
            Tidak memiliki akun?{" "}
            <span className="text-yellow-400 font-bold cursor-pointer hover:underline">
              Masuk
            </span>
          </p>
        </div>
      </div>

      {/* Image Section */}
      <div className="w-1/2 relative">
        <Image
          src={Foto}
          fill
          style={{ objectFit: "cover" }}
          alt="foto"
          className="relative z-10"
        />
        <div className="absolute bottom-4 left-4 bg-white bg-opacity-50 px-4 py-2 rounded-md">
          <p className="text-sm font-medium text-blue-800">Game: Genshin Impact</p>
        </div>
      </div>
    </div>
  );
}
