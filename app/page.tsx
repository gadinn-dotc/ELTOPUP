"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link'; // Mengimpor Link dari Next.js
import Logo from "@/app/Assets/logo el top ap kuning.png";
import Foto from "@/app/Assets/lesti.png";

export default function Home() {
  const [showSignInOptions, setShowSignInOptions] = useState(false);

  // Fungsi untuk menampilkan dropdown
  const handleMouseEnter = () => {
    setShowSignInOptions(true);
  };

  // Fungsi untuk menyembunyikan dropdown dengan delay
  const handleMouseLeave = () => {
    setTimeout(() => {
      setShowSignInOptions(false);
    }, 3000); // Dropdown akan hilang setelah 300ms
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', backgroundColor: '#F9FAFB', minHeight: '100vh' }}>
      {/* Navbar */}
      <header className="bg-blue-500 text-white py-6 shadow-md">
        <div className="container mx-auto flex justify-between items-center px-6">
          {/* Logo */}
          <div className="flex items-center ml-[-40px]">
            <Image src={Logo} alt="Company Logo" width={150} height={150} />
          </div>

          {/* Navbar */}
          <nav className="space-x-6 flex items-center relative">
            <Link href="/daftargame" passHref>
              <span className="hover:bg-blue-600 hover:text-white text-xl px-4 py-2 rounded-full">Home</span>
            </Link>
            <Link href="/leaderboard" passHref>
              <span className="hover:bg-blue-600 hover:text-white text-xl px-4 py-2 rounded-full">Leaderboard</span>
            </Link>
            <Link href="/histori" passHref>
              <span className="hover:bg-blue-600 hover:text-white text-xl px-4 py-2 rounded-full">Histori</span>
            </Link>

            {/* Sign In Button */}
            <div 
              className="relative"
              onMouseEnter={handleMouseEnter} 
              onMouseLeave={handleMouseLeave}
            >
              <button className="bg-yellow-500 text-white py-2 px-4 rounded-full hover:bg-yellow-400">
                Sign In
              </button>
              {/* Dropdown for Sign In options */}
              {showSignInOptions && (
                <div className="absolute top-10 left-1/2 transform -translate-x-1/2 bg-white shadow-md rounded-lg flex space-x-4 mt-2 p-2">
                  <Link href="/signin" passHref>
                    <button className="bg-white text-blue-600 py-2 px-4 rounded-l-lg border border-blue-600 hover:bg-blue-100">
                      Daftar
                    </button>
                  </Link>
                  <Link href="/signup" passHref>
                    <button className="bg-yellow-500 text-white py-2 px-4 rounded-r-lg hover:bg-yellow-400">
                      Masuk
                    </button>
                  </Link>
                </div>
              )}
            </div>
          </nav>
        </div>
      </header>

      {/* Main Section */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
        <div style={{ maxWidth: '50%', padding: '50px' }}>
          <h1 style={{ color: '#FACC15', fontSize: '36px', margin: '0 0 10px', fontWeight: 'bold' }}>HALO GAMERS !!</h1>
          <h2 style={{ color: '#1E3A8A', fontSize: '28px', margin: '0 0 10px', fontWeight: 'bold' }}>
            Top-up Game dan Mulai Petualangan Baru di dunia Gaming!
          </h2>
          <p style={{ color: '#4B5563', fontSize: 'px', margin: '0 0 10px' }}>
            Akses Beragam Metode untuk Membawa Anda Menjadi Pemenang yang Sebenarnya!!
          </p>
          <a href="/daftargame" style={{ backgroundColor: '#3B82F6', color: 'white', padding: '10px 20px', borderRadius: '5px', textDecoration: 'none' }}>
            Top Up Now!
          </a>
        </div>
        <div>
          <Image
            src={Foto}
            alt="Character"
            width={1380}
            height={1380}
          />
        </div>
      </div>

      {/* Footer Section */}
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
        <h3 style={{ color: '#FACC15', marginBottom: '10px', fontWeight: 'bold' }}>Peta Situs</h3>
        <ul style={{ listStyle: 'none', padding: 0, color: '#D1D5DB' }}>
          <li>Home</li>
          <li>Achievement</li>
          <li>Histori</li>
          <li>Akun</li>
        </ul>
      </div>
      <div style={{ maxWidth: '20%', marginBottom: '20px' }}>
        <h3 style={{ color: '#FACC15', marginBottom: '10px', fontWeight: 'bold' }}>Kontak Kami</h3>
        <ul style={{ listStyle: 'none', padding: 0, color: '#D1D5DB' }}>
          <li>WhatsApp</li>
          <li>E-Mail</li>
          <li>Instagram</li>
        </ul>
      </div>
      <div style={{ maxWidth: '20%', marginBottom: '20px' }}>
        <h3 style={{ color: '#FACC15', marginBottom: '10px', fontWeight: 'bold' }}>Media Sosial & Komunitas</h3>
        <ul style={{ listStyle: 'none', padding: 0, color: '#D1D5DB' }}>
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
}
