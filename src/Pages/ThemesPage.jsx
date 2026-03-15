import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { ShootingStars } from "../components/ShootingStars";
import { StarsBackground } from "../components/StarsBackground";
import Footer from "../components/Footer";
const problems = [
  {
    id: 1,
    title: "Sustainable Urban Mobility",
    description:
      "Design a solution to reduce traffic congestion and carbon emissions in Bengaluru using smart technology.",
    longDescription:
      "Participants are challenged to create innovative applications, hardware, or systems that improve daily commuting while being environmentally friendly. Think AI route optimization, shared mobility, EV infrastructure, last-mile solutions, predictive traffic management, or gamified public transport incentives.",
  },
  {
    id: 2,
    title: "AI for Healthcare Access",
    description:
      "Build tools to make quality healthcare more accessible in tier-2/3 cities and rural areas.",
    longDescription:
      "Focus on telemedicine platforms, AI-assisted diagnostics, low-cost wearable monitoring devices, multilingual symptom checkers, predictive outbreak models, medicine supply-chain transparency, or offline-first health record systems suitable for low-connectivity regions.",
  },
  {
    id: 3,
    title: "Waste to Wealth",
    description:
      "Transform waste materials into valuable products or energy sources.",
    longDescription:
      "Ideas can include plastic upcycling into building materials, large-scale organic waste composting systems, innovative e-waste recovery techniques, small-scale waste-to-energy units, circular economy marketplaces, AI-powered waste sorting, or community-level recycling reward apps.",
  },
  {
    id: 4,
    title: "Financial Inclusion 2.0",
    description:
      "Create next-generation solutions for unbanked and underbanked populations.",
    longDescription:
      "Explore micro-lending platforms with alternative credit scoring, blockchain-based digital identity, voice-first / UPI-first banking interfaces, parametric insurance for gig workers & farmers, decentralized savings groups, crypto literacy & onboarding tools, or fraud detection for low-literacy users.",
  },
  {
    id: 5,
    title: "Climate-Resilient Agriculture",
    description:
      "Develop tech to help farmers adapt to changing climate patterns.",
    longDescription:
      "Precision agriculture tools, AI-powered drought & flood prediction, smart & water-efficient irrigation systems, satellite + IoT based crop health monitoring, affordable soil nutrient sensors, index-based crop insurance, direct farmer-to-buyer digital marketplaces, or climate-adaptive seed recommendation engines.",
  },
  {
    id: 6,
    title: "EdTech for Vernacular Learning",
    description:
      "Make quality education accessible in regional languages.",
    longDescription:
      "AI tutors supporting Kannada, Tamil, Telugu, Malayalam, Hindi & other languages, gamified learning experiences, offline-first video & interactive content delivery, AR/VR modules for science and history, voice-based assessments, teacher training & content creation tools, or personalized learning paths based on regional curriculum.",
  },
];

export default function Themes() {
  const [selectedId, setSelectedId] = useState(null);
  const cardsRef = useRef(null);
  const detailRef = useRef(null);
  const sectionRef = useRef(null);

  const selectedProblem = problems.find((p) => p.id === selectedId);

  // Scroll to detail when it appears — position it with comfortable padding from the top
  useEffect(() => {
    if (selectedId && detailRef.current) {
      // Wait a tick for the DOM to render the detail container
      requestAnimationFrame(() => {
        const rect = detailRef.current.getBoundingClientRect();
        const offset = 100; // px padding above the detail container
        const targetScrollY = window.scrollY + rect.top - offset;
        window.scrollTo({ top: targetScrollY, behavior: "smooth" });
      });
    }
  }, [selectedId]);

  const handleCardClick = (id) => {
    if (selectedId === id) {
      setSelectedId(null);
      // Scroll to the very top of the section/page
      const sectionTop = sectionRef.current?.getBoundingClientRect().top + window.scrollY || 0;
      window.scrollTo({ top: sectionTop, behavior: "smooth" });
    } else {
      setSelectedId(id);
    }
  };

  const handleClose = () => {
    setSelectedId(null);
    // Scroll to the very top of the section/page
    const sectionTop = sectionRef.current?.getBoundingClientRect().top + window.scrollY || 0;
    window.scrollTo({ top: sectionTop, behavior: "smooth" });
  };

  // Click outside detail container → close
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        selectedId &&
        detailRef.current &&
        !detailRef.current.contains(e.target) &&
        cardsRef.current &&
        !cardsRef.current.contains(e.target)
      ) {
        handleClose();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [selectedId]);

  return (
    <>
    <section ref={sectionRef} className="relative py-20 bg-neutral-950 overflow-hidden">
      <StarsBackground />
      <ShootingStars />
      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-5xl md:text-6xl font-bold text-center text-white mb-16 tracking-tight">
          Problem <span className="text-[#00f7ff]">Statements</span>
        </h2>

        {/* Cards grid */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-20"
        >
          {problems.map((problem) => (
            <motion.div
              key={problem.id}
              onClick={() => handleCardClick(problem.id)}
              className={`group relative h-[420px] rounded-2xl overflow-hidden cursor-pointer border-2 transition-all duration-500 ${
                selectedId === problem.id
                  ? "border-[#00f7ff]/90 shadow-[0_0_40px_#00f7ff70] scale-[1.03]"
                  : "border-white/30 hover:border-[#00f7ff]/70 hover:shadow-[0_0_30px_#00f7ff50]"
              }`}
              whileHover={{ scale: selectedId === problem.id ? 1.03 : 1.04 }}
              whileTap={{ scale: 0.98 }}
            >
              <img
                src={`https://images.unsplash.com/photo-${1550000000000 + problem.id * 10000000000}?w=800&q=80`}
                alt={problem.title}
                className="absolute inset-0 w-full h-full object-cover brightness-90 transition-transform duration-700 group-hover:scale-110 group-hover:brightness-110"
                loading="lazy"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent pointer-events-none" />

              <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                <h3 className="text-2xl font-bold text-white mb-3 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
                  {problem.title}
                </h3>
                <p className="text-gray-200 text-base drop-shadow-md line-clamp-3">
                  {problem.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Detail container – no image, gradient bg, neon border stronger bottom-right */}
        <AnimatePresence>
          {selectedProblem && (
            <motion.div
              ref={detailRef}
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 30 }} 
              transition={{ duration: 0.45, ease: "easeOut" }}
              className="max-w-4xl mx-auto rounded-2xl overflow-hidden mb-24 relative"
              style={{
                background: "linear-gradient(to bottom, #0f172a 0%, transparent 70%)",
                border: "2px solid #00f7ff",
                boxShadow:
                  "0 0 25px rgba(0,247,255,0.25),  -10px -10px 60px rgba(0,247,255,0.08),  60px 80px 100px rgba(0,247,255,0.12)",
                // stronger glow bottom-right
              }}
            >
              <button
                onClick={handleClose}
                className="absolute top-6 right-6 z-20 text-white/80 hover:text-[#00f7ff] bg-black/40 hover:bg-black/70 p-3 rounded-full transition-all duration-300"
                aria-label="Close"
              >
                <X size={28} />
              </button>

              <div className="p-10 md:p-14 pt-20">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 tracking-tight drop-shadow-lg">
                  {selectedProblem.title}
                </h2>

                <p className="text-gray-200 text-lg md:text-xl leading-relaxed">
                  {selectedProblem.longDescription}
                </p>

                {/* You can add more structured content here later */}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
      <Footer /> 
      </> 
      
  );
}