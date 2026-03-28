// import { motion } from "framer-motion";
// // import CountdownTimer from "./CountdownTimer";
// import { BackgroundPaths } from "./21stdevcomponent";
// import CounterDaisy from "./CounterDaisy";
// import NeonNodes from "./NeonNodes";

// import bvvlogo from "../logos/BVVS logo222.png";
// import vtulogo from "../logos/VTU-Logo.png";
// import aiemslogo from "../logos/aiemslogo.jpg";

// export default function Hero({ children }) {

//   const logos = [bvvlogo, vtulogo, aiemslogo];

//   return (
//     <section id="home" className="relative min-h-screen w-full overflow-hidden bg-black text-white pt-4">
//       <NeonNodes>
//         {/* Background paths rendering strictly behind text but in front of Neon background */}
//         <div className="absolute inset-0 z-[1] w-full h-full opacity-60 pointer-events-none mix-blend-screen">
//           <BackgroundPaths />
//         </div>

//         {/* Optional overlay to ensure text legibility */}
//         <div className="absolute inset-0 z-[2] bg-gradient-to-b from-black/20 via-black/40 to-black pointer-events-none" />



//         <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 text-center">
//           {/* Logos */}
//           <motion.div
//             initial={{ opacity: 0, y: -30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             className="relative mt-12 grid grid-cols-3 sm:grid-cols-3 md:grid-cols-3 gap-2 sm:gap-4 items-center justify-items-center max-w-5xl mx-auto mb-6"
//           >
//             {logos.map((logo, index) => (
//               <img
//                 key={index}
//                 src={logo}
//                 alt={`logo-${index}`}
//                 className="h-8 sm:h-10 md:h-12 lg:h-14 object-contain opacity-80 hover:opacity-100 hover:scale-105 transition duration-300"
//               />
//             ))}
//           </motion.div>

//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             className="text-xs md:text-2xl font-light tracking-[0.4em] mb-2 uppercase text-orange-500 decoration-white"
//           >
//             AMRUTA INSTITUTE OF ENGINEERING AND MANAGEMENT SCIENCES, <br/> Bidadi, BENGALURU - 562109
//           </motion.p>

//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             className="text-xs md:text-sm font-light tracking-[0.4em] mb-2 uppercase text-white pl-6 pr-6"
//           >
//             Recognized & Approved by Govt. of Karnataka, AICTE & UGC, New Delhi, <br/>Accredited by NAAC with B++
//           </motion.p>

//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             className="text-xs md:text-sm font-light tracking-[0.4em] mb-2 uppercase text-orange-500 underline decoration-white underline-offset-8"
//           >
//             Presents
//           </motion.p>

//           <motion.h1
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1, delay: 0.2 }}
//             className="text-6xl md:text-8xl lg:text-[8rem] font-bold mb-2 tracking-tighter text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]"
//           >
//             NEXORA
//             <span className="block text-3xl md:text-5xl lg:text-7xl font-light text-orange-500 tracking-widest mt-2 drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]">
//               2026
//             </span>
//           </motion.h1>

//           <motion.p
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 1, delay: 0.4 }}
//             className="text-sm md:text-xl font-light tracking-[0.2em] mb-2 text-gray-400 uppercase max-w-2xl leading-relaxed"
//           >
//             National Level Hackathon
//             <span className="block mt-4 text-xs md:text-sm font-medium tracking-widest">
//               Code <span className="mx-3 text-orange-500">•</span> Innovate <span className="mx-3 text-orange-500">•</span> Conquer
//             </span>
//           </motion.p>

//           <div className="w-full max-w-6xl mt-4 flex flex-col md:flex-row items-center justify-center gap-6 md:gap-16 px-4">
//             {/* Register Button (passed as children from App) */}
//             <motion.div
//               initial={{ opacity: 0, scale: 0.9 }}
//               animate={{ opacity: 1, scale: 1 }}
//               transition={{ duration: 0.8, delay: 0.6 }}
//               className="relative z-20 flex-shrink-0"
//             >
//               {children}
//             </motion.div>

//             {/* Countdown */}
//             <motion.div
//               initial={{ opacity: 0, x: 20 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.8, delay: 0.8 }}
//               className="w-full md:w-auto"
//             >
//               {/* <CountdownTimer /> */}
//               <CounterDaisy />
//             </motion.div>
//           </div>
//         </div>
//       </NeonNodes>
//     </section>
//   );
// }






// //  new code
// import { motion } from "framer-motion";
// import { BackgroundPaths } from "./21stdevcomponent"; // comment out if you don't want any background lines/rays
// import CounterDaisy from "./CounterDaisy";
// import NeonNodes from "./NeonNodes";

// import bvvlogo from "../logos/BVVS logo222.png";
// import vtulogo from "../logos/VTU-Logo.png";
// import aiemslogo from "../logos/aiemslogo.jpg";

// export default function Hero({ children }) {
//   const logos = [bvvlogo, vtulogo, aiemslogo];

//   return (
//     <section
//       id="home"
//       className="relative min-h-screen w-full overflow-hidden bg-black text-white pt-6 md:pt-0"
//     >
//       <NeonNodes>
//         {/* Optional subtle background paths/lines – remove this div if unwanted */}
//         <div className="absolute inset-0 z-[1] opacity-30 pointer-events-none mix-blend-screen">
//           <BackgroundPaths />
//         </div>

//         {/* Overlay for better text readability */}
//         <div className="absolute inset-0 z-[2] bg-gradient-to-b from-black/20 via-black/45 to-black/90 pointer-events-none" />

//         {/* ──────────────────────────────────────────────── */}
//         {/* Main content → RIGHT aligned on desktop */}
//         <div className="relative z-10 flex flex-col items-center md:items-end justify-center min-h-screen px-6 md:px-10 lg:px-16 xl:px-24 text-center md:text-right">
//           {/* Logos – keep centered at top */}
//           <motion.div
//             initial={{ opacity: 0, y: -40 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.9 }}
//             className="mt-12 md:mt-20 grid grid-cols-3 gap-5 md:gap-10 items-center justify-items-center max-w-sm md:max-w-2xl mx-auto mb-12 md:mb-20"
//           >
//             {logos.map((logo, index) => (
//               <img
//                 key={index}
//                 src={logo}
//                 alt={`partner logo ${index + 1}`}
//                 className="h-10 sm:h-11 md:h-12 lg:h-14 object-contain opacity-80 hover:opacity-100 transition-all duration-300 hover:scale-105"
//               />
//             ))}
//           </motion.div>

//           {/* Subtitle */}
//           <motion.p
//             initial={{ opacity: 0, y: 25 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.1 }}
//             className="text-xs md:text-sm font-light tracking-[0.4em] mb-4 md:mb-6 text-orange-500 uppercase"
//           >
//             AIEMS Presents
//           </motion.p>

//           {/* Main Title */}
//           <motion.h1
//             initial={{ opacity: 0, y: 35 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1, delay: 0.25 }}
//             className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[11rem] font-black leading-none tracking-tighter text-white drop-shadow-[0_0_24px_rgba(255,255,255,0.15)]"
//           >
//             NEXORA
//             <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light text-orange-500 tracking-[0.15em] mt-2 md:mt-4 drop-shadow-[0_0_30px_rgba(255,107,0,0.45)]">
//               2026
//             </span>
//           </motion.h1>

//           {/* Tagline / description */}
//           <motion.p
//             initial={{ opacity: 0, y: 25 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1, delay: 0.45 }}
//             className="mt-6 md:mt-8 text-base sm:text-lg md:text-xl lg:text-2xl font-light tracking-wide text-gray-300 max-w-md md:max-w-xl lg:max-w-2xl"
//           >
//             National Level Hackathon
//             <span className="block mt-4 text-sm md:text-base lg:text-lg font-medium tracking-widest text-gray-400">
//               Code <span className="mx-4 text-orange-500">•</span> Innovate <span className="mx-4 text-orange-500">•</span> Conquer
//             </span>
//           </motion.p>

//           {/* Buttons + Countdown */}
//           <div className="mt-10 md:mt-14 w-full max-w-md md:max-w-xl flex flex-col md:flex-row items-center md:items-end justify-center md:justify-end gap-6 md:gap-10">
//             {/* Register button */}
//             <motion.div
//               initial={{ opacity: 0, scale: 0.92 }}
//               animate={{ opacity: 1, scale: 1 }}
//               transition={{ duration: 0.8, delay: 0.65 }}
//               className="w-full md:w-auto flex justify-center md:justify-end"
//             >
//               {children}
//             </motion.div>

//             {/* Countdown */}
//             <motion.div
//               initial={{ opacity: 0, x: -40 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.9, delay: 0.8 }}
//               className="w-full md:w-auto flex justify-center md:justify-end"
//             >
//               <CounterDaisy />
//             </motion.div>
//           </div>
//         </div>
//       </NeonNodes>
//     </section>
//   );
// }  



import { motion } from "framer-motion";
import { BackgroundPaths } from "./21stdevcomponent";
import CounterDaisy from "./CounterDaisy";
import NeonNodes from "./NeonNodes";

import bvvlogo from "../logos/BVVS logo222.png";
import vtulogo from "../logos/VTU-Logo.png";
import aiemslogo from "../logos/aiemslogo.jpg";

export default function Hero({ children }) {
  const logos = [bvvlogo, vtulogo, aiemslogo];

  return (
    <section
      id="home"
      className="relative h-screen w-full overflow-hidden bg-black text-white font-sans selection:bg-orange-500/30 pt-6"
    >
      <NeonNodes>
        {/* Background Layers */}
        <div className="absolute inset-0 z-[1] w-full h-full opacity-40 pointer-events-none mix-blend-screen">
          <BackgroundPaths />
        </div>
        <div className="absolute inset-0 z-[2] bg-gradient-to-b from-black/40 via-transparent to-black pointer-events-none" />

        {/* Main Content Container - Forced to 100vh with flex-col */}
        <div className="relative z-10 flex flex-col items-center justify-between h-screen w-full px-4 py-6 md:py-10 text-center">
          
          {/* 1. Header Area (Logos & College) */}
          <div className="flex flex-col items-center gap-4 w-full">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center justify-center gap-4 md:gap-8"
            >
              {logos.map((logo, index) => (
                <img
                  key={index}
                  src={logo}
                  alt="Partner Logo"
                  className="h-8 sm:h-12 md:h-14 lg:h-16 w-auto object-contain brightness-110"
                />
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="space-y-1"
            >
              <h2 className="text-sm sm:text-lg md:text-2xl lg:text-3xl font-extrabold tracking-tight uppercase text-orange-500">
                Amruta Institute of Engineering and Management Sciences
              </h2>
              <p className="text-[10px] sm:text-xs md:text-sm font-medium tracking-[0.2em] text-gray-300 uppercase">
                Bidadi, Bengaluru - 562 109
              </p>
              <p className="text-[9px] sm:text-[11px] md:text-xs font-light tracking-widest text-white/80">
                Recognized & Approved by Govt. of Karnataka, AICTE & UGC, New Delhi, Accredited by NAAC with <span className="text-orange-400 font-bold">B++</span>
              </p>
            </motion.div>
          </div>

          {/* 2. Hero Core (NEXORA 2026) */}
          <div className="flex flex-col items-center justify-center flex-grow py-2">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-[10px] sm:text-xs font-bold tracking-[0.5em] uppercase text-orange-500 mb-2"
            >
              Presents
            </motion.p>
            
            <motion.h1
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="text-7xl sm:text-8xl md:text-9xl lg:text-[11rem] font-black tracking-tighter leading-none"
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-500">
                NEXORA
              </span>
              <span className="block text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-thin text-orange-500 tracking-[0.2em] sm:mt-2">
                2026
              </span>
            </motion.h1>

            <motion.div className="mt-4 space-y-2">
              <p className="text-xs sm:text-sm md:text-xl font-light tracking-[0.3em] text-gray-400 uppercase">
                National Level Hackathon
              </p>
              <div className="flex items-center justify-center gap-3 text-[9px] sm:text-xs md:text-sm font-bold tracking-widest text-white/90 uppercase">
                <span>Code</span>
                <span className="w-1 h-1 rounded-full bg-orange-500" />
                <span>Innovate</span>
                <span className="w-1 h-1 rounded-full bg-orange-500" />
                <span>Conquer</span>
              </div>
            </motion.div>

            {/* DATE ADDITION */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 }}
                  className="px-4 py-1 border-y border-white/10"
                >
                  <p className="text-[11px] sm:text-sm md:text-lg font-bold tracking-[0.1em] text-orange-500 uppercase">
                    24<sup className="lowercase">th</sup> & 25<sup className="lowercase">th</sup>, April 2026
                  </p>
                </motion.div>
          </div>

          {/* 3. Footer Area (CTA & Countdown) */}
          <div className="w-full max-w-6xl flex flex-col md:flex-row items-center justify-center gap-6 md:gap-16 pb-4 sm:pb-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="z-20 transform scale-90 sm:scale-100"
            >
              {children}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="w-full md:w-auto flex justify-center scale-75 sm:scale-90 md:scale-100"
            >
              <CounterDaisy />
            </motion.div>
          </div>

        </div>
      </NeonNodes>
    </section>
  );
}