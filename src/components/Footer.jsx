// export default function Footer() {
//     return (
//         <footer id="contact" className="py-16 bg-black/80 text-center border-t border-neon-blue/30">
//             <div className="container mx-auto px-6">
//                 <h2 className="text-3xl font-bold text-neon-blue mb-6">Get in Touch</h2>
//                 <p className="text-soft-blue-gray mb-4">Email: infonexora26@gmail.com</p>
//                 <p className="text-soft-blue-gray mb-8">Phone: +91 7892391803 | +91 8971762767</p>

//                 {/* <div className="flex justify-center gap-8 text-3xl mb-10">
//                     <a href="#" className="hover:text-neon-blue transition">𝕏</a>
//                     <a href="#" className="hover:text-neon-blue transition">LinkedIn</a>
//                     <a href="#" className="hover:text-neon-blue transition">Instagram</a>
//                 </div> */}

//                 <p className="text-sm text-soft-blue-gray">
//                     © {new Date().getFullYear()} National Level Hackathon 2026 — All rights reserved.
//                 </p>
//             </div>
//         </footer>
//     );
// }
export default function Footer() {
    return (
        <footer
            id="contact"
            className="relative py-16 bg-black/80 text-center border-t border-neon-blue/30 overflow-hidden"
        >
            {/* Background Watermark Text */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <h1 className="text-[40px] md:text-[100px] lg:text-[140px] font-extrabold text-gray-300/10 tracking-widest select-none">
                    NEXORA - 2026
                </h1>
            </div>

            {/* Content */}
            <div className="relative container mx-auto px-6">
                <h2 className="text-3xl font-bold text-neon-blue mb-6">
                    Get in Touch
                </h2>

                <p className="text-soft-blue-gray mb-4">
                    Email: infonexora2026@gmail.com
                </p>

                <p className="text-soft-blue-gray mb-8">
                    Phone: +91 9620907945 | +91 84317 44823
                </p>

                <p className="text-sm text-soft-blue-gray">
                    © {new Date().getFullYear()} National Level Hackathon 2026 — All rights reserved.
                </p>
            </div>
        </footer>
    );
}