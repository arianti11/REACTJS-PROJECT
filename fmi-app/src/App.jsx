import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

// Layouts
const AuthLayout = lazy(() => import('./layouts/AuthLayout'));
const MainLayout = lazy(() => import('./layouts/MainLayout'));

// Pages
const Login = lazy(() => import('./pages/auth/Login'));
const Register = lazy(() => import('./pages/auth/Register'));
const Dashboard = lazy(() => import('./pages/Dashboard'));
const Pesanan = lazy(() => import('./pages/Pesanan'));
const Laporan = lazy(() => import('./pages/Laporan'));
const Pelanggan = lazy(() => import('./pages/Pelanggan'));
const Pengaturan = lazy(() => import('./pages/Pengaturan'));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div className="h-screen flex items-center justify-center font-black">MEMUAT...</div>}>
        <Routes>
          {/* Auth Layout Group */}
          <Route element={<AuthLayout />}>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Route>

          {/* Dashboard Layout Group */}
          <Route element={<MainLayout />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/pesanan" element={<Pesanan />} />
            <Route path="/laporan" element={<Laporan />} />
            <Route path="/pelanggan" element={<Pelanggan />} />
            <Route path="/pengaturan" element={<Pengaturan />} />
          </Route>

          <Route path="/" element={<Navigate to="/login" replace />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;