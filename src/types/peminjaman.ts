import type { Ruangan } from "./ruangan";

export interface Peminjaman {
  id?: number;
  Id?: number; 
  ruanganId?: number;
  RuanganId?: number; 
  namaPeminjam?: string;
  NamaPeminjam?: string;
  tanggalPinjam?: string;
  TanggalPinjam?: string;
  keperluan?: string;
  Keperluan?: string;
  status?: string;
  Status?: string;
  ruangan?: Ruangan;
  Ruangan?: Ruangan;
}