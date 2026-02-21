import { useState } from 'react';
import { motion } from 'framer-motion';

export default function RegistrationForm() {
    const [members, setMembers] = useState([{ name: '', email: '' }]);
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    const addMember = () => {
        if (members.length < 3) {
            setMembers([...members, { name: '', email: '' }]);
        }
    };

    const removeMember = (index) => {
        setMembers(members.filter((_, i) => i !== index));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            setSuccess(true);
            setTimeout(() => setSuccess(false), 3000);
            // Reset form here if needed
        }, 1800);
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
                    <input required type="text" className="w-full bg-transparent border-2 border-neon-blue/60 rounded-lg p-4 input-glow" />
                </div>

                <div>
                    <label className="block text-soft-blue-gray mb-2">Team Leader Name</label>
                    <input required type="text" className="w-full bg-transparent border-2 border-neon-blue/60 rounded-lg p-4 input-glow" />
                </div>

                <div>
                    <label className="block text-soft-blue-gray mb-2">Email</label>
                    <input required type="email" className="w-full bg-transparent border-2 border-neon-blue/60 rounded-lg p-4 input-glow" />
                </div>

                <div>
                    <label className="block text-soft-blue-gray mb-2">Phone</label>
                    <input required type="tel" className="w-full bg-transparent border-2 border-neon-blue/60 rounded-lg p-4 input-glow" />
                </div>

                <div>
                    <label className="block text-soft-blue-gray mb-2">College Name</label>
                    <input required type="text" className="w-full bg-transparent border-2 border-neon-blue/60 rounded-lg p-4 input-glow" />
                </div>

                <div>
                    <label className="block text-soft-blue-gray mb-2">Department / Year</label>
                    <input required type="text" className="w-full bg-transparent border-2 border-neon-blue/60 rounded-lg p-4 input-glow" />
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
                                placeholder="Email"
                                type="email"
                                value={m.email}
                                onChange={e => {
                                    const newM = [...members];
                                    newM[idx].email = e.target.value;
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
            </form>
        </section>
    );
}