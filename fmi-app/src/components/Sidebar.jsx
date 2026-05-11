import React from 'react'
import { RiDashboardLine, RiShoppingCartLine, RiFileList2Line, RiTeamLine, RiSettings4Line, RiLogoutBoxRLine } from 'react-icons/ri'

const menuItems = [
  { name: 'DASHBOARD', icon: RiDashboardLine, current: true },
  { name: 'PESANAN', icon: RiShoppingCartLine },
  { name: 'LAPORAN', icon: RiFileList2Line },
  { name: 'PELANGGAN', icon: RiTeamLine },
  { name: 'PENGATURAN', icon: RiSettings4Line },
  { name: 'KELUAR', icon: RiLogoutBoxRLine },
];

const Sidebar = () => {
  return (
    <aside className="w-64 bg-[#1e2f4f] text-white flex flex-col p-6 sticky top-0 h-screen">
      <div className="flex items-center gap-2 mb-12">
        <img src="/public/icons.svg" alt="Logo" className="w-10 h-10" />
        <div>
          <h1 className="text-xl font-extrabold tracking-tight">NEW REKLAME</h1>
          <p className="text-xs opacity-80">ADVERSENTING</p>
        </div>
      </div>
      
      <nav className="flex-1 space-y-3">
        {menuItems.map((item) => (
          <a
            key={item.name}
            href="#"
            className={`flex items-center gap-4 px-4 py-3 rounded-xl text-sm font-semibold tracking-wide transition-colors ${item.current ? 'bg-blue-600 text-white' : 'text-gray-200 hover:bg-white/5 hover:text-white'}`}
          >
            <item.icon className={`w-5 h-5 ${item.current ? 'text-white' : 'text-gray-400'}`} />
            {item.name}
          </a>
        ))}
      </nav>
    </aside>
  )
}

export default Sidebar