'use client';

import { useState } from 'react';

export default function EditPassword() {
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    return (
        <div className="w-1/2 mx-auto bg-white p-6 rounded-lg shadow-lg border-2 border-yellow-500 mt-10">
            <div className="flex items-center">
                <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                    AN
                </div>
                <div>
                    <h2 className="text-xl font-bold">Udgam Bintang</h2>
                    <p>@laut123</p>
                    <p>📱 0812312312312</p>
                </div>
            </div>
            
            <h3 className="mt-6 text-lg font-bold">Edit Password</h3>
            <div className="mt-4">
                <label className="block font-semibold">Password Lama</label>
                <input 
                    type="password" 
                    placeholder="Password Lama" 
                    className="w-full p-2 border-2 border-yellow-500 rounded-lg mt-1"
                    value={oldPassword}
                    onChange={(e) => setOldPassword(e.target.value)}
                />
            </div>
            <div className="mt-4">
                <label className="block font-semibold">Password Baru</label>
                <input 
                    type="password" 
                    placeholder="Password Baru" 
                    className="w-full p-2 border-2 border-yellow-500 rounded-lg mt-1"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                />
            </div>
            <div className="mt-4">
                <label className="block font-semibold">Konfirmasi Ulang Password Baru</label>
                <input 
                    type="password" 
                    placeholder="Konfirmasi Ulang" 
                    className="w-full p-2 border-2 border-yellow-500 rounded-lg mt-1"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                />
            </div>
            <button className="bg-yellow-500 text-white font-bold py-2 px-4 rounded-lg mt-4 hover:bg-yellow-600">
                Update Password
            </button>
        </div>
    );
}
