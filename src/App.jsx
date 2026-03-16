// import { motion } from 'framer-motion';
// import { useEffect, useState } from 'react';
// import { BrowserRouter, Link, Route, Routes, useLocation } from 'react-router-dom';

// // Global background/extras
// import CursorTrail from './components/CursorTrail';
// import CustomCursor from './components/CustomCursor';
// import ParticleBackground from './components/ParticleBackground';

// // Landing Page Components
// import Footer from './components/Footer';
// import Hero from './components/Hero';
// import Prizes from './components/Prizes';
// import About from './pages/About';
// import ThemesPage from './Pages/ThemesPage';


// const Home = () => {
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => setScrolled(window.scrollY > 300);
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   return (
//     <>
//       <Hero>
//         {!scrolled && (
//           <motion.a 
//             href="https://forms.gle/DamccNwnjHAnsFuq5" 
//             target="_blank" 
//             rel="noopener noreferrer" 
//             className="bg-neon-blue text-white px-4 md:px-8 py-2 md:py-4 text-base md:text-xl rounded-lg font-bold"
//             layout
//             animate={{ 
//               opacity: scrolled ? 0 : 1, 
//               scale: scrolled ? 0.5 : 1, 
//               x: scrolled ? (window.innerWidth < 768 ? 100 : 200) : 0,
//               y: scrolled ? -50 : 0
//             }}
//             transition={{ duration: 0.5 }}
//           >
//             Register Now
//           </motion.a>
//         )}
//       </Hero>
//       {/* <EventDetails /> */}
//       <Prizes />
//       <Footer />
//     </>
//   );
// };

// // --- MOCK COMPONENTS ---
// // You will replace these with real component imports later (e.g., Theme.jsx, About.jsx)

// // const About = () => (
// //   <div className="min-h-screen flex items-center justify-center">
// //     <h1 className="text-4xl md:text-6xl font-bold text-white text-shadow-lg">About Page (Mock)</h1>
// //   </div>
// // );

// const RulesPage = () => (
//   <div className="min-h-screen flex items-center justify-center">
//     <h1 className="text-4xl md:text-6xl font-bold text-white text-shadow-lg">Rules Page (Mock)</h1>
//   </div>
// );

// const ContactPage = () => (
//   <div className="min-h-screen flex items-center justify-center">
//     <h1 className="text-4xl md:text-6xl font-bold text-white text-shadow-lg">Contact Page (Mock)</h1>
//   </div>
// );
// // ------------------------

// function Navbar() {
//   const [scrolled, setScrolled] = useState(false);
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const location = useLocation(); // Used to highlight the active link

//   useEffect(() => {
//     document.documentElement.style.scrollBehavior = 'smooth';
//     const handleScroll = () => setScrolled(window.scrollY > 300);
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);


//   // links on navbar

//   const navLinks = [
//     { name: 'Home', path: '/' },
//     { name: 'About', path: '/about' },
//     { name: 'Themes', path: '/themes' },
//     { name: 'Rules', path: '/rules' },
//     { name: 'Contact', path: '/contact' }
//   ];

//   return (
//     <nav className="fixed top-0 w-full bg-black/60 backdrop-blur-md z-50 py-4">
//       <div className="container mx-auto px-6 flex items-center justify-between">
//         <Link to="/" className="Nav_Logo_container flex items-center hover:scale-105 transition-transform duration-300 cursor-pointer">
//           <img className="h-8 md:h-10 lg:h-12 w-auto" src="nexora_logo.png" alt="Nexora Logo" />
//           <p className="text-md text-gray-300 ml-2 hover:text-neon-blue transition-colors text-shadow-lg">NEXORA</p>
//         </Link>

//         <div className="md:hidden mr-8">
//           <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-gray-300 hover:text-white transition-colors">
//             <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
//             </svg>
//           </button>
//         </div>

//         <div className={`Asider ${mobileMenuOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row items-center gap-4 md:gap-10 absolute md:relative top-16 md:top-0 left-0 w-full md:w-auto bg-black/90 md:bg-transparent p-4 md:p-0`}>
//           {navLinks.map((item) => {
//             const isActive = location.pathname === item.path;
//             return (
//               <Link 
//                 key={item.name} 
//                 to={item.path} 
//                 className={`transition-colors text-lg ${isActive ? 'text-neon-blue font-bold text-shadow-md' : 'text-gray-300 hover:text-neon-blue'}`} 
//                 onClick={() => setMobileMenuOpen(false)}
//               >
//                 {item.name}
//               </Link>
//             )
//           })}

//           {/* Show register globally or only on scroll */}
//           <motion.a 
//             href="https://forms.gle/DamccNwnjHAnsFuq5" 
//             target="_blank" 
//             rel="noopener noreferrer" 
//             className="bg-neon-blue text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-600 transition-colors shadow-lg shadow-neon-blue/30"
//             initial={{ opacity: 0, scale: 0.5 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.3 }}
//           >
//             Register
//           </motion.a>
//         </div>
//       </div>
//     </nav>
//   );
// }


// export default function App() {
//   return (
//     <BrowserRouter>
//       <div className="relative min-h-screen bg-black overflow-hidden">
//         {/* Global UI Tools */}
//         <CustomCursor />
//         <CursorTrail />
//         <ParticleBackground />

//         {/* Separated Navbar Component */}
//         <Navbar />

//         {/* Routed Pages */}
//         <main className="z-10 relative">
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/about" element={<About/>} />
//             <Route path="/themes" element={<ThemesPage />} />
//             <Route path="/rules" element={<RulesPage />} />
//             <Route path="/contact" element={<ContactPage />} />
//           </Routes>
//         </main>
//       </div>
//     </BrowserRouter>
//   );
// }


import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";

import CursorTrail from "./components/CursorTrail";
import CustomCursor from "./components/CustomCursor";
import ParticleBackground from "./components/ParticleBackground";

import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Prizes from "./components/Prizes";

import Header from "./components/Header";

import About from "./pages/About";
import Contact from "./pages/Contact";
import Rules from "./pages/Rules";
import ThemesPage from "./pages/ThemesPage";


import { motion } from "framer-motion";
import { useEffect, useState } from "react";
// import { Toaster } from "react-hot-toast";
import TimeLine from "./components/TimeLine";
import { ToastProvider } from "./components/ui/toast";


const Home = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Hero>
        {!scrolled && (
          <motion.a
            href="https://forms.gle/DamccNwnjHAnsFuq5"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-neon-blue text-white px-6 py-3 rounded-lg font-bold"
          >
            Register Now
          </motion.a>
        )}
      </Hero>
      <TimeLine />
      <Prizes />
      <Footer />
    </>
  );
};

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ToastProvider >
        <div className="relative min-h-screen bg-black overflow-hidden">

          <CustomCursor />
          <CursorTrail />
          <ParticleBackground />

          <ScrollToTop />
          <Header />
          {/* <Toaster position="top-right-4" reverseOrder={false} /> */}

          <main className="relative z-10">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/themes" element={<ThemesPage />} />
              <Route path="/rules" element={<Rules />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>

        </div>
      </ToastProvider>
    </BrowserRouter>
  );
}