import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { usePeminjaman } from "../../hooks/admin/usePeminjaman";
import { peminjamanApi } from "../../api/peminjamanApi";

import Navbar from "../../components/layout/admin/Navbar";
import PeminjamanTable from "../../components/peminjaman/PeminjamanTable";
import PeminjamanDetailModal from "../../components/peminjaman/PeminjamanDetailModal";
import PeminjamanFilterBar from "../../components/peminjaman/PeminjamanFilterBar";

export default function DaftarPeminjamPage() {
  const [selectedDetail, setSelectedDetail] = useState<any | null>(null);

  // 🔎 FILTER STATE
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("ALL");
  const [sortBy, setSortBy] = useState("terbaru");

  const navigate = useNavigate();

  const { listPeminjaman, loading, fetchData } = usePeminjaman();

  const handleDelete = async (id: number) => {
    if (!window.confirm("Yakin ingin menghapus data ini?")) return;
    try {
      await peminjamanApi.delete(id);
      fetchData();
    } catch {
      alert("Gagal menghapus data!");
    }
  };

  const updateStatus = async (id: number, status: string) => {
    try {
      await peminjamanApi.updateStatus(id, status);
      fetchData();
    } catch (err: any) {
      const message = err.response?.data || "";
      if (message.toLowerCase().includes("ruangan sudah dipinjam")) {
        alert("Ruangan sudah dipinjam pada tanggal yang sama.");
      }
      else {
        alert("Gagal memperbarui status!");
      }
    }
  };

  const handleEdit = (p: any) => {
    navigate(`/admin/peminjaman/edit/${p.id || p.Id}`);
  };

  // 🔥 FILTER + SEARCH + SORT
  const processedData = listPeminjaman
    .filter((item: any) => {
      const text = search.toLowerCase();

      const matchSearch =
        item.namaPeminjam?.toLowerCase().includes(text) ||
        item.ruangan?.toLowerCase().includes(text) ||
        item.keperluan?.toLowerCase().includes(text);

      const matchStatus =
        statusFilter === "ALL" || item.status === statusFilter;

      return matchSearch && matchStatus;
    })
    .sort((a: any, b: any) => {
      switch (sortBy) {
        case "terbaru":
          return (
            new Date(b.tanggalPinjam).getTime() -
            new Date(a.tanggalPinjam).getTime()
          );

        case "terlama":
          return (
            new Date(a.tanggalPinjam).getTime() -
            new Date(b.tanggalPinjam).getTime()
          );

        case "nama":
          return a.namaPeminjam.localeCompare(b.namaPeminjam);

        default:
          return 0;
      }
    });

  if (loading)
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-slate-50">
        <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-blue-600 mb-2"></div>
        <p className="text-slate-500 text-sm italic">Sinkronisasi data...</p>
      </div>
    );

  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      <Navbar />

      <main className="max-w-7xl mx-auto py-10 px-4 sm:px-6">
        {/* HEADER */}
        <div className="mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-extrabold text-slate-800 tracking-tight">
              Daftar Peminjam
            </h1>
            <p className="text-slate-500">
              Monitoring status penggunaan laboratorium.
            </p>
          </div>

          <div className="bg-white border border-slate-200 px-5 py-3 rounded-2xl shadow-sm text-center">
            <span className="text-xs text-slate-400 block font-bold">
              TOTAL DATA
            </span>
            <span className="text-2xl font-black text-blue-600">
              {processedData.length}
            </span>
          </div>
        </div>

        {/* 🔥 FILTER BAR */}
        <PeminjamanFilterBar
          search={search}
          statusFilter={statusFilter}
          sortBy={sortBy}
          totalData={processedData.length}
          onSearchChange={setSearch}
          onStatusChange={setStatusFilter}
          onSortChange={setSortBy}
        />

        {/* TABLE */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="overflow-x-auto">
            <PeminjamanTable
              data={processedData}
              onDetail={setSelectedDetail}
              onEdit={handleEdit}
              onDelete={handleDelete}
              onApprove={(id) => updateStatus(id, "Disetujui")}
              onReject={(id) => updateStatus(id, "Ditolak")}
            />
          </div>
        </div>
      </main>

      {/* DETAIL MODAL */}
      <PeminjamanDetailModal
        data={selectedDetail}
        onClose={() => setSelectedDetail(null)}
      />
    </div>
  );
}
