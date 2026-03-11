import { motion } from "framer-motion";
import CountdownTimer from "./CountdownTimer";
// import BackgroundPaths from 'https://21st.dev/kokonutd/background-paths/default';
import aiemslogo from "../logos/aiemslogo.jpg";
import bvvlogo from "../logos/BVVS logo222.png";
import vtulogo from "../logos/VTU-Logo.png";

export default function Hero() {

    const logos = [
        bvvlogo, vtulogo, aiemslogo,
    ];

    return (
        <section
            id="home"
            className="relative min-h-[100svh] flex flex-col justify-center items-center text-center px-3 sm:px-6 md:px-8 overflow-hidden"
        >

            {/* Background Video */}
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover -z-10"
            >
                <source src="/videos/bg-video6.mp4" type="video/mp4" />
            </video>

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/35 -z-10"></div>


            {/* Logos */}
            <motion.div
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="
                mt-12
                grid
                grid-cols-3
                sm:grid-cols-3
                md:grid-cols-3
                gap-2
                sm:gap-6
                items-center
                justify-items-center
                w-full
                max-w-md
                sm:max-w-lg
                md:max-w-xl
                mb-8
                "
            >
                {logos.map((logo, index) => (
                    <img
                        key={index}
                        src={logo}
                        alt={`logo-${index}`}
                        className="
                        h-8
                        sm:h-10
                        md:h-16
                        lg:h-18
                        object-contain
                        opacity-80
                        hover:opacity-100
                        hover:scale-105
                        transition
                        duration-300
                        "
                    />
                ))}
            </motion.div>


            {/* AIEMS PRESENTS */}
            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="
                text-sm
                sm:text-base
                md:text-lg
                text-gray-300
                tracking-widest
                mb-4
                "
            >
                AIEMS PRESENTS
            </motion.p>


            {/* Title */}
            <motion.h1
                initial={{ opacity: 0, y: 70 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="
                text-4xl
                sm:text-5xl
                md:text-6xl
                lg:text-7xl
                xl:text-8xl
                font-extrabold
                mb-4
                text-white
                tracking-tight
                "
            >
                NEXORA 2026
            </motion.h1>


            {/* Subtitle */}
            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="
                text-lg
                sm:text-xl
                md:text-2xl
                lg:text-3xl
                text-gray-200
                mb-4
                "
            >
                NATIONAL LEVEL HACKATHON
            </motion.p>


            {/* Tagline */}
            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="
                text-sm
                sm:text-base
                md:text-lg
                text-gray-300
                mb-8
                "
            >
                Code • Innovate • Conquer
            </motion.p>


            {/* Register Button */}
            <motion.a
                href="https://forms.gle/DamccNwnjHAnsFuq5"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="
                px-6
                sm:px-8
                md:px-10
                py-3
                sm:py-4
                bg-blue-500
                hover:bg-blue-400
                text-black
                font-bold
                text-sm
                sm:text-base
                md:text-lg
                rounded-xl
                shadow-lg
                transition
                "
            >
                 Register Now
            </motion.a>


            {/* Countdown */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="
                mt-6
                sm:mt-8
                p-4
                sm:p-5
                rounded-xl
                bg-white/10
                backdrop-blur-md
                border
                border-white/20
                w-full
                max-w-xl
                "
            >
                <CountdownTimer />
            </motion.div>

        </section>
    );
}