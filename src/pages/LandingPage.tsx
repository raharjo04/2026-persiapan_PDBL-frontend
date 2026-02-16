import { useNavigate } from "react-router-dom";

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-600 to-indigo-700">

      <div className="bg-white rounded-3xl shadow-2xl p-10 w-full max-w-md text-center">

        <h1 className="text-3xl font-extrabold text-slate-800 mb-2">
          Sistem Peminjaman Lab
        </h1>

        <p className="text-slate-500 mb-8">
          Silakan pilih menu yang ingin digunakan
        </p>

        <div className="space-y-4">

          {/* ADMIN */}
          <button
            onClick={() => navigate("/admin/peminjaman")}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-xl transition shadow-md"
          >
            Kelola Peminjaman (Admin)
          </button>

          {/* USER */}
          <button
            onClick={() => navigate("/peminjaman")}
            className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-3 rounded-xl transition shadow-md"
          >
            Ajukan Peminjaman (User)
          </button>

        </div>

      </div>

    </div>
  );
}
