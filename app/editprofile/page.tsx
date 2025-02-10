'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Logo from '@/app/Assets/logo el top ap kuning.png';
import { IoPhonePortraitSharp } from 'react-icons/io5';
import { IoClose } from 'react-icons/io5';

function Navbar() {
    return (
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
}

function Footer() {
    return (
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
}

export default function ProfileEdit() {
    const availableUsernames = ["@angakasa123", "@laut123"];
    const [profile, setProfile] = useState({
        fullName: 'Udgam Angkasa',
        username: '@angakasa123',
        email: 'elangkasa@gmail.com',
        phone: '0812312312312',
    });
    const [editProfile, setEditProfile] = useState({ ...profile });
    const [errorMessage, setErrorMessage] = useState('');
    const [hasTypedUsername, setHasTypedUsername] = useState(false);
    const [showNotif, setShowNotif] = useState(false);

    useEffect(() => {
        if (showNotif) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [showNotif]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEditProfile({ ...editProfile, [name]: value });

        if (name === 'username') {
            setHasTypedUsername(true);
            if (!availableUsernames.includes(value) && value !== '') {
                setErrorMessage('Username ini tidak tersedia.');
            } else {
                setErrorMessage('');
            }
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (errorMessage) {
            alert('Harap perbaiki error sebelum menyimpan.');
            return;
        }
        setProfile(editProfile);
        setShowNotif(true);
        setTimeout(() => setShowNotif(false), 3000);
    };

    return (
        <div>
            <Navbar />

            {showNotif && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                    <div className="bg-white border border-gray-300 shadow-xl rounded-lg p-4 w-96">
                        <div className="flex justify-between items-center border-b pb-2">
                            <span className="text-gray-600 text-lg font-semibold">notif:</span>
                            <button onClick={() => setShowNotif(false)} className="text-xl text-gray-600 hover:text-black">
                                <IoClose />
                            </button>
                        </div>
                        <div className="text-center text-black text-xl font-bold py-4">
                            Profil berhasil di update ⚡!
                        </div>
                    </div>
                </div>
            )}

            <div className="flex flex-col items-center min-h-screen bg-white py-10 px-4">
                <div className="bg-white rounded-lg shadow-lg p-10 w-full max-w-4xl border-4 border-transparent"
                    style={{ borderImage: 'linear-gradient(90deg, #FACC15, #3B82F6) 1', borderRadius: '0px' }}>
                    <div className="flex items-center mb-6 border-b pb-4 border-gray-300">
                        <div className="w-20 h-20 bg-yellow-500 text-white flex items-center justify-center text-3xl font-bold rounded-full">
                            {profile.fullName.split(' ').map(word => word[0]).join('')}
                        </div>
                        <div className="ml-4">
                            <h2 className="text-2xl font-semibold">{profile.fullName}</h2>
                            <p className="text-gray-500 text-lg">{profile.username}</p>
                            <p className="text-gray-500 flex items-center text-lg mt-1">
                                <IoPhonePortraitSharp className="mr-2 text-black" />
                                {profile.phone}
                            </p>
                        </div>
                    </div>
                    <h2 className="text-xl font-semibold mb-2">Edit Profile</h2>
                    <div className="flex mb-4">
                        <button className="bg-yellow-500 text-white py-2 px-4 rounded-l-full font-semibold">Profile</button>
                        <button className="border border-yellow-500 text-yellow-500 py-2 px-4 rounded-r-full font-semibold">Password</button>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <label className="block text-lg font-medium mb-1">Nama Lengkap</label>
                        <input type="text" name="fullName" value={editProfile.fullName} onChange={handleChange} className="w-full border-2 border-yellow-500 rounded-md p-3 mb-4 shadow-md focus:ring-0 focus:outline-none" />

                        <label className="block text-lg font-medium mb-1">Username</label>
                        <input type="text" name="username" value={editProfile.username} onChange={handleChange} className={`w-full border-2 rounded-md p-3 mb-2 shadow-md focus:ring-0 focus:outline-none ${hasTypedUsername && errorMessage ? 'border-red-500' : 'border-yellow-500'}`} />
                        {hasTypedUsername && errorMessage && <p className="text-red-500 text-sm mb-4">{errorMessage}</p>}

                        <label className="block text-lg font-medium mb-1">E-Mail</label>
                        <input type="email" name="email" value={editProfile.email} onChange={handleChange} className="w-full border-2 border-yellow-500 rounded-md p-3 mb-4 shadow-md focus:ring-0 focus:outline-none" />

                        <label className="block text-lg font-medium mb-1">No. Telepon</label>
                        <input type="text" name="phone" value={profile.phone} className="w-full border-2 border-yellow-500 rounded-md p-3 mb-4 shadow-md focus:ring-0 focus:outline-none" disabled />

                        <button type="submit" className="w-full bg-yellow-500 text-white py-3 rounded-md text-lg font-semibold mt-4 hover:bg-yellow-600 shadow-md disabled:bg-gray-400" disabled={!!errorMessage}>
                            Update Profile
                        </button>
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    );
}
