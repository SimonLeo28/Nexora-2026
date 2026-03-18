import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import Footer from "../components/Footer";
import { ShootingStars } from "../components/ShootingStars";
import { StarsBackground } from "../components/StarsBackground";

const problems = [
  {
    id: 1,
    title: "Responsible AI & Deployable AI for Real-World Impact",
    image: "/images/ai.png",
    description:
      "Develop tech to help farmers adapt to changing climate patterns.",
    longDescription:
      `Artificial Intelligence is transforming industries, but with great power comes great
      responsibility. AI systems must be ethical, fair, transparent, secure, and beneficial to
      society.

      This theme challenges participants to build deployable AI solutions that solve real societal
      or industrial problems while adhering to responsible AI principles. Teams should focus on
      developing solutions that are not only innovative but also practical and scalable.`,
  },
  {
    id: 2,
    title: "Communication, VLSI & Embedded Systems",
    image: "/images/communication-vlsi-embed.jpg",
    description:
      "Design innovative communication, VLSI, or embedded systems solutions addressing real-world challenges through efficient hardware and automation.",
    longDescription:
      `Modern technology relies heavily on efficient communication systems, advanced
      semiconductor design, and embedded computing. This theme invites participants to build
      innovative hardware or system-level solutions related to communication technologies, VLSI
      design, and embedded systems.
      Projects may include smart communication devices, embedded automation systems, IoT-based
      solutions, FPGA or microcontroller-based innovations, signal processing applications, or low-
      power electronic designs. The goal is to create practical and efficient systems that address real-
      world technological challenges.`,
  },
  {
    id: 3,
    title: "Cyber Security & Blockchain Technology",
    image: "/images/Blockchain-in-Cybersecurity-2.jpg",
    description:
      "Design an Agentic AI system that autonomously analyzes data, makes decisions, and solves real-world problems efficiently.",
    longDescription:
      `Cybersecurity and blockchain technology are critical areas for securing digital systems,
      protecting sensitive data, and ensuring trust in decentralized environments. This theme
      challenges participants to develop innovative solutions that leverage blockchain’s immutable
      ledger, smart contracts, and decentralized frameworks alongside advanced cybersecurity
      practices to safeguard information and digital assets.
      Participants may explore solutions such as secure transaction systems, threat detection and
      prevention, privacy-preserving data management, identity verification, or blockchain-based
      auditing systems. Projects should demonstrate how blockchain and cybersecurity principles
      can enhance trust, transparency, and resilience in industries like finance, healthcare, supply
      chain, government, and IoT networks.`,
  },
  {
    id: 4,
    title: "Robotics and Industrial Applications",
    image: "/images/robotics-industry.jpg",
    description:
      "Transform waste materials into valuable products or energy sources.",
    longDescription:
      `Automation and robotics are revolutionizing industries by improving productivity, safety, and
      operational efficiency. This theme challenges participants to develop robotic systems or
      automation solutions that address real industrial challenges.
      Participants may design autonomous robots, industrial automation tools, robotic arms,
      inspection systems, or AI-driven robotics applications. The focus should be on building
      systems that enhance manufacturing, logistics, inspection, maintenance, or human–robot
      collaboration in industrial environments.`,
  },
  {
    id: 5,
    title: "Imagining the Future of Infrastructure through Sustainable Design",
    image: "/images/infrastructure12.png",
    description:
      "Create next-generation solutions for unbanked and underbanked populations.",
    longDescription:
      `Sustainable infrastructure is essential for building resilient and environmentally responsible
      cities. Under this theme, participants will design scale models of civil infrastructure projects
      that demonstrate innovation, sustainability, and engineering feasibility.
      The competition encourages students to think creatively about how infrastructure such as
      bridges, dams, buildings, transportation systems, and water management systems can be
      designed for the future while minimizing environmental impact.`,
  },

  // {
  //   id: 6,
  //   title: "ClimateTech, Green Skills & Sustainable Infrastructure",
  //   image: "/images/infrastructure.png",
  //   description:
  //     "Make quality education accessible in regional languages.",
  //   longDescription:
  //     `Climate change is one of the most pressing global challenges. This theme encourages
  //     participants to develop technology-driven solutions that promote sustainability,
  //     environmental protection, and climate resilience.
  //     Projects may address issues such as renewable energy management, waste reduction, carbon
  //     footprint monitoring, smart water management, green transportation, or climate risk
  //     assessment. The focus should be on building solutions that contribute to sustainable
  //     development and environmental protection.`,
  // },
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
      <section ref={sectionRef} className="relative py-26 bg-neutral-950 overflow-hidden">
        <StarsBackground />
        <ShootingStars />
        <div className="container mx-auto px-6 relative z-10">
          <h2 className="text-5xl md:text-6xl font-bold text-center text-white mb-16 tracking-tight">
            Problem <span className="text-[#ff5f00]">Statements</span>
          </h2>

          {/* Cards grid */}
          {/* <div
            ref={cardsRef}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-20 justify-items-center"
          >

            {problems.map((problem) => (
              <motion.div
                key={problem.id}
                className={`group relative h-[420px] rounded-2xl overflow-hidden border-2 transition-all duration-500 ${selectedId === problem.id
                  ? "border-[#00f7ff]/90 shadow-[0_0_40px_#00f7ff70] scale-[1.03]"
                  : "border-white/30 hover:border-[#00f7ff]/70 hover:shadow-[0_0_30px_#00f7ff50]"
                  }`}
                whileHover={{ scale: selectedId === problem.id ? 1.03 : 1.04 }}
              >
                <img
                  // src={`https://images.unsplash.com/photo-${1550000000000 + problem.id * 10000000000}?w=800&q=80`}
                  src={problem.image}
                  alt={problem.title}
                  className="absolute inset-0 w-full h-full object-cover brightness-90 transition-transform duration-700 group-hover:scale-100 group-hover:brightness-100"
                  loading="lazy"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent pointer-events-none" />

                <div className="absolute bottom-0 left-0 right-0 p-6 z-10 flex flex-col gap-4">
                  <h3 className="text-2xl font-bold text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
                    {problem.title}
                  </h3>

                  <button
                    onClick={() => handleCardClick(problem.id)}
                    className="relative inline-flex items-center justify-center px-6 py-2 overflow-hidden font-semibold text-[#00f7ff] border border-[#00f7ff]/60 rounded-lg group"
                  >
                    <span className="absolute inset-0 w-full h-full bg-[#00f7ff]/10 opacity-0 group-hover:opacity-100 transition duration-300"></span>

                    <span className="absolute inset-0 w-0 bg-[#00f7ff]/20 transition-all duration-500 group-hover:w-full"></span>

                    <span className="relative z-10 tracking-wide">
                      View Details →
                    </span>
                  </button>
                </div>
              </motion.div>
            ))}
          </div> */}
          
          {/* Cards grid */}
          <div
            ref={cardsRef}
            // className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-20 justify-center"
            className="flex flex-wrap justify-center gap-8 max-w-7xl mx-auto mb-20"
          >
            {problems.map((problem) => (
              <motion.div
                key={problem.id}
                className={`w-full sm:w-[48%] lg:w-[31%] max-w-sm group relative h-[420px] rounded-2xl overflow-hidden border-2 transition-all duration-500 ${selectedId === problem.id
                    ? "border-[#00f7ff]/90 shadow-[0_0_40px_#00f7ff70] scale-[1.03]"
                    : "border-white/30 hover:border-[#00f7ff]/70 hover:shadow-[0_0_30px_#00f7ff50]"
                  }`}
                whileHover={{ scale: selectedId === problem.id ? 1.03 : 1.04 }}
              >
                <img
                  src={problem.image}
                  alt={problem.title}
                  className="absolute inset-0 w-full h-full object-cover brightness-90 transition-transform duration-700 group-hover:scale-100 group-hover:brightness-100"
                  loading="lazy"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent pointer-events-none" />

                <div className="absolute bottom-0 left-0 right-0 p-6 z-10 flex flex-col gap-4">
                  <h3 className="text-2xl font-bold text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
                    {problem.title}
                  </h3>

                  <button
                    onClick={() => handleCardClick(problem.id)}
                    className="relative inline-flex items-center justify-center px-6 py-2 overflow-hidden font-semibold text-[#00f7ff] border border-[#00f7ff]/60 rounded-lg group"
                  >
                    <span className="absolute inset-0 w-full h-full bg-[#00f7ff]/10 opacity-0 group-hover:opacity-100 transition duration-300"></span>

                    <span className="absolute inset-0 w-0 bg-[#00f7ff]/20 transition-all duration-500 group-hover:w-full"></span>

                    <span className="relative z-10 tracking-wide">
                      View Details →
                    </span>
                  </button>
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


{/* {problems.map((problem) => (
              <motion.div
                key={problem.id}
                onClick={() => handleCardClick(problem.id)}
                className={`group relative h-[420px] rounded-2xl overflow-hidden cursor-pointer border-2 transition-all duration-500 ${selectedId === problem.id
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
            ))} */}