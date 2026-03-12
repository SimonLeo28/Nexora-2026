// src/components/Footer.jsx
import logo1 from "../logos/logo1.jpg";
import logo2 from "../logos/logo2.jpg";
import logo3 from "../logos/logo3.jpg";
import logo4 from "../logos/logo4.jpg";
import logo5 from "../logos/logo5.jpg";
import logo6 from "../logos/logo6.jpg";
import logo7 from "../logos/logo7.jpg";
import logo8 from "../logos/logo8.jpg";

export default function Footer() {
    const logos = [logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8];

    return (
        <footer
            id="contact"
            className="relative py-16 bg-black/80 text-center border-t border-neon-blue/30 overflow-hidden"
        >
            {/* Background Watermark Text */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
                <h1 className="text-[40px] md:text-[100px] lg:text-[140px] font-extrabold text-gray-300/10 tracking-widest select-none">
                    NEXORA - 2026
                </h1>
            </div>

            {/* Content */}
            <div className="relative container mx-auto px-6 z-10">
                
                {/* Partners / Logos Section */}
                <div className="mb-20">
                    <h3 className="text-sm md:text-base font-medium tracking-[0.3em] text-gray-400 mb-10 uppercase">Our Sponsors & Partners</h3>
                    <div className="flex flex-wrap justify-center items-center gap-8 md:gap-14">
                        {logos.map((logo, index) => (
                            <img
                                key={index}
                                src={logo}
                                alt={`Partner ${index + 1}`}
                                className="h-10 md:h-12 lg:h-16 object-contain opacity-50 hover:opacity-100 hover:scale-110 transition-all duration-300 grayscale hover:grayscale-0"
                            />
                        ))}
                    </div>
                </div>

                <h2 className="text-3xl font-light text-neon-blue mb-6 tracking-[0.2em] uppercase">
                    Get in Touch
                </h2>

                <p className="text-soft-blue-gray mb-4 font-light tracking-wide">
                    Email: <a href="mailto:infonexora2026@gmail.com" className="hover:text-white transition-colors">infonexora2026@gmail.com</a>
                </p>

                <p className="text-soft-blue-gray mb-8 font-light leading-relaxed tracking-wide">
                    <span className="text-gray-500 text-sm tracking-widest uppercase mb-2 inline-block">Student Coordinators</span><br/>
                    Shivarama R | Harshavardhana Reddy<br/>
                    <span className="text-neon-blue">+91 9148672650 | +91 7019022248</span>
                </p>

                <div className="w-24 h-[1px] bg-neon-blue/30 mx-auto my-10"></div>

                <p className="text-xs md:text-sm text-gray-600 font-light tracking-widest">
                    © {new Date().getFullYear()} National Level Hackathon 2026 — All rights reserved.
                </p>
            </div>
        </footer>
    );
}