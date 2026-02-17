import { useState } from "react";
import { NavLink , useNavigate} from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();


  return (
    <nav className="bg-white border-b border-slate-200 sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* LOGO */}
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold">
                L
              </div>
              <h1 className="text-xl font-bold text-slate-900 tracking-tight">
                Lab<span className="text-blue-600">Space</span>
              </h1>
            </div>
          </div>

          {/* ================= DESKTOP MENU ================= */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Peminjaman */}
            <NavLink
              to="/admin/peminjaman"
              className={({ isActive }) =>
                `px-3 py-2 text-sm font-medium transition ${
                  isActive
                    ? "text-blue-600 border-b-2 border-blue-600"
                    : "text-slate-500 hover:text-slate-700"
                }`
              }
            >
              Peminjaman
            </NavLink>

            {/* List Peminjam */}
            <NavLink
              to="/admin/daftar-peminjam"
              className={({ isActive }) =>
                `px-3 py-2 text-sm font-medium transition ${
                  isActive
                    ? "text-blue-600 border-b-2 border-blue-600"
                    : "text-slate-500 hover:text-slate-700"
                }`
              }
            >
              List Peminjam
            </NavLink>

            <div className="h-6 w-px bg-slate-200 mx-2"></div>

            {/* User Button */}
            <button
              onClick={() => navigate("/")}
              className="bg-slate-100 p-2 rounded-full hover:bg-red-100 hover:text-red-600 transition"
              title="Logout">
              👤
            </button>
          </div>

          {/* ================= MOBILE BUTTON ================= */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-500 hover:text-slate-600 outline-none p-2"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* ================= MOBILE MENU ================= */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 animate-in slide-in-from-top duration-300">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <NavLink
              to="/admin/peminjaman"
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium bg-blue-50 text-blue-600"
            >
              Peminjaman
            </NavLink>

            <NavLink
              to="/admin/daftar-peminjam"
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-slate-600 hover:bg-slate-50"
            >
              List Peminjam
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  );
}
