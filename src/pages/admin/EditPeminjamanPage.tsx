import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { usePeminjaman } from "../../hooks/admin/usePeminjaman";
import { peminjamanApi } from "../../api/peminjamanApi";

import Navbar from "../../components/layout/admin/Navbar";
import PeminjamanForm from "../../components/peminjaman/PeminjamanForm";

export default function EditPeminjamanPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const {
    listRuangan,
    loading,
    submitting,
    setSubmitting,
    formData,
    setFormData,
    resetForm,
    startEdit,
  } = usePeminjaman();

  // LOAD DATA BY ID
  useEffect(() => {
    const loadData = async () => {
      try {
        if (!id) return;

        const data = await peminjamanApi.getById(Number(id));
        startEdit(data);
      } catch {
        alert("Gagal memuat data");
        navigate("/admin/daftar-peminjam");
      }
    };

    loadData();
  }, [id]);

  // SUBMIT EDIT
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      if (!id) return;

      setSubmitting(true);

      const payload = {
        ...formData,
        ruanganId: Number(formData.ruanganId),
      };

      await peminjamanApi.update(Number(id), payload as any);

      if (formData.status) {
        await peminjamanApi.updateStatus(Number(id), formData.status);
      }

      alert("Data berhasil diubah!");

      resetForm();
      navigate("/admin/daftar-peminjam");
    } catch {
      alert("Gagal mengupdate data");
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) return <div className="p-10 text-center">Loading...</div>;

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />

      <main className="max-w-3xl mx-auto py-12 px-4">
        <h1 className="text-3xl font-bold text-center mb-8">Edit Peminjaman</h1>

        <div className="bg-white rounded-3xl shadow border p-8">
          <PeminjamanForm
            formData={formData}
            listRuangan={listRuangan}
            isEditing={true}
            onChange={setFormData}
            onSubmit={handleSubmit}
            submitting={submitting}
          />
        </div>
      </main>
    </div>
  );
}
