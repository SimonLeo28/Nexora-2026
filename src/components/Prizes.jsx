import { motion, useInView } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { ShootingStars } from './ShootingStars';
import { StarsBackground } from './StarsBackground';

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

function PrizeCounter({ end, duration = 2.8 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let startTime;
    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - progress, 3); // cubic ease-out
      setCount(Math.floor(eased * end));

      if (progress < 1) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, [isInView, end, duration]);

  return (
    <div ref={ref} className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-orange-500 drop-shadow-[0_0_15px_rgba(255,165,0,0.4)]">
      ₹{count.toLocaleString('en-IN')}
    </div>
  );
}

export default function Prizes() {
  const prizes = [
    { place: '1st Runner-up', amount: 15000, img: '/1stRunner.png', items: "Cash + Certificates + Recognition", highlights: ["Cash", "Certificates"] },
    { place: 'Winner',        amount: 25000, img: '/winner.png',     items: "Cash + Certificates + Trophy + Medals", highlights: ["Cash", "Trophy"] },
    { place: '2nd Runner-up', amount: 10000, img: '/2ndRunner.png',  items: "Cash + Certificates + Recognition", highlights: ["Cash", "Recognition"] },
  ];

  return (
    <section id="prizes" className="relative py-16 md:py-24 lg:py-32 overflow-hidden">
      {/* Background stars */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <StarsBackground />
        <ShootingStars />
      </div>

      <div className="relative z-10 container mx-auto px-5 sm:px-6 md:px-8">
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-12 md:mb-16 text-white"
        >
          Prizes & Perks
        </motion.h2>

        {/* Main container – smaller & more compact */}
        <div className="relative max-w-5xl mx-auto border-2 border-orange-500 rounded-3xl p-8 sm:p-10 md:p-12 lg:p-16 bg-gradient-to-b from-orange-500/5 to-black/60 backdrop-blur-md overflow-hidden shadow-[0_0_40px_rgba(255,165,0,0.1)]">
          {/* Baseline glow */}
          <div className="absolute inset-x-0 bottom-0 h-[3px] bg-gradient-to-r from-transparent via-orange-500/70 to-transparent pointer-events-none" />

          <div className="flex flex-col lg:flex-row items-center justify-center gap-12 sm:gap-16 md:gap-20 lg:gap-24">
            {prizes.map((prize, index) => {
              const isWinner = index === 1;
              const isFirstRunner = index === 0;

              return (
                <div
                  key={prize.place}
                  className={`flex flex-col items-center transition-all duration-700 ${
                    isWinner ? 'lg:-translate-y-12 lg:scale-105 order-1 lg:order-2' : 
                    isFirstRunner ? 'scale-100 order-2 lg:order-1' : 'scale-100 order-3 lg:order-3'
                  }`}
                >
                  {/* hover-3d wrapper */}
                  <div className="hover-3d w-full max-w-[320px] sm:max-w-[340px] md:max-w-[360px]">
                    <figure className="rounded-2xl overflow-hidden shadow-2xl border border-orange-500/30 bg-black/50 group">
                      <img
                        src={prize.img}
                        alt={`${prize.place} prize`}
                        className="w-full h-auto object-cover aspect-[3/4] transition-transform duration-500 group-hover:scale-105"
                      />
                    </figure>

                    {/* Required 8 empty divs – direct children of .hover-3d */}
                    <div /><div /><div /><div />
                    <div /><div /><div /><div />
                  </div>

                  {/* Text content – outside hover-3d so it doesn't tilt */}
                  <div className="mt-6 sm:mt-8 text-center space-y-3 sm:space-y-4">
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-wide border-b border-orange-500/20 pb-2 inline-block">
                      {prize.place}
                    </h3>

                    <PrizeCounter end={prize.amount} />

                    <p className="text-white/80 text-base sm:text-lg md:text-xl font-medium">
                      {highlightText(prize.items, prize.highlights)}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}



