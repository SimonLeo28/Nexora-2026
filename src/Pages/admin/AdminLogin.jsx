import { motion } from 'framer-motion';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import NeonNodes from '../../Components/NeonNodes.jsx';
import { apiFetch } from '../../lib/api.js';

export default function AdminLogin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const data = await apiFetch('/api/admin/login', {
        method: 'POST',
        body: { username, password },
      });

      localStorage.setItem('nexora_admin_token', data.token);
      // localStorage.setItem('nexora_admin_user', data.admin.username);
      localStorage.setItem('nexora_admin_user', data.user.username);
      navigate('/admin/dashboard');
    } catch (err) {
      setError(err.message || 'Login failed. Check your credentials.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black flex relative overflow-hidden">
      {/* Background glow effects */}
      <NeonNodes>
        <div className="min-h-screen flex items-center justify-center">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-orange-500/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-orange-500/3 rounded-full blur-3xl" />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full max-w-md px-6"
          >
            {/* Logo & Title */}
            <div className="text-center mb-10">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-3 mb-4"
              >
                {/* <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div> */}
                {/* <span className="text-2xl font-bold text-white tracking-widest uppercase">Nexora</span> */}
                <Link
                  to="/"
                  className="flex items-center hover:scale-105 transition-transform duration-300"
                >
                  <img
                    className="h-8 md:h-10 lg:h-12 w-auto"
                    src="/nexora_logo1.png"
                    alt="Nexora Logo"
                  />
                  <p className="text-2xl font-bold text-white tracking-widest uppercase">
                    NEXORA
                  </p>
                </Link>
              </motion.div>
              <h1 className="text-3xl font-bold text-white mb-2">Admin Portal</h1>
              <p className="text-gray-500 text-sm">Authorized personnel only</p>
            </div>

            {/* Login Card */}
            <div className="relative bg-white/[0.03] border border-white/10 rounded-2xl p-8 backdrop-blur-sm shadow-2xl">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-orange-500/5 to-transparent pointer-events-none" />

              <form onSubmit={handleSubmit} className="space-y-5 relative">
                {/* Username */}
                <div>
                  <label className="block text-gray-400 text-sm font-medium mb-2">
                    Username
                  </label>
                  <input
                    id="admin-username"
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                    autoComplete="username"
                    placeholder="Enter admin username"
                    className="w-full bg-transparent border border-white/15 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-orange-500/60 focus:ring-1 focus:ring-orange-500/30 transition-all duration-200"
                  />
                </div>

                {/* Password */}
                <div>
                  <label className="block text-gray-400 text-sm font-medium mb-2">
                    Password
                  </label>
                  <input
                    id="admin-password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    autoComplete="current-password"
                    placeholder="Enter admin password"
                    className="w-full bg-transparent border border-white/15 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-orange-500/60 focus:ring-1 focus:ring-orange-500/30 transition-all duration-200"
                  />
                </div>

                {/* Error */}
                {error && (
                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-red-500/10 border border-red-500/30 rounded-xl px-4 py-3 text-red-400 text-sm"
                  >
                    {error}
                  </motion.div>
                )}

                {/* Submit */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={loading}
                  id="admin-login-btn"
                  className="w-full bg-orange-500 hover:bg-orange-400 disabled:opacity-50 disabled:cursor-not-allowed text-black font-bold py-3.5 rounded-xl transition-all duration-200 shadow-lg shadow-orange-500/20 text-sm tracking-wide uppercase mt-2"
                >
                  {loading ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg className="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Authenticating...
                    </span>
                  ) : (
                    'Login'
                  )}
                </motion.button>
              </form>
            </div>

            <p className="text-center text-gray-600 text-xs mt-6">
              NexoraAI 2026 · Admin Access
            </p>
          </motion.div>
        </div>
      </NeonNodes>
    </div>
  );
}
