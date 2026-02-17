import StatusBadge from "./StatusBadge";

type Props = {
  data: any[];
  onDetail: (p: any) => void;
  onEdit: (p: any) => void;
  onDelete: (id: number) => void;
  onApprove: (id: number) => void;
  onReject: (id: number) => void;
};

export default function PeminjamanTable({
  data,
  onDetail,
  onEdit,
  onDelete,
  onApprove,
  onReject,
}: Props) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr className="border-b">
            <th className="py-3">Ruangan</th>
            <th className="py-3">Peminjam</th>
            <th className="py-3">Status</th>
            <th className="py-3">Aksi</th>
          </tr>
        </thead>

        <tbody>
          {data.map((p) => (
            <tr key={p.id || p.Id} className="border-b hover:bg-gray-50">
              {/* RUANGAN */}
              <td className="px-6 py-3">{p.namaRuangan || p.NamaRuangan}</td>

              {/* PEMINJAM */}
              <td className="px-6 py-3">{p.namaPeminjam || p.NamaPeminjam}</td>

              {/* STATUS */}
              <td className="px-6 py-3">
                <StatusBadge status={p.status || p.Status} />
              </td>

              {/* AKSI */}
              <td className="px-6 py-3">
                <div className="flex flex-wrap gap-2">
                  {/* DETAIL */}
                  <button
                    onClick={() => onDetail(p)}
                    className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
                  >
                    Detail
                  </button>

                  {/* EDIT */}
                  <button
                    onClick={() => onEdit(p)}
                    className="px-3 py-1 bg-yellow-400 rounded hover:bg-yellow-500 text-white"
                  >
                    Edit
                  </button>

                  {/* DELETE */}
                  <button
                    onClick={() => onDelete(p.id || p.Id)}
                    className="px-3 py-1 bg-red-500 rounded hover:bg-red-600 text-white"
                  >
                    Hapus
                  </button>

                  {/* APPROVAL */}
                  {(p.status || p.Status) === "Menunggu" && (
                    <>
                      <button
                        onClick={() => onApprove(p.id || p.Id)}
                        className="px-3 py-1 bg-green-500 rounded hover:bg-green-600 text-white"
                      >
                        Setujui
                      </button>

                      <button
                        onClick={() => onReject(p.id || p.Id)}
                        className="px-3 py-1 bg-red-700 rounded hover:bg-red-800 text-white"
                      >
                        Tolak
                      </button>
                    </>
                  )}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
