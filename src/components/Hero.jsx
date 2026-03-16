import { motion } from "framer-motion";
// import CountdownTimer from "./CountdownTimer";
import { BackgroundPaths } from "./21stdevcomponent";
import CounterDaisy from "./CounterDaisy";
import NeonNodes from "./NeonNodes";

import bvvlogo from "../logos/BVVS logo222.png";
import vtulogo from "../logos/VTU-Logo.png";
import aiemslogo from "../logos/aiemslogo.jpg";

export default function Hero({ children }) {

  const logos = [bvvlogo, vtulogo, aiemslogo];

  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden bg-black text-white pt-6">
      <NeonNodes>
        {/* Background paths rendering strictly behind text but in front of Neon background */}
        <div className="absolute inset-0 z-[1] w-full h-full opacity-60 pointer-events-none mix-blend-screen">
          <BackgroundPaths />
        </div>

        {/* Optional overlay to ensure text legibility */}
        <div className="absolute inset-0 z-[2] bg-gradient-to-b from-black/20 via-black/40 to-black pointer-events-none" />



        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 text-center">
          {/* Logos */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative mt-12 grid grid-cols-3 sm:grid-cols-3 md:grid-cols-3 gap-2 sm:gap-4 items-center justify-items-center max-w-5xl mx-auto mb-8"
          >
            {logos.map((logo, index) => (
              <img
                key={index}
                src={logo}
                alt={`logo-${index}`}
                className="h-8 sm:h-10 md:h-12 lg:h-14 object-contain opacity-80 hover:opacity-100 hover:scale-105 transition duration-300"
              />
            ))}
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-xs md:text-sm font-light tracking-[0.4em] mb-6 text-neon-blue uppercase"
          >
            AIEMS Presents
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-6xl md:text-8xl lg:text-[10rem] font-bold mb-2 tracking-tighter text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]"
          >
            NEXORA
            <span className="block text-3xl md:text-5xl lg:text-7xl font-light text-neon-blue tracking-widest mt-2 drop-shadow-[0_0_15px_rgba(0,191,255,0.4)]">
              2026
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-sm md:text-xl font-light tracking-[0.2em] mb-12 text-gray-400 uppercase max-w-2xl leading-relaxed"
          >
            National Level Hackathon
            <span className="block mt-4 text-xs md:text-sm font-medium tracking-widest">
              Code <span className="mx-3 text-neon-blue">•</span> Innovate <span className="mx-3 text-neon-blue">•</span> Conquer
            </span>
          </motion.p>

          <div className="w-full max-w-6xl mt-4 flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16 px-4">
            {/* Register Button (passed as children from App) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="relative z-20 flex-shrink-0"
            >
              {children}
            </motion.div>

            {/* Countdown */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="w-full md:w-auto"
            >
              {/* <CountdownTimer /> */}
              <CounterDaisy />
            </motion.div>
          </div>
        </div>
      </NeonNodes>
    </section>
  );
}
