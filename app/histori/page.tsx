"use client"
import React, { useState } from "react";
import Image from "next/image";
import Logo from "../Assets/logo el top ap kuning.png";
import Foto from "@/app/Assets/riwayat.png";

const OrderHistory = ({ hasOrders }) => {
  const [showNotification, setShowNotification] = useState(false);
  const [searchQuery, setSearchQuery] = useState(""); // Untuk menyimpan input pencarian
  const [filteredOrders, setFilteredOrders] = useState([]);

  // Data order simulasi
  const orders = [
    { id: "NO123456", date: "01/01/2024", status: "Success", paymentMethod: "GoPay", total: "Rp. 28.862,4", package: "Weekly Diamond Pass" },
    { id: "NO987654", date: "02/01/2024", status: "Pending", paymentMethod: "Dana", total: "Rp. 10.000,0", package: "Monthly Pass" },
    { id: "NO111222", date: "03/01/2024", status: "Success", paymentMethod: "GoPay", total: "Rp. 50.000,0", package: "Weekly Diamond Pass" },
  ];

  const handleSearchClick = () => {
    if (searchQuery === "") {
      setFilteredOrders(orders); // Jika pencarian kosong, tampilkan semua data
    } else {
      // Menyaring data berdasarkan input pencarian
      const filtered = orders.filter((order) => 
        order.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
        order.package.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredOrders(filtered); // Update hasil pencarian
    }

    setShowNotification(true);

    // Menyembunyikan notifikasi setelah 3 detik
    setTimeout(() => {
      setShowNotification(false);
    }, 3000); // Notifikasi hilang setelah 3 detik
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header Section */}
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
            <a href="#" className="hover:text-gray-200 bg-blue-800 px-4 py-2 rounded-full text-xl">Histori</a>
            <a href="#" className="hover:text-gray-200 text-xl">Profile</a>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="p-6">
        <section className="bg-white shadow-md rounded-lg p-4 mx-auto max-w-5xl">

          <h2 className="text-3xl font-bold mb-4 px-4 pt-4">Order History</h2>

          {/* Search Bar */}
          <div className="flex justify-center items-center mb-6 px-4 py-4 rounded-lg bg-slate-200">
            <div className="w-full">
              <input
                type="text"
                placeholder="Search..."
                className="border border-gray-300 rounded-lg p-3 text-base w-full shadow-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)} // Update state saat input berubah
              />
            </div>
            <button
              className="ml-4 bg-yellow-500 text-white rounded-lg px-10 py-3 text-base shadow-md hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              onClick={handleSearchClick}
            >
              Search
            </button>
          </div>

          {/* Notifikasi */}
          {showNotification && (
            <div className="absolute top-10 left-1/2 transform -translate-x-1/2 bg-white shadow-md p-4 rounded-md max-w-sm">
              <div className="flex justify-between items-center">
                <span className="font-bold">notifikasi:</span>
                <button
                  onClick={() => setShowNotification(false)}
                  className="text-gray-500"
                >
                  ×
                </button>
              </div>
              <p className="mt-2">Yay Top up berhasil! Silahkan cek akun kamu ⚡⚡</p>
            </div>
          )}

          {/* Menampilkan Hasil Pencarian */}
          {filteredOrders.length > 0 ? (
            filteredOrders.map((order, index) => (
              <div key={index} className="border rounded p-4 mb-4 flex justify-between items-center">
                <div>
                  <p className="font-bold">{order.id}</p>
                  <p className="text-gray-600">{order.date}</p>
                  <p className="mt-2">{order.package}</p>
                  <p className="mt-1">Rp. {order.total}</p>
                </div>
                <div className="flex items-center space-x-4">
                  <span className={`p-2 rounded ${order.status === "Success" ? "bg-green-500 text-white" : "bg-yellow-500 text-white"}`}>
                    {order.status}
                  </span>
                  <span className="bg-gray-200 text-gray-700 p-1 rounded">{order.paymentMethod}</span>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center text-gray-500 py-40">
              <Image src={Foto} alt="Riwayat Kosong" width={100} height={100} className="mx-auto mb-4" />
              <p className="mt-2 font-bold text-black text-2xl">Kamu belum punya histori pembayaran...</p>
              <a href="#" className="text-blue-600 underline mt-4 inline-block">
                Top Up sekarang!
              </a>
            </div>
          )}
        </section>
      </main>
    </div>
  );
};

export default OrderHistory;
