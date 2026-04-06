import { motion } from 'framer-motion';
import { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { authFetch } from '../../lib/api.js';

// ─── Stat Card ────────────────────────────────────────────────────────────────
function StatCard({ title, value, subtitle, icon, accent = 'orange', delay = 0 }) {
  const accentMap = {
    orange: 'from-orange-500/10 to-transparent border-orange-500/20 text-orange-400',
    green: 'from-green-500/10 to-transparent border-green-500/20 text-green-400',
    red: 'from-red-500/10 to-transparent border-red-500/20 text-red-400',
    blue: 'from-blue-500/10 to-transparent border-blue-500/20 text-blue-400',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      className={`relative bg-gradient-to-br ${accentMap[accent]} border rounded-2xl p-6 backdrop-blur-sm overflow-hidden`}
    >
      <div className="flex items-start justify-between">
        <div>
          <p className="text-gray-500 text-xs font-medium uppercase tracking-wider mb-1">{title}</p>
          <p className="text-4xl font-bold text-white mt-1">{value ?? '—'}</p>
          {subtitle && <p className="text-gray-500 text-xs mt-1">{subtitle}</p>}
        </div>
        <div className={`text-2xl ${accentMap[accent].split(' ').slice(-1)[0]}`}>{icon}</div>
      </div>
    </motion.div>
  );
}

// ─── Badge ────────────────────────────────────────────────────────────────────
function Badge({ status }) {
  const map = {
    paid: 'bg-green-500/15 text-green-400 border border-green-500/30',
    pending: 'bg-yellow-500/15 text-yellow-400 border border-yellow-500/30',
    failed: 'bg-red-500/15 text-red-400 border border-red-500/30',
    refunded: 'bg-gray-500/15 text-gray-400 border border-gray-500/30',
    registered: 'bg-blue-500/15 text-blue-400 border border-blue-500/30',
    confirmed: 'bg-green-500/15 text-green-400 border border-green-500/30',
    disqualified: 'bg-red-500/15 text-red-400 border border-red-500/30',
    withdrawn: 'bg-gray-500/15 text-gray-400 border border-gray-500/30',
  };
  return (
    <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${map[status] ?? 'bg-gray-500/20 text-gray-400'}`}>
      {status}
    </span>
  );
}

// ─── Main Dashboard ───────────────────────────────────────────────────────────
export default function AdminDashboard() {
  const [stats, setStats] = useState(null);
  const [teams, setTeams] = useState([]);
  const [payments, setPayments] = useState([]);
  const [activeTab, setActiveTab] = useState('teams');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const [abstracts, setAbstracts] = useState([]);

  const adminUser = localStorage.getItem('nexora_admin_user') ?? 'Admin';

  const logout = () => {
    localStorage.removeItem('nexora_admin_token');
    localStorage.removeItem('nexora_admin_user');
    navigate('/admin');
  };

  const fetchData = useCallback(async () => {
    setLoading(true);
    setError('');
    try {
      const [statsData, teamsData, paymentsData, abstractsData] = await Promise.all([
        authFetch('/api/admin/stats'),
        authFetch('/api/admin/teams'),
        authFetch('/api/admin/payments'),
        authFetch('/api/abstracts'),
      ]);
      setStats(statsData.data);
      setTeams(teamsData.data);
      setPayments(paymentsData.data);
      setAbstracts(abstractsData.data);
      
      // Debug: Log payments data to see structure
      console.log('Payments data:', paymentsData.data);
    } catch (err) {
      if (err.message?.includes('401') || err.message?.includes('Unauthorized') || err.message?.toLowerCase().includes('invalid') || err.message?.toLowerCase().includes('expired')) {
        logout();
        return;
      }
      setError(err.message || 'Failed to fetch data. Is the backend running ?');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    const token = localStorage.getItem('nexora_admin_token');
    if (!token) {
      navigate('/admin');
      return;
    }
    fetchData();
  }, [fetchData, navigate]);

  // const formatAmount = (paise) => {
  //   if (!paise) return '₹0';
  //   return `₹${(paise / 1).toLocaleString('en-IN')}`;
  // };
  const formatAmount = (amount) => {
    if (amount === null || amount === undefined) return '₹0';
    return `₹${Number(amount).toLocaleString('en-IN')}`;
  };

  const formatDate = (dateStr) => {
    if (!dateStr) return '—';
    return new Date(dateStr).toLocaleDateString('en-IN', {
      day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit',
    });
  };

  // Calculate total revenue from paid payments
  const calculateTotalRevenue = () => {
    if (!payments || payments.length === 0) {
      console.log('No payments available');
      return 0;
    }
    
    console.log('All payments:', payments);
    console.log('Sample payment:', payments[0]);
    
    const paidPayments = payments.filter(p => {
      // Check both 'status' and 'paymentStatus' fields
      const status = p.status || p.paymentStatus;
      const isPaid = status === 'paid' || status === 'Paid';
      console.log(`Payment ${p.id}: status=${status}, isPaid=${isPaid}, amount=${p.amount}`);
      return isPaid;
    });
    
    console.log('Paid payments:', paidPayments);
    const total = paidPayments.reduce((sum, p) => sum + (Number(p.amount) || 0), 0);
    console.log('Total revenue calculated:', total);
    return total;
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* ── Header ── */}
      <header className="sticky top-0 z-40 border-b border-white/8 bg-black/80 backdrop-blur-md px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
              <svg className="w-4 h-4 text-black" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
            <span className="font-bold text-white tracking-wider uppercase text-sm">Nexora Admin</span>
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={fetchData}
              className="text-gray-500 hover:text-orange-400 transition-colors p-1.5 rounded-lg hover:bg-white/5"
              title="Refresh"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
            </button>
            <span className="text-gray-500 text-sm hidden sm:block">
              Logged in as <span className="text-orange-400 font-medium">{adminUser}</span>
            </span>
            <button
              onClick={logout}
              id="admin-logout-btn"
              className="text-xs text-gray-500 hover:text-red-400 transition-colors border border-white/10 hover:border-red-500/30 px-3 py-1.5 rounded-lg"
            >
              Logout
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-8">
        {/* ── Page Title ── */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white">Dashboard</h1>
          <p className="text-gray-500 text-sm mt-1">Real-time overview of registrations and payments</p>
        </div>

        {/* ── Error Banner ── */}
        {error && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="bg-red-500/10 border border-red-500/30 rounded-xl px-4 py-3 text-red-400 text-sm mb-6 flex items-center gap-2"
          >
            <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm-.75-11.25a.75.75 0 011.5 0v4.5a.75.75 0 01-1.5 0v-4.5zm.75 7.5a.75.75 0 100-1.5.75.75 0 000 1.5z" clipRule="evenodd" />
            </svg>
            {error}
          </motion.div>
        )}

        {/* ── Stat Cards ── */}
        {loading ? (
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="h-28 bg-white/5 rounded-2xl animate-pulse" />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
            <StatCard title="Total Teams" value={stats?.totalTeams} icon="👥" accent="orange" delay={0.0} />
            <StatCard title="Paid Teams" value={stats?.paidTeams} icon="✅" accent="green" delay={0.05} />
            <StatCard title="Pending" value={stats?.pendingTeams} icon="⏳" accent="red" delay={0.1} />
            <StatCard
              title="Revenue"
              value={formatAmount(calculateTotalRevenue())}
              subtitle="Paid registrations"
              icon="₹"
              accent="blue"
              delay={0.15}
            />
            <StatCard title="Participants" value={stats?.totalParticipants} icon="🎯" accent="orange" delay={0.2} />
          </div>
        )}

        {/* ── Tabs ── */}
        <div className="flex gap-1 mb-6 bg-white/5 border border-white/10 rounded-xl p-1 w-fit">
          {[
            { id: 'teams', label: 'Teams', count: teams.length },
            { id: 'payments', label: 'Payments', count: payments.length },
            { id: 'abstracts', label: 'Abstracts', count: abstracts.length },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center gap-2 ${activeTab === tab.id
                ? 'bg-orange-500 text-black shadow-lg shadow-orange-500/20'
                : 'text-gray-400 hover:text-white'
                }`}
            >
              {tab.label}
              <span className={`text-xs px-1.5 py-0.5 rounded-full ${activeTab === tab.id ? 'bg-black/20 text-black' : 'bg-white/10 text-gray-500'}`}>
                {tab.count}
              </span>
            </button>
          ))}
        </div>

        {/* ── Teams Table ── */}
        {activeTab === 'teams' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="bg-white/[0.02] border border-white/8 rounded-2xl overflow-hidden"
          >
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-white/8 bg-white/[0.03]">
                    {['#', 'Team', 'College', 'Leader', 'Contact', 'Dept/Year', 'Payment', 'Register At'].map((h) => (
                      <th key={h} className="text-left px-4 py-3 text-gray-500 text-xs uppercase tracking-wider font-medium whitespace-nowrap">
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {loading
                    ? [...Array(5)].map((_, i) => (
                      <tr key={i} className="border-b border-white/5">
                        {[...Array(8)].map((_, j) => (
                          <td key={j} className="px-4 py-3">
                            <div className="h-4 bg-white/5 rounded animate-pulse w-24" />
                          </td>
                        ))}
                      </tr>
                    ))
                    : teams.length === 0
                      ? (
                        <tr>
                          <td colSpan={8} className="px-4 py-16 text-center text-gray-600">
                            No teams registered yet.
                          </td>
                        </tr>
                      )
                      : teams.map((team, i) => ( //add i as (team, i)
                        <tr key={team.id} className="border-b border-white/5 hover:bg-white/[0.02] transition-colors">
                          <td className="px-4 py-3 text-gray-600 text-xs">{i + 1}</td>
                          {/* <td className="px-4 py-3 text-gray-600 text-xs">{team.id}</td> */}
                          <td className="px-4 py-3">
                            <div className="font-medium text-white">{team.teamName}</div>
                            <div className="text-gray-600 text-xs">{team.theme}</div>
                          </td>
                          <td className="px-4 py-3 text-gray-400 max-w-[150px] truncate">{team.collegeName}</td>
                          <td className="px-4 py-3 text-gray-300 whitespace-nowrap">{team.leaderName}</td>
                          <td className="px-4 py-3">
                            {/* <div className="text-gray-400 text-xs">{team.leaderEmail}</div> */}
                            <div className="text-gray-500 text-xs">{team.leaderPhone}</div>
                          </td>
                          <td className="px-4 py-3 text-gray-500 text-xs whitespace-nowrap">
                            {team.department}{team.year ? ` · ${team.year}` : ''}
                          </td>
                          <td className="px-4 py-3">
                            <Badge status={team.paymentStatus} />
                          </td>
                          <td className="px-4 py-3 text-gray-600 text-xs whitespace-nowrap">
                            {formatDate(team.createdAt)}
                          </td>
                        </tr>
                      ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        )}

        {/* ── Payments Table ── */}
        {activeTab === 'payments' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="bg-white/[0.02] border border-white/8 rounded-2xl overflow-hidden"
          >
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-white/8 bg-white/[0.03]">
                    {['#', 'Team', 'Name', 'Transaction ID', 'Amount', 'Method', 'Status', 'Paid At'].map((h) => (
                      <th key={h} className="text-left px-4 py-3 text-gray-500 text-xs uppercase tracking-wider font-medium whitespace-nowrap">
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {loading
                    ? [...Array(5)].map((_, i) => (
                      <tr key={i} className="border-b border-white/5">
                        {[...Array(8)].map((_, j) => (
                          <td key={j} className="px-4 py-3">
                            <div className="h-4 bg-white/5 rounded animate-pulse w-24" />
                          </td>
                        ))}
                      </tr>
                    ))
                    : payments.length === 0
                      ? (
                        <tr>
                          <td colSpan={8} className="px-4 py-16 text-center text-gray-600">
                            No payment records yet.
                          </td>
                        </tr>
                      )
                      : payments.map((p, i) => (
                        <tr key={p.id || i} className="border-b border-white/5 hover:bg-white/[0.02] transition-colors">
                          <td className="px-4 py-3 text-gray-600 text-xs">{i + 1}</td>
                          <td className="px-4 py-3 text-gray-600 text-xs">{p.id}</td>
                          <td className="px-4 py-3 text-gray-300 whitespace-nowrap">{p.teamName ?? `Team #${p.teamId}`}</td>
                          <td className="px-4 py-3 text-gray-300 whitespace-nowrap">{p.leaderName ?? '—'}</td>
                          <td className="px-4 py-3 text-gray-500 font-mono text-xs">{p.transactionId ?? '—'}</td>
                          <td className="px-4 py-3 text-white font-semibold">{formatAmount(p.amount)}</td>
                          <td className="px-4 py-3 text-gray-500 text-xs">{p.paymentMethod ?? '—'}</td>
                          <td className="px-4 py-3">
                            <Badge status={p.status} />
                          </td>
                          <td className="px-4 py-3 text-gray-600 text-xs whitespace-nowrap">{formatDate(p.paidAt)}</td>
                          {/* <td className="px-4 py-3 text-gray-600 text-xs whitespace-nowrap">{formatDate(p.createdAt)}</td> */}
                        </tr>
                      ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        )}

        {/* ── Abstract Table ── */}
        {activeTab === 'abstracts' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="bg-white/[0.02] border border-white/8 rounded-2xl overflow-hidden"
          >
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-white/8 bg-white/[0.03]">
                    {['#', 'Team', 'Theme', 'Title', 'Description', 'Status', 'Submitted At'].map((h) => (
                      <th key={h} className="text-left px-4 py-3 text-gray-500 text-xs uppercase tracking-wider font-medium whitespace-nowrap">
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {loading
                    ? [...Array(5)].map((_, i) => (
                      <tr key={i} className="border-b border-white/5">
                        {[...Array(6)].map((_, j) => (
                          <td key={j} className="px-4 py-3">
                            <div className="h-4 bg-white/5 rounded animate-pulse w-24" />
                          </td>
                        ))}
                      </tr>
                    ))
                    : abstracts.length === 0
                      ? (
                        <tr>
                          <td colSpan={6} className="px-4 py-16 text-center text-gray-600">
                            No abstracts submitted yet.
                          </td>
                        </tr>
                      )
                      : abstracts.map((a) => (
                        <tr key={a.id} className="border-b border-white/5 hover:bg-white/[0.02] transition-colors">
                          <td className="px-4 py-3 text-gray-600 text-xs">{a.id}</td>
                          {/* <td className="px-4 py-3 text-gray-400">{a.teamId}</td> */}
                          <td className="px-4 py-3 text-gray-400">{a.teamName}</td>
                          <td className="px-4 py-3 text-gray-400">{a.theme}</td>
                          <td className="px-4 py-3 text-white font-medium">{a.title}</td>
                          <td className="px-4 py-3 text-gray-500 max-w-[250px] truncate">{a.description}</td>
                          <td className="px-4 py-3">
                            <Badge status={a.status} />
                          </td>
                          <td className="px-4 py-3 text-gray-600 text-xs">
                            {formatDate(a.createdAt)}
                          </td>
                        </tr>
                      ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        )}
      </main>
    </div>
  );
}
