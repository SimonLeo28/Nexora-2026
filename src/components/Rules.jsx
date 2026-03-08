import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Rules() {
    const [open, setOpen] = useState({});

    const toggle = (id) => setOpen(prev => ({ ...prev, [id]: !prev[id] }));

    const sections = [
        {
            id: 1,
            title: "General Rules",
            content: [
                "No plagiarism or pre-built code allowed",
                "Teams must consist of original work only",
                "Follow the MLH / event code of conduct",
                "Respect mentors, judges and other participants"
            ]
        },
        {
            id: 2,
            title: "Submission Guidelines",
            content: [
                "Submit code + demo video via Devpost / provided platform",
                "Code must be pushed to public GitHub repo by deadline",
                "Include README with setup instructions",
                "Late submissions not accepted"
            ]
        },
        {
            id: 3,
            title: "Judging Criteria",
            content: [
                "Innovation & Impact (30%)",
                "Technical Implementation (30%)",
                "Design & UX (20%)",
                "Presentation & Pitch (20%)"
            ]
        }
    ];

    return (
        <section
            id="rules"
            className="relative py-20 md:py-32 container mx-auto px-6 overflow-hidden"
        >

            {/* Background Video */}
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover -z-10"
            >
                <source src="/videos/rules-bg-1.mp4" type="video/mp4" />
            </video>

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/70 -z-10"></div>

            <motion.h2
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 0.5 }}
                className="text-4xl md:text-5xl font-bold text-center text-neon-blue mb-16"
            >
                Rules & Guidelines
            </motion.h2>

            <div className="max-w-4xl mx-auto space-y-6">
                {sections.map(sec => (
                    <div key={sec.id} className="glass overflow-hidden glow">
                        <button
                            onClick={() => toggle(sec.id)}
                            className="w-full p-6 text-left flex justify-between items-center text-xl font-medium"
                        >
                            {sec.title}
                            <span className="text-2xl">{open[sec.id] ? '−' : '+'}</span>
                        </button>

                        {open[sec.id] && (
                            <motion.div
                                initial={{ height: 0 }}
                                animate={{ height: 'auto' }}
                                className="px-6 pb-6 text-soft-blue-gray"
                            >
                                <ul className="list-disc pl-5 space-y-2">
                                    {sec.content.map((line, i) => (
                                        <li key={i}>{line}</li>
                                    ))}
                                </ul>
                            </motion.div>
                        )}
                    </div>
                ))}
            </div>

        </section>
    );
}