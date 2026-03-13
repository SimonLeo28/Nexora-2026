// import { useEffect, useState } from 'react';
// import CursorTrail from '../components/CursorTrail';
// import CustomCursor from '../components/CustomCursor';
// import EventDetails from '../components/EventDetails';
// import Footer from '../components/Footer';
// import Hero from '../components/Hero';
// import ParticleBackground from '../components/ParticleBackground';
// import Prizes from '../components/Prizes';
// import Rules from '../components/Rules';

// import { Link } from 'react-router-dom';

// import { motion } from 'framer-motion';

// export default function Home() {

//   const [scrolled, setScrolled] = useState(false);
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

//   useEffect(() => {
//     document.documentElement.style.scrollBehavior = 'smooth';
//     window.addEventListener('scroll', () => {
//       setScrolled(window.scrollY > 300);
//     });
//   }, []);

//   return (
//     <div className="relative">

//       <CustomCursor />
//       <CursorTrail />
//       <ParticleBackground />

//       <nav id="navbar" className="fixed top-0 w-full bg-black/60 backdrop-blur-md z-50 py-4">
//         <div className="container mx-auto px-6 flex items-center justify-between">

//           <div className="Nav_Logo_container flex items-center cursor-pointer">
//             <img className="h-8 md:h-10 lg:h-12 w-auto" src="nexora_logo.png" alt="Nexora Logo" />
//             <p className="text-md text-gray-300 ml-2 hover:text-neon-blue transition-colors">NEXORA</p>
//           </div>

//           <div className="md:hidden mr-8">
//             <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-gray-300">
//               <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
//               </svg>
//             </button>
//           </div>

//           <div className={`flex ${mobileMenuOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row items-center gap-4 md:gap-10 absolute md:relative top-16 md:top-0 left-0 w-full md:w-auto bg-black/80 md:bg-transparent p-4 md:p-0`}>

//             {/* {['Home', 'About', 'Details', 'Rules', 'Prizes', 'Contact'].map(item => (
//               <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-neon-blue transition-colors">
//                 {item}
//               </a>
//             ))} */}
//              <a href="#home" className="hover:text-neon-blue transition-colors">
//                 Home
//              </a>

//              <Link to="/about" className="hover:text-neon-blue transition-colors">
//                 About
//              </Link>

//              <a href="#details" className="hover:text-neon-blue transition-colors">
//                 Details
//              </a>

//              <a href="#rules" className="hover:text-neon-blue transition-colors">
//                 Rules
//              </a>

//              <a href="#prizes" className="hover:text-neon-blue transition-colors">
//                 Prizes
//              </a>

//              <a href="#contact" className="hover:text-neon-blue transition-colors">
//                 Contact
//              </a>


//             {scrolled && (
//               <motion.a
//                 href="https://forms.gle/DamccNwnjHAnsFuq5"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="bg-neon-blue text-white px-4 py-2 rounded"
//                 initial={{ opacity: 0, scale: 0.5 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 transition={{ duration: 0.3 }}
//               >
//                 Register
//               </motion.a>
//             )}

//           </div>
//         </div>
//       </nav>

//       <main>

//         <Hero>
//           {!scrolled && (
//             <motion.a
//               href="https://forms.gle/DamccNwnjHAnsFuq5"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="bg-neon-blue text-white px-8 py-4 text-xl rounded-lg font-bold"
//             >
//               Register Now
//             </motion.a>
//           )}
//         </Hero>

//         <EventDetails />
//         <Rules />
//         <Prizes />
//         <Footer />

//       </main>

//     </div>
//   );
// }


import CursorTrail from "../components/CursorTrail";
import CustomCursor from "../components/CustomCursor";
import EventDetails from "../components/EventDetails";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import ParticleBackground from "../components/ParticleBackground";
import Prizes from "../components/Prizes";
import Rules from "../components/Rules";

import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="relative">
      <CustomCursor />
      <CursorTrail />
      <ParticleBackground />

      <Header />

      <main>
        <Hero>
          <motion.a
            href="https://forms.gle/DamccNwnjHAnsFuq5"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-neon-blue text-white px-8 py-4 text-xl rounded-lg font-bold"
            whileHover={{ scale: 1.05 }}
          >
            Register Now
          </motion.a>
        </Hero>

        <EventDetails />
        <Rules />
        <Prizes />
        <Footer />
      </main>
    </div>
  );
}