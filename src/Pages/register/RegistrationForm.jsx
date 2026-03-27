// import { useState } from 'react';
// import { motion } from 'framer-motion';

// export default function RegistrationForm() {
//     const [teamName, setTeamName] = useState('');
//     const [leaderName, setLeaderName] = useState('');
//     const [email, setEmail] = useState('');
//     const [phone, setPhone] = useState('');
//     const [collegeName, setCollegeName] = useState('');
//     const [departmentYear, setDepartmentYear] = useState('');
//     const [members, setMembers] = useState([{ name: '', email: '' }]);
//     const [loading, setLoading] = useState(false);
//     const [success, setSuccess] = useState(false);
//     const [error, setError] = useState('');

//     const addMember = () => {
//         if (members.length < 3) {
//             setMembers([...members, { name: '', email: '' }]);
//         }
//     };

//     const removeMember = (index) => {
//         setMembers(members.filter((_, i) => i !== index));
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         setLoading(true);
//         setError('');

//         const formData = {
//             teamName,
//             leaderName,
//             email,
//             phone,
//             collegeName,
//             departmentYear,
//             members
//         };

//         try {
//             const response = await fetch('http://localhost:3000/register', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify(formData),
//             });

//             if (!response.ok) {
//                 throw new Error(`Server error: ${response.status}`);
//             }

//             const data = await response.json();
//             console.log(data)
            
//             setLoading(false);
//             setSuccess(true);
            
//             // Reset form
//             setTeamName('');
//             setLeaderName('');
//             setEmail('');
//             setPhone('');
//             setCollegeName('');
//             setDepartmentYear('');
//             setMembers([{ name: '', email: '' }]);
            
//             setTimeout(() => setSuccess(false), 3000);
//         } catch (err) {
//             setLoading(false);
//             setError(err.message || 'Failed to submit registration');
//             console.error('Registration error:', err);
//             setTimeout(() => setError(''), 3000);
//         }
//     };

//     return (
//         <section id="register" className="py-20 md:py-32 container mx-auto px-6">
//             <motion.h2
//                 initial={{ opacity: 0 }}
//                 whileInView={{ opacity: 1 }}
//                 className="text-4xl md:text-5xl font-bold text-center text-neon-blue mb-16"
//             >
//                 Register Your Team
//             </motion.h2>

//             <form onSubmit={handleSubmit} className="glass p-8 md:p-12 max-w-3xl mx-auto space-y-6">
//                 <div>
//                     <label className="block text-soft-blue-gray mb-2">Team Name</label>
//                     <input required type="text" value={teamName} onChange={(e) => setTeamName(e.target.value)} className="w-full bg-transparent border-2 border-neon-blue/60 rounded-lg p-4 input-glow" />
//                 </div>

//                 <div>
//                     <label className="block text-soft-blue-gray mb-2">Team Leader Name</label>
//                     <input required type="text" value={leaderName} onChange={(e) => setLeaderName(e.target.value)} className="w-full bg-transparent border-2 border-neon-blue/60 rounded-lg p-4 input-glow" />
//                 </div>

//                 <div>
//                     <label className="block text-soft-blue-gray mb-2">Email</label>
//                     <input required type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full bg-transparent border-2 border-neon-blue/60 rounded-lg p-4 input-glow" />
//                 </div>

//                 <div>
//                     <label className="block text-soft-blue-gray mb-2">Phone</label>
//                     <input required type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} className="w-full bg-transparent border-2 border-neon-blue/60 rounded-lg p-4 input-glow" />
//                 </div>

//                 <div>
//                     <label className="block text-soft-blue-gray mb-2">College Name</label>
//                     <input required type="text" value={collegeName} onChange={(e) => setCollegeName(e.target.value)} className="w-full bg-transparent border-2 border-neon-blue/60 rounded-lg p-4 input-glow" />
//                 </div>

//                 <div>
//                     <label className="block text-soft-blue-gray mb-2">Department / Year</label>
//                     <input required type="text" value={departmentYear} onChange={(e) => setDepartmentYear(e.target.value)} className="w-full bg-transparent border-2 border-neon-blue/60 rounded-lg p-4 input-glow" />
//                 </div>

//                 <div className="space-y-4">
//                     <label className="block text-soft-blue-gray">Team Members (excluding leader)</label>
//                     {members.map((m, idx) => (
//                         <div key={idx} className="flex flex-col sm:flex-row gap-4">
//                             <input
//                                 placeholder="Name"
//                                 value={m.name}
//                                 onChange={e => {
//                                     const newM = [...members];
//                                     newM[idx].name = e.target.value;
//                                     setMembers(newM);
//                                 }}
//                                 required
//                                 className="flex-1 bg-transparent border-2 border-neon-blue/60 rounded-lg p-4 input-glow"
//                             />
//                             <input
//                                 placeholder="Email"
//                                 type="email"
//                                 value={m.email}
//                                 onChange={e => {
//                                     const newM = [...members];
//                                     newM[idx].email = e.target.value;
//                                     setMembers(newM);
//                                 }}
//                                 required
//                                 className="flex-1 bg-transparent border-2 border-neon-blue/60 rounded-lg p-4 input-glow"
//                             />
//                             {idx > 0 && (
//                                 <button
//                                     type="button"
//                                     onClick={() => removeMember(idx)}
//                                     className="bg-red-600/70 px-4 py-2 rounded-lg hover:bg-red-600/90"
//                                 >
//                                     Remove
//                                 </button>
//                             )}
//                         </div>
//                     ))}
//                     {members.length < 3 && (
//                         <button
//                             type="button"
//                             onClick={addMember}
//                             className="text-neon-blue hover:underline"
//                         >
//                             + Add Member
//                         </button>
//                     )}
//                 </div>

//                 <motion.button
//                     whileHover={{ scale: 1.03 }}
//                     whileTap={{ scale: 0.97 }}
//                     type="submit"
//                     disabled={loading}
//                     className="w-full py-5 bg-transparent border-2 border-neon-blue font-bold text-xl rounded-xl glow ripple disabled:opacity-50"
//                 >
//                     {loading ? 'Submitting...' : 'Submit Registration'}
//                 </motion.button>

//                 {success && (
//                     <motion.p
//                         initial={{ opacity: 0 }}
//                         animate={{ opacity: 1 }}
//                         className="text-center text-neon-blue text-xl mt-4"
//                     >
//                         Registration Submitted Successfully!
//                     </motion.p>
//                 )}

//                 {error && (
//                     <motion.p
//                         initial={{ opacity: 0 }}
//                         animate={{ opacity: 1 }}
//                         className="text-center text-red-500 text-xl mt-4"
//                     >
//                         Error: {error}
//                     </motion.p>
//                 )}
//             </form>
//         </section>
//     );
// }


import { motion } from 'framer-motion';
import { useState } from 'react';
import { apiFetch } from '../../lib/api.js';

export default function RegistrationForm() {
    const [teamName, setTeamName] = useState('');
    const [leaderName, setLeaderName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [collegeName, setCollegeName] = useState('');
    const [departmentYear, setDepartmentYear] = useState('');
    const [members, setMembers] = useState([{ name: '', phone: '' }]);
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState('');

    const addMember = () => {
        if (members.length < 3) {
            setMembers([...members, { name: '', phone: '' }]);
        }
    };

    const removeMember = (index) => {
        setMembers(members.filter((_, i) => i !== index));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        const formData = {
            teamName,
            leaderName,
            email,
            phone,
            collegeName,
            departmentYear,
            members
        };

        try {
            const data = await apiFetch('/api/register', {
                method: 'POST',
                body: JSON.stringify(formData),
            });
            console.log(data)
            
            setLoading(false);
            setSuccess(true);
            
            // Reset form
            setTeamName('');
            setLeaderName('');
            setEmail('');
            setPhone('');
            setCollegeName('');
            setDepartmentYear('');
            setMembers([{ name: '', phone: '' }]);
            
            setTimeout(() => setSuccess(false), 3000);
        } catch (err) {
            setLoading(false);
            setError(err.message || 'Failed to submit registration');
            console.error('Registration error:', err);
            setTimeout(() => setError(''), 3000);
        }
    };

    return (
        <section id="register" className="py-20 md:py-32 container mx-auto px-6">
            <motion.h2
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="text-4xl md:text-5xl font-bold text-center text-neon-blue mb-16"
            >
                Register Your Team
            </motion.h2>

            <form onSubmit={handleSubmit} className="glass p-8 md:p-12 max-w-3xl mx-auto space-y-6">
                <div>
                    <label className="block text-soft-blue-gray mb-2">Team Name</label>
                    <input required type="text" value={teamName} onChange={(e) => setTeamName(e.target.value)} className="w-full bg-transparent border-2 border-neon-blue/60 rounded-lg p-4 input-glow" />
                </div>

                <div>
                    <label className="block text-soft-blue-gray mb-2">Team Leader Name</label>
                    <input required type="text" value={leaderName} onChange={(e) => setLeaderName(e.target.value)} className="w-full bg-transparent border-2 border-neon-blue/60 rounded-lg p-4 input-glow" />
                </div>

                <div>
                    <label className="block text-soft-blue-gray mb-2">Email</label>
                    <input required type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full bg-transparent border-2 border-neon-blue/60 rounded-lg p-4 input-glow" />
                </div>

                <div>
                    <label className="block text-soft-blue-gray mb-2">Phone</label>
                    <input required type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} className="w-full bg-transparent border-2 border-neon-blue/60 rounded-lg p-4 input-glow" />
                </div>

                <div>
                    <label className="block text-soft-blue-gray mb-2">College Name</label>
                    <input required type="text" value={collegeName} onChange={(e) => setCollegeName(e.target.value)} className="w-full bg-transparent border-2 border-neon-blue/60 rounded-lg p-4 input-glow" />
                </div>

                <div>
                    <label className="block text-soft-blue-gray mb-2">Department / Year</label>
                    <input required type="text" value={departmentYear} onChange={(e) => setDepartmentYear(e.target.value)} className="w-full bg-transparent border-2 border-neon-blue/60 rounded-lg p-4 input-glow" />
                </div>

                <div className="space-y-4">
                    <label className="block text-soft-blue-gray">Team Members (excluding leader)</label>
                    {members.map((m, idx) => (
                        <div key={idx} className="flex flex-col sm:flex-row gap-4">
                            <input
                                placeholder="Name"
                                value={m.name}
                                onChange={e => {
                                    const newM = [...members];
                                    newM[idx].name = e.target.value;
                                    setMembers(newM);
                                }}
                                required
                                className="flex-1 bg-transparent border-2 border-neon-blue/60 rounded-lg p-4 input-glow"
                            />
                            <input
                                placeholder="Phone"
                                type="tel"
                                value={m.phone}
                                onChange={e => {
                                    const newM = [...members];
                                    newM[idx].phone = e.target.value;
                                    setMembers(newM);
                                }}
                                required
                                className="flex-1 bg-transparent border-2 border-neon-blue/60 rounded-lg p-4 input-glow"
                            />
                            {idx > 0 && (
                                <button
                                    type="button"
                                    onClick={() => removeMember(idx)}
                                    className="bg-red-600/70 px-4 py-2 rounded-lg hover:bg-red-600/90"
                                >
                                    Remove
                                </button>
                            )}
                        </div>
                    ))}
                    {members.length < 3 && (
                        <button
                            type="button"
                            onClick={addMember}
                            className="text-neon-blue hover:underline"
                        >
                            + Add Member
                        </button>
                    )}
                </div>

                <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    type="submit"
                    disabled={loading}
                    className="w-full py-5 bg-transparent border-2 border-neon-blue font-bold text-xl rounded-xl glow ripple disabled:opacity-50"
                >
                    {loading ? 'Submitting...' : 'Submit Registration'}
                </motion.button>

                {success && (
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-center text-neon-blue text-xl mt-4"
                    >
                        Registration Submitted Successfully!
                    </motion.p>
                )}

                {error && (
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-center text-red-500 text-xl mt-4"
                    >
                        Error: {error}
                    </motion.p>
                )}
            </form>
        </section>
    );
}