import React from 'react';
import { RiUserSettingsLine, RiShieldKeyholeLine, RiGlobalLine } from 'react-icons/ri';

const Pengaturan = () => {
  return (
    <div className="max-w-4xl">
      <h2 className="text-2xl font-black text-gray-800 uppercase tracking-tight mb-8">Pengaturan Sistem</h2>
      
      <div className="space-y-6">
        {/* Profile Section */}
        <div className="bg-white p-8 rounded-[24px] border border-gray-100 shadow-sm">
          <div className="flex items-center gap-4 mb-8">
            <RiUserSettingsLine size={24} className="text-blue-600" />
            <h3 className="font-bold text-lg text-gray-800">Profil Admin</h3>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">Nama Lengkap</label>
              <input type="text" className="w-full p-3 bg-gray-50 rounded-xl outline-none focus:ring-1 focus:ring-blue-500" defaultValue="Administrator NR" />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">Email</label>
              <input type="text" className="w-full p-3 bg-gray-50 rounded-xl outline-none focus:ring-1 focus:ring-blue-500" defaultValue="admin@nr-adv.com" />
            </div>
          </div>
        </div>

        {/* Security */}
        <div className="bg-white p-8 rounded-[24px] border border-gray-100 shadow-sm">
          <div className="flex items-center gap-4 mb-8">
            <RiShieldKeyholeLine size={24} className="text-blue-600" />
            <h3 className="font-bold text-lg text-gray-800">Keamanan & Password</h3>
          </div>
          <button className="px-6 py-3 bg-blue-600 text-white rounded-xl font-bold text-sm shadow-lg shadow-blue-200">
            Ganti Password
          </button>
        </div>
      </div>
    </div>
  );
};
export default Pengaturan;