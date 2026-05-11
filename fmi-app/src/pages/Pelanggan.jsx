import React from 'react';
import { RiUserAddLine, RiMailSendLine, RiDeleteBinLine } from 'react-icons/ri';

const Pelanggan = () => {
  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-black text-gray-800 uppercase tracking-tight">Database Pelanggan</h2>
        <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-bold shadow-lg shadow-blue-200">
          <RiUserAddLine /> Tambah Pelanggan
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="bg-white p-6 rounded-[24px] border border-gray-100 shadow-sm hover:shadow-md transition-all">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 font-bold">
                P{i}
              </div>
              <div>
                <h4 className="font-bold text-gray-800">Nama Pelanggan {i}</h4>
                <p className="text-xs text-gray-400">Bergabung: 12 Mei 2024</p>
              </div>
            </div>
            <div className="space-y-2 mb-6">
              <p className="text-sm text-gray-500 flex justify-between">Total Pesanan: <span className="font-bold text-gray-800">12</span></p>
              <p className="text-sm text-gray-500 flex justify-between">Piutang: <span className="font-bold text-red-500">Rp 0</span></p>
            </div>
            <div className="flex gap-2">
              <button className="flex-1 py-2 bg-gray-50 text-gray-600 rounded-lg text-xs font-bold hover:bg-blue-50 hover:text-blue-600 transition-all flex items-center justify-center gap-2">
                <RiMailSendLine /> Pesan
              </button>
              <button className="p-2 bg-red-50 text-red-500 rounded-lg hover:bg-red-500 hover:text-white transition-all">
                <RiDeleteBinLine />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Pelanggan;