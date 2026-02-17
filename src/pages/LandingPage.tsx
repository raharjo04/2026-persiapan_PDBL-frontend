import { useNavigate } from "react-router-dom";

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen relative flex items-center justify-center p-6 bg-gradient-to-b from-slate-50 to-slate-100 overflow-hidden ">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 -left-40 h-96 w-96 bg-blue-200 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-0 right-0 h-96 w-96 bg-emerald-200 rounded-full blur-3xl opacity-30"></div>
      </div>
      <div className="w-full max-w-5xl relative">
        <div className="flex justify-between items-center mb-12">
          <h1 className="text-xl font-bold text-slate-900 tracking-tight">
            Lab<span className="text-blue-600">Space</span>
          </h1>
          <span className="text-xs text-slate-400 font-medium">
            Sistem Peminjaman Ruang
          </span>
        </div>

        <div className="mb-12">
          <h2 className="text-4xl font-bold text-slate-900 leading-tight tracking-tight">
            Kelola dan ajukan peminjaman
            <br />
            ruang lab dengan mudah
          </h2>

          <p className="text-slate-500 mt-4 max-w-xl leading-relaxed">
            Pilih akses sesuai kebutuhan Anda untuk mengelola jadwal atau
            mengajukan peminjaman ruangan laboratorium.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <button
            onClick={() => navigate("/admin/peminjaman")}
            className="group relative bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-left">
            <div className="absolute top-0 left-0 h-full w-1 bg-blue-600 rounded-l-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="mb-6">
              <span className="text-xs font-semibold text-blue-600 tracking-wide">
                ADMIN
              </span>
            </div>
            <h3 className="text-2xl font-semibold text-slate-900">
              Dashboard Pengelola
            </h3>
            <p className="text-slate-500 mt-3 leading-relaxed">
              Kelola persetujuan peminjaman, jadwal penggunaan ruang, dan
              monitoring aktivitas laboratorium.
            </p>
            <div className="mt-8 flex items-center text-sm font-semibold text-blue-600">
              Masuk ke dashboard
              <span className="ml-2 group-hover:translate-x-1 transition-transform">
                →
              </span>
            </div>
          </button>

          <button
            onClick={() => navigate("/peminjaman")}
            className="group relative bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-left">
            <div className="absolute top-0 left-0 h-full w-1 bg-emerald-600 rounded-l-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="mb-6">
              <span className="text-xs font-semibold text-emerald-600 tracking-wide">
                USER
              </span>
            </div>
            <h3 className="text-2xl font-semibold text-slate-900">
              Ajukan Peminjaman
            </h3>
            <p className="text-slate-500 mt-3 leading-relaxed">
              Cari ruangan yang tersedia dan ajukan peminjaman untuk kegiatan
              praktikum atau akademik.
            </p>
            <div className="mt-8 flex items-center text-sm font-semibold text-emerald-600">
              Buat pengajuan
              <span className="ml-2 group-hover:translate-x-1 transition-transform">
                →
              </span>
            </div>
          </button>
        </div>

        <div className="mt-16 flex justify-between items-center text-xs text-slate-400">
          <span>© 2026 LabSpace</span>
          <div className="space-x-6">
            <span className="hover:text-slate-600 cursor-pointer transition-colors">
              Bantuan
            </span>
            <span className="hover:text-slate-600 cursor-pointer transition-colors">
              Kontak
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}