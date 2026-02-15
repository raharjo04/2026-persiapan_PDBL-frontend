import type { Ruangan } from "../../types/ruangan";

type Props = {
  formData: any;
  listRuangan: Ruangan[];
  isEditing: boolean;
  onChange: (data: any) => void;
  onSubmit: (e: React.FormEvent) => void;
};

export default function PeminjamanForm({
  formData,
  listRuangan,
  isEditing,
  onChange,
  onSubmit,
}: Props) {
  return (
    <form onSubmit={onSubmit} className="space-y-4">

      {/* Nama */}
      <div>
        <label className="font-semibold block mb-1">
          Nama Peminjam
        </label>
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
        <label className="font-semibold block mb-1">
          Ruangan Lab
        </label>
        <select
          className="w-full border rounded-lg px-3 py-2"
          value={formData.ruanganId}
          onChange={(e) =>
            onChange({ ...formData, ruanganId: e.target.value })
          }
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
        <label className="font-semibold block mb-1">Tanggal</label>
        <input
          type="date"
          className="w-full border rounded-lg px-3 py-2"
          value={formData.tanggalPinjam}
          onChange={(e) =>
            onChange({ ...formData, tanggalPinjam: e.target.value })
          }
          required
        />
      </div>

      {/* Keperluan */}
      <div>
        <label className="font-semibold block mb-1">
          Keperluan
        </label>
        <textarea
          className="w-full border rounded-lg px-3 py-2"
          value={formData.keperluan}
          onChange={(e) =>
            onChange({ ...formData, keperluan: e.target.value })
          }
          required
        />
      </div>

      <button
        type="submit"
        className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 rounded-lg"
      >
        {isEditing ? "Simpan Perubahan" : "Kirim Pengajuan"}
      </button>
    </form>
  );
}
