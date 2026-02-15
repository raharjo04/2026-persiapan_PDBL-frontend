type Props = {
  search: string;
  statusFilter: string;
  sortBy: string;
  totalData: number; 
  onSearchChange: (v: string) => void;
  onStatusChange: (v: string) => void;
  onSortChange: (v: string) => void;
};

export default function PeminjamanFilterBar({
  search,
  statusFilter,
  sortBy,
  onSearchChange,
  onStatusChange,
  onSortChange,
}: Props) {
  return (
    <div className="bg-white border rounded-2xl p-4 mb-6 shadow-sm flex flex-col md:flex-row gap-4">

      <input
        type="text"
        placeholder="Cari peminjaman..."
        value={search}
        onChange={(e) => onSearchChange(e.target.value)}
        className="border rounded px-3 py-2 w-full md:w-80"
      />

      <select
        value={statusFilter}
        onChange={(e) => onStatusChange(e.target.value)}
        className="border rounded px-3 py-2"
      >
        <option value="ALL">Semua Status</option>
        <option value="Menunggu">Menunggu</option>
        <option value="Disetujui">Disetujui</option>
        <option value="Ditolak">Ditolak</option>
      </select>

      <select
        value={sortBy}
        onChange={(e) => onSortChange(e.target.value)}
        className="border rounded px-3 py-2"
      >
        <option value="terbaru">Terbaru</option>
        <option value="terlama">Terlama</option>
        <option value="nama">Nama A-Z</option>
      </select>
    </div>
  );
}