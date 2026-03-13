import { motion } from 'framer-motion';
import Footer from "../components/Footer";
import GridPattern from '../components/GridPattern';
import Header from "../components/Header";

const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

export default function About() {
    return (
        <>
            <Header />
            {/* <CustomCursor /> */}
            <section id="about" className="relative min-h-screen py-20 md:py-32 container mx-auto px-6 overflow-hidden">


                {/* Background Video */}
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover -z-10"
                >
                    <source src="/videos/about-video.mp4" type="video/mp4" />
                </video>

                {/* Grid Background */}
                <GridPattern
                    width={60}
                    height={60}
                    strokeDasharray="4 2"
                    className="opacity-40 -z-10"
                />

                <motion.h2
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-5xl font-bold text-center text-neon-blue mb-16"
                >
                    About the Hackathon
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {[
                        { title: "Description", text: "National-level 24-hour innovation challenge bringing together students from across the country." },
                        { title: "Eligibility", text: "Open nationwide\nInter-college participation\nAll academic levels allowed" },
                        { title: "Team Size", text: "2–4 members per team" },
                        { title: "Participation", text: "Students from any college in India can join" },
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            variants={cardVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="glass p-8 glow hover-elevate text-center"
                        >
                            <h3 className="text-2xl font-bold text-neon-blue mb-4">{item.title}</h3>
                            <p className="text-soft-blue-gray whitespace-pre-line">{item.text}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Vision & Mission */}
                <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-10">

                    <motion.div
                        variants={cardVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="glass p-10 glow hover-elevate text-center"
                    >
                        <h3 className="text-3xl font-bold text-neon-blue mb-4">
                            Our Vision
                        </h3>
                        <p className="text-soft-blue-gray leading-relaxed">
                            To inspire the next generation of innovators by creating a platform
                            where students collaborate, experiment, and build technology-driven
                            solutions that address real-world challenges.
                        </p>
                    </motion.div>

                    <motion.div
                        variants={cardVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="glass p-10 glow hover-elevate text-center"
                    >
                        <h3 className="text-3xl font-bold text-neon-blue mb-4">
                            Our Mission
                        </h3>
                        <p className="text-soft-blue-gray leading-relaxed">
                            To foster creativity, teamwork, and problem-solving among students
                            through a national-level hackathon where ideas evolve into impactful
                            innovations within an intense 24-hour challenge.
                        </p>
                    </motion.div>

                </div>

                {/* Themes Button */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mt-20 flex justify-center"
                >
                    <a
                        href="/themes"
                        className="px-10 py-4 rounded-xl bg-neon-blue text-white font-semibold text-lg hover:scale-105 transition transform shadow-lg"
                    >
                        Explore Hackathon Themes
                    </a>
                </motion.div>

                {/* Team Section */}
                {/* <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mt-28"
                >

                    <h2 className="text-4xl md:text-5xl font-bold text-center text-neon-blue mb-16">
                        Organizing Team
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">

                        {[
                            {
                                name: "Shivarama R",
                                role: "Event Coordinator",
                                img: "/team/member1.jpg"
                            },
                            {
                                name: "Member 2",
                                role: "Technical Lead",
                                img: "/team/member2.jpg"
                            },
                            {
                                name: "Member 3",
                                role: "Design Lead",
                                img: "/team/member3.jpg"
                            },
                            {
                                name: "Member 4",
                                role: "Marketing Lead",
                                img: "/team/member4.jpg"
                            }
                        ].map((member, i) => (
                            <motion.div
                                key={i}
                                variants={cardVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                className="glass p-6 text-center glow hover-elevate"
                            >

                                <img
                                    src={member.img}
                                    alt={member.name}
                                    className="w-28 h-28 mx-auto rounded-full object-cover mb-4 border-2 border-neon-blue"
                                />

                                <h3 className="text-xl font-semibold text-white">
                                    {member.name}
                                </h3>

                                <p className="text-soft-blue-gray text-sm mt-1">
                                    {member.role}
                                </p>

                            </motion.div>
                        ))}

                    </div>

                </motion.div> */}

            </section>
            <Footer />
        </>
    );
}