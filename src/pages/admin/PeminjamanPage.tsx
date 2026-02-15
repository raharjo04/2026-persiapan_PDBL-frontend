import { useEffect, useState } from "react";
import { peminjamanApi } from "../../api/peminjamanApi";
import { ruanganService } from "../../api/ruanganApi";
import type { Peminjaman } from "../../types/peminjaman";
import type { Ruangan } from "../../types/ruangan";

import PeminjamanForm from "../../components/peminjaman/PeminjamanForm";
import PeminjamanTable from "../../components/peminjaman/PeminjamanTable";
import PeminjamanDetailModal from "../../components/peminjaman/PeminjamanDetailModal";

export default function PeminjamanPage() {
  const [activeTab, setActiveTab] = useState<"form" | "riwayat">("form");
  const [listPeminjaman, setListPeminjaman] = useState<Peminjaman[]>([]);
  const [listRuangan, setListRuangan] = useState<Ruangan[]>([]);
  const [loading, setLoading] = useState(true);

  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState<number | null>(null);
  const [selectedDetail, setSelectedDetail] = useState<any | null>(null);

  const [formData, setFormData] = useState({
    namaPeminjam: "",
    ruanganId: "",
    tanggalPinjam: "",
    keperluan: "",
    status: "Menunggu",
  });

  const fetchData = async () => {
    try {
      setLoading(true);
      const [resPinjam, resRuang] = await Promise.all([
        peminjamanApi.getAll(),
        ruanganService.getAll(),
      ]);
      setListPeminjaman(resPinjam);
      setListRuangan(resRuang);
    } catch (error) {
      console.error("Error sync data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const payload = { ...formData, ruanganId: Number(formData.ruanganId) };

      if (isEditing && editId) {
        await peminjamanApi.update(editId, payload as any);
        alert("Data berhasil diupdate!");
      } else {
        await peminjamanApi.create(payload as any);
        alert("Permohonan berhasil dikirim!");
      }

      resetForm();
      fetchData();
      setActiveTab("riwayat");
    } catch {
      alert("Gagal memproses data!");
    }
  };

  const handleDelete = async (id: number) => {
    if (window.confirm("Yakin ingin menghapus data ini?")) {
      await peminjamanApi.delete(id);
      fetchData();
    }
  };

  const startEdit = (p: any) => {
    setIsEditing(true);
    setEditId(p.id || p.Id);
    setFormData({
      namaPeminjam: p.namaPeminjam || p.NamaPeminjam,
      ruanganId: String(p.ruanganId || p.RuanganId),
      tanggalPinjam: (p.tanggalPinjam || p.TanggalPinjam)?.split("T")[0],
      keperluan: p.keperluan || p.Keperluan,
      status: p.status || p.Status,
    });
    setActiveTab("form");
  };

  const resetForm = () => {
    setFormData({
      namaPeminjam: "",
      ruanganId: "",
      tanggalPinjam: "",
      keperluan: "",
      status: "Menunggu",
    });
    setIsEditing(false);
    setEditId(null);
  };

  if (loading)
    return <div className="text-center p-10">Memuat data...</div>;

  return (
    <div className="min-h-screen bg-gray-100 p-6 font-sans">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow p-6">
        <h2 className="text-2xl font-bold text-center mb-6">
          Peminjaman Lab
        </h2>

        {/* Tabs */}
        <div className="flex gap-4 border-b mb-6">
          <button
            className={`pb-2 font-semibold ${
              activeTab === "form"
                ? "border-b-2 border-blue-500 text-blue-500"
                : "text-gray-500"
            }`}
            onClick={() => {
              setActiveTab("form");
              if (!isEditing) resetForm();
            }}
          >
            {isEditing ? "Edit Data" : "Form Pengajuan"}
          </button>

          <button
            className={`pb-2 font-semibold ${
              activeTab === "riwayat"
                ? "border-b-2 border-blue-500 text-blue-500"
                : "text-gray-500"
            }`}
            onClick={() => setActiveTab("riwayat")}
          >
            Daftar Pinjaman
          </button>
        </div>

        {activeTab === "form" ? (
          <PeminjamanForm
            formData={formData}
            listRuangan={listRuangan}
            isEditing={isEditing}
            onChange={setFormData}
            onSubmit={handleSubmit}
          />
        ) : (
          <PeminjamanTable
            data={listPeminjaman}
            onDetail={setSelectedDetail}
            onEdit={startEdit}
            onDelete={handleDelete}
          />
        )}
      </div>

      <PeminjamanDetailModal
        data={selectedDetail}
        onClose={() => setSelectedDetail(null)}
      />
    </div>
  );
}