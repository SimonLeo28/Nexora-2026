import { motion } from 'framer-motion';
import { useState } from 'react';
import Footer from '../components/Footer';
import GridPattern from '../components/GridPattern';
import Header from '../components/Header';
import ShootingStars from '../components/ShootingStars';
import StarsBackground from '../components/StarsBackground';

export default function Rules() {
    const [open, setOpen] = useState({});

    // const toggle = (id) => setOpen(prev => ({ ...prev, [id]: !prev[id] }));
    const toggle = (id) => {
        setOpen(open === id ? null : id);
    };

    const sections = [
        {
            id: 1,
            title: "General Rules",
            content: [
                "No plagiarism or No pre-built code allowed",
                "Teams must present their original work only",
                // "Follow the MLH / event code of conduct",
                "Respect mentors, judges and other participants"
            ]
        },
        {
            id: 2,
            title: "Submission Guidelines",
            content: [
                // "Submit code + demo video via Devpost / provided platform",
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
        <>
            <Header />
            {/* <section
                id="rules"
                className="relative py-20 md:py-32 container mx-auto px-6 overflow-hidden"
            > */}

            {/* this is a background comign from the 21st dev  */}
            <div className="absolute inset-0 z-0">
                <StarsBackground />
                <ShootingStars />
            </div>

            {/* Grid Background */}
            <GridPattern
                width={60}
                height={60}
                strokeDasharray="4 2"
                className="opacity-40 -z-10"
            />

            {/* Dark Overlay
                <div className="absolute inset-0 bg-black/70 -z-10"></div> */}

            {/* Hero Section */}
            <section className="relative min-h-[50vh] flex items-center justify-center px-4 py-20 bg-gradient-to-b from-orange-900/80 to-slate-transparent overflow-hidden">
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute top-0 left-1/4 w-96 h-96 bg-yellow-400/20 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-blob" />
                    <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-400/20 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-blob animation-delay-4000" />
                </div>

                <div className="relative z-10 max-w-4xl mx-auto text-center">
                    <h1 className="text-5xl md:text-6xl font-bold mb-6">
                        <span className="text-transparent bg-clip-text bg-white">
                            Rules & Guidelines
                        </span>
                    </h1>

                    <p className="text-xl text-slate-300">
                        Adhere to the guidelines to maintain fairness, creativity, and a collaborative hackathon environment.
                    </p>
                </div>
            </section>

            <div className="max-w-4xl mx-auto space-y-8 px-4 pb-20">
                {sections.map(sec => (
                    <motion.div
                        key={sec.id}
                        whileHover={{ scale: 1.02 }}
                        className="relative group rounded-xl"
                    >

                        {/* Animated Border */}
                        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-orange-900/50 to-transparent opacity-0 group-hover:opacity-100 blur-sm transition duration-500"></div>

                        {/* Card */}
                        <div className="relative bg-black/40 backdrop-blur-md border border-yellow-900 rounded-xl overflow-hidden">
                            <button
                                onClick={() => toggle(sec.id)}
                                className="w-full p-6 text-left flex justify-between items-center text-xl font-medium"
                            >
                                {sec.title}
                                <span className="text-2xl">
                                    {open === sec.id ? "−" : "+"}
                                </span>
                            </button>

                            {open === sec.id && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    transition={{ duration: 0.35 }}
                                    className="px-6 pb-6 text-slate-300"
                                >
                                    <ul className="list-disc pl-5 space-y-2">
                                        {sec.content.map((line, i) => (
                                            <li key={i}>{line}</li>
                                        ))}
                                    </ul>
                                </motion.div>
                            )}
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* </section> */}
            < Footer />
        </>
    );
}