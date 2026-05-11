import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { RiUserLine, RiLockPasswordLine, RiEyeLine, RiEyeCloseLine } from 'react-icons/ri';
import { FcGoogle } from 'react-icons/fc';
import { FaWindows } from 'react-icons/fa';
import axios from 'axios';

const Login = () => {
  const [username, setUsername] = useState(''); // DummyJSON menggunakan username, bukan email
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const response = await axios.post('https://dummyjson.com/auth/login', {
        username: username,
        password: password,
        expiresInMins: 60, // optional
      }, {
        headers: { 'Content-Type': 'application/json' }
      });

      if (response.data.accessToken) {
        // 1. Simpan Token ke LocalStorage
        localStorage.setItem('userToken', response.data.accessToken);
        localStorage.setItem('userData', JSON.stringify(response.data));

        // 2. Redirect ke Dashboard
        console.log('Login Berhasil:', response.data);
        navigate('/dashboard');
      }
    } catch (err) {
      console.error(err);
      setError('Username atau password salah (Gunakan: emilys / emilyspass)');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white p-10 rounded-[40px] shadow-2xl border border-gray-100/50 w-full">
      <div className="text-center mb-10">
        <h3 className="text-2xl font-black text-gray-900 uppercase leading-tight tracking-tight">
          Login ke Sistem Informasi<br/>Percetakan
        </h3>
        <p className="text-gray-500 mt-2 text-sm font-medium">Silahkan masukkan kredensial anda</p>
      </div>

      {/* Tampilkan Pesan Error jika Login Gagal */}
      {error && (
        <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 text-xs rounded-lg text-center font-bold">
          {error}
        </div>
      )}

      <form className="space-y-4" onSubmit={handleLogin}>
        <div className="relative">
          <RiUserLine className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-xl" />
          <input 
            type="text" 
            placeholder="Username (contoh: emilys)" 
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            className="w-full pl-12 pr-4 py-4 bg-[#E8EDF2] rounded-xl outline-none focus:ring-2 focus:ring-blue-500 transition-all font-medium text-gray-700" 
          />
        </div>

        <div className="relative">
          <RiLockPasswordLine className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-xl" />
          <input 
            type={showPassword ? "text" : "password"} 
            placeholder="Password (contoh: emilyspass)" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full pl-12 pr-12 py-4 bg-[#E8EDF2] rounded-xl outline-none focus:ring-2 focus:ring-blue-500 transition-all font-medium text-gray-700" 
          />
          <button 
            type="button" 
            onClick={() => setShowPassword(!showPassword)} 
            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
          >
            {showPassword ? <RiEyeLine size={20}/> : <RiEyeCloseLine size={20}/>}
          </button>
        </div>

        <div className="text-right">
          <button type="button" className="text-xs font-bold text-gray-600 hover:text-blue-600 transition-colors">
            Lupa Kata Sandi?
          </button>
        </div>

        <button 
          type="submit" 
          disabled={loading}
          className={`w-full py-4 ${loading ? 'bg-gray-400' : 'bg-[#0056b3]'} text-white font-black rounded-xl shadow-lg hover:bg-blue-700 transition-all uppercase tracking-widest mt-2`}
        >
          {loading ? 'Memproses...' : 'Masuk'}
        </button>
      </form>

      <div className="relative my-8 text-center">
        <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-gray-200"></div></div>
        <span className="relative px-4 bg-white text-[10px] text-gray-400 uppercase font-bold tracking-widest">atau Masuk dengan</span>
      </div>

      <div className="flex gap-4">
        <button className="flex-1 py-3 border border-gray-200 rounded-xl flex justify-center hover:bg-gray-50 transition-all shadow-sm">
          <FcGoogle size={24} />
        </button>
        <button className="flex-1 py-3 border border-gray-200 rounded-xl flex justify-center hover:bg-gray-50 transition-all shadow-sm">
          <FaWindows size={24} className="text-blue-500" />
        </button>
      </div>
    </div>
  );
};

export default Login;