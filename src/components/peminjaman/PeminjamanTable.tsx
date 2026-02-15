type Props = {
  data: any[];
  onDetail: (p: any) => void;
  onEdit: (p: any) => void;
  onDelete: (id: number) => void;
};

export default function PeminjamanTable({
  data,
  onDetail,
  onEdit,
  onDelete,
}: Props) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr className="border-b">
            <th className="text-left py-3">Ruangan</th>
            <th className="text-left py-3">Peminjam</th>
            <th className="text-left py-3">Aksi</th>
          </tr>
        </thead>

        <tbody>
          {data.map((p) => (
            <tr key={p.id || p.Id} className="border-b hover:bg-gray-50">
              <td className="py-3">
                {p.namaRuangan || p.NamaRuangan}
              </td>

              <td className="py-3">
                {p.namaPeminjam || p.NamaPeminjam}
              </td>

              <td className="py-3 space-x-2">
                <button
                  onClick={() => onDetail(p)}
                  className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
                >
                  Detail
                </button>

                <button
                  onClick={() => onEdit(p)}
                  className="px-3 py-1 bg-yellow-400 rounded hover:bg-yellow-500 text-white"
                >
                  Edit
                </button>

                <button
                  onClick={() => onDelete(p.id || p.Id)}
                  className="px-3 py-1 bg-red-500 rounded hover:bg-red-600 text-white"
                >
                  Hapus
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
