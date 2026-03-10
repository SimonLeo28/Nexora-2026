import { useEffect, useState } from 'react';

export default function CountdownTimer() {
    const [time, setTime] = useState({ d: '00', h: '00', m: '00', s: '00' });

    useEffect(() => {
        const target = new Date('2026-04-23T00:00:00').getTime();
        const tick = () => {
            const diff = target - Date.now();
            if (diff <= 0) {
                setTime({ d: '00', h: '00', m: '00', s: '00' });
                return;
            }
            setTime({
                d: Math.floor(diff / 86400000).toString().padStart(2, '0'),
                h: Math.floor((diff % 86400000) / 3600000).toString().padStart(2, '0'),
                m: Math.floor((diff % 3600000) / 60000).toString().padStart(2, '0'),
                s: Math.floor((diff % 60000) / 1000).toString().padStart(2, '0'),
            });
        };
        const id = setInterval(tick, 1000);
        tick();
        return () => clearInterval(id);
    }, []);

    return (
        <div className="mt-12 sm:mt-2 flex flex-wrap justify-center gap-6 sm:gap-10 md:gap-16 text-2xl sm:text-3xl md:text-4xl font-bold">
            <div className="flex flex-col items-center">
                <span className="text-neon-blue">{time.d}</span>
                <span className="text-base text-soft-blue-gray">Days</span>
            </div>
            <div className="flex flex-col items-center">
                <span className="text-neon-blue">{time.h}</span>
                <span className="text-base text-soft-blue-gray">Hours</span>
            </div>
            <div className="flex flex-col items-center">
                <span className="text-neon-blue">{time.m}</span>
                <span className="text-base text-soft-blue-gray">Minutes</span>
            </div>
            <div className="flex flex-col items-center">
                <span className="text-neon-blue">{time.s}</span>
                <span className="text-base text-soft-blue-gray">Seconds</span>
            </div>
        </div>
    );
}