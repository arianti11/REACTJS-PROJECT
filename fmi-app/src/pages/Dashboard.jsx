import React from 'react'
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer 
} from 'recharts';
import { RiFileListLine, RiCalendarCheckLine, RiFolderLine, RiInboxLine } from 'react-icons/ri'
import PageHeader from '../components/PageHeader'
import Card from '../components/Card'

const pesananTerbaru = [
  { id: 1, pelanggan: 'Andi', produk: 'Cetak Produk', status: 'Cetak', tanggal: '13 Mei 2026', total: 2 },
  { id: 2, pelanggan: 'Cinta', produk: 'Cetak Produk', status: 'Proses', tanggal: '13 Mei 2026', total: 2 },
  { id: 3, pelanggan: 'Cinta', produk: 'Cetak Produk', status: 'Selesai', tanggal: '13 Mei 2026', total: 2 },
  { id: 4, pelanggan: '', produk: '', status: '', tanggal: '', total: '' },
];

const stokRendah = [
  { id: 1, bahan: 'Bahan Baku', sisa: 30, status: 'Warning', supplier: 'Supplier' },
  { id: 2, bahan: 'Bahan Baku', sisa: 15, status: 'Kritis', supplier: 'Supplier' },
  { id: 3, bahan: 'Bahan Baku', sisa: 15, status: 'Kritis', supplier: 'Supplier' },
  { id: 4, bahan: '', sisa: '', status: '', supplier: '' },
];

const dataGrafik = [
  { tgl: '1 Mei', pesanan: 10 },
  { tgl: '4 Mei', pesanan: 40 },
  { tgl: '7 Mei', pesanan: 25 },
  { tgl: '10 Mei', pesanan: 35 },
  { tgl: '13 Mei', pesanan: 75 },
  { tgl: '16 Mei', pesanan: 45 },
  { tgl: '19 Mei', pesanan: 90 },
  { tgl: '22 Mei', pesanan: 60 },
  { tgl: '25 Mei', pesanan: 85 },
  { tgl: '28 Mei', pesanan: 40 },
  { tgl: '31 Mei', pesanan: 80 },
];

const Dashboard = () => {
  return (
    <div className="font-sans">
      <PageHeader title="Dashboard Utama" />
      
      {/* Kartu Statistik */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">
        <Card title="1. TOTAL PESANAN" value="125" change="(+5%)" icon={RiFileListLine} color="blue" />
        <Card title="2. PESANAN BARU" value="18" change="(+2)" icon={RiCalendarCheckLine} color="green" />
        <Card title="3. PESANAN DALAM PROSES" value="42" icon={RiFolderLine} color="yellow" />
        <Card title="4. STOK MENIPIS" value="8 Item" icon={RiInboxLine} color="red" />
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        
        {/* Implementasi Recharts */}
        <div className="xl:col-span-2 bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-gray-900">RINGKASAN PESANAN DALAM MEI 2026</h2>
            <select className="bg-gray-100 px-4 py-2 rounded-lg text-sm font-medium border border-gray-200 outline-none">
              <option>Dynamic Last 30 Days</option>
            </select>
          </div>
          
          <div className="h-72 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={dataGrafik}>
                <defs>
                  <linearGradient id="colorPesanan" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#3B82F6" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                <XAxis 
                  dataKey="tgl" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{fontSize: 12, fill: '#94a3b8'}}
                  dy={10}
                />
                <YAxis 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{fontSize: 12, fill: '#94a3b8'}}
                />
                <Tooltip 
                  contentStyle={{ 
                    borderRadius: '12px', 
                    border: 'none', 
                    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                    fontFamily: 'inherit'
                  }} 
                />
                <Area 
                  type="monotone" 
                  dataKey="pesanan" 
                  stroke="#3B82F6" 
                  strokeWidth={3}
                  fillOpacity={1} 
                  fill="url(#colorPesanan)" 
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Tabel Stok Rendah */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <h2 className="text-xl font-bold text-gray-900 mb-6">2. STOK BAHAN BAKU RENDAH</h2>
          <table className="w-full text-sm">
            <thead className="border-b border-gray-100">
              <tr>
                <th className="text-left py-3 px-1 font-semibold text-gray-500">#</th>
                <th className="text-left py-3 px-1 font-semibold text-gray-500">Bahan Baku</th>
                <th className="text-left py-3 px-1 font-semibold text-gray-500">Sisa Stok</th>
                <th className="text-left py-3 px-1 font-semibold text-gray-500">Status</th>
                <th className="text-left py-3 px-1 font-semibold text-gray-500">Supplier</th>
              </tr>
            </thead>
            <tbody>
              {stokRendah.map((stok, index) => (
                <tr key={index} className="border-b last:border-b-0 border-gray-100 hover:bg-gray-50/50">
                  <td className="py-4 px-1">{stok.id ? `${index + 1}.` : ''}</td>
                  <td className="py-4 px-1 font-medium">{stok.bahan}</td>
                  <td className="py-4 px-1">{stok.sisa}</td>
                  <td className="py-4 px-1">
                    {stok.status && (
                      <span className={`px-2 py-1 text-[10px] font-bold rounded ${stok.status === 'Warning' ? 'bg-amber-100 text-amber-700' : 'bg-rose-100 text-rose-700'}`}>{stok.status}</span>
                    )}
                  </td>
                  <td className="py-4 px-1">{stok.supplier}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="mt-8">
        {/* Tabel Pesanan Terbaru */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <h2 className="text-xl font-bold text-gray-900 mb-6">1. PESANAN TERBARU</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="border-b border-gray-100">
                <tr>
                  <th className="text-left py-3 px-1 font-semibold text-gray-500">#</th>
                  <th className="text-left py-3 px-1 font-semibold text-gray-500">Pelanggan</th>
                  <th className="text-left py-3 px-1 font-semibold text-gray-500">Produk</th>
                  <th className="text-left py-3 px-1 font-semibold text-gray-500">Status</th>
                  <th className="text-left py-3 px-1 font-semibold text-gray-500">Tanggal</th>
                  <th className="text-left py-3 px-1 font-semibold text-gray-500">Total</th>
                </tr>
              </thead>
              <tbody>
                {pesananTerbaru.map((pesanan, index) => (
                  <tr key={index} className="border-b last:border-b-0 border-gray-100 hover:bg-gray-50/50">
                    <td className="py-4 px-1">{pesanan.id ? `${index + 1}.` : ''}</td>
                    <td className="py-4 px-1 font-medium">{pesanan.pelanggan}</td>
                    <td className="py-4 px-1">{pesanan.produk}</td>
                    <td className="py-4 px-1">
                      {pesanan.status && (
                        <span className={`px-2 py-1 text-[10px] font-bold rounded ${pesanan.status === 'Cetak' ? 'bg-blue-100 text-blue-700' : pesanan.status === 'Proses' ? 'bg-amber-100 text-amber-700' : 'bg-emerald-100 text-emerald-700'}`}>{pesanan.status}</span>
                      )}
                    </td>
                    <td className="py-4 px-1 text-gray-600">{pesanan.tanggal}</td>
                    <td className="py-4 px-1 font-semibold">{pesanan.total}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard