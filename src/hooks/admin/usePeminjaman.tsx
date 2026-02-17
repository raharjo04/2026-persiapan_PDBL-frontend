import { useState, useEffect } from "react";
import { peminjamanApi } from "../../api/peminjamanApi";
import { ruanganService } from "../../api/ruanganApi";
import type { Peminjaman } from "../../types/peminjaman";
import type { Ruangan } from "../../types/ruangan";

export const usePeminjaman = () => {
  const [listPeminjaman, setListPeminjaman] = useState<Peminjaman[]>([]);
  const [listRuangan, setListRuangan] = useState<Ruangan[]>([]);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState<number | null>(null);

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
      console.error("Fetch Error:", error);
    } finally {
      setLoading(false);
    }
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
  };

  useEffect(() => {
    fetchData();
  }, []);

  return {
    listPeminjaman,
    listRuangan,
    loading,
    submitting,
    setSubmitting,
    formData,
    setFormData,
    isEditing,
    editId,
    fetchData,
    resetForm,
    startEdit,
  };
};
