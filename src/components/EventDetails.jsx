// import { motion } from 'framer-motion';

// export default function EventDetails() {
//     const themes = ["AI Everywhere — Intelligence for Real Needs", "Web3, Blockchain & Trust Infrastructure", "VLSI & Embedded Systems", "Climate Tech & Sustainable Systems", "Human–Machine Collaboration & Assistive Tech", "AI-Driven Data Analytics (AutoML & Augmented Analytics)"];

//     const timeline = [
//         "Registration", "Shortlisting", "Hackathon Day",
//         "Mentoring", "Final Pitch", "Results"
//     ];

//     return (
//         <section id="details" className="py-20 md:py-32 container mx-auto px-6 bg-black/40">
//             <motion.h2
//                 initial={{ opacity: 0 }}
//                 whileInView={{ opacity: 1 }}
//                 className="text-4xl md:text-5xl font-bold text-center text-neon-blue mb-16"
//             >
//                 Event Details
//             </motion.h2>

//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
//                 {[
//                     { title: "Date", value: "March 27-28, 2026" },
//                     { title: "Duration", value: "24 Hours" },
//                     { title: "Venue", value: "Amruta Insitute of Engineering and Management Sciences" },
//                     { title: "Mode", value: "Offline" },
//                 ].map((item, i) => (
//                     <motion.div
//                         key={i}
//                         initial={{ opacity: 0, y: 30 }}
//                         whileInView={{ opacity: 1, y: 0 }}
//                         transition={{ delay: i * 0.1 }}
//                         className="glass p-8 text-center glow"
//                     >
//                         <h3 className="text-xl font-bold text-neon-blue mb-3">{item.title}</h3>
//                         <p className="text-lg">{item.value}</p>
//                     </motion.div>
//                 ))}
//             </div>

//             <h3 className="text-3xl font-bold text-center text-neon-blue mb-10">Themes</h3>
//             <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 mb-20">
//                 {themes.map((theme, i) => (
//                     <motion.div
//                         key={theme}
//                         initial={{ opacity: 0, scale: 0.9 }}
//                         whileInView={{ opacity: 1, scale: 1 }}
//                         transition={{ delay: i * 0.08 }}
//                         className="glass p-8 text-center glow text-lg font-medium"
//                     >
//                         {theme}
//                     </motion.div>
//                 ))}
//             </div>

//             <h3 className="text-3xl font-bold text-center text-neon-blue mb-12">Timeline</h3>
//             <div className="relative max-w-4xl mx-auto">
//                 {/* Vertical line */}
//                 <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-neon-blue/40 animate-timeline-glow hidden md:block" />

//                 <div className="space-y-12 md:space-y-20">
//                     {timeline.map((step, i) => (
//                         <motion.div
//                             key={step}
//                             initial={{ opacity: 0, x: i % 2 === 0 ? -60 : 60 }}
//                             whileInView={{ opacity: 1, x: 0 }}
//                             transition={{ duration: 0.7 }}
//                             className={`flex items-center gap-6 md:gap-12 ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
//                         >
//                             <div className={`flex-1 ${i % 2 === 0 ? 'text-right' : 'text-left'} md:text-base text-sm`}>
//                                 <div className="glass p-6 inline-block">
//                                     {step}
//                                 </div>
//                             </div>
//                             <div className="w-5 h-5 rounded-full bg-neon-blue shadow-neon flex-shrink-0 z-10 hidden md:block" />
//                         </motion.div>
//                     ))}
//                 </div>
//             </div>
//         </section>
//     );
// }
import { motion } from "framer-motion";

export default function EventDetails() {

    const themes = [
        "AI Everywhere — Intelligence for Real Needs",
        "Web3, Blockchain & Trust Infrastructure",
        "VLSI & Embedded Systems",
        "Climate Tech & Sustainable Systems",
        "Human–Machine Collaboration & Assistive Tech",
        "AI-Driven Data Analytics (AutoML & Augmented Analytics)"
    ];

    const timeline = [
        "Registration",
        "Shortlisting",
        "Hackathon Day",
        "Mentoring",
        "Final Pitch",
        "Results"
    ];

    return (
        <section
            id="details"
            className="py-16 sm:py-20 md:py-28 px-4 sm:px-6 lg:px-10 bg-black/40"
        >

            <div className="max-w-7xl mx-auto">

                {/* Title */}
                <motion.h2
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-neon-blue mb-14"
                >
                    Event Details
                </motion.h2>

                {/* Event Info Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-16">

                    {[
                        { title: "Date", value: "March 27-28, 2026" },
                        { title: "Duration", value: "24 Hours" },
                        { title: "Venue", value: "Amruta Institute of Engineering and Management Sciences" },
                        { title: "Mode", value: "Offline" },
                    ].map((item, i) => (

                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="glass p-6 md:p-8 text-center glow"
                        >

                            <h3 className="text-lg md:text-xl font-bold text-neon-blue mb-2">
                                {item.title}
                            </h3>

                            <p className="text-sm sm:text-base md:text-lg">
                                {item.value}
                            </p>

                        </motion.div>
                    ))}

                </div>


                {/* Themes */}
                <h3 className="text-2xl sm:text-3xl font-bold text-center text-neon-blue mb-10">
                    Themes
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">

                    {themes.map((theme, i) => (

                        <motion.div
                            key={theme}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: i * 0.08 }}
                            className="glass p-6 md:p-8 text-center glow text-sm sm:text-base md:text-lg font-medium"
                        >
                            {theme}
                        </motion.div>

                    ))}

                </div>


                {/* Timeline Title */}
                <h3 className="text-2xl sm:text-3xl font-bold text-center text-neon-blue mb-12">
                    Timeline
                </h3>


                <div className="relative max-w-4xl mx-auto">

                    {/* Vertical Line (desktop only) */}
                    <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[2px] bg-neon-blue/40" />

                    <div className="space-y-10 md:space-y-16">

                        {timeline.map((step, i) => (

                            <motion.div
                                key={step}
                                initial={{ opacity: 0, x: i % 2 === 0 ? -60 : 60 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.7 }}

                                className={`
                                flex items-center
                                md:gap-12
                                ${i % 2 === 0 ? "md:flex-row-reverse" : ""}
                                `}
                            >

                                {/* Text Box */}
                                <div
                                    className={`
                                    flex-1
                                    ${i % 2 === 0 ? "md:text-right" : "md:text-left"}
                                    text-center md:text-base text-sm
                                    `}
                                >

                                    <div className="glass p-5 md:p-6 inline-block">
                                        {step}
                                    </div>

                                </div>

                                {/* Timeline Dot */}
                                <div className="hidden md:block w-4 h-4 rounded-full bg-neon-blue shadow-neon flex-shrink-0 z-10" />

                            </motion.div>

                        ))}

                    </div>

                </div>

            </div>

        </section>
    );
}