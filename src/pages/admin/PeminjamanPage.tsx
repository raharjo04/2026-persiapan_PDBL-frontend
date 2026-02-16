import { useNavigate } from "react-router-dom";
import { usePeminjaman } from "../../hooks/admin/usePeminjaman";
import { peminjamanApi } from "../../api/peminjamanApi";

import Navbar from "../../components/layout/admin/Navbar";
import PeminjamanForm from "../../components/peminjaman/PeminjamanForm";

export default function PeminjamanPage() {
  const navigate = useNavigate();

  const {
    listRuangan,
    loading,
    submitting,
    setSubmitting,
    formData,
    setFormData,
    resetForm,
  } = usePeminjaman();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      setSubmitting(true);

      const payload = {
        ...formData,
        ruanganId: Number(formData.ruanganId),
      };

      await peminjamanApi.create(payload as any);

      alert("Permohonan berhasil dibuat!");

      resetForm();

      // Redirect ke daftar admin
      navigate("/admin/daftar-peminjam");
    } catch {
      alert("Terjadi kesalahan saat menyimpan data.");
    } finally {
      setSubmitting(false);
    }
  };

  if (loading)
    return (
      <div className="flex items-center justify-center min-h-screen bg-slate-50 text-slate-400">
        Loading Form...
      </div>
    );

  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      <Navbar />

      <main className="max-w-3xl mx-auto py-12 px-4">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-extrabold text-slate-800">
            Pengajuan Baru
          </h1>

          <p className="text-slate-500 mt-2">
            Pastikan semua data yang diinput sudah benar.
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-sm border p-8">
          <PeminjamanForm
            formData={formData}
            listRuangan={listRuangan}
            isEditing={false}
            onChange={setFormData}
            onSubmit={handleSubmit}
            submitting={submitting}
          />
        </div>
      </main>
    </div>
  );
}
