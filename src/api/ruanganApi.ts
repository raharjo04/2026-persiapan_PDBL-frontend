import api from './api';
import type { Ruangan } from '../types/ruangan';

export const ruanganService = {

  getAll: async () => {
    const response = await api.get<Ruangan[]>('/ruangan');
    return response.data;
  },

  getById: async (id: number) => {
    const response = await api.get<Ruangan>(`/ruangan/${id}`);
    return response.data;
  }
};