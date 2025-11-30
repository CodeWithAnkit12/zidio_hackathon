import { Link } from "react-router-dom";
import { Bars3Icon } from "@heroicons/react/24/outline";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import MobileSidebar from "./MobileSidebar";
import { useState } from "react";
export default function Navbar() {
  const { darkMode, toggleTheme } = useContext(ThemeContext);
const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
<header className="bg-gray-500/80 dark:bg-black/150 backdrop-blur-xl sticky top-0 z-50 shadow-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">

        {/* LOGO */}
        <Link to="/" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#6b46ff] to-[#06b6d4] flex items-center justify-center text-white font-bold">
            Z
          </div>
          <div>
            <h1 className="font-semibold dark:text-white">Zidio</h1>
            <p className="text-xs text-gray-500 dark:text-gray-300 -mt-1">Hackathon Hub</p>
          </div>
        </Link>
<Link to="/submit" className="hover:text-gray-900 dark:hover:text-white">
  Submit Project
</Link>

        {/* LEFT SIDE LINKS (Profile + Leaderboard) */}
        <div className="hidden md:flex gap-6 items-center text-gray-700 dark:text-gray-200">
          <Link to="/profile" className="hover:text-gray-900 dark:hover:text-white">Profile</Link>
          <Link to="/leaderboard" className="hover:text-gray-900 dark:hover:text-white">Leaderboard</Link>
        </div>

        {/* NAV ITEMS */}
        <nav className="hidden md:flex gap-6 items-center text-gray-700 dark:text-gray-200">
          <Link to="/" className="hover:text-gray-900 dark:hover:text-white">Home</Link>
          <Link to="/dashboard" className="hover:text-gray-900 dark:hover:text-white">Dashboard</Link>
          <a href="#how" className="hover:text-gray-900 dark:hover:text-white">How it works</a>

          {/* CTA BUTTON */}
          <button className="ml-2 px-4 py-2 rounded-lg bg-gradient-to-r from-[#6b46ff] to-[#06b6d4] text-white">
            Start a Hackathon
          </button>

          {/* 🌙 Theme Button (Dark/Light) */}
          <button
            onClick={toggleTheme}
            className="
              px-3 py-2 rounded-lg border 
              border-gray-300 dark:border-gray-600
              hover:bg-gray-100 dark:hover:bg-gray-700
              transition
              text-gray-800 dark:text-gray-200
            "
          >
            {darkMode ? "🌙 Dark" : "☀️ Light"}
          </button>
          <Link to="/login" className="hover:text-white/100">Login</Link>
<Link to="/signup" className="hover:text-white/100">Signup</Link>

        </nav>

        {/* MOBILE MENU ICON */}
        <div className="md:hidden flex items-center gap-2">

  <button
    onClick={toggleTheme}
    className="p-2 rounded-md border border-gray-300 dark:border-gray-600 dark:text-gray-200"
  >
    {darkMode ? "🌙" : "☀️"}
  </button>

  <button onClick={() => setSidebarOpen(true)} className="p-2 rounded-md">
    <Bars3Icon className="w-6 h-6 dark:text-gray-200" />
  </button>
</div>

      </div>
      <MobileSidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />

    </header>
  );
}
