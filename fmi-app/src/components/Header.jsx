import React from 'react'
import { RiSearchLine, RiNotification3Line, RiUserLine, RiArrowDownSLine, RiCalendarCheckLine } from 'react-icons/ri'

const Header = () => {
  return (
    <header className="bg-white p-4 flex items-center justify-between border-b border-gray-100 sticky top-0 z-10">
      <div className="relative w-full max-w-xl">
        <input 
          type="search" 
          placeholder="Cari Pesanan, Produk, Pelanggan..." 
          className="w-full pl-12 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-300"
        />
        <RiSearchLine className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
      </div>
      
      <div className="flex items-center gap-6">
        <RiCalendarCheckLine className="w-6 h-6 text-gray-500 cursor-pointer" />
        <div className="relative">
          <RiNotification3Line className="w-6 h-6 text-gray-500 cursor-pointer" />
          <span className="absolute -top-1 -right-1 bg-red-600 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">3</span>
        </div>
        
        <div className="flex items-center gap-3 cursor-pointer p-2 rounded-lg hover:bg-gray-50">
          <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-500">
            <RiUserLine className="w-6 h-6" />
          </div>
          <div>
            <p className="text-sm font-semibold text-gray-900">Admin : Anton</p>
          </div>
          <RiArrowDownSLine className="w-5 h-5 text-gray-400" />
        </div>
      </div>
    </header>
  )
}

export default Header