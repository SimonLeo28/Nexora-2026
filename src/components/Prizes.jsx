import { motion } from 'framer-motion';

export default function Prizes() {
    const prizes = [
        { place: "Winner", amount: "₹25,000", perks: "Cash + Certificates + Recognition" },
        { place: "1st Runner-up", amount: "₹15,000", perks: "Cash + Certificates + Recognition" },
        { place: "2nd Runner-up", amount: "₹10,000", perks: "Cash + Certificates + Recognition" },
    ];

    return (
        <section id="prizes" className="py-20 md:py-32 container mx-auto px-6">
            <motion.h2
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="text-5xl md:text-5xl font-bold text-center text-neon-white mb-16"
            >
                Prizes & Perks
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {prizes.map((p, i) => (
                    <motion.div
                        key={p.place}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.2 }}
                        className="glass p-10 text-center glow hover-elevate border-t-4 border-neon-blue/60"
                    >
                        <h3 className="text-3xl font-bold text-neon-blue mb-4">{p.place}</h3>
                        <p className="text-4xl font-bold mb-6">{p.amount}</p>
                        <p className="text-soft-blue-gray text-lg">{p.perks}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}