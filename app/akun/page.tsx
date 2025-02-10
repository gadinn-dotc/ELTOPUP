import React from 'react';
import Image from 'next/image';
import Logo from "@/app/Assets/logo el top ap kuning.png";
import { MdOutlineHistory } from "react-icons/md";
import { IoIosLogOut } from "react-icons/io";
import { FiPhone } from "react-icons/fi";
import { FaUserEdit } from "react-icons/fa";

const Navbar = () => (
  <header className="bg-blue-500 text-white py-6 shadow-md">
    <div className="container mx-auto flex justify-between items-center px-6">
      {/* Logo */}
      <div className="flex items-center ml-[-40px]">
        <Image src={Logo} alt="Company Logo" width={150} height={150} />
      </div>

      {/* Navbar */}
      <nav className="space-x-6">
        <a href="#" className="hover:text-gray-200 text-xl">Home</a>
        <a href="#" className="hover:text-gray-200 text-xl">Leaderboard</a>
        <a href="#" className="hover:text-gray-200 text-xl">Histori</a>
        <a href="#" className="hover:text-gray-200 bg-blue-800 px-4 py-2 rounded-full text-xl">Profile</a>
      </nav>
    </div>
  </header>
);

const UserProfileCard = () => (
  <div
    style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "20px",
      border: "4px solid",
      borderRadius: "12px",
      background: "white",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      maxWidth: "100%",
      margin: "20px auto",
      borderImage: "linear-gradient(90deg, #FACC15, #3B82F6) 1",
    }}
  >
    <div style={{ display: "flex", alignItems: "center" }}>
      <div
        style={{
          width: "60px",
          height: "60px",
          backgroundColor: "#FACC15",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontWeight: "bold",
          fontSize: "18px",
          color: "#fff",
        }}
      >
        AN
      </div>
      <div style={{ marginLeft: "16px" }}>
        <h2 style={{ margin: "0", fontSize: "20px", fontWeight: "bold" }}>
          Udgam Angkasa
        </h2>
        <p style={{ margin: "4px 0", color: "#6B7280" }}>@angkasal123</p>
        <hr style={{ border: "none", borderTop: "1px solid #ddd", margin: "8px 0" }} />
        <div style={{ display: "flex", alignItems: "center", color: "#000" }}>
          <FiPhone style={{ marginRight: "8px" }} />
          <span>0812312312312</span>
        </div>
      </div>
    </div>
    <button
      style={{
        backgroundColor: "#3B82F6",
        color: "#fff",
        border: "none",
        borderRadius: "24px",
        padding: "10px 20px",
        fontSize: "14px",
        fontWeight: "bold",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
      }}
    >
      <span
        style={{
          display: "inline-block",
          marginRight: "8px",
          fontSize: "16px",
        }}
      >
        <FaUserEdit />
      </span>
      Edit Profile
    </button>
  </div>
);

const MainContent = () => (
  <main className="max-w-6xl mx-auto px-8 py-12">
    <div className="bg-white text-black p-10 rounded-lg shadow-xl" style={{ minHeight: '600px' }}>
      <UserProfileCard />
      <div className="mt-16 grid grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg" style={{ marginTop: '20px', border: '4px solid', borderImage: 'linear-gradient(90deg, #FACC15, #3B82F6) 1', borderRadius: '12px' }}>
          <h3 className="text-xl flex items-center space-x-3">
            <MdOutlineHistory /> <span>Histori</span>
          </h3>
          <button className="mt-6 text-red-600 hover:underline flex items-center space-x-2">
            <IoIosLogOut /> <span>Log out</span>
          </button>
        </div>
        <div className="bg-white p-6 rounded-lg" style={{ marginTop: '20px', border: '4px solid', borderImage: 'linear-gradient(90deg, #FACC15, #3B82F6) 1', borderRadius: '12px' }}>
          <h3 className="text-xl font-semibold mb-6">Pesanan Saya</h3>
          <div className="grid grid-cols-4 text-center gap-4">
            <div>
              <p className="text-3xl font-bold">0</p>
              <p className="text-gray-600">Belum Bayar</p>
            </div>
            <div>
              <p className="text-3xl font-bold">0</p>
              <p className="text-gray-600">Pending</p>
            </div>
            <div>
              <p className="text-3xl font-bold">0</p>
              <p className="text-gray-600">Success</p>
            </div>
            <div>
              <p className="text-3xl font-bold">0</p>
              <p className="text-gray-600">Expired</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
);

const Footer = () => (
  <footer style={{
    backgroundColor: '#1F2937',
    color: 'white',
    padding: '50px',
    marginTop: '50px'
  }}>
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap' }}>
      <div style={{ maxWidth: '30%', marginBottom: '20px' }}>
        <Image src={Logo} alt="Logo" width={150} height={150} />
        <p style={{ marginTop: '20px', color: '#D1D5DB' }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <div style={{ maxWidth: '20%', marginBottom: '20px' }}>
        <h3 style={{ color: '#FACC15', marginBottom: '10px' }}>Peta Situs</h3>
        <ul style={{ listStyle: 'none', padding: 0, color: '#D1D5DB' }}>
          <li>Home</li>
          <li>Achievement</li>
          <li>Histori</li>
          <li>Akun</li>
        </ul>
      </div>
      <div style={{ maxWidth: '20%', marginBottom: '20px' }}>
        <h3 style={{ color: '#FACC15', marginBottom: '10px' }}>Kontak Kami</h3>
        <ul style={{ listStyle: 'none', padding: 0, color: '#D1D5DB' }}>
          <li>WhatsApp</li>
          <li>E-Mail</li>
          <li>Instagram</li>
        </ul>
      </div>
      <div style={{ maxWidth: '20%', marginBottom: '20px' }}>
        <h3 style={{ color: '#FACC15', marginBottom: '10px' }}>Media Sosial & Komunitas</h3>
        <ul style={{ listStyle: 'none', padding: 0, color: '#D1D5DB' }}>
          <li>Instagram</li>
          <li>X</li>
          <li>TikTok</li>
          <li>Discord</li>
        </ul>
      </div>
    </div>
  </footer>
);

export default function Home() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', backgroundColor: '#F9FAFB', minHeight: '100vh' }}>
      <Navbar />
      <MainContent />
      <Footer />
    </div>
  );
}
