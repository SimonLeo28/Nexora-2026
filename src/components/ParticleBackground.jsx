import { useEffect, useRef } from 'react';

export default function ParticleBackground() {
    const ref = useRef(null);

    useEffect(() => {
        const container = ref.current;
        if (!container) return;

        for (let i = 0; i < 60; i++) {
            const p = document.createElement('div');
            p.className = 'absolute bg-neon-blue rounded-full opacity-30 pointer-events-none';
            const size = Math.random() * 3 + 1;
            Object.assign(p.style, {
                width: size + 'px',
                height: size + 'px',
                left: Math.random() * 100 + 'vw',
                top: Math.random() * 120 + 'vh',
                animation: `float ${Math.random() * 20 + 15}s linear infinite`,
                animationDelay: Math.random() * 5 + 's',
            });
            container.appendChild(p);
        }

        return () => { container.innerHTML = ''; };
    }, []);

    return <div ref={ref} className="fixed inset-0 z-[-1] pointer-events-none" />;
}