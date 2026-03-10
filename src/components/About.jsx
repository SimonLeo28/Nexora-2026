import { motion } from 'framer-motion';

const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

export default function About() {
    return (
        <>
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
        </section>
        </>
    );
}