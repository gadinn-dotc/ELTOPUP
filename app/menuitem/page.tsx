"use client"
import React, { Fragment, useState } from "react";
import Image from "next/image";
import Diamond from "@/app/Assets/diamond.png"
import { IoDiamondOutline } from "react-icons/io5";
import { CiBag1 } from "react-icons/ci";
import Logo from "@/app/Assets/logo el top ap kuning.png";
import Modal from "../components/Modal";

const TopUpPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("Twilight Pass");
  const [popup,setPopup] = useState(false)

  const categories = [
    { name: "Twilight Pass", price: "Rp. 147.830" },
    { name: "Weekly Diamond", price: "Rp. 75.000" },
    { name: "Diamonds", price: "Rp. 50.000" },
  ];

  return (
    <Fragment>
      <div className="min-h-screen bg-white">
      <header className="bg-blue-500 text-white py-8">
        <div className="container mx-auto flex items-center justify-between">
          <Image src={Logo} width={120} height={120} alt="Logo" className="ml-0" />
          <nav className="space-x-7">
            <a href="#" className="hover:underline font-bold">
              Home
            </a>
            <a href="#" className="hover:underline font-bold">
              Leaderboard
            </a>
            <a href="#" className="hover:underline font-bold">
              Histori
            </a>
            <a href="#" className="bg-yellow-400 text-white py-2 px-4 rounded-lg hover:bg-yellow-300 font-light">
              Account   
            </a>
          </nav>
        </div>
      </header>
      <div className="max-w-[1000px] mx-auto bg-white py-6 px-6 rounded-2xl justify-center">
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
        <hr className="mb-4 border-slate-200 border-t-2 rounded-lg"/>
        {/* User and Server ID Input */}
        <div className="my-8 mx-11">
          <h2 className="text-xl font-semibold text-gray-800 mb-5 flex">
            <span className="material-icons text-blue-500 px-4"><IoDiamondOutline size={30}/></span>Masukkan User dan Server ID
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
        <hr className="mb-4 border-slate-200 border-t-2 rounded-lg"/>
        {/* Nominal Top Up */}
        <div className="mb-4">
          <h2 className="text-sm font-semibold text-gray-800 mb-2 flex items-center">
            <span className="material-icons text-blue-500 px-4"><CiBag1 size={30}/></span>
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
                      alt={`logo`}
                      width={75}
                      height={750}
                      className="rounded-ful p-2"
                    />
                  </div>
                <p className="text-gray-800 font-semibold justify-center flex">
                {categories.find((category) => category.name === selectedCategory)?.price || "Rp. 0"}
                </p>
              </div>
            </div>
          </div>
        </div>
        <hr className="mb-4 border-slate-200 border-t-2 rounded-lg"/>
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
        <button className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold p-3 rounded-lg hover:opacity-90 transition" onClick={() => setPopup(true )}>
          Beli!
        </button>
      </div>
      <footer className="bg-[#1c1c33] text-white py-10">
        <div className="container mx-auto flex flex-col md:flex-row justify-between">
          <div className="w-full md:w-1/3 mb-6">
            <Image src={Logo} alt="Logo" width={120} height={120} />
            <p className="text-sm mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
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
    </div>
    <Modal isVisible={popup} onClose={() => setPopup(false)}>
      <div className="">
    <div className="flex justify-center items-center min-h-scree">
      <div className="w-full max-w-full bg-white rounded-2xl shadow-lg p-6 border border-blue-300">
        {/* Header Section */}
        <div className="flex items-center gap-4">
          <Image
            src="/mobile-legends.jpg"
            alt="Mobile Legends"
            width={80}
            height={80}
            className="rounded-lg"
          />
          <div>
            <h1 className="text-lg font-bold text-black">Konfirmasi Pemesanan:</h1>
          </div>
        </div>

        {/* User Info Section */}
        <div className="mt-4 text-sm text-gray-800">
        <p className="text-sm text-black font-bold">User account info:</p>
          <p><span className="font-semibold text-black">Username:</span> angkasa123</p>
          <p><span className="font-semibold text-black">Nama Lengkap:</span> Udgam Angkasa</p>
          <p><span className="font-semibold text-black">E-Mail:</span> elangkasa@gmail.com</p>
          <p><span className="font-semibold text-black">Nomor Telepon:</span> 0812312312312</p>
        </div>

        <hr className="my-4 border-gray-300" />

        {/* Order Details Section */}
        <div className="text-sm">
          <p className="font-bold text-black">MOONTON</p>
          <p className="text-lg font-semibold text-black">Mobile Legends: Bang Bang</p>
          <p className="text-black">Account ID: 12345678912 (1234)</p>
        </div>

        <hr className="my-4 border-gray-300" />

        <div className="text-sm space-y-2">
          <div className="flex justify-between">
            <span>Item</span>
            <span className="font-semibold">Weekly Diamond Pass</span>
          </div>
          <div className="flex justify-between">
            <span>Harga</span>
            <span className="font-semibold">Rp. 27.488</span>
          </div>
          <div className="flex justify-between">
            <span>Biaya Admin</span>
            <span className="font-semibold">Rp. 1.374,4</span>
          </div>
          <div className="flex justify-between">
            <span>Kode Promo</span>
            <span className="font-semibold">SIGMASKIBIDI</span>
          </div>
        </div>

        <hr className="my-4 border-gray-300" />

        {/* Total Payment Section */}
        <div className="text-sm font-semibold">
          <div className="flex justify-between">
            <span>Total Pembayaran:</span>
            <span className="text-lg">Rp. 28.862,4</span>
          </div>
          <div className="flex items-center gap-2 mt-2">
            <Image
              src="/gopay-logo.png"
              alt="GoPay"
              width={20}
              height={20}
            />
            <span>payment: </span>
            <span className="font-semibold">GoPay</span>
          </div>
        </div>

        <button className="mt-6 w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-lg shadow">
          Konfirmasi
        </button>
      </div>
    </div>
      </div>
    </Modal>
    </Fragment>
  );
};

export default TopUpPage;
