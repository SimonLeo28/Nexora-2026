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







// import { motion } from "framer-motion";

// // Import Logos
// import logo1 from "../logos/logo1.jpg";
// import logo2 from "../logos/logo2.jpg";
// import logo3 from "../logos/logo3.jpg";
// import logo4 from "../logos/logo4.jpg";
// import logo5 from "../logos/logo5.jpg";
// import logo6 from "../logos/logo6.jpg";
// import logo7 from "../logos/logo7.jpg";
// import logo8 from "../logos/logo8.jpg";

// export default function Footer() {

//     const logos = [
//             logo1, logo2, logo3, logo4,
//             logo5, logo6, logo7, logo8
//         ];

//     return (
//         <footer
//             id="contact"
//             className="relative py-16 bg-black/80 text-center border-t border-neon-blue/30 overflow-hidden"
//         >
//             {/* Background Watermark Text */}
//             <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
//                 <h1 className="text-[40px] md:text-[100px] lg:text-[140px] font-extrabold text-gray-300/10 tracking-widest select-none">
//                     NEXORA - 2026
//                 </h1>
//             </div>

//             {/* Logos */}
//             <motion.div
//                 initial={{ opacity: 0, y: -30 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.8 }}
//                 className="
//                 mt-16
//                 grid
//                 grid-cols-4
//                 sm:grid-cols-4
//                 md:grid-cols-8
//                 gap-4
//                 sm:gap-6
//                 items-center
//                 max-w-5xl
//                 mb-8
//                 "
//             >
//                 {logos.map((logo, index) => (
//                     <img
//                         key={index}
//                         src={logo}
//                         alt={`logo-${index}`}
//                         className="
//                         h-8
//                         sm:h-10
//                         md:h-12
//                         lg:h-14
//                         object-contain
//                         opacity-80
//                         hover:opacity-100
//                         hover:scale-105
//                         transition
//                         duration-300
//                         "
//                     />
//                 ))}
//             </motion.div>

//             {/* Content */}
//             <div className="relative container mx-auto px-6">
//                 <h2 className="text-3xl font-bold text-neon-blue mb-6">
//                     Get in Touch
//                 </h2>

//                 <p className="text-soft-blue-gray mb-4">
//                     Email: infonexora2026@gmail.com
//                 </p>

//                 <p className="text-soft-blue-gray mb-8">
//                     Phone: +91 9148672650 | +91 7019022248
//                 </p>

//                 <p className="text-sm text-soft-blue-gray">
//                     © {new Date().getFullYear()} National Level Hackathon 2026 — All rights reserved.
//                 </p>
//             </div>
//         </footer>
//     );
// }



import { motion } from "framer-motion";

// Import Logos
import aictelogo from "../logos/AICTE_logo.png";
import logo5 from "../logos/logo5.jpg";
import logo6 from "../logos/logo6.jpg";
import logo7 from "../logos/logo7.jpg";
import naaclogo from "../logos/NAAC_LOGO.png";

export default function Footer() {
  const logos = [
    aictelogo,
    naaclogo,
    logo5,
    logo6,
    logo7,
  ];

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

      {/* Logos */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mt-6 grid grid-cols-4 sm:grid-cols-4 md:grid-cols-5 gap-4 sm:gap-6 items-center justify-items-center max-w-5xl mx-auto mb-8"
      >
        {logos.map((logo, index) => (
          <img
            key={index}
            src={logo}
            alt={`logo-${index}`}
            className="h-8 sm:h-10 md:h-12 lg:h-14 object-contain opacity-80 hover:opacity-100 hover:scale-105 transition duration-300"
          />
        ))}
      </motion.div>

<<<<<<< Updated upstream
                <p className="text-soft-blue-gray mb-8">
                    Student Coordinator: Shivarama R | Harshavardhana Reddy<br></br>
                    Phone: +91 9148672650 | +91 7019022248
                </p>
=======
      {/* Content */}
      <div className="relative container mx-auto px-6">
        <h2 className="text-3xl font-bold text-neon-blue mb-6">
          Get in Touch
        </h2>
>>>>>>> Stashed changes

        <p className="text-soft-blue-gray mb-4">
          Email: infonexora2026@gmail.com
        </p>

        <p className="text-soft-blue-gray mb-8">
          Phone: +91 9148672650 | +91 7019022248
        </p>

        <p className="text-sm text-soft-blue-gray">
          © {new Date().getFullYear()} National Level Hackathon 2026 — All rights reserved.
        </p>
      </div>
    </footer>
  );
}