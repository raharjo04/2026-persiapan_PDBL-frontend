import api from "./api";
import type { Peminjaman } from "../types/peminjaman";

export const peminjamanApi = {
  // View the loan list
  getAll: async (): Promise<Peminjaman[]> => {
    const response = await api.get<Peminjaman[]>("/peminjaman");
    return response.data;
  },

  // View loan details based on
  getById: async (id: number): Promise<Peminjaman> => {
    const response = await api.get<Peminjaman>(`/peminjaman/${id}`);
    return response.data;
  },

  // Create
  create: async (data: Peminjaman): Promise<Peminjaman> => {
    const response = await api.post<Peminjaman>("/peminjaman", data);
    return response.data;
  },

  // Update
  update: async (id: number, data: Peminjaman): Promise<Peminjaman> => {
    // Pastikan ID dikirim sebagai number di URL
    const response = await api.put<Peminjaman>(`/peminjaman/${id}`, data);
    return response.data;
  },

  // Delete
  delete: async (id: number): Promise<void> => {
    await api.delete(`/peminjaman/${id}`);
  },

  //Update Status
  updateStatus: async (id: number, status: string): Promise<Peminjaman> => {
    const response = await api.patch<Peminjaman>(`/peminjaman/${id}/status`, {
      status,
    });
    return response.data;
  },
};
