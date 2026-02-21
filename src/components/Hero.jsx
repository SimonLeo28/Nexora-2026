import { motion } from 'framer-motion';
import CountdownTimer from './CountdownTimer';

export default function Hero() {
    return (
        <section id="home" className="min-h-screen flex flex-col justify-center items-center text-center px-4 relative">

            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="text-3xl md:text-3xl text-soft-blue-gray mb-10"
            >
                AIEMS PRESENTS
            </motion.p>


            <motion.h1
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.4 }}
                className="text-5xl sm:text-6xl md:text-7xl lg:text-7xl font-bold mb-6 glitch tracking-tight"
            >
                NEXORA - 2026
            </motion.h1>

            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="text-xl md:text-3xl text-soft-blue-gray mb-10"
            >
                NATIONAL LEVEL HACKATHON
            </motion.p>

            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="text-xl md:text-3xl text-white mb-10"
            >
                Code • Innovate • Conquer
            </motion.p>

            <motion.a
                href="#register"
                whileHover={{ scale: 1.0 }}
                whileTap={{ scale: 0.96 }}
                className="px-8 sm:px-12 py-4 border-2 border-neon-blue font-bold text-lg sm:text-xl rounded-xl glow ripple"
            >
                Register Now
            </motion.a>

            <CountdownTimer />
        </section>
    );
}