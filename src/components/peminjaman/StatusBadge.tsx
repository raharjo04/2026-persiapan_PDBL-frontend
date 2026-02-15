type Props = {
  status: string;
};

export default function StatusBadge({ status }: Props) {
  const base = "px-2 py-1 rounded text-xs font-semibold";

  switch (status) {
    case "Menunggu":
      return <span className={`${base} bg-yellow-200 text-yellow-800`}>{status}</span>;

    case "Disetujui":
      return <span className={`${base} bg-green-200 text-green-800`}>{status}</span>;

    case "Ditolak":
      return <span className={`${base} bg-red-200 text-red-800`}>{status}</span>;

    default:
      return <span className={`${base} bg-gray-200`}>{status}</span>;
  }
}