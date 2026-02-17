type Props = {
  formData: any;
  listRuangan: any[];
  isEditing: boolean;
  onChange: (data: any) => void;
  onSubmit: (e: React.FormEvent) => void;
  submitting: boolean;
};

export default function PeminjamanForm({
  formData,
  listRuangan,
  isEditing,
  onChange,
  onSubmit,
  submitting,
}: Props) {
  return (
    <form onSubmit={onSubmit} className="space-y-4">
      {/* Nama */}
      <div>
        <label className="font-semibold block mb-1">Nama Peminjam</label>
        <input
          className="w-full border rounded-lg px-3 py-2"
          value={formData.namaPeminjam}
          onChange={(e) =>
            onChange({ ...formData, namaPeminjam: e.target.value })
          }
          required
        />
      </div>

      {/* Ruangan */}
      <div>
        <label className="font-semibold block mb-1">Ruangan Lab</label>

        <select
          className="w-full border rounded-lg px-3 py-2"
          value={formData.ruanganId}
          onChange={(e) => onChange({ ...formData, ruanganId: e.target.value })}
          required
        >
          <option value="">-- Pilih Ruangan --</option>

          {listRuangan.map((r: any) => (
            <option key={r.id || r.Id} value={r.id || r.Id}>
              {r.namaRuangan || r.NamaRuangan}
            </option>
          ))}
        </select>
      </div>

      {/* Tanggal */}
      <div>
        <label className="font-semibold block mb-1">Tanggal Pinjam</label>

        <input
          type="date"
          className="w-full border rounded-lg px-3 py-2"
          value={formData.tanggalPinjam}
          onChange={(e) =>
            onChange({
              ...formData,
              tanggalPinjam: e.target.value,
            })
          }
          required
        />
      </div>

      {/* Keperluan */}
      <div>
        <label className="font-semibold block mb-1">Keperluan</label>

        <textarea
          className="w-full border rounded-lg px-3 py-2"
          value={formData.keperluan}
          onChange={(e) =>
            onChange({
              ...formData,
              keperluan: e.target.value,
            })
          }
          required
        />
      </div>

      {/* ⭐ STATUS — HANYA SAAT EDIT */}
      {isEditing && (
        <div>
          <label className="font-semibold block mb-1">Status</label>

          <select
            className="w-full border rounded-lg px-3 py-2"
            value={formData.status}
            onChange={(e) =>
              onChange({
                ...formData,
                status: e.target.value,
              })
            }
          >
            <option value="Menunggu">Menunggu</option>
            <option value="Disetujui">Disetujui</option>
            <option value="Ditolak">Ditolak</option>
          </select>
        </div>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={submitting}
        className="w-full bg-blue-500 hover:bg-blue-600 disabled:bg-blue-300 text-white font-bold py-2 rounded-lg transition"
      >
        {submitting ? "Menyimpan..." : "Simpan"}
      </button>
    </form>
  );
}
