import React, { useState } from 'react';
import { 
  RiUserAddLine, RiMailSendLine, RiDeleteBinLine, 
  RiEditLine, RiCloseLine, RiWhatsappLine, 
  RiMapPinLine, RiCheckboxCircleFill, RiErrorWarningFill 
} from 'react-icons/ri';

const Pelanggan = () => {
  // 1. State Data Pelanggan
  const [customers, setCustomers] = useState([
    { 
      id: 1, 
      name: 'Budi Santoso', 
      phone: '08123456789',
      address: 'Jl. Merdeka No. 10, Pekanbaru',
      note: 'Pesanan Jaket Ukuran XL',
      totalPrice: 250000,
      paidAmount: 100000,
      status: 'Belum Lunas',
      date: '20 Mei 2026' 
    }
  ]);

  // 2. State UI & Form
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({ 
    id: null, name: '', phone: '', address: '', note: '', 
    totalPrice: 0, paidAmount: 0 
  });

  // 3. Logika Simpan (Create & Update)
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Hitung status otomatis
    const status = formData.paidAmount >= formData.totalPrice ? 'Lunas' : 'Belum Lunas';
    
    if (formData.id) {
      // Update data lama
      setCustomers(customers.map(c => c.id === formData.id ? { ...formData, status, date: c.date } : c));
    } else {
      // Tambah data baru
      const newCustomer = {
        ...formData,
        id: Date.now(),
        status,
        date: new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })
      };
      setCustomers([...customers, newCustomer]);
      
      // Jika lunas, data ini bisa kamu filter nanti untuk masuk ke Laporan
      if(status === 'Lunas') {
        alert(`Pesanan ${formData.name} LUNAS dan tercatat di Laporan!`);
      }
    }
    closeModal();
  };

  const deleteCustomer = (id) => {
    if (window.confirm('Hapus pelanggan ini?')) {
      setCustomers(customers.filter(c => c.id !== id));
    }
  };

  const openEdit = (customer) => {
    setFormData(customer);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setFormData({ id: null, name: '', phone: '', address: '', note: '', totalPrice: 0, paidAmount: 0 });
  };

  return (
    <div className="p-4">
      {/* HEADER */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h2 className="text-2xl font-black text-gray-800 uppercase">Database Pelanggan</h2>
          <p className="text-sm text-gray-500">Kelola pesanan dan status pembayaran</p>
        </div>
        <button 
          onClick={() => setIsModalOpen(true)}
          className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-2xl font-bold shadow-lg shadow-blue-200 hover:bg-blue-700 transition-all"
        >
          <RiUserAddLine size={20} /> Tambah Data
        </button>
      </div>

      {/* GRID KARTU PELANGGAN */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {customers.map((customer) => {
          const sisa = customer.totalPrice - customer.paidAmount;
          const isLunas = customer.status === 'Lunas';

          return (
            <div key={customer.id} className="bg-white rounded-[32px] border border-gray-100 shadow-sm hover:shadow-xl transition-all flex flex-col">
              {/* Bagian Atas: Profil */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider ${isLunas ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'}`}>
                    {customer.status}
                  </div>
                  <div className="flex gap-1">
                    <button onClick={() => openEdit(customer)} className="p-2 text-gray-400 hover:text-blue-600"><RiEditLine/></button>
                    <button onClick={() => deleteCustomer(customer.id)} className="p-2 text-gray-400 hover:text-red-600"><RiDeleteBinLine/></button>
                  </div>
                </div>

                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 bg-gray-100 rounded-2xl flex items-center justify-center text-xl font-black text-gray-400 uppercase">
                    {customer.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 text-lg leading-tight">{customer.name}</h4>
                    <p className="text-sm text-blue-600 font-medium flex items-center gap-1 mt-1"><RiWhatsappLine/> {customer.phone}</p>
                  </div>
                </div>

                <div className="space-y-3 text-sm">
                  <div className="flex items-start gap-2 text-gray-500 bg-gray-50 p-3 rounded-xl">
                    <RiMapPinLine className="mt-1 flex-shrink-0 text-gray-400"/>
                    <p className="line-clamp-2">{customer.address || 'Alamat tidak diisi'}</p>
                  </div>
                  <div className="p-3 bg-blue-50/50 rounded-xl border border-blue-100">
                    <p className="text-[10px] font-bold text-blue-400 uppercase mb-1">Catatan Pesanan:</p>
                    <p className="text-gray-700 font-medium">{customer.note || '-'}</p>
                  </div>
                </div>
              </div>

              {/* Bagian Bawah: Keuangan */}
              <div className={`mt-auto p-6 rounded-b-[32px] ${isLunas ? 'bg-green-50' : 'bg-gray-50'} border-t border-gray-100`}>
                <div className="flex justify-between mb-2">
                  <span className="text-xs text-gray-500">Harga Total:</span>
                  <span className="text-sm font-bold text-gray-800">Rp {Number(customer.totalPrice).toLocaleString()}</span>
                </div>
                <div className="flex justify-between mb-3">
                  <span className="text-xs text-gray-500">DP/Bayar:</span>
                  <span className="text-sm font-bold text-blue-600">Rp {Number(customer.paidAmount).toLocaleString()}</span>
                </div>
                <div className="pt-3 border-t border-gray-200 flex justify-between items-center">
                  <span className="text-xs font-black uppercase text-gray-400">Sisa</span>
                  {isLunas ? (
                    <span className="flex items-center gap-1 text-green-600 font-black text-sm"><RiCheckboxCircleFill/> LUNAS</span>
                  ) : (
                    <span className="text-red-500 font-black text-lg">Rp {sisa.toLocaleString()}</span>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* MODAL FORM TAMBAH/EDIT */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-[40px] w-full max-w-2xl p-8 shadow-2xl overflow-y-auto max-h-[90vh]">
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-2xl font-black text-gray-800">Detail Pesanan Baru</h3>
              <button onClick={closeModal} className="p-2 hover:bg-gray-100 rounded-full transition-all"><RiCloseLine size={28}/></button>
            </div>
            
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Kolom Kiri: Data Diri */}
              <div className="space-y-4">
                <h4 className="text-[10px] font-black text-blue-600 uppercase tracking-widest border-b pb-2">Informasi Pelanggan</h4>
                <div>
                  <label className="text-xs font-bold text-gray-500 ml-1">Nama Lengkap</label>
                  <input required type="text" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-5 py-3 rounded-2xl border border-gray-200 bg-gray-50 focus:ring-4 focus:ring-blue-100 outline-none transition-all font-semibold" placeholder="Budi..." />
                </div>
                <div>
                  <label className="text-xs font-bold text-gray-500 ml-1">No. WhatsApp</label>
                  <input required type="text" value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full px-5 py-3 rounded-2xl border border-gray-200 bg-gray-50 focus:ring-4 focus:ring-blue-100 outline-none transition-all font-semibold" placeholder="08..." />
                </div>
                <div>
                  <label className="text-xs font-bold text-gray-500 ml-1">Alamat</label>
                  <textarea rows="3" value={formData.address} onChange={(e) => setFormData({...formData, address: e.target.value})}
                    className="w-full px-5 py-3 rounded-2xl border border-gray-200 bg-gray-50 focus:ring-4 focus:ring-blue-100 outline-none transition-all font-semibold" placeholder="Alamat lengkap..." />
                </div>
              </div>

              {/* Kolom Kanan: Pesanan & Biaya */}
              <div className="space-y-4">
                <h4 className="text-[10px] font-black text-orange-600 uppercase tracking-widest border-b pb-2">Detail Transaksi</h4>
                <div>
                  <label className="text-xs font-bold text-gray-500 ml-1">Pesan Apa Saja?</label>
                  <input required type="text" value={formData.note} onChange={(e) => setFormData({...formData, note: e.target.value})}
                    className="w-full px-5 py-3 rounded-2xl border border-gray-200 bg-gray-50 focus:ring-4 focus:ring-blue-100 outline-none transition-all font-semibold" placeholder="Contoh: Cetak 100 Lembar..." />
                </div>
                <div className="grid grid-cols-1 gap-4 pt-2">
                  <div className="bg-blue-50 p-4 rounded-2xl border border-blue-100">
                    <label className="text-[10px] font-black text-blue-400 uppercase block mb-1">Harga Asli (Rp)</label>
                    <input required type="number" value={formData.totalPrice} onChange={(e) => setFormData({...formData, totalPrice: parseInt(e.target.value) || 0})}
                      className="w-full bg-transparent text-blue-700 font-black text-xl outline-none" />
                  </div>
                  <div className="bg-green-50 p-4 rounded-2xl border border-green-100">
                    <label className="text-[10px] font-black text-green-400 uppercase block mb-1">Uang DP / Bayar (Rp)</label>
                    <input required type="number" value={formData.paidAmount} onChange={(e) => setFormData({...formData, paidAmount: parseInt(e.target.value) || 0})}
                      className="w-full bg-transparent text-green-700 font-black text-xl outline-none" />
                  </div>
                </div>
              </div>

              <div className="md:col-span-2 pt-4">
                <button type="submit" className={`w-full py-5 rounded-3xl font-black text-lg shadow-xl transition-all active:scale-[0.97] 
                  ${formData.paidAmount >= formData.totalPrice && formData.totalPrice > 0 
                    ? 'bg-green-500 text-white shadow-green-200 hover:bg-green-600' 
                    : 'bg-blue-600 text-white shadow-blue-200 hover:bg-blue-700'}`}>
                  {formData.paidAmount >= formData.totalPrice && formData.totalPrice > 0 ? 'SIMPAN & LUNASKAN ✅' : 'SIMPAN PESANAN 💾'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Pelanggan;