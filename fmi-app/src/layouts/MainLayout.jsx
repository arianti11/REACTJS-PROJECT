import React, { useState } from 'react';
import { Outlet, NavLink, useNavigate } from 'react-router-dom';
import { 
  RiDashboardLine, RiShoppingCartLine, RiFileChartLine, 
  RiGroupLine, RiSettings4Line, RiLogoutBoxRLine,
  RiSearchLine, RiNotification3Line, RiUser3Line
} from 'react-icons/ri';

const MainLayout = () => {
  const navigate = useNavigate();
  const [user] = useState(JSON.parse(localStorage.getItem('userData')));

  const handleLogout = () => {
    localStorage.clear();
    navigate('/login');
  };

  const menuItems = [
    { name: 'Dashboard', path: '/dashboard', icon: <RiDashboardLine /> },
    { name: 'Pesanan', path: '/pesanan', icon: <RiShoppingCartLine /> },
    { name: 'Laporan', path: '/laporan', icon: <RiFileChartLine /> },
    { name: 'Pelanggan', path: '/pelanggan', icon: <RiGroupLine /> },
    { name: 'Pengaturan', path: '/pengaturan', icon: <RiSettings4Line /> },
  ];

  return (
    <div className="flex h-screen w-full bg-[#F1F5F9] overflow-hidden font-sans">
      {/* SIDEBAR */}
      <aside className="w-72 bg-[#001F3F] text-white flex flex-col">
        <div className="p-8 flex items-center gap-3">
          <h1 className="text-4xl font-bold tracking-tighter">NR</h1>
          <div className="text-[8px] uppercase tracking-widest leading-tight opacity-70">
            New Reklame<br />Adversenting
          </div>
        </div>

        <nav className="flex-1 px-4 py-4 space-y-2">
          {menuItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) => 
                `flex items-center gap-4 px-6 py-4 rounded-xl transition-all font-medium uppercase text-xs tracking-widest ${
                  isActive ? 'bg-[#0056b3] text-white shadow-lg' : 'text-gray-400 hover:bg-white/5'
                }`
              }
            >
              <span className="text-xl">{item.icon}</span>
              {item.name}
            </NavLink>
          ))}
        </nav>

        <button 
          onClick={handleLogout}
          className="m-6 flex items-center gap-4 px-6 py-4 text-gray-400 hover:text-red-400 font-medium uppercase text-xs tracking-widest transition-all"
        >
          <RiLogoutBoxRLine className="text-xl" /> Keluar
        </button>
      </aside>

      {/* MAIN CONTENT AREA */}
      <main className="flex-1 flex flex-col overflow-hidden">
        {/* HEADER */}
        <header className="h-20 bg-white border-b border-gray-200 px-8 flex items-center justify-between shrink-0">
          <div className="relative w-96">
            <RiSearchLine className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input 
              type="text" 
              placeholder="Cari Pesanan, Produk, Pelanggan..." 
              className="w-full pl-10 pr-4 py-2 bg-gray-100 rounded-lg outline-none text-sm focus:ring-1 focus:ring-blue-500"
            />
          </div>
          <div className="flex items-center gap-6">
            <button className="relative p-2 text-gray-500 hover:bg-gray-100 rounded-full">
              <RiNotification3Line size={22} />
              <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
            </button>
            <div className="flex items-center gap-3 pl-6 border-l border-gray-200 text-right">
              <div>
                <p className="text-sm font-bold text-gray-800">{user?.firstName || 'Admin'}</p>
                <p className="text-[10px] font-medium text-gray-400 uppercase tracking-wider">Admin - Active</p>
              </div>
              <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white font-bold shadow-lg">
                <RiUser3Line size={20} />
              </div>
            </div>
          </div>
        </header>

        {/* CONTENT VIEWPORT */}
        <div className="flex-1 overflow-y-auto p-8">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default MainLayout;