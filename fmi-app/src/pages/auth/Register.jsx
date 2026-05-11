import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  RiUserLine, RiMailLine, RiPhoneLine, 
  RiLockPasswordLine, RiEyeLine, RiEyeCloseLine 
} from 'react-icons/ri';
import { FcGoogle } from 'react-icons/fc';
import { FaWindows } from 'react-icons/fa';
import axios from 'axios';

const Register = () => {
  const [showPass, setShowPass] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '', lastName: '', email: '', phone: '', password: '', confirmPassword: ''
  });

  const handleRegister = async (e) => {
    e.preventDefault();
    if(formData.password !== formData.confirmPassword) return alert("Password tidak cocok!");

    try {
      // Endpoint DummyJSON untuk menambah user baru
      const res = await axios.post('https://dummyjson.com/users/add', {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
      });
      alert("Registrasi Berhasil! Cek konsol.");
      console.log(res.data);
    } catch (err) {
      alert("Gagal Registrasi");
    }
  };

  return (
    <div className="bg-white p-10 rounded-[40px] shadow-2xl border border-gray-100/50 w-full">
      <div className="text-center mb-8">
        <h3 className="text-3xl font-black text-gray-900 uppercase tracking-tight">Daftar Ke Sistem Informasi Percetakan</h3>
        <p className="text-gray-500 mt-2 font-medium">Silahkan isi formulir dibawah ini</p>
      </div>

      <form className="space-y-4" onSubmit={handleRegister}>
        {/* Row 1: First & Last Name */}
        <div className="grid grid-cols-2 gap-4">
          <div className="relative">
            <RiUserLine className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-xl" />
            <input type="text" placeholder="First Name" className="w-full pl-12 pr-4 py-4 bg-[#E8EDF2] rounded-xl outline-none focus:ring-2 focus:ring-blue-500 font-medium text-gray-700" 
              onChange={(e) => setFormData({...formData, firstName: e.target.value})} required />
          </div>
          <div className="relative">
            <RiUserLine className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-xl" />
            <input type="text" placeholder="Last Name" className="w-full pl-12 pr-4 py-4 bg-[#E8EDF2] rounded-xl outline-none focus:ring-2 focus:ring-blue-500 font-medium text-gray-700" 
              onChange={(e) => setFormData({...formData, lastName: e.target.value})} required />
          </div>
        </div>

        {/* Email */}
        <div className="relative">
          <RiMailLine className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-xl" />
          <input type="email" placeholder="Email" className="w-full pl-12 pr-4 py-4 bg-[#E8EDF2] rounded-xl outline-none focus:ring-2 focus:ring-blue-500 font-medium text-gray-700" 
            onChange={(e) => setFormData({...formData, email: e.target.value})} required />
        </div>

        {/* Phone */}
        <div className="relative">
          <RiPhoneLine className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-xl" />
          <input type="text" placeholder="Phone Number" className="w-full pl-12 pr-4 py-4 bg-[#E8EDF2] rounded-xl outline-none focus:ring-2 focus:ring-blue-500 font-medium text-gray-700" 
            onChange={(e) => setFormData({...formData, phone: e.target.value})} required />
        </div>

        {/* Row 3: Passwords */}
        <div className="grid grid-cols-2 gap-4">
          <div className="relative">
            <RiLockPasswordLine className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-xl" />
            <input type={showPass ? "text" : "password"} placeholder="Password" className="w-full pl-12 pr-10 py-4 bg-[#E8EDF2] rounded-xl outline-none focus:ring-2 focus:ring-blue-500 font-medium text-gray-700" 
              onChange={(e) => setFormData({...formData, password: e.target.value})} required />
            <button type="button" onClick={() => setShowPass(!showPass)} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
              {showPass ? <RiEyeLine size={18}/> : <RiEyeCloseLine size={18}/>}
            </button>
          </div>
          <div className="relative">
            <RiLockPasswordLine className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-xl" />
            <input type="password" placeholder="Confirm Password" className="w-full pl-12 pr-4 py-4 bg-[#E8EDF2] rounded-xl outline-none focus:ring-2 focus:ring-blue-500 font-medium text-gray-700" 
              onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})} required />
          </div>
        </div>

        <button className="w-full py-4 bg-[#0056b3] text-white font-black rounded-xl shadow-lg hover:bg-blue-700 transition-all uppercase tracking-widest mt-4">
          Daftar
        </button>
      </form>

      <div className="relative my-8 text-center">
        <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-gray-200"></div></div>
        <span className="relative px-4 bg-white text-[10px] text-gray-400 uppercase font-bold tracking-widest">atau Daftar dengan</span>
      </div>

      <div className="flex gap-4">
        <button className="flex-1 py-3 border border-gray-200 rounded-xl flex justify-center hover:bg-gray-50 transition-all">
          <FcGoogle size={24} />
        </button>
        <button className="flex-1 py-3 border border-gray-200 rounded-xl flex justify-center hover:bg-gray-50 transition-all">
          <FaWindows size={24} className="text-blue-500" />
        </button>
      </div>

      <p className="mt-8 text-center text-sm font-medium text-gray-600">
        Sudah memiliki akun? <Link to="/login" className="text-blue-600 font-bold hover:underline">Masuk</Link>
      </p>
    </div>
  );
};

export default Register;