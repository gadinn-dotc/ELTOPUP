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
import Banner from "@/app/Assets/Banner.png";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Header */}
      <header className="bg-blue-500 text-white py-8">
        <div className="container mx-auto flex items-center justify-between">
          <Image src={Logo} width={120} height={120} alt="Logo" className="ml-0" />
          <nav className="space-x-7">
            <a href="#" className="hover:underline font-bold bg-blue-700 px-5 py-3 rounded-full">
              Home
            </a>
            <a href="#" className="hover:underline font-bold">
              Leaderboard
            </a>
            <a href="#" className="hover:underline font-bold">
              Histori
            </a>
            <a href="#" className="bg-yellow-400 text-white py-2 px-4 rounded-lg hover:bg-yellow-300 font-light">
              Sign In
            </a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-white py-10">
        <div className="container mx-auto text-center">
          <div className="relative w-full h-[450px] mx-auto">
            <Image
              src={Banner}
              alt="Welcome to our store"
              layout="fill"
              objectFit="cover"
              className=""
            />
          </div>
        </div>
      </section>

      {/* Games */}
      <section className="py-10 px-[250px] \">
        <div className="container mx-auto shadow-lg p-10 rounded-lg bg-white-700 bg-opacity-5 border-solid border-[3px] border-white">
          <h3 className="text-xl font-bold mb-6 text-blue-700 font-fluo">GAMES 🔥🔥</h3>
          <div className="grid grid-cols-2 md:grid-cols-6 gap-10">
            {[
              { name: "Mobile Legends", image: Ml, tinyLogo: MlLogo },
              { name: "Free Fire", image: Ff, tinyLogo: FfLogo },
              { name: "Genshin Impact", image: Gi, tinyLogo: GiLogo },
              { name: "Call of Duty", image: Cd, tinyLogo: CdLogo },
              { name: "Honkai: Star Rail", image: Hsr, tinyLogo: HsrLogo },
              { name: "PUBG", image: Pubg, tinyLogo: PubgLogo },
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
                    className="rounded-ful p-2"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
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
  );
}
