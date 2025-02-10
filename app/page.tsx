import Image from 'next/image';
import Logo from "@/app/Assets/logo el top ap kuning.png";
import Foto from "@/app/Assets/lesti.png";

export default function Home() {
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
          <nav className="space-x-6">
            <a href="#" className="hover:text-gray-200 bg-blue-800 px-4 py-2 rounded-full text-xl">Home</a>
            <a href="#" className="hover:text-gray-200 text-xl">Leaderboard</a>
            <a href="#" className="hover:text-gray-200 text-xl">Histori</a>
            <a href="#" className="hover:text-gray-200 text-xl">Profile</a>
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
          <a href="#" style={{ backgroundColor: '#3B82F6', color: 'white', padding: '10px 20px', borderRadius: '5px', textDecoration: 'none' }}>
            Top Up Now!
          </a>
        </div>
        <div>
          <Image
            src={Foto}
            alt="Character"
            width={1500}
            height={1500}
          />
        </div>
      </div>

      {/* Footer Section */}
      <footer style={{ backgroundColor: '#1F2937', color: 'white', padding: '50px', marginTop: '50px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap' }}>
          <div style={{ maxWidth: '30%', marginBottom: '20px' }}>
            <Image src={Logo} alt="Logo" width={150} height={150} />
            <p style={{ marginTop: '20px', color: '#D1D5DB' }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
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