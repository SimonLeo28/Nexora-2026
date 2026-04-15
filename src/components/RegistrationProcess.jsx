import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { ShootingStars } from "./ShootingStars";
import { StarsBackground } from "./StarsBackground";

const steps = [
  {
    number: "01",
    icon: "🎨",
    title: "Choose a Theme",
    description:
      "Pick 1 out of 5 cutting-edge themes that resonate with your team's vision. Each theme opens a unique problem space for you to explore and innovate.",
    tag: "Step 1",
  },
  {
    number: "02",
    icon: "🔍",
    title: "Select Problem Statement",
    description:
      "Browse curated problem statements aligned with your chosen theme. Pick the one that challenges your team the most and aligns with your strengths.",
    tag: "Step 2",
  },
  {
    number: "03",
    icon: "📄",
    title: "Abstract Submission",
    description:
      "Hit Register, fill in your team details, and submit a concise abstract describing your approach to the chosen problem statement.",
    tag: "Step 3",
  },
  {
    number: "04",
    icon: "💳",
    title: "Payment & Confirm",
    description:
      "Pay ₹250 per head to secure your spot. Upload the payment screenshot as acknowledgement — and you're all set!",
    tag: "Step 4",
  },
];

/* ─── Urgency Deadline Badge ─── */
function DeadlineBadge() {
  const [pulse, setPulse] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setPulse((p) => p + 1), 50);
    return () => clearInterval(id);
  }, []);

  // Compute days left
  const deadline = new Date("2025-04-15T23:59:59");
  const now = new Date();
  const msLeft = deadline - now;
  const daysLeft = Math.max(0, Math.ceil(msLeft / (1000 * 60 * 60 * 24)));

  return (
    <div className="relative flex justify-center mb-16">
      {/* Outer glowing ring */}
      <motion.div
        className="relative"
        animate={{
          scale: [1, 1.02, 1],
        }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        {/* Particle sparks */}
        {[...Array(6)].map((_, i) => (
          <motion.span
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full bg-orange-400"
            style={{
              top: "50%",
              left: "50%",
              originX: "50%",
              originY: "50%",
            }}
            animate={{
              x: [0, Math.cos((i * 60 * Math.PI) / 180) * 55],
              y: [0, Math.sin((i * 60 * Math.PI) / 180) * 55],
              opacity: [1, 0],
              scale: [1, 0.3],
            }}
            transition={{
              duration: 1.6,
              repeat: Infinity,
              delay: i * 0.25,
              ease: "easeOut",
            }}
          />
        ))}

        <div
          className="relative z-10 flex items-center gap-3 px-6 py-3 rounded-full border border-orange-500/60 bg-black/60 backdrop-blur-md"
          style={{
            boxShadow:
              "0 0 20px rgba(255,98,0,0.35), 0 0 60px rgba(255,98,0,0.12), inset 0 0 20px rgba(255,98,0,0.06)",
          }}
        >
          {/* Flame emoji with shake */}
          <motion.span
            className="text-xl"
            animate={{ rotate: [-8, 8, -8] }}
            transition={{ duration: 0.4, repeat: Infinity }}
          >
            🔥
          </motion.span>

          <p className="text-white font-semibold text-sm md:text-base tracking-wide">
            Registration closes on&nbsp;
            <motion.span
              className="text-orange-400 font-black"
              animate={{
                textShadow: [
                  "0 0 8px rgba(255,150,0,0.8)",
                  "0 0 20px rgba(255,80,0,1)",
                  "0 0 8px rgba(255,150,0,0.8)",
                ],
              }}
              transition={{ duration: 1.2, repeat: Infinity }}
            >
              April 18<sup className="lowercase">th</sup> 2026
            </motion.span>
          </p>

          {/* Countdown chip */}
          <motion.span
            className="ml-1 px-2.5 py-0.5 rounded-full text-xs font-bold bg-orange-500 text-black"
            animate={{
              scale: [1, 1.12, 1],
              boxShadow: [
                "0 0 0px rgba(255,98,0,0)",
                "0 0 12px rgba(255,98,0,0.9)",
                "0 0 0px rgba(255,98,0,0)",
              ],
            }}
            transition={{ duration: 1, repeat: Infinity }}
          >
            {daysLeft > 0 ? `${daysLeft}d left` : "Closing soon!"}
          </motion.span>

          <motion.span
            className="text-xl"
            animate={{ rotate: [8, -8, 8] }}
            transition={{ duration: 0.4, repeat: Infinity }}
          >
            ⚡
          </motion.span>
        </div>
      </motion.div>
    </div>
  );
}

/* ─── Connector between steps ─── */
function Connector({ active }) {
  return (
    <div className="hidden md:flex items-center flex-shrink-0 w-16 relative">
      {/* Base line */}
      <div className="w-full h-px bg-orange-500/20" />
      {/* Animated fill */}
      <motion.div
        className="absolute left-0 h-px bg-orange-500"
        style={{ boxShadow: "0 0 6px #ff6200" }}
        initial={{ width: "0%" }}
        animate={{ width: active ? "100%" : "0%" }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      />
    </div>
  );
}

/* ─── Single Step Card ─── */
function StepCard({ step, index, isVisible }) {
  const delay = index * 0.18;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: "easeOut" }}
      className="flex flex-col items-center flex-1 min-w-[200px] max-w-[260px]"
    >
      {/* Circle number + icon */}
      <motion.div
        className="relative w-20 h-20 rounded-full flex items-center justify-center mb-5 border-2 border-orange-500/50 bg-black"
        whileHover={{ scale: 1.1 }}
        animate={
          isVisible
            ? {
                boxShadow: [
                  "0 0 0px rgba(255,98,0,0.3)",
                  "0 0 22px rgba(255,98,0,0.7)",
                  "0 0 0px rgba(255,98,0,0.3)",
                ],
              }
            : {}
        }
        transition={{ duration: 2.5, repeat: Infinity, delay: index * 0.4 }}
      >
        {/* Spinning ring */}
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 80 80"
          fill="none"
        >
          <motion.circle
            cx="40"
            cy="40"
            r="38"
            stroke="#ff6200"
            strokeWidth="2"
            strokeLinecap="round"
            strokeDasharray="50 190"
            animate={{ rotate: 360 }}
            transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
            style={{ originX: "50%", originY: "50%" }}
          />
        </svg>
        <span className="text-2xl z-10">{step.icon}</span>
      </motion.div>

      {/* Step tag */}
      <span className="text-orange-500 font-mono text-xs tracking-widest uppercase bg-orange-500/10 px-3 py-1 rounded-full border border-orange-500/30 mb-3">
        {step.tag}
      </span>

      {/* Card */}
      <div
        className="rounded-xl border border-orange-500/30 bg-transparent backdrop-blur-sm p-5 text-center w-full hover:border-orange-500 hover:shadow-[0_0_25px_rgba(255,107,0,0.2)] transition-all duration-300 group"
        style={{ minHeight: "160px" }}
      >
        <h3 className="text-white font-bold text-lg mb-2 group-hover:text-orange-400 transition-colors">
          {step.title}
        </h3>
        <p className="text-white/65 text-sm leading-relaxed">
          {step.description}
        </p>
      </div>
    </motion.div>
  );
}

/* ─── Main Section ─── */
export default function RegistrationProcess() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      ref={sectionRef}
      className="relative py-24 overflow-hidden bg-neutral-950"
    >
      {/* Stars + shooting stars bg */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <StarsBackground />
        <ShootingStars />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4 tracking-tight">
            Registration{" "}
            <span className="text-orange-500">Process</span>
          </h2>
          <p className="text-white/50 text-lg max-w-xl mx-auto">
            Four simple steps to secure your place in Nexora 2026.
          </p>
        </motion.div>

        {/* Deadline Badge */}
        <DeadlineBadge />

        {/* Horizontal timeline — steps + connectors */}
        <div className="flex flex-col md:flex-row items-start justify-center gap-6 md:gap-0">
          {steps.map((step, i) => (
            <div key={i} className="flex flex-col md:flex-row items-center w-full md:w-auto">
              <StepCard step={step} index={i} isVisible={isInView} />
              {i < steps.length - 1 && <Connector active={isInView} />}
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.9 }}
          className="flex justify-center mt-14"
        >
          <motion.a
            href="https://forms.gle/zHTv3Cats32VdVLN7"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative px-8 py-3.5 rounded-xl font-bold text-black bg-orange-500 overflow-hidden"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            style={{ boxShadow: "0 0 20px rgba(255,98,0,0.5)" }}
          >
            {/* Shimmer sweep on hover */}
            <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/25 to-transparent pointer-events-none" />
            <span className="relative z-10 flex items-center gap-2">
              Register Now{" "}
              <motion.span
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                →
              </motion.span>
            </span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
