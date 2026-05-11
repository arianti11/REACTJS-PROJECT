import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';

const AuthLayout = () => {
  const location = useLocation();
  const isRegister = location.pathname === '/register';

  return (
    <div className="flex h-screen w-full bg-white overflow-hidden font-sans">

      {/* SISI KIRI: Branding (Biru Tua) */}
      <div className="hidden lg:flex lg:w-1/2 bg-[#001F3F] relative items-center px-20">
        <div className="absolute top-12 left-16 flex items-center gap-2">
          <h1 className="text-5xl font-bold tracking-tighter text-white">NR</h1>
          <div className="text-[10px] uppercase leading-tight tracking-widest text-white opacity-80 font-medium">
            New Reklame<br />Adversenting
          </div>
        </div>

        <div className="w-full">
          <h2 className="text-7xl font-extrabold italic leading-[1.1] tracking-tight text-white">
            {isRegister ? "Daftar Sebagai Pengguna Baru" : "Masuk ke Sistem Pengelolaan Anda"}
          </h2>
          <p className="mt-6 text-2xl text-blue-100 font-light opacity-70 max-w-lg">
            {isRegister
              ? "Lengkapi data Anda untuk mulai Mengelola Pesanan, dan Laporan secara aman."
              : "Akses Pesanan, dan Laporan secara aman"}
          </p>
        </div>
      </div>

      {/* SISI KANAN: Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center bg-[#F8FAFC] relative overflow-y-auto">
        <div className="w-full max-w-xl p-8">
          <Outlet />
        </div>

        {/* FOOTER - Sekarang sudah di TENAH */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-full text-center text-gray-400 text-[10px] font-bold uppercase tracking-widest pointer-events-none">
          © New Reklame Advertising - Sistem Informasi Percetakan
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;