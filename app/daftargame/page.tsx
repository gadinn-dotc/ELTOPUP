"use client";
import Image from "next/image";
import Logo from "@/app/Assets/logo el top ap kuning.png";
import Ml from "@/app/Assets/MlCard.png";
import MlLogo from "@/app/Assets/ml logo.png";
import Ff from "@/app/Assets/FFCard.png";
import FfLogo from "@/app/Assets/ff logo.png";
import Gi from "@/app/Assets/GiCard.png";
import GiLogo from "@/app/Assets/gi logo.png";
import Cd from "@/app/Assets/CdCard.png";
import CdLogo from "@/app/Assets/cd logo.png";
import Hsr from "@/app/Assets/HsrCard.png";
import HsrLogo from "@/app/Assets/hsr logo.png";
import Rblx from "@/app/Assets/RblxCard.png";
import RblxLogo from "@/app/Assets/rblx logo.png";
import Pubg from "@/app/Assets/PubgCard.png";
import PubgLogo from "@/app/Assets/pubg logo.png";
import Pool from "@/app/Assets/PoolCard.png";
import poollogo from "@/app/Assets/pool logo.png";
import Banner from "@/app/Assets/banner new.jpg";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Header */}
      <header className="bg-blue-500 text-white py-6 shadow-md">
        <div className="container mx-auto flex justify-between items-center px-6">
          {/* Logo */}
          <div className="flex items-center">
            <Image src={Logo} alt="Company Logo" width={150} height={150} />
          </div>

          {/* Navbar */}
          <nav className="space-x-6">
            <a href="#" className="hover:text-gray-200 bg-blue-800 px-4 py-2 rounded-full text-xl">Home</a>
            <a href="/leaderboard" className="hover:bg-blue-600 hover:text-white text-xl px-4 py-2 rounded-full">Leaderboard</a>
            <a href="/histori" className="hover:bg-blue-600 hover:text-white text-xl px-4 py-2 rounded-full">Histori</a>
            <a href="/akun" className="hover:bg-blue-600 hover:text-white text-xl px-4 py-2 rounded-full">Profile</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-white py-10">
        <div className="container mx-auto text-center">
          <div className="relative w-full h-[350px] mx-auto"> {/* Perubahan di sini */}
            <Image
              src={Banner}
              alt="Welcome to our store"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        </div>
      </section>


      {/* Games */}
      <section className="py-10 px-6 lg:px-20">
        <div className="container mx-auto shadow-lg p-10 rounded-lg bg-white bg-opacity-10 border-solid border-[3px] border-white">
          <h3 className="text-xl font-bold mb-6 text-blue-700 font-fluo">DAFTAR GAMES 🔥🔥</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              { name: "Mobile Legends", image: Ml, tinyLogo: MlLogo },
              { name: "Free Fire", image: Ff, tinyLogo: FfLogo },
              { name: "Genshin Impact", image: Gi, tinyLogo: GiLogo },
              { name: "Call of Duty", image: Cd, tinyLogo: CdLogo },
              { name: "Honkai: Star Rail", image: Hsr, tinyLogo: HsrLogo },
              { name: "PUBG", image: Pubg, tinyLogo: PubgLogo },
              { name: "Roblox", image: Rblx, tinyLogo: RblxLogo },
              { name: "8Pool", image: Pool, tinyLogo: poollogo },
            ].map((game, index) => (
              <div
                key={index}
                className="relative rounded-xl shadow-lg hover:shadow-xl transition transform hover:scale-105 overflow-hidden group"
              >
                <div className="relative w-full h-[230px]">
                  <Image
                    src={game.image}
                    alt={game.name}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-xl group-hover:brightness-50 transition-all"
                  />
                </div>
                <div className="absolute inset-0 flex justify-center items-center opacity-0 transition transform hover:scale-150 hover:opacity-100">
                  <Image
                    src={game.tinyLogo}
                    alt={`${game.name} logo`}
                    width={90}
                    height={90}
                    className="rounded-full p-2"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
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
    </div>
  );
}
