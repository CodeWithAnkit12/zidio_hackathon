import { XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function MobileSidebar({ open, onClose }: Props) {
  return (
    <>
      {/* BACKDROP */}
      <div
        onClick={onClose}
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm transition-opacity z-40 ${
          open ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      ></div>

      {/* SIDEBAR */}
      <div
        className={`
          fixed top-0 left-0 h-full w-72 
          bg-white dark:bg-gray-900 shadow-xl border-r dark:border-gray-700
          z-50 p-6 flex flex-col gap-6 transform transition-transform
          ${open ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        {/* HEADER */}
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-bold dark:text-white">Menu</h2>
          <button onClick={onClose}>
            <XMarkIcon className="h-7 w-7 text-gray-700 dark:text-gray-200" />
          </button>
        </div>

        {/* LINKS */}
        <nav className="flex flex-col gap-4 text-gray-700 dark:text-gray-200 text-lg">
          <Link to="/" onClick={onClose} className="hover:text-purple-500 transition">
            Home
          </Link>

          <Link to="/dashboard" onClick={onClose} className="hover:text-purple-500 transition">
            Dashboard
          </Link>

          <Link to="/leaderboard" onClick={onClose} className="hover:text-purple-500 transition">
            Leaderboard
          </Link>

          <Link to="/profile" onClick={onClose} className="hover:text-purple-500 transition">
            Profile
          </Link>

          <Link to="/submit" onClick={onClose} className="hover:text-purple-500 transition">
            Submit Project
          </Link>
        </nav>
      </div>
    </>
  );
}
