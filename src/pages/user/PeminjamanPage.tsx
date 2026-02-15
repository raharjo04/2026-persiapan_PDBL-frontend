import { useEffect, useState } from "react";
import { peminjamanApi } from "../../api/peminjamanApi";
import { ruanganService } from "../../api/ruanganApi";
import type { Ruangan } from "../../types/ruangan";

import PeminjamanForm from "../../components/peminjaman/PeminjamanForm";

export default function PeminjamanPage() {
  const [listRuangan, setListRuangan] = useState<Ruangan[]>([]);
  const [loading, setLoading] = useState(true);

  const [formData, setFormData] = useState({
    namaPeminjam: "",
    ruanganId: "",
    tanggalPinjam: "",
    keperluan: "",
  });

  useEffect(() => {
    const fetchRuangan = async () => {
      const data = await ruanganService.getAll();
      setListRuangan(data);
      setLoading(false);
    };

    fetchRuangan();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const payload = {
        ...formData,
        ruanganId: Number(formData.ruanganId),
        status: "Menunggu",
      };

      await peminjamanApi.create(payload as any);

      alert("Permohonan berhasil dikirim!");

      setFormData({
        namaPeminjam: "",
        ruanganId: "",
        tanggalPinjam: "",
        keperluan: "",
      });
    } catch {
      alert("Gagal mengirim permohonan!");
    }
  };

  if (loading) {
    return <div className="text-center mt-20">Memuat data ruangan...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="w-full max-w-xl bg-white rounded-xl shadow p-6">

        <h2 className="text-2xl font-bold text-center mb-6">
          Form Peminjaman Lab
        </h2>

        <PeminjamanForm
          formData={formData}
          listRuangan={listRuangan}
          isEditing={false}
          onChange={setFormData}
          onSubmit={handleSubmit}
        />

      </div>
    </div>
  );
}