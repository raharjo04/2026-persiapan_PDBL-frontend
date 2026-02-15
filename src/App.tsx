import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminPeminjaman from "./pages/admin/PeminjamanPage";
import UserPeminjaman from "./pages/user/PeminjamanPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* USER */}
        <Route path="/peminjaman" element={<UserPeminjaman />} />

        {/* ADMIN */}
        <Route path="/admin/peminjaman" element={<AdminPeminjaman />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
