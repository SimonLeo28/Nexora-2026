import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ShootingStars } from "./ShootingStars";
import { StarsBackground } from "./StarsBackground";

const timelineData = [
  { phase: "01", title: "Registration", text: "Participants register and submit their ideas for the hackathon.", highlights: ["register", "ideas"] },
  { phase: "02", title: "Shortlisting", text: "Selected teams are shortlisted based on innovation and feasibility.", highlights: ["shortlisted", "innovation"] },
  { phase: "03", title: "Hackathon Day", text: "Teams collaborate and build solutions during the 24-hour hackathon.", highlights: ["collaborate", "24-hour"] },
  { phase: "04", title: "Mentoring", text: "Industry mentors guide teams and help refine their solutions.", highlights: ["mentors", "refine"] },
  { phase: "05", title: "Final Pitch", text: "Teams present their projects before judges and audience.", highlights: ["present", "judges"] },
  { phase: "06", title: "Results", text: "Top teams are awarded and recognized for their innovation.", highlights: ["awarded", "innovation"] }
];

// Helper: wraps specific words in orange highlight spans
function highlightText(text, highlights = []) {
  if (!highlights.length) return text;
  const regex = new RegExp(`(${highlights.join("|")})`, "gi");
  const parts = text.split(regex);
  return parts.map((part, idx) =>
    highlights.some((h) => h.toLowerCase() === part.toLowerCase()) ? (
      <span key={idx} className="text-orange-500 font-semibold">{part}</span>
    ) : (
      part
    )
  );
}

export default function TimeLine() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  // Map scroll progress so the neon line starts filling when the section
  // enters the viewport and completes just as the last phase scrolls out.
  const pathLength = useTransform(scrollYProgress, [0.05, 0.85], [0, 1]);

  // The shared SVG path — fits entirely within the 0–2200 viewBox
  const curvePath = `
    M500 0
    C650 200 350 400 500 600
    C650 800 350 1000 500 1200
    C650 1400 350 1600 500 1800
    C650 2000 350 2400 500 2600
  `;

  return (
    <section className="relative py-24 overflow-hidden bg-neutral-950">
      {/* Background Layer: stars and shooting stars - positioned to fill the section */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <StarsBackground />
        <ShootingStars />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-5xl md:text-6xl font-bold text-center text-white mb-24 tracking-tight">
          Event <span className="text-orange-500">Timeline</span>
        </h2>

        <div ref={ref} className="relative max-w-6xl mx-auto">
          {/* Curved Timeline Path */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none hidden md:block"
            viewBox="0 0 1000 2200"
            preserveAspectRatio="none"
            style={{ height: '94%', top: '0' }}
          >
            {/* Base White Curve */}
            <path
              d={curvePath}
              stroke="white"
              strokeWidth="3"
              fill="none"
              opacity="0.1"
            />

            {/* Animated Neon Blue Curve */}
            <motion.path
              d={curvePath}
              stroke="#ff6200ff"
              strokeWidth="3"
              fill="none"
              strokeLinecap="round"
              style={{ pathLength }}
              filter="drop-shadow(0 0 8px #ff6200ff)"
            />
          </svg>

          {timelineData.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className={`flex items-center mb-32 ${i % 2 === 0 ? "md:flex-row-reverse" : ""}`}
            >
              {/* Text Card */}
              <div className="w-full md:w-1/2 p-4">
                <div className="bg-transparent p-8 hover:scale-[1.02] transition-all duration-300 border border-orange-500/40 hover:border-orange-500 rounded-xl group shadow-[0_0_15px_rgba(255,107,0,0.1)] hover:shadow-[0_0_25px_rgba(255,107,0,0.2)]">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-orange-500 font-mono text-sm tracking-widest uppercase bg-orange-500/10 px-3 py-1 rounded-full border border-orange-500/30">
                      Phase {item.phase}
                    </span>
                  </div>

                  <h3 className="text-3xl font-bold text-white group-hover:text-orange-500 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-white/80 mt-4 text-lg leading-relaxed">
                    {highlightText(item.text, item.highlights)}
                  </p>
                </div>
              </div>

              {/* Timeline Dot */}
              <div className="hidden md:flex items-center justify-center w-20">
                <div className="w-6 h-6 rounded-full bg-orange-500 shadow-[0_0_20px_#ff6200ff] z-10 border-4 border-black" />
              </div>

              {/* Spacer */}
              <div className="hidden md:block w-1/2" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}