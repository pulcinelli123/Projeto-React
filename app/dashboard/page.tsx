"use client";

import { useRouter } from "next/navigation";

export default function DashboardPage() {
  const router = useRouter();

  function handleLogout() {
    router.push("/");
  }

  return (
    <div className="min-h-screen bg-[#f3f4f6] flex p-6">
      {/* Sidebar */}
      <aside className="w-60 bg-white rounded-2xl shadow-lg p-6 flex flex-col justify-between">
        <div>
          {/* Logo */}
          <h1 className="font-bold text-xl mb-8 text-black"> Logo</h1>

          {/* User */}
          <div className="flex flex-col items-center mb-10">
            <div className="w-16 h-16 bg-gradient-to-b from-blue-300 to-blue-600 rounded-full flex items-center justify-center text-white text-3xl shadow">
              👤
            </div>
            <p className="mt-3 font-medium text-black">Your Name</p>
          </div>

          {/* Menu */}
          <nav className="space-y-5">
            <a className="flex items-center gap-3 text-black hover:text-blue-600 cursor-pointer">
              <span className="text-blue-500 text-xl"></span> Home
            </a>
            <a className="flex items-center gap-3 text-black hover:text-blue-600 cursor-pointer">
              <span className="text-blue-400 text-xl"></span> Messages
            </a>
            <a className="flex items-center gap-3 text-black hover:text-blue-600 cursor-pointer">
              <span className="text-blue-500 text-xl"></span> Settings
            </a>
            
          </nav>
        </div>

        {/* Logout */}
        <button
          onClick={handleLogout}
          className="flex items-center gap-3 text-black hover:text-red-600 mt-10"
        >
          <span className="text-red-500 text-xl"></span> Logout
        </button>
      </aside>

      {/* Main Content */}
      <main className="flex-1 ml-6">
        {/* Top Search */}
        <div className="flex items-center gap-4 bg-white shadow rounded-2xl p-4 mb-6">
          <input
            type="text"
            placeholder="What are you looking for?"
            className="flex-1 p-3 rounded-xl border border-gray-300 outline-none text-black placeholder-gray-500"
          />
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-xl shadow">
            Search
          </button>

          <div className="flex gap-4 text-2xl ml-4">
            <span className="text-blue-400"></span>
            <span className="text-blue-500"></span>
          </div>
        </div>

        {/* Chart */}
        <div className="bg-white shadow rounded-2xl p-6 mb-6">
          <h2 className="font-semibold text-black mb-4">Statistics</h2>

          <div className="h-48 flex items-end gap-4 relative border-b border-gray-300 pb-4">
            {[200, 120, 300, 250, 400, 350, 280, 320, 410, 380, 290, 330].map(
              (value, i) => (
                <div key={i} className="flex flex-col items-center">
                  <div
                    className="w-3 bg-blue-400 rounded-t-md"
                    style={{ height: `${value / 5}%` }}
                  ></div>
                </div>
              )
            )}

            <div className="absolute -bottom-2 left-0 flex w-full justify-between text-xs text-black">
              {["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"].map(
                (m) => (
                  <span key={m}>{m}</span>
                )
              )}
            </div>
          </div>
        </div>

        {/* Bottom Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Left Card 65% */}
          <div className="bg-white rounded-2xl shadow p-6 col-span-1">
            <h3 className="text-black font-semibold mb-4">Statistics</h3>

            <div className="flex justify-center mb-3">
              <div className="relative w-28 h-28">
                <svg className="w-full h-full transform -rotate-90">
                  <circle cx="50%" cy="50%" r="45%" stroke="#E5E7EB" strokeWidth="10" fill="none" />
                  <circle
                    cx="50%"
                    cy="50%"
                    r="45%"
                    stroke="#4ade80"
                    strokeWidth="10"
                    fill="none"
                    strokeDasharray="283"
                    strokeDashoffset="100"
                    strokeLinecap="round"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center text-xl font-bold text-black">
                  65%
                </div>
              </div>
            </div>

            <p className="text-xs text-black px-1">
              Statistics
            </p>
          </div>

          {/* Middle Card 25% */}
          <div className="bg-white rounded-2xl shadow p-6 col-span-1">
            <h3 className="text-black font-semibold mb-4">Statistics</h3>

            <div className="flex justify-center mb-3">
              <div className="relative w-28 h-28">
                <svg className="w-full h-full transform -rotate-90">
                  <circle cx="50%" cy="50%" r="45%" stroke="#E5E7EB" strokeWidth="10" fill="none" />
                  <circle
                    cx="50%"
                    cy="50%"
                    r="45%"
                    stroke="#fbbf24"
                    strokeWidth="10"
                    fill="none"
                    strokeDasharray="283"
                    strokeDashoffset="210"
                    strokeLinecap="round"
                  />
                </svg>

                <div className="absolute inset-0 flex items-center justify-center text-xl font-bold text-black">
                  25%
                </div>
              </div>
            </div>

            <p className="text-xs text-black px-1">
              Statistics
            </p>
          </div>

          {/* Circle Center Card */}
          <div className="bg-white rounded-2xl shadow p-6 col-span-1 flex flex-col items-center">
            <div className="relative w-32 h-32 mb-4">
              <svg className="w-full h-full transform -rotate-90">
                <circle cx="50%" cy="50%" r="45%" stroke="#E5E7EB" strokeWidth="10" fill="none" />
                <circle
                  cx="50%"
                  cy="50%"
                  r="45%"
                  stroke="#3b82f6"
                  strokeWidth="10"
                  fill="none"
                  strokeDasharray="283"
                  strokeDashoffset="170"
                  strokeLinecap="round"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center text-2xl font-bold text-black">
                250
              </div>
            </div>
            <p className="font-medium text-black">Statistics</p>
          </div>

          {/* Reports */}
          <div className="bg-white rounded-2xl shadow p-6 col-span-1 flex flex-col justify-between">
            <h3 className="font-semibold text-black">Statistics</h3>
            <p className="text-4xl text-center font-bold text-black my-4">500</p>
            <button className="bg-blue-500 text-white rounded-xl py-2 shadow hover:bg-blue-600">
              Statistics
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
