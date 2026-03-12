import React, { useEffect, useState } from 'react';

const CounterDaisy = () => {
  const [time, setTime] = useState({ d: 0, h: 0, m: 0, s: 0 });

  useEffect(() => {
    const target = new Date('2026-04-23T00:00:00').getTime();
    const tick = () => {
      const diff = target - Date.now();
      if (diff <= 0) {
        setTime({ d: 0, h: 0, m: 0, s: 0 });
        return;
      }
      setTime({
        d: Math.floor(diff / 86400000),
        h: Math.floor((diff % 86400000) / 3600000),
        m: Math.floor((diff % 3600000) / 60000),
        s: Math.floor((diff % 60000) / 1000),
      });
    };
    const id = setInterval(tick, 1000);
    tick();
    return () => clearInterval(id);
  }, []);

  return (
    <>
      <div className="grid grid-flow-col gap-5 text-center auto-cols-max mt-12 sm:mt-2">
        <div className="flex flex-col p-2 bg-neutral/40 backdrop-blur-sm border border-neon-blue/30 rounded-box text-neutral-content shadow-[0_0_15px_rgba(0,191,255,0.2)]">
          <span className="countdown font-mono text-5xl text-neon-blue drop-shadow-[0_0_10px_rgba(0,191,255,0.6)]">
            <span style={{ "--value": time.d }} aria-live="polite">{time.d.toString().padStart(2, '0')}</span>
          </span>
          <span className="text-soft-blue-gray text-sm tracking-wider uppercase mt-1">days</span>
        </div>
        
        <div className="flex flex-col p-2 bg-neutral/40 backdrop-blur-sm border border-neon-blue/30 rounded-box text-neutral-content shadow-[0_0_15px_rgba(0,191,255,0.2)]">
          <span className="countdown font-mono text-5xl text-neon-blue drop-shadow-[0_0_10px_rgba(0,191,255,0.6)]">
            <span style={{ "--value": time.h }} aria-live="polite">{time.h.toString().padStart(2, '0')}</span>
          </span>
          <span className="text-soft-blue-gray text-sm tracking-wider uppercase mt-1">hours</span>
        </div>

        <div className="flex flex-col p-2 bg-neutral/40 backdrop-blur-sm border border-neon-blue/30 rounded-box text-neutral-content shadow-[0_0_15px_rgba(0,191,255,0.2)]">
          <span className="countdown font-mono text-5xl text-neon-blue drop-shadow-[0_0_10px_rgba(0,191,255,0.6)]">
            <span style={{ "--value": time.m }} aria-live="polite">{time.m.toString().padStart(2, '0')}</span>
          </span>
          <span className="text-soft-blue-gray text-sm tracking-wider uppercase mt-1">mín</span>
        </div>

        <div className="flex flex-col p-2 bg-neutral/40 backdrop-blur-sm border border-neon-blue/30 rounded-box text-neutral-content shadow-[0_0_15px_rgba(0,191,255,0.2)]">
          <span className="countdown font-mono text-5xl text-neon-blue drop-shadow-[0_0_10px_rgba(0,191,255,0.6)]">
            <span style={{ "--value": time.s }} aria-live="polite">{time.s.toString().padStart(2, '0')}</span>
          </span>
          <span className="text-soft-blue-gray text-sm tracking-wider uppercase mt-1">sec</span>
        </div>
      </div>
    </>
  );
};

export default CounterDaisy;