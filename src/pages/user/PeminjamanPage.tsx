import Navbar from "../../components/layout/user/Navbar";
import PeminjamanForm from "../../components/peminjaman/PeminjamanForm";
import { useUserPeminjaman } from "../../hooks/user/usePeminjaman";

export default function PeminjamanPage() {

  const {
    listRuangan,
    loading,
    submitting,
    formData,
    setFormData,
    submitPeminjaman,
  } = useUserPeminjaman();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await submitPeminjaman();
  };

  if (loading)
    return (
      <div className="flex items-center justify-center min-h-screen">
        Loading...
      </div>
    );

  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      <Navbar />

      <main className="max-w-3xl mx-auto py-12 px-4">

        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold">
            Pengajuan Peminjaman Lab
          </h1>

          <p className="text-slate-500 mt-2">
            Isi data dengan benar.
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow border p-8">
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