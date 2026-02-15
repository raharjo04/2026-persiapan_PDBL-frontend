import { useEffect, useState } from "react";
import { ruanganService } from "../../api/ruanganApi";
import { peminjamanApi } from "../../api/peminjamanApi";

export function useUserPeminjaman() {

  const [listRuangan, setListRuangan] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    namaPeminjam: "",
    ruanganId: "",
    tanggalPinjam: "",
    keperluan: "",
    status: "Menunggu",
  });

  // LOAD DATA RUANGAN
  useEffect(() => {
    const fetchRuangan = async () => {
      try {
        const data = await ruanganService.getAll();
        setListRuangan(data);
      } catch (error) {
        console.error("Gagal mengambil data ruangan:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRuangan();
  }, []);

  // SUBMIT PEMINJAMAN
  const submitPeminjaman = async () => {
    try {
      setSubmitting(true);

      const payload = {
        ...formData,
        ruanganId: Number(formData.ruanganId),
      };

      await peminjamanApi.create(payload as any);

      alert("Permohonan berhasil dikirim!");

      resetForm();

    } catch {
      alert("Gagal mengirim permohonan!");
    } finally {
      setSubmitting(false);
    }
  };

  // RESET FORM
  const resetForm = () => {
    setFormData({
      namaPeminjam: "",
      ruanganId: "",
      tanggalPinjam: "",
      keperluan: "",
      status: "Menunggu",
    });
  };

  return {
    listRuangan,
    loading,
    submitting,
    formData,
    setFormData,
    submitPeminjaman,
    resetForm,
  };
}
