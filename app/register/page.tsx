"use client";

import React from "react";
import Image from "next/image";
import Logo from "@/app/Assets/logo el top ap biru.png"; // Ganti sesuai lokasi logo Anda
import Background from "@/app/Assets/genshin (1).jpeg"; // Ganti sesuai lokasi gambar background Anda

export default function Register() {
  return (
    <div className="flex h-screen">
      {/* Form Section */}
      <div className="w-1/2 bg-white p-10 flex flex-col justify-center relative">
        {/* Close Button */}
        <button
          className="absolute top-10 right-8 text-white font-bold text-xl bg-blue-500 inline-flex items-center justify-center rounded-lg px-4 py-2 hover:bg-blue-600"
          aria-label="Close"
        >
          ✕
        </button>

        {/* Logo */}
        <div className="mb-6">
          <Image src={Logo} alt="Logo" width={150} height={50} />
        </div>

        {/* Title */}
        <h1 className="text-4xl font-bold text-blue-500 mb-2">Daftar</h1>
        <p className="text-blue-500 mb-6">
          Silahkan isi format berikut untuk mendaftarkan akun.
        </p>

        {/* Form */}
        <form className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            {/* Nama Lengkap */}
            <div>
              <label className="block text-sm font-medium text-blue-500">
                Nama Lengkap *
              </label>
              <input
                type="text"
                placeholder="Nama Lengkap"
                className="w-full bg-blue-500 border border-blue-500 rounded-md p-3 text-sm text-white focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            {/* Username */}
            <div>
              <label className="block text-sm font-medium text-blue-500">
                Username *
              </label>
              <input
                type="text"
                placeholder="Username"
                className="w-full bg-blue-500 border border-blue-500 rounded-md p-3 text-sm text-white focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-blue-500">
                E-Mail *
              </label>
              <input
                type="email"
                placeholder="E-Mail"
                className="w-full bg-blue-500 border border-blue-500 rounded-md p-3 text-sm text-white focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            {/* Nomor Telepon */}
            <div>
              <label className="block text-sm font-medium text-blue-500">
                Nomor Telepon *
              </label>
              <input
                type="tel"
                placeholder="Nomor Telepon"
                className="w-full bg-blue-500 border border-blue-500 rounded-md p-3 text-sm text-white focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>
          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-blue-500">
              Password *
            </label>
            <input
              type="password"
              placeholder="Password"
              className="w-full bg-blue-500 border border-blue-500 rounded-md p-3 text-sm text-white focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          {/* Konfirmasi Password */}
          <div>
            <label className="block text-sm font-medium text-blue-500">
              Konfirmasi Ulang Password *
            </label>
            <input
              type="password"
              placeholder="Konfirmasi Ulang Password"
              className="w-full bg-blue-500 border border-blue-500 rounded-md p-3 text-sm text-white focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          {/* Checkbox */}
          <div className="flex items-center">
            <input
              type="checkbox"
              id="terms"
              className="mr-2 text-blue-500 focus:ring-blue-500"
            />
            <label htmlFor="terms" className="text-sm text-gray-700">
              Saya setuju dengan{" "}
              <a href="#" className="text-yellow-500 hover:underline">
                Syarat dan Ketentuan
              </a>{" "}
              dan{" "}
              <a href="#" className="text-yellow-500 hover:underline">
                Kebijakan Privasi
              </a>
              .
            </label>
          </div>
          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-3 rounded-md text-sm font-medium hover:bg-blue-600 transition"
          >
            Daftar
          </button>
        </form>

        {/* Sudah memiliki akun */}
        <p className="text-center text-gray-700 mt-4 text-sm">
          Sudah memiliki akun?{" "}
          <a href="/login" className="text-yellow-500 font-medium hover:underline">
            Masuk
          </a>
        </p>
      </div>

      {/* Image Section */}
      <div className="w-1/2 relative">
        <Image
          src={Background}
          alt="Background"
          fill
          objectFit="cover"
          className="absolute inset-0"
        />
      </div>
    </div>
  );
}
