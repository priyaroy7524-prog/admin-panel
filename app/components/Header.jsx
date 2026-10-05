"use client";

import {
  Search,
  RefreshCw,
  Sun,
  Bell,
  Grid3X3,
  User,
  Menu,
} from "lucide-react";

export default function Header() {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 h-[72px] border-b border-gray-200 bg-white">
      <div className="flex h-full items-center">

      
        <div className="relative flex h-full w-[250px] items-center px-6">
  <img
  src="images/logo.jpg"
  alt="Magnus"
  className="h-[76px] w-auto object-contain"
/>

  <div className="absolute left-75 top-0 h-full w-px bg-gray-200" />
</div>

      
<div className="relative flex flex-1 items-center justify-center px-6">

  {/* Search - Center */}
  <div className="relative w-[340px]">
    <Search
      size={17}
      className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
    />

    <input
      type="text"
      placeholder="Search..."
      className="h-[38px] w-full rounded-full border border-gray-300 bg-white pl-10 pr-4 text-sm text-gray-700 outline-none transition focus:border-gray-400"
    />
  </div>

  {/* Right Icons */}
  <div className="absolute right-6 flex items-center gap-5">

    {/* Refresh */}
    <button
      className="text-gray-600 transition hover:text-gray-900"
      title="Refresh"
    >
      <RefreshCw size={18} strokeWidth={1.8} />
    </button>

    {/* Theme */}
    <button
      className="text-gray-600 transition hover:text-gray-900"
      title="Theme"
    >
      <Sun size={19} strokeWidth={1.8} />
    </button>

    {/* Notifications */}
    <button
      className="relative text-gray-600 transition hover:text-gray-900"
      title="Notifications"
    >
      <Bell size={19} strokeWidth={1.8} />

      <span className="absolute -right-1 -top-1 flex h-2 w-2 rounded-full bg-red-500" />
    </button>

    {/* Apps */}
    <button
      className="text-gray-600 transition hover:text-gray-900"
      title="Apps"
    >
      <Grid3X3 size={18} strokeWidth={1.8} />
    </button>

    {/* Profile */}
    <button
      className="flex items-center justify-center text-gray-600 transition hover:text-gray-900"
      title="Profile"
    >
      <User size={20} strokeWidth={1.8} />
    </button>

  </div>
</div>
        
      </div>
    </header>
  );
}