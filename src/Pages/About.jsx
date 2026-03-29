// import { motion } from 'framer-motion';
// import { Link } from 'react-router-dom';
// import Footer from "../components/Footer";
// import GridPattern from '../components/GridPattern';
// import { ShootingStars } from '../components/ShootingStars';
// import { StarsBackground } from '../components/StarsBackground';

// const cardVariants = {
//     hidden: { opacity: 0, y: 40 },
//     visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
// };

// export default function About() {
//     return (
//         <>
//             {/* <Header /> */}
//             {/* <CustomCursor /> */}
//             <section id="about" className="relative min-h-screen py-20 md:py-32 container mx-auto px-6 overflow-hidden">


//                 {/* Background Video */}
//                 {/* <video
//                     autoPlay
//                     loop
//                     muted
//                     playsInline
//                     className="absolute inset-0 w-full h-full object-cover -z-10"
//                 >
//                     <source src="/videos/about-video.mp4" type="video/mp4" />
//                 </video> */}

//                 {/* this is a background comign from the 21st dev  */}
//                 <div className="absolute inset-0 z-0">
//                     <StarsBackground />
//                     <ShootingStars />
//                 </div>

//                 {/* Grid Background */}
//                 <GridPattern
//                     width={60}
//                     height={60}
//                     strokeDasharray="4 2"
//                     className="opacity-40 -z-10"
//                 />

//                 <motion.h2
//                     initial={{ opacity: 0 }}
//                     whileInView={{ opacity: 1 }}
//                     viewport={{ once: true }}
//                     className="text-4xl md:text-5xl font-bold text-center text-neon-white    mb-16"
//                 >
//                     About the Hackathon
//                 </motion.h2>

//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//                     {[
//                         { title: "Description", text: "National-level 24-hour innovation challenge bringing together students from across the country." },
//                         { title: "Eligibility", text: "Open nationwide\nInter-college participation\nAll academic levels allowed" },
//                         { title: "Team Size", text: "2–4 members per team" },
//                         { title: "Participation", text: "Students from any college in India can join" },
//                     ].map((item, i) => (
//                         <motion.div
//                             key={i}
//                             variants={cardVariants}
//                             initial="hidden"
//                             whileInView="visible"
//                             viewport={{ once: true }}
//                             className="glass p-8 glow hover-elevate text-center"
//                         >
//                             <h3 className="text-2xl font-bold text-neon-blue mb-4">{item.title}</h3>
//                             <p className="text-soft-blue-gray whitespace-pre-line">{item.text}</p>
//                         </motion.div>
//                     ))}
//                 </div>

//                 {/* Vision & Mission */}
//                 <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-10">

//                     <motion.div
//                         variants={cardVariants}
//                         initial="hidden"
//                         whileInView="visible"
//                         viewport={{ once: true }}
//                         className="glass p-10 glow hover-elevate text-center"
//                     >
//                         <h3 className="text-3xl font-bold text-neon-blue mb-4">
//                             Our Vision
//                         </h3>
//                         <p className="text-soft-blue-gray leading-relaxed">
//                             To inspire the next generation of innovators by creating a platform
//                             where students collaborate, experiment, and build technology-driven
//                             solutions that address real-world challenges.
//                         </p>
//                     </motion.div>

//                     <motion.div
//                         variants={cardVariants}
//                         initial="hidden"
//                         whileInView="visible"
//                         viewport={{ once: true }}
//                         className="glass p-10 glow hover-elevate text-center"
//                     >
//                         <h3 className="text-3xl font-bold text-neon-blue mb-4">
//                             Our Mission
//                         </h3>
//                         <p className="text-soft-blue-gray leading-relaxed">
//                             To foster creativity, teamwork, and problem-solving among students
//                             through a national-level hackathon where ideas evolve into impactful
//                             innovations within an intense 24-hour challenge.
//                         </p>
//                     </motion.div>

//                 </div>

//                 {/* Themes Button */}
//                 <motion.div
//                     initial={{ opacity: 0, y: 30 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     viewport={{ once: true }}
//                     transition={{ duration: 0.8 }}
//                     className="mt-20 flex justify-center"
//                 >
//                     <Link
//                         to="/themes"
//                         className="px-10 py-4 rounded-xl bg-neon-blue text-white font-semibold text-lg hover:scale-105 transition transform shadow-lg"
//                     >
//                         Explore Hackathon Themes
//                     </Link>
//                 </motion.div>

//                 {/* Team Section */}
//                 {/* <motion.div
//                     initial={{ opacity: 0 }}
//                     whileInView={{ opacity: 1 }}
//                     viewport={{ once: true }}
//                     transition={{ duration: 0.8 }}
//                     className="mt-28"
//                 >

//                     <h2 className="text-4xl md:text-5xl font-bold text-center text-neon-blue mb-16">
//                         Organizing Team
//                     </h2>

//                     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">

//                         {[
//                             {
//                                 name: "Shivarama R",
//                                 role: "Event Coordinator",
//                                 img: "/team/member1.jpg"
//                             },
//                             {
//                                 name: "Harsha Vardhan Reddy C",
//                                 role: "Technical Lead",
//                                 img: "/team/member2.jpg"
//                             },
//                             {
//                                 name: "Srujana Deshpande",
//                                 role: "Design Lead",
//                                 img: "/team/member3.jpg"
//                             },
//                             {
//                                 name: "Member 4",
//                                 role: "Marketing Lead",
//                                 img: "/team/member4.jpg"
//                             }
//                         ].map((member, i) => (
//                             <motion.div
//                                 key={i}
//                                 variants={cardVariants}
//                                 initial="hidden"
//                                 whileInView="visible"
//                                 viewport={{ once: true }}
//                                 className="glass p-6 text-center glow hover-elevate"
//                             >

//                                 <img
//                                     src={member.img}
//                                     alt={member.name}
//                                     className="w-28 h-28 mx-auto rounded-full object-cover mb-4 border-2 border-neon-blue"
//                                 />

//                                 <h3 className="text-xl font-semibold text-white">
//                                     {member.name}
//                                 </h3>

//                                 <p className="text-soft-blue-gray text-sm mt-1">
//                                     {member.role}
//                                 </p>

//                             </motion.div>
//                         ))}

//                     </div>

//                 </motion.div> */}

//             </section>
//             <Footer />
//         </>
//     );
// }

import { Award, Globe, Lightbulb, Users } from "lucide-react";
import Footer from "../components/Footer";
import GridPattern from '../components/GridPattern';
import Header from "../components/Header";
import { ShootingStars } from '../components/ShootingStars';
import { StarsBackground } from '../components/StarsBackground';

export default function About() {
    return (
        <>
            <Header />
            <div className="w-full overflow-hidden font-normal">

                {/* Background */}
                <div className="absolute inset-0 z-0">
                    <StarsBackground />
                    <ShootingStars />
                </div>

                <GridPattern
                    width={60}
                    height={60}
                    strokeDasharray="4 2"
                    className="opacity-40 -z-10"
                />

                {/* Hero Section */}
                <section className="relative min-h-[50vh] flex items-center justify-center px-4 py-20 bg-gradient-to-b from-orange-900/80 to-transparent">
                    <div className="absolute inset-0 overflow-hidden">
                        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-400/20 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-blob" />
                        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-400/20 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-blob animation-delay-4000" />
                    </div>

                    <div className="relative z-10 max-w-4xl mx-auto text-center">
                        <h1 className="text-5xl md:text-6xl font-bold mb-6">
                            <span className="text-white">
                                About
                            </span>
                        </h1>

                        <p className="text-xl text-slate-300">
                            <span className="text-orange-400 font-semibold">National-level</span> 24-hour
                            <span className="text-orange-400 font-semibold"> innovation challenge </span>
                            bringing together talented students from across the country.
                        </p>
                    </div>
                </section>

                {/* Mission Section */}
                <section className="relative py-20 px-4">
                    <div className="max-w-6xl mx-auto">

                        <div className="grid md:grid-cols-2 gap-12 items-center">

                            {/* Vision */}
                            <div>
                                <h2 className="text-4xl font-bold mb-6 text-white">
                                    Our Vision
                                </h2>

                                <p className="text-slate-300 text-lg mb-4 leading-relaxed">
                                    To inspire the next generation
                                    <span className="text-orange-400 font-semibold"> innovators </span>
                                    by creating a platform where students
                                    <span className="text-orange-400 font-semibold"> collaborate, experiment, and build </span>
                                    technology-driven solutions that solve
                                    <span className="text-orange-400 font-semibold"> real-world challenges</span>.
                                </p>
                            </div>

                            {/* Mission */}
                            <div>
                                <h2 className="text-4xl font-bold mb-6 text-white">
                                    Our Mission
                                </h2>

                                <p className="text-slate-300 text-lg mb-4 leading-relaxed">
                                    To foster
                                    <span className="text-orange-400 font-semibold"> creativity, teamwork, and problem-solving </span>
                                    among students through a
                                    <span className="text-orange-400 font-semibold"> national-level hackathon </span>
                                    where ideas evolve into impactful innovations within an intense
                                    <span className="text-orange-400 font-semibold"> 24-hour challenge</span>.
                                </p>
                            </div>

                            {/* Info Cards */}
                            <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
                                {[
                                    {
                                        title: "Description",
                                        text: "A national-level 24-hour innovation challenge bringing together talented students from across India."
                                    },
                                    {
                                        title: "Eligibility",
                                        text: "Open nationwide\nInter-college participation\nAll academic levels allowed"
                                    },
                                    {
                                        title: "Team Size",
                                        text: "2–4 members per team"
                                    },
                                    {
                                        title: "Participation",
                                        text: "Students of Engineering from any college across the nation"
                                    },
                                ].map((item) => (
                                    <div key={item.title} className="group">

                                        <div className="relative h-full p-6 bg-orange-900/20 border border-orange-400/20 rounded-lg group-hover:border-orange-400/50 transition-all duration-300">

                                            <h3 className="text-xl font-bold text-orange-400 mb-2">
                                                {item.title}
                                            </h3>

                                            <p className="text-slate-400 text-sm leading-relaxed whitespace-pre-line">
                                                {item.text}
                                            </p>

                                        </div>

                                    </div>
                                ))}
                            </div>

                        </div>
                    </div>
                </section>

                {/* Values Section */}
                <section className="relative py-20 px-4 bg-gradient-to-b from-orange-900/20 via-transparent to-yellow-950/50">
                    <div className="max-w-6xl mx-auto">

                        <h2 className="text-4xl font-bold text-center mb-16 text-orange-400">
                            Our Core Values
                        </h2>

                        <div className="grid md:grid-cols-4 gap-6">

                            {[
                                {
                                    Icon: Lightbulb,
                                    title: "Innovation",
                                    description:
                                        "We celebrate creative thinking and bold ideas that push technological boundaries.",
                                },
                                {
                                    Icon: Users,
                                    title: "Collaboration",
                                    description:
                                        "We believe in teamwork and diverse perspectives to build impactful solutions.",
                                },
                                {
                                    Icon: Globe,
                                    title: "Impact",
                                    description:
                                        "We focus on creating technology that makes a real difference in society.",
                                },
                                {
                                    Icon: Award,
                                    title: "Excellence",
                                    description:
                                        "We strive for the highest standards in innovation and execution.",
                                },
                            ].map((value, index) => (

                                <div key={index} className="group">
                                    <div className="relative h-full">

                                        <div className="absolute inset-0 bg-gradient-to-br from-orange-400/10 to-yellow-400/10 rounded-lg blur opacity-0 group-hover:opacity-100 transition duration-300" />

                                        <div className="relative h-full p-6 bg-orange-900/20 border border-orange-400/10 rounded-lg group-hover:border-orange-400/50 transition-all duration-300 text-center">

                                            <div className="w-12 h-12 mx-auto rounded-lg bg-gradient-to-br from-orange-400/20 to-yellow-400/10 flex items-center justify-center mb-4">

                                                <value.Icon
                                                    className="text-orange-500 hover:text-orange-300 transition-colors duration-300"
                                                    size={24}
                                                />

                                            </div>

                                            <h3 className="text-xl font-bold mb-2 text-white">
                                                {value.title}
                                            </h3>

                                            <p className="text-slate-400 text-sm">
                                                {value.description}
                                            </p>

                                        </div>
                                    </div>
                                </div>

                            ))}

                        </div>
                    </div>
                </section>

                {/* Team Section
            <section className="relative py-20 px-4">
                <div className="max-w-6xl mx-auto">

                    <h2 className="text-4xl font-bold text-center mb-16 text-orange-400">
                        Meet Our Team
                    </h2>

                    <div className="grid md:grid-cols-3 gap-8">

                        {[
                            {
                                name: "Alex Johnson",
                                role: "Founder & CEO",
                                image: "👨‍💼",
                            },
                            {
                                name: "Sarah Chen",
                                role: "Chief Technology Officer",
                                image: "👩‍💻",
                            },
                            {
                                name: "Mike Davis",
                                role: "Head of Operations",
                                image: "👨‍💻",
                            },
                        ].map((member) => (

                            <div key={member.name} className="group text-center">

                                <div className="relative">

                                    <div className="absolute inset-0 bg-gradient-to-br from-orange-400/20 to-yellow-400/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition duration-300" />

                                    <div className="relative p-8 bg-orange-900/10 border border-orange-400/20 rounded-lg group-hover:border-yellow-400/50 transition-all duration-300">

                                        <div className="text-6xl mb-4">{member.image}</div>

                                        <h3 className="text-xl font-bold text-white mb-1">
                                            {member.name}
                                        </h3>

                                        <p className="text-orange-400">{member.role}</p>

                                    </div>

                                </div>

                            </div>

                        ))}

                    </div>
                </div>
            </section> */}

                <Footer />

                <style>{`
        @keyframes blob {
          0%, 100% { transform: translate(0,0) scale(1); }
          33% { transform: translate(30px,-50px) scale(1.1); }
          66% { transform: translate(-20px,20px) scale(0.9); }
        }

        .animate-blob {
          animation: blob 7s infinite;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>

            </div>
        </>
    );
}