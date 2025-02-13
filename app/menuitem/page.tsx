"use client"
import React, { Fragment, useState } from "react";
import Image from "next/image";
import Diamond from "@/app/Assets/diamond.png";
import { IoDiamondOutline } from "react-icons/io5";
import { CiBag1 } from "react-icons/ci";
import Logo from "@/app/Assets/logo el top ap kuning.png";
import Modal from "../components/Modal";

const TopUpPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("Twilight Pass");
  const [popup, setPopup] = useState(false);

  const categories = [
    { name: "Twilight Pass", price: "Rp. 147.830" },
    { name: "Weekly Diamond", price: "Rp. 75.000" },
    { name: "Diamonds", price: "Rp. 50.000" },
  ];

  return (
    <Fragment>
      <header className="bg-blue-500 text-white py-6 shadow-md fixed top-0 left-0 w-full z-10">
        <div className="container mx-auto flex justify-between items-center px-6">
          <div className="flex items-center">
            <Image src={Logo} alt="Company Logo" width={150} height={150} />
          </div>
          <nav className="space-x-4 text-lg">
            <a href="#" className="hover:text-gray-200 bg-blue-800 px-4 py-2 rounded-full">Home</a>
            <a href="/leaderboard" className="hover:bg-blue-600 hover:text-white text-xl px-4 py-2 rounded-full">Leaderboard</a>
            <a href="/histori" className="hover:bg-blue-600 hover:text-white text-xl px-4 py-2 rounded-full">Histori</a>
            <a href="/akun" className="hover:bg-blue-600 hover:text-white text-xl px-4 py-2 rounded-full">Profile</a>
          </nav>
        </div>
      </header>

      <div className="max-w-[1000px] mx-auto bg-white py-6 px-6 rounded-2xl justify-center mt-24">
        {/* Header */}
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Deskripsi & Cara Melakukan Pesanan:</h1>
        <ol className="text-gray-700 list-decimal list-inside space-y-2 mb-4 font-semibold">
          <li>Masukkan Data Akun Mobile Legends: Bang Bang (User dan Server ID akun).</li>
          <li>Pilih nominal/jumlah top up yang Anda inginkan.</li>
          <li>Selanjutnya pilih metode pembayaran dan masukkan kode promo jika ada.</li>
          <li>Masukkan Alamat Email untuk mendapatkan bukti transaksi dan promo terbaru.</li>
          <li>Terakhir, konfirmasi pesanan Anda.</li>
          <li>Selamat Anda sudah berhasil Top-Up di E-TopUp! (^_^)</li>
        </ol>
        <hr className="mb-4 border-slate-200 border-t-2 rounded-lg" />
        
        {/* User and Server ID Input */}
        <div className="my-8 mx-11">
          <h2 className="text-xl font-semibold text-gray-800 mb-5 flex">
            <span className="material-icons text-blue-500 px-4"><IoDiamondOutline size={30} /></span>Masukkan User dan Server ID
          </h2>
          <div className="grid grid-cols-2 gap-4 mx-10">
            <div>
              <h1 className="text-black font-semibold mx-4">User ID<span className="text-red-600">*</span></h1>
              <input
                type="text"
                className="text-black w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none shadow-lg"
              />
            </div>
            <div>
              <h1 className="text-black font-semibold mx-4">Server ID<span className="text-red-600">*</span></h1>
              <input
                type="text"
                className="text-black w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none shadow-lg"
              />
            </div>
          </div>
          <p className="text-sm text-red-500 mt-2 mx-10">*Pastikan User ID dan Server ID sudah benar!</p>
        </div>
        <hr className="mb-4 border-slate-200 border-t-2 rounded-lg" />
        
        {/* Nominal Top Up */}
        <div className="mb-4">
          <h2 className="text-sm font-semibold text-gray-800 mb-2 flex items-center">
            <span className="material-icons text-blue-500 px-4"><CiBag1 size={30} /></span>
            Pilih Nominal Top Up
          </h2>
          <div className="border border-gray-300 rounded-lg p-4">
            <h3 className="font-medium text-gray-600 mb-4">Pilih Kategori</h3>
            <div className="flex space-x-4 border-b border-gray-300 pb-2 mb-4">
              {categories.map((category) => (
                <button
                  key={category.name}
                  onClick={() => setSelectedCategory(category.name)}
                  className={`px-4 py-2 text-sm font-medium ${
                    selectedCategory === category.name
                      ? "text-blue-500 border-b-2 border-blue-500"
                      : "text-gray-600"
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
            <div className="p-4 border border-gray-300 rounded-lg grid grid-cols-2 md:grid-cols-6 gap-36">
              <div className="shadow-lg rounded-lg border-slate-200 border-2 w-max hover:scale-105 transition transform hover:border-slate-500">
                <p className="text-white font-semibold mb-2 bg-blue-400 py-2 px-4 rounded-lg">{selectedCategory}</p>
                <div className="flex justify-center items-center">
                  <Image
                    src={Diamond}
                    alt="diamond"
                    width={75}
                    height={75}
                    className="rounded-full p-2"
                  />
                </div>
                <p className="text-gray-800 font-semibold justify-center flex">
                  {categories.find((category) => category.name === selectedCategory)?.price || "Rp. 0"}
                </p>
              </div>
            </div>
          </div>
        </div>
        <hr className="mb-4 border-slate-200 border-t-2 rounded-lg" />
        
        {/* Payment Options */}
        <div className="mb-8">
          <h2 className="text-sm font-semibold text-gray-800 mb-2">Pilih pembayaran</h2>
          <div className="grid grid-cols-3 gap-4">
            {[
              "gopay",
              "dana",
              "bri",
              "bni",
              "shopeepay",
              "ovo",
              "alfamart",
              "indomaret",
            ].map((payment, idx) => (
              <div
                key={idx}
                className="flex items-center justify-center border border-gray-300 rounded-lg p-3 hover:bg-gray-100"
              >
                <img
                  src={`/${payment}.png`} // Replace with actual icons
                  alt={payment}
                  className="h-6"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Promo Code Input */}
        <div className="mb-8">
          <h2 className="text-sm font-semibold text-gray-800 mb-2">Kode Promo</h2>
          <input
            type="text"
            placeholder="Kode Promo Anda"
            className="text-black w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
          />
        </div>

        {/* Email Input */}
        <div className="mb-8">
          <h2 className="text-sm font-semibold text-gray-800 mb-2">Masukkan Alamat E-Mail Anda</h2>
          <input
            type="email"
            placeholder="Alamat E-mail"
            className="text-black w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
          />
        </div>

        {/* Submit Button */}
        <button className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold p-3 rounded-lg hover:opacity-90 transition" onClick={() => setPopup(true)}>
          Beli!
        </button>
      </div>

      <footer className="bg-[#1c1c33] text-white py-10">
        <div className="container mx-auto flex flex-col md:flex-row justify-between">
          <div className="w-full md:w-1/3 mb-6">
            <Image src={Logo} alt="Logo" width={120} height={120} />
            <p className="text-sm mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="w-full md:w-1/3 mb-6">
            <h4 className="font-bold text-lg mb-3">Peta Situs</h4>
            <ul>
              <li>Home</li>
              <li>Achievement</li>
              <li>Histori</li>
              <li>Akun</li>
            </ul>
          </div>
          <div className="w-full md:w-1/3">
            <h4 className="font-bold text-lg mb-3">Kontak Kami</h4>
            <ul>
              <li>WhatsApp</li>
              <li>E-Mail</li>
              <li>Instagram</li>
            </ul>
          </div>
        </div>
        <div className="container mx-auto mt-10 text-center">
          <h4 className="font-bold text-lg mb-3">Media Sosial & Komunitas</h4>
          <ul className="flex justify-center space-x-6">
            <li>Instagram</li>
            <li>X</li>
            <li>TikTok</li>
            <li>Discord</li>
          </ul>
        </div>
      </footer>

      <Modal isVisible={popup} onClose={() => setPopup(false)}>
        <div className="flex justify-center items-center min-h-screen">
          <div className="w-full max-w-lg bg-white rounded-2xl shadow-lg p-6 border border-blue-300">
            {/* Modal Content */}
            <div className="text-lg font-bold text-black mb-4">Konfirmasi Pemesanan</div>
            <p className="text-sm text-black font-bold">Username: angkasa123</p>
            {/* Add more modal content here */}
            <button className="mt-6 w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-lg shadow">Konfirmasi</button>
          </div>
        </div>
      </Modal>
    </Fragment>
  );
};

export default TopUpPage;
