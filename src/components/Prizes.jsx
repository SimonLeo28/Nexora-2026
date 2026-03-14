import { motion, useInView } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { ShootingStars } from './ShootingStars';
import { StarsBackground } from './StarsBackground';

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
    <div ref={ref} className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-neon-blue">
      ₹{count.toLocaleString('en-IN')}
    </div>
  );
}

export default function Prizes() {
  const prizes = [
    { place: '1st Runner-up', amount: 15000, img: '/1stRunner.png' },
    { place: 'Winner',        amount: 25000, img: '/winner.png' },
    { place: '2nd Runner-up', amount: 10000, img: '/2ndRunner.png' },
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
        <div className="relative max-w-5xl mx-auto border-2 border-white/50 rounded-3xl p-8 sm:p-10 md:p-12 lg:p-16 bg-gradient-to-b from-white/5 to-black/40 backdrop-blur-md overflow-hidden shadow-[0_0_40px_rgba(255,255,255,0.08)]">
          {/* Baseline glow */}
          <div className="absolute inset-x-0 bottom-0 h-[3px] bg-gradient-to-r from-transparent via-white/70 to-transparent pointer-events-none" />

          <div className="flex flex-col lg:flex-row items-center justify-center gap-12 sm:gap-16 md:gap-20 lg:gap-24">
            {prizes.map((prize, index) => {
              const isMiddle = index === 1;

              return (
                <div
                  key={prize.place}
                  className={`flex flex-col items-center transition-all duration-700 ${
                    isMiddle ? 'lg:-translate-y-12 lg:scale-105' : 'scale-100'
                  }`}
                >
                  {/* hover-3d wrapper */}
                  <div className="hover-3d w-full max-w-[320px] sm:max-w-[340px] md:max-w-[360px]">
                    <figure className="rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-black/50 group">
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
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-wide">
                      {prize.place}
                    </h3>

                    <PrizeCounter end={prize.amount} />

                    <p className="text-gray-300 text-base sm:text-lg md:text-xl font-medium">
                      Cash + Certificates + Recognition
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



