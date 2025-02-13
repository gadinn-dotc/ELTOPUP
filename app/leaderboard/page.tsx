"use client";
import Image from "next/image";
import Logo from "@/app/Assets/logo el top ap kuning.png";
import { MdOutlineHistory } from "react-icons/md";
import { IoIosLogOut } from "react-icons/io";
import { FiPhone } from "react-icons/fi";
import { FaUserEdit } from "react-icons/fa";

const Leaderboard = () => {
  return (
    <div className="bg-white min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-blue-500 text-white py-6 shadow-md">
        <div className="container mx-auto flex justify-between items-center px-6">
          {/* Logo */}
          <div className="flex items-center">
            <Image src={Logo} alt="Company Logo" width={150} height={150} />
          </div>

          {/* Navbar */}
          <nav className="space-x-6">
            <a href="/daftargame" className="hover:bg-blue-600 hover:text-white text-xl px-4 py-2 rounded-full">Home</a>
            <a href="#" className="hover:text-white bg-blue-800 px-4 py-2 rounded-full text-xl">Leaderboard</a>
            <a href="/histori" className="hover:bg-blue-600 hover:text-white text-xl px-4 py-2 rounded-full">Histori</a>
            <a href="/akun" className="hover:bg-blue-600 hover:text-white text-xl px-4 py-2 rounded-full">Profile</a>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <div className="bg-white shadow-2xl p-4 mx-4 md:mx-auto md:w-[70%] rounded-lg mt-6 pb-16">
        <main className="container mx-auto px-4 py-4 flex-grow">
          <div className="bg-white p-4 rounded-lg">
            <h1 className="text-3xl font-bold text-center text-black mb-4 mt-[-50px]">Leaderboard</h1>
            <h2 className="text-3xl font-bold text-center mb-4 mt-[-15px]">
              Top 10 Pembelian Terbanyak di 
              <span className="text-[#FFD700] font-extrabold">El-TopUp</span>
            </h2>
            <p className="text-center mb-4 font-bold mt-[-5px] text-lg">
              Berikut ini adalah daftar 10 pembelian terbanyak yang dilakukan <br />
              oleh pelanggan kami. Data ini diambil dari sistem kami dan selalu diperbaharui.
            </p>

            {/* Divider Line */}
            <div className="w-[75%] mx-auto h-1.5 bg-white border-2 border-[#76BDFE] rounded-full mb-6"></div>

            {/* Leaderboard Sections */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              {/* Top 10 - Hari Ini */}
              <div className="bg-[#357ABD] text-white rounded-lg p-6 w-[90%] mx-auto relative shadow-md">
                <h3 className="text-lg font-bold absolute top-[-16px] left-2 bg-blue-900 text-white px-4 py-2 rounded">
                  Top 5 - Hari Ini
                </h3>
                <ol className="space-y-3 text-sm text-white mt-6">
                  <li className="flex justify-between">
                    <span>1. zskyee 🥇</span>
                    <span>Rp. 228.900</span>
                  </li>
                  <li className="flex justify-between">
                    <span>2. Gad11n 🥈</span>
                    <span>Rp. 132.500</span>
                  </li>
                  <li className="flex justify-between">
                    <span>3. Ayla 🥉</span>
                    <span>Rp. 100.000</span>
                  </li>
                  <li className="flex justify-between">
                    <span>4. Afghan</span>
                    <span>Rp. 50.000</span>
                  </li>
                  <li className="flex justify-between">
                    <span>5. Ammar</span>
                    <span>Rp. 25.000</span>
                  </li>
                </ol>
              </div>

              {/* Top 10 - Minggu Ini */}
              <div className="bg-[#357ABD] text-white rounded-lg p-6 w-[90%] mx-auto relative shadow-md">
                <h3 className="text-lg font-bold absolute top-[-16px] left-2 bg-blue-900 text-white px-4 py-2 rounded">
                  Top 5 - Minggu Ini
                </h3>
                <ol className="space-y-3 text-sm text-white mt-6">
                  <li className="flex justify-between">
                    <span>1. Gad1nn 🥇</span>
                    <span>Rp. 200.000</span>
                  </li>
                  <li className="flex justify-between">
                    <span>2. Ammar 🥈</span>
                    <span>Rp. 170.500</span>
                  </li>
                  <li className="flex justify-between">
                    <span>3. Afghan 🥉</span>
                    <span>Rp. 110.000</span>
                  </li>
                  <li className="flex justify-between">
                    <span>4. Ayla</span>
                    <span>Rp. 80.000</span>
                  </li>
                  <li className="flex justify-between">
                    <span>5. zskyee</span>
                    <span>Rp. 50.000</span>
                  </li>
                </ol>
              </div>
            </div>

            {/* Top 10 - Bulan Ini */}
            <div className="flex justify-center mt-6">
              <div className="bg-[#357ABD] text-white rounded-lg p-4 w-[50%] relative shadow-md">
                <h3 className="text-lg font-bold absolute top-[-14px] left-2 bg-blue-900 text-white px-4 py-2 rounded">
                  Top 5 - Bulan Ini
                </h3>
                <ol className="space-y-3 text-sm text-white mt-6">
                  <li className="flex justify-between">
                    <span>1. Gad1nn 🥇</span>
                    <span>Rp. 332.500</span>
                  </li>
                  <li className="flex justify-between">
                    <span>2. zskyee 🥈</span>
                    <span>Rp. 278.900</span>
                  </li>
                  <li className="flex justify-between">
                    <span>3. Ammar 🥉</span>
                    <span>Rp. 195.500</span>
                  </li>
                  <li className="flex justify-between">
                    <span>4. Ayla</span>
                    <span>Rp. 180.000</span>
                  </li>
                  <li className="flex justify-between">
                    <span>5. Afghan</span>
                    <span>Rp. 160.000</span>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12 mt-12">
        <div className="container mx-auto flex justify-between items-start flex-wrap">
          <div className="w-full md:w-1/4 mb-8">
            <Image src={Logo} alt="Logo" width={150} height={150} />
            <p className="text-gray-400 mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="w-full md:w-1/4 mb-8">
            <h3 className="text-yellow-400 font-bold mb-4">Peta Situs</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Home</li>
              <li>Achievement</li>
              <li>Histori</li>
              <li>Akun</li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 mb-8">
            <h3 className="text-yellow-400 font-bold mb-4">Kontak Kami</h3>
            <ul className="space-y-2 text-gray-400">
              <li>WhatsApp</li>
              <li>E-Mail</li>
              <li>Instagram</li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 mb-8">
            <h3 className="text-yellow-400 font-bold mb-4">Media Sosial & Komunitas</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Instagram</li>
              <li>X</li>
              <li>TikTok</li>
              <li>Discord</li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Leaderboard;
