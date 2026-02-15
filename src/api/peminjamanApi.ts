import api from './api'; 
import type { Peminjaman } from '../types/peminjaman';

export const peminjamanApi = {
  // 1. Get All 
  getAll: async () => {
    const response = await api.get<Peminjaman[]>('/peminjaman');
    return response.data;
  },

  // 2. Create 
  create: async (data: Peminjaman) => {
    const response = await api.post<Peminjaman>('/peminjaman', data);
    return response.data;
  },

  // 3. Update 
  update: async (id: number, data: Peminjaman) => {
    const response = await api.put<Peminjaman>(`/peminjaman/${id}`, data);
    return response.data;
  },

  // 4. Delete 
  delete: async (id: number) => {
    await api.delete(`/peminjaman/${id}`);
  }
};