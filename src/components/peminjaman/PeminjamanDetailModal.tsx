type Props = {
  data: any;
  onClose: () => void;
};

export default function PeminjamanDetailModal({
  data,
  onClose,
}: Props) {
  if (!data) return null;

  return (
    <div
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-xl p-6 w-full max-w-md"
        onClick={(e) => e.stopPropagation()}
      >
        <h3 className="text-xl font-bold mb-4">
          Detail Peminjaman
        </h3>

        <div className="space-y-2 text-sm">
          <p><b>Peminjam:</b> {data.namaPeminjam || data.NamaPeminjam}</p>
          <p><b>Ruangan:</b> {data.namaRuangan || data.NamaRuangan}</p>
          <p>
            <b>Tanggal:</b>{" "}
            {(data.tanggalPinjam || data.TanggalPinjam)?.split("T")[0]}
          </p>
          <p><b>Keperluan:</b> {data.keperluan || data.Keperluan}</p>
          <p>
            <b>Status:</b>{" "}
            <span className="bg-gray-200 px-2 py-1 rounded text-xs">
              {data.status || data.Status}
            </span>
          </p>
        </div>

        <button
          onClick={onClose}
          className="mt-6 w-full bg-gray-600 hover:bg-gray-700 text-white py-2 rounded-lg"
        >
          Tutup
        </button>
      </div>
    </div>
  );
}
