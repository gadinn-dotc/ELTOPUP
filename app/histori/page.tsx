"use client";
import React, { useState } from "react";
import Image from "next/image";
import Logo from "../Assets/logo el top ap kuning.png";
// Pastikan gambar berada di folder "public/Assets" jika diimpor seperti ini
import RiwayatFoto from "@/app/Assets/riwayat.png";
import NoTimeFoto from "/Assets/no n time.png";
import TotalFoto from "/Assets/total.png";
import NominalFoto from "/Assets/nominal.png";

const OrderHistory = ({ hasOrders }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredOrders, setFilteredOrders] = useState([]);

  // Data order simulasi
  const orders = [
    { id: "NO123456", date: "01/01/2024", status: "Success", paymentMethod: "GoPay", total: "Rp. 28.862,4", package: "Weekly Diamond Pass" },
    { id: "NO987654", date: "02/01/2024", status: "Pending", paymentMethod: "Dana", total: "Rp. 10.000,0", package: "Monthly Pass" },
    { id: "NO111222", date: "03/01/2024", status: "Success", paymentMethod: "GoPay", total: "Rp. 50.000,0", package: "Weekly Diamond Pass" },
  ];

  const handleSearchClick = () => {
    const query = searchQuery.toLowerCase().trim();

    if (query === "") {
      setFilteredOrders(orders); // Jika input kosong, tampilkan semua data
    } else {
      const filtered = orders.filter((order) =>
        order.id.toLowerCase().includes(query) ||
        order.package.toLowerCase().includes(query)
      );
      setFilteredOrders(filtered); // Tampilkan hanya hasil yang cocok
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header Section */}
      <header className="bg-blue-500 text-white py-6 shadow-md">
        <div className="container mx-auto flex justify-between items-center px-6">
          {/* Logo */}
          <div className="flex items-center">
            <Image src={Logo} alt="Company Logo" width={150} height={150} />
          </div>

          {/* Navbar */}
          <nav className="space-x-6">
            <a href="/daftargame" className="hover:bg-blue-600 hover:text-white text-xl px-4 py-2 rounded-full">Home</a>
            <a href="/leaderboard" className="hover:bg-blue-600 hover:text-white text-xl px-4 py-2 rounded-full">Leaderboard</a>
            <a href="#" className="hover:text-gray-200 bg-blue-800 px-4 py-2 rounded-full text-xl">Histori</a>
            <a href="akun" className="hover:bg-blue-600 hover:text-white text-xl px-4 py-2 rounded-full">Profile</a>
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
                placeholder="Cari berdasarkan ID atau Paket..."
                className="border border-gray-300 rounded-lg p-3 text-base w-full shadow-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <button
              className="ml-4 bg-yellow-500 text-white rounded-lg px-10 py-3 text-base shadow-md hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              onClick={handleSearchClick}
            >
              Search
            </button>
          </div>

          {/* Menampilkan Hasil Pencarian */}
          <div className="mt-4">
            {filteredOrders.length > 0 ? (
              filteredOrders.map((order, index) => (
                <div key={index} className="border border-gray-300 rounded-lg shadow-md p-4 flex justify-between items-center bg-white mb-4">
                  {/* ID dan Tanggal */}
                  <div className="flex items-center space-x-4">
                    <div>
                      <p className="font-bold text-gray-800">{order.id}</p>
                      <p className="text-gray-500 text-sm">{order.date}</p>
                    </div>
                  </div>

                  {/* Detail Paket */}
                  <div className="flex items-center border-l border-gray-300 pl-4 space-x-4">
                    <div>
                      <p className="font-bold text-gray-800">{order.package}</p>
                      <p className="text-gray-500 text-sm">{order.total}</p>
                    </div>
                  </div>

                  {/* Total dan Metode Pembayaran */}
                  <div className="flex items-center border-l border-gray-300 pl-4 space-x-4">
                    <div>
                      <p className="font-bold text-gray-800">Total: {order.total}</p>
                      <p className="text-gray-500 text-sm">via: {order.paymentMethod}</p>
                    </div>
                  </div>

                  {/* Status */}
                  <div className="flex items-center space-x-4">
                    <span className={`px-4 py-2 rounded-full text-white ${order.status === "Success" ? "bg-green-500" : "bg-yellow-500"}`}>
                      {order.status}
                    </span>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center text-gray-500 py-20">
                {/* Jika tidak ada hasil pencarian */}
                <Image src={RiwayatFoto} alt="Riwayat Kosong" width={100} height={100} className="mx-auto mb-4" />
                <p className="mt-2 font-bold text-black text-2xl">
                  {searchQuery ? `Tidak ada hasil yang cocok dengan "${searchQuery}"` : "Kamu belum punya histori pembayaran..."}
                </p>
                <a href="/daftargame" className="text-blue-600 underline mt-4 inline-block">
                  Top Up sekarang!
                </a>
              </div>
            )}
          </div>
        </section>
      </main>
    </div>
  );
};

export default OrderHistory;
