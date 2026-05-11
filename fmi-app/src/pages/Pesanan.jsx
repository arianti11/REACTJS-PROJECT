import React from 'react';
import { RiAddLine, RiFilterLine, RiPrinterLine } from 'react-icons/ri';

const Pesanan = () => {
  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-black text-gray-800 uppercase tracking-tight">Data Pesanan</h2>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-bold text-gray-600 hover:bg-gray-50">
            <RiFilterLine /> Filter
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-bold shadow-lg shadow-blue-200 hover:bg-blue-700">
            <RiAddLine size={18} /> Pesanan Baru
          </button>
        </div>
      </div>

      <div className="bg-white rounded-[24px] shadow-sm border border-gray-100 overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-gray-50 border-b border-gray-100">
            <tr>
              <th className="px-6 py-4 text-[10px] font-black text-gray-400 uppercase tracking-widest">No. Pesanan</th>
              <th className="px-6 py-4 text-[10px] font-black text-gray-400 uppercase tracking-widest">Pelanggan</th>
              <th className="px-6 py-4 text-[10px] font-black text-gray-400 uppercase tracking-widest">Produk</th>
              <th className="px-6 py-4 text-[10px] font-black text-gray-400 uppercase tracking-widest">Status</th>
              <th className="px-6 py-4 text-[10px] font-black text-gray-400 uppercase tracking-widest">Total</th>
              <th className="px-6 py-4 text-[10px] font-black text-gray-400 uppercase tracking-widest text-center">Aksi</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {[1,2,3,4].map((i) => (
              <tr key={i} className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4 text-sm font-bold text-blue-600">#ORD-00{i}</td>
                <td className="px-6 py-4">
                  <p className="text-sm font-bold text-gray-800">Pelanggan {i}</p>
                  <p className="text-xs text-gray-400">0812-3456-78{i}</p>
                </td>
                <td className="px-6 py-4 text-sm text-gray-600">Cetak Baliho 3x4m</td>
                <td className="px-6 py-4">
                  <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider ${
                    i % 2 === 0 ? 'bg-orange-100 text-orange-600' : 'bg-green-100 text-green-600'
                  }`}>
                    {i % 2 === 0 ? 'Proses' : 'Lunas'}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm font-bold text-gray-800">Rp 1.250.000</td>
                <td className="px-6 py-4 flex justify-center gap-2">
                  <button className="p-2 text-gray-400 hover:text-blue-600"><RiPrinterLine /></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default Pesanan;