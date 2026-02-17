import { BrowserRouter, Routes, Route } from "react-router-dom";

import LandingPage from "./pages/LandingPage";

import AdminPeminjaman from "./pages/admin/PeminjamanPage";
import UserPeminjaman from "./pages/user/PeminjamanPage";
import DaftarPeminjamPage from "./pages/admin/DaftarPeminjamPage";
import EditPeminjamanPage from "./pages/admin/EditPeminjamanPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/*LANDING PAGE */}
        <Route path="/" element={<LandingPage />} />

        {/* USER */}
        <Route path="/peminjaman" element={<UserPeminjaman />} />

        {/* ADMIN */}
        <Route path="/admin/peminjaman" element={<AdminPeminjaman />} />
        <Route path="/admin/daftar-peminjam" element={<DaftarPeminjamPage />} />
        <Route path="/admin/peminjaman/edit/:id" element={<EditPeminjamanPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;