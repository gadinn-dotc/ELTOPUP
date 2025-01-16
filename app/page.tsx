import Image from 'next/image';
import Logo from "@/app/Assets/logo el top ap kuning.png";
import Foto from "@/app/Assets/lesti.png";

export default function Home() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', backgroundColor: '#F9FAFB', minHeight: '100vh' }}>
      {/* Navbar */}
      <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px 40px', backgroundColor: '#3B82F6' }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Image src={Logo} alt="Logo" width={150} height={150} />
        </div>
        <div>
          <a href="#" style={{ color: 'white', margin: '0 10px', textDecoration: 'none' }}>Home</a>
          <a href="#" style={{ color: 'white', margin: '0 10px', textDecoration: 'none' }}>Leaderboard</a>
          <a href="#" style={{ color: 'white', margin: '0 10px', textDecoration: 'none' }}>Histori</a>
          <a href="#" style={{ color: 'white', backgroundColor: '#FACC15', padding: '5px 10px', borderRadius: '5px', textDecoration: 'none' }}>Sign In</a>
        </div>
      </nav>

      {/* Main Section */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '50px', minHeight: '80vh', position: 'relative' }}>
        <div style={{ maxWidth: '50%' }}>
          <h1 style={{ color: '#FACC15', fontSize: '36px', margin: '0 0 10px', fontWeight: 'bold' }}>HALO GAMERS !!</h1>
          <h2 style={{ color: '#1E3A8A', fontSize: '28px', margin: '0 0 10px', fontWeight: 'bold' }}>
            Top-up Game dan Mulai Petualangan Baru di dunia Gaming!
          </h2>
          <p style={{ color: '#4B5563', fontSize: '16px', margin: '0 0 10px' }}>
            Akses Beragam Metode untuk Membawa Anda Menjadi Pemenang yang Sebenarnya!!
          </p>
          <a href="#" style={{ backgroundColor: '#3B82F6', color: 'white', padding: '10px 20px', borderRadius: '5px', textDecoration: 'none' }}>
            Top Up Now!
          </a>
        </div>
        <div style={{ position: 'absolute', right: '50px', top: '80px', width: '420px' }}>
          <Image
            src={Foto}
            alt="Character"
            width={820}
            height={820}
          />
        </div>
      </div>

      {/* White Background Section (under the main section) */}
      <div style={{ backgroundColor: 'white', padding: '50px 0' }}></div>

      {/* Footer Section */}
      <footer style={{ backgroundColor: '#1F2937', color: 'white', padding: '50px', marginTop: '50px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap' }}>
          <div style={{ maxWidth: '30%', marginBottom: '20px' }}>
            <Image src={Logo} alt="Logo" width={150} height={150} />
            <p style={{ marginTop: '20px', color: '#D1D5DB' }}>
              Aplikasi El-Top up adalah platform yang memungkinkan pengguna untuk membeli mata uang virtual, item, atau kredit dalam game dengan mudah dan cepat. Ide utama dari aplikasi ini adalah untuk memberikan pengalaman yang nyaman bagi para pemain game yang ingin mempercepat kemajuan dalam permainan tanpa perlu keluar dari game itu sendiri.
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
