'use client';

import { useState } from 'react';
import Image from 'next/image';
import Logo from '@/app/Assets/logo el top ap kuning.png';
import { IoPhonePortraitSharp } from 'react-icons/io5';

function Navbar() {
  return (
    <header className="bg-blue-500 text-white py-6 shadow-md fixed top-0 left-0 w-full z-10">
      <div className="container mx-auto flex justify-between items-center px-6">
        <div className="flex items-center">
          <Image src={Logo} alt="Company Logo" width={120} height={120} />
        </div>
        <nav className="space-x-4 text-lg">
          <a href="/daftargame" className="hover:bg-blue-600 hover:text-white text-xl px-4 py-2 rounded-full">Home</a>
          <a href="/leaderboard" className="hover:bg-blue-600 hover:text-white text-xl px-4 py-2 rounded-full">Leaderboard</a>
          <a href="/histori" className="hover:bg-blue-600 hover:text-white text-xl px-4 py-2 rounded-full">Histori</a>
          <a href="#" className="hover:text-gray-200 bg-blue-800 px-4 py-2 rounded-full">Profile</a>
        </nav>
      </div>
    </header>
  );
  
}

export default function ProfileEdit() {
  const [activeTab, setActiveTab] = useState('profile');

  const [profile, setProfile] = useState({
    fullName: 'Udgam Angkasa',
    username: '@angakasa123',
    email: 'elangkasa@gmail.com',
    phone: '0812312312312',
  });

  const [editProfile, setEditProfile] = useState({ ...profile });
  const [passwordData, setPasswordData] = useState({
    oldPassword: '',
    newPassword: '',
    confirmNewPassword: '',
  });

  const handlePasswordChange = (e) => {
    const { name, value } = e.target;
    setPasswordData({ ...passwordData, [name]: value });
  };

  const handleProfileSubmit = (e) => {
    e.preventDefault();
    setProfile(editProfile);
    alert('Profil berhasil diupdate!');
  };

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    if (passwordData.newPassword !== passwordData.confirmNewPassword) {
      alert('Konfirmasi password baru tidak sesuai!');
      return;
    }
    alert('Password berhasil diupdate!');
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-white py-20 px-4">
      <Navbar />
      <div className="bg-white shadow-lg p-6 w-full max-w-3xl mx-auto border-2 rounded-[20px] overflow-hidden mt-6"
           style={{ borderImage: 'linear-gradient(to right, #FBBF24, #3B82F6) 1', borderImageSlice: 1 }}>
        <div className="flex items-center mb-4 border-b pb-3 border-gray-300">
          <div className="w-14 h-14 bg-yellow-500 text-white flex items-center justify-center text-xl font-bold rounded-full">
            {profile.fullName.split(' ').map((word) => word[0]).join('')}
          </div>
          <div className="ml-3">
            <h2 className="text-lg font-semibold">{profile.fullName}</h2>
            <p className="text-gray-500 text-sm">{profile.username}</p>
            <p className="text-gray-500 flex items-center text-sm mt-1">
              <IoPhonePortraitSharp className="mr-2 text-black" />
              {profile.phone}
            </p>
          </div>
        </div>

        <h2 className="text-md font-bold text-black mb-3 text-left">Edit Profile</h2>
        <div className="flex mb-3 space-x-3">
          <button
            className={`py-2 px-5 font-semibold ${activeTab === 'profile' ? 'bg-yellow-500 text-white' : 'border border-yellow-500 text-yellow-500'} rounded-full`}
            onClick={() => setActiveTab('profile')}>Profile
          </button>
          <button
            className={`py-2 px-5 font-semibold ${activeTab === 'password' ? 'bg-yellow-500 text-white' : 'border border-yellow-500 text-yellow-500'} rounded-full`}
            onClick={() => setActiveTab('password')}>Password
          </button>
        </div>

        {activeTab === 'profile' && (
          <form onSubmit={handleProfileSubmit} className="space-y-3">
            <label className="block text-sm font-medium">Nama Lengkap</label>
            <input type="text" name="fullName" value={editProfile.fullName} onChange={(e) => setEditProfile({ ...editProfile, fullName: e.target.value })} className="w-full border border-yellow-500 rounded-full p-2 shadow-md" />
            <label className="block text-sm font-medium">Username</label>
            <input type="text" name="username" value={editProfile.username} onChange={(e) => setEditProfile({ ...editProfile, username: e.target.value })} className="w-full border border-yellow-500 rounded-full p-2 shadow-md" />
            
            <label className="block text-sm font-medium">E-Mail</label>
            <input type="email" name="email" value={editProfile.email} onChange={(e) => setEditProfile({ ...editProfile, email: e.target.value })} className="w-full border border-yellow-500 rounded-full p-2 shadow-md" />
            
            <label className="block text-sm font-medium">No. Telepon</label>
            <input type="text" name="phone" value={profile.phone} className="w-full border border-yellow-500 rounded-full p-2 shadow-md" disabled />
            
            <button type="submit" className="w-full bg-yellow-500 text-white py-2 rounded-full text-sm font-semibold shadow-md">Update Profile</button>
          </form>
        )}

        {activeTab === 'password' && (
          <form onSubmit={handlePasswordSubmit} className="space-y-3">
            <label className="block text-sm font-medium">Password Lama</label>
            <input type="password" name="oldPassword" value={passwordData.oldPassword} onChange={handlePasswordChange} className="w-full border border-yellow-500 rounded-full p-2 shadow-md" />
            
            <label className="block text-sm font-medium">Password Baru</label>
            <input type="password" name="newPassword" value={passwordData.newPassword} onChange={handlePasswordChange} className="w-full border border-yellow-500 rounded-full p-2 shadow-md" />
            
            <label className="block text-sm font-medium">Konfirmasi Ulang Password Baru</label>
            <input type="password" name="confirmNewPassword" value={passwordData.confirmNewPassword} onChange={handlePasswordChange} className="w-full border border-yellow-500 rounded-full p-2 shadow-md" />
            
            <button type="submit" className="w-full bg-yellow-500 text-white py-2 rounded-full text-sm font-semibold shadow-md">Update Password</button>
          </form>
        )}
      </div>
    </div>
  );
}