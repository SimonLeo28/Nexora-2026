import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const timelineData = [
  { phase: "01", title: "Registration", text: "Participants register and submit their ideas for the hackathon." },
  { phase: "02", title: "Shortlisting", text: "Selected teams are shortlisted based on innovation and feasibility." },
  { phase: "03", title: "Hackathon Day", text: "Teams collaborate and build solutions during the 24-hour hackathon." },
  { phase: "04", title: "Mentoring", text: "Industry mentors guide teams and help refine their solutions." },
  { phase: "05", title: "Final Pitch", text: "Teams present their projects before judges and audience." },
  { phase: "06", title: "Results", text: "Top teams are awarded and recognized for their innovation." }
];

export default function TimeLine() {

  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"]
  });

  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);
  

  return (
    <section className="relative py-24 container mx-auto px-6">

      <h2 className="text-5xl font-bold text-center text-neon-white mb-20">
        Timeline
      </h2>

      <div ref={ref} className="relative max-w-6xl mx-auto">

        {/* Curved Timeline Path */}
        <svg
          className="absolute inset-0 w-full h-[1835px] pointer-events-none hidden md:block"
          viewBox="0 0 1000 1600"
          preserveAspectRatio="none"
        >

          {/* Base White Curve */}
          <path
            d="
              M500 0
              C650 200 350 400 500 600
              C650 800 350 1000 500 1200
              C650 1400 350 1500 500 1600
              C650 1800 350 2000 500 2200
            "
            stroke="white"
            strokeWidth="3"
            fill="none"
            opacity="0.25"
          />

          {/* Animated Neon Blue Curve */}
          <motion.path
            d="
              M500 0
              C650 200 350 400 500 600
              C650 800 350 1000 500 1200
              C650 1400 350 1500 500 1600
              C650 1800 350 2000 500 2200
            "
            stroke="#00f7ff"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
            style={{ pathLength }}
            filter="drop-shadow(0 0 8px #00f7ff)"
          />

        </svg>

        {timelineData.map((item, i) => (

          <motion.div
            key={i}
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className={`flex items-center mb-24 ${i % 2 === 0 ? "md:flex-row-reverse" : ""}`}
          >

            {/* Text Card */}
            <div className="w-full md:w-1/2 p-6">

              <div className="glass p-8 hover:scale-105 transition">

                <span className="text-orange-400 text-sm tracking-widest">
                  PHASE {item.phase}
                </span>

                <h3 className="text-2xl font-bold text-white mt-2">
                  {item.title}
                </h3>

                <p className="text-soft-blue-gray mt-4 leading-relaxed">
                  {item.text}
                </p>

              </div>

            </div>

            {/* Timeline Dot */}
            <div className="hidden md:flex items-center justify-center w-12">

              <div className="w-5 h-5 rounded-full bg-orange-500 shadow-[0_0_15px_#ff5a00] z-10" />

            </div>

            {/* Spacer */}
            <div className="hidden md:block w-1/2" />

          </motion.div>

        ))}

      </div>

    </section>
  );
}



// import { motion, useScroll, useTransform } from "framer-motion";
// import { useEffect, useRef, useState } from "react";

// const timelineData = [
//   { phase: "01", title: "Registration", text: "Participants register and submit their ideas for the hackathon." },
//   { phase: "02", title: "Shortlisting", text: "Selected teams are shortlisted based on innovation and feasibility." },
//   { phase: "03", title: "Hackathon Day", text: "Teams collaborate and build solutions during the 24-hour hackathon." },
//   { phase: "04", title: "Mentoring", text: "Industry mentors guide teams and help refine their solutions." },
//   { phase: "05", title: "Final Pitch", text: "Teams present their projects before judges and audience." },
//   { phase: "06", title: "Results", text: "Top teams are awarded and recognized for their innovation." }
// ];

// export default function TimeLine() {

//   const ref = useRef(null);
//   const pathRef = useRef(null);
//   const [dots, setDots] = useState([]);

//   const { scrollYProgress } = useScroll({
//     target: ref,
//     offset: ["start start", "end end"]
//   });

//   const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);

//   useEffect(() => {

//     if (!pathRef.current) return;

//     const path = pathRef.current;
//     const totalLength = path.getTotalLength();

//     const newDots = timelineData.map((_, i) => {

//       const point = path.getPointAtLength(
//         (totalLength / (timelineData.length - 1)) * i
//       );

//       return { x: point.x, y: point.y };

//     });

//     setDots(newDots);

//   }, []);

//   return (
//     <section className="relative py-24 container mx-auto px-6">

//       <h2 className="text-5xl font-bold text-center text-neon-white mb-20">
//         Timeline
//       </h2>

//       <div ref={ref} className="relative max-w-6xl mx-auto">

//         {/* CURVED SVG TIMELINE */}
//         <svg
//           className="absolute inset-0 w-full h-[1835px] pointer-events-none hidden md:block"
//           viewBox="0 0 1000 2200"
//           preserveAspectRatio="none"
//         >

//           {/* Base curve */}
//           <path
//             ref={pathRef}
//             d="
//               M500 0
//               C650 200 350 400 500 600
//               C650 800 350 1000 500 1200
//               C650 1400 350 1500 500 1600
//               C650 1800 350 2000 500 2200
//             "
//             stroke="white"
//             strokeWidth="3"
//             fill="none"
//             opacity="0.25"
//           />

//           {/* Animated scroll curve */}
//           <motion.path
//             d="
//               M500 0
//               C650 200 350 400 500 600
//               C650 800 350 1000 500 1200
//               C650 1400 350 1500 500 1600
//               C650 1800 350 2000 500 2200
//             "
//             stroke="#00f7ff"
//             strokeWidth="3"
//             fill="none"
//             strokeLinecap="round"
//             style={{ pathLength }}
//             filter="drop-shadow(0 0 8px #00f7ff)"
//           />

//           {/* ORANGE DOTS */}
//           {dots.map((dot, i) => (
//             <circle
//               key={i}
//               cx={dot.x}
//               cy={dot.y}
//               r="8"
//               fill="#ff5a00"
//               style={{ filter: "drop-shadow(0 0 12px #ff5a00)" }}
//             />
//           ))}

//         </svg>

//         {/* TIMELINE CARDS */}
//         {timelineData.map((item, i) => {

//           const start = i / timelineData.length;

//           const opacity = useTransform(
//             scrollYProgress,
//             [start, start + 0.18],
//             [0, 4]
//           );

//           const y = useTransform(
//             scrollYProgress,
//             [start, start + 0.18],
//             [80, 0]
//           );

//           return (

//             <motion.div
//               key={i}
//               style={{ opacity, y }}
//               className={`flex items-center mb-24 ${
//                 i % 2 === 0 ? "md:flex-row-reverse" : ""
//               }`}
//             >

//               <div className="w-full md:w-1/2 p-6">

//                 <div className="glass p-8 hover:scale-105 transition">

//                   <span className="text-orange-400 text-sm tracking-widest">
//                     PHASE {item.phase}
//                   </span>

//                   <h3 className="text-2xl font-bold text-white mt-2">
//                     {item.title}
//                   </h3>

//                   <p className="text-soft-blue-gray mt-4 leading-relaxed">
//                     {item.text}
//                   </p>

//                 </div>

//               </div>

//               <div className="hidden md:block w-1/2" />

//             </motion.div>

//           );

//         })}

//       </div>

//     </section>
//   );
// }