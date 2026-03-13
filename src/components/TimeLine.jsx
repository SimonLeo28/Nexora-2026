import { motion } from "framer-motion";

const TimeLine = () => {

    const timeline = [
        "Registration",
        "Shortlisting",
        "Hackathon Day",
        "Mentoring",
        "Final Pitch",
        "Results"
    ];

    return (
        <>
            {/* Timeline Title */}
            < h3 className="text-2xl sm:text-3xl font-bold text-center text-neon-blue mb-12" >
                Timeline
            </h3 >


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
        </>
    )
}

export default TimeLine