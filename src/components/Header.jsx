// import { motion } from "framer-motion";
// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";

// export default function Header() {
//   const [scrolled, setScrolled] = useState(false);
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

//   useEffect(() => {
//     window.addEventListener("scroll", () => {
//       setScrolled(window.scrollY > 300);
//     });
//   }, []);

//   return (
//     <nav
//       id="header"
//       className="fixed top-0 w-full bg-black/60 backdrop-blur-md z-50 py-4"
//     >
//       <div className="container mx-auto px-6 flex items-center justify-between">
        
//         {/* Logo */}
//         <Link
//           to="/"
//           className="flex items-center cursor-pointer hover:scale-105 transition-transform"
//         >
//           <img
//             className="h-8 md:h-10 lg:h-12 w-auto"
//             src="nexora_logo.png"
//             alt="Nexora Logo"
//           />
//           <p className="text-md text-gray-300 ml-2 hover:text-neon-blue transition-colors">
//             NEXORA
//           </p>
//         </Link>

//         {/* Mobile Menu Button */}
//         <div className="md:hidden mr-8">
//           <button
//             onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//             className="text-gray-300"
//           >
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-6 w-6"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M4 6h16M4 12h16M4 18h16"
//               />
//             </svg>
//           </button>
//         </div>

//         {/* Navigation Links */}
//         <div
//           className={`flex ${
//             mobileMenuOpen ? "flex" : "hidden"
//           } md:flex flex-col md:flex-row items-center gap-4 md:gap-10 absolute md:relative top-16 md:top-0 left-0 w-full md:w-auto bg-black/80 md:bg-transparent p-4 md:p-0`}
//         >
//           <a href="#home" className="hover:text-neon-blue transition-colors">
//             Home
//           </a>

//           <Link to="/about" className="hover:text-neon-blue transition-colors">
//             About
//           </Link>

//           <a href="#details" className="hover:text-neon-blue transition-colors">
//             Details
//           </a>

//           <a href="#rules" className="hover:text-neon-blue transition-colors">
//             Rules
//           </a>

//           <a href="#prizes" className="hover:text-neon-blue transition-colors">
//             Prizes
//           </a>

//           <a href="#contact" className="hover:text-neon-blue transition-colors">
//             Contact
//           </a>

//           {scrolled && (
//             <motion.a
//               href="https://forms.gle/DamccNwnjHAnsFuq5"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="bg-neon-blue text-white px-4 py-2 rounded"
//               initial={{ opacity: 0, scale: 0.5 }}
//               animate={{ opacity: 1, scale: 1 }}
//               transition={{ duration: 0.3 }}
//             >
//               Register
//             </motion.a>
//           )}
//         </div>
//       </div>
//     </nav>
//   );
// }



import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";

    const handleScroll = () => setScrolled(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Themes", path: "/themes" },
    { name: "Rules", path: "/rules" },
    { name: "Contact", path: "/contact" }
  ];

  return (
<<<<<<< Updated upstream
<<<<<<< Updated upstream
    <nav className="fixed top-0 w-full bg-black/60 backdrop-blur-md z-50 py-1 ">
=======
    <nav className="fixed top-0 w-full bg-black/60 backdrop-blur-md z-50 py-3">
>>>>>>> Stashed changes
=======
    <nav className="fixed top-0 w-full bg-black/60 backdrop-blur-md z-50 py-3">
>>>>>>> Stashed changes
      <div className="container mx-auto px-6 flex items-center justify-between">

        <Link
          to="/"
          className="flex items-center hover:scale-105 transition-transform duration-300"
        >
          <img
            className="h-8 md:h-10 lg:h-12 w-auto"
            src="/nexora_logo1.png"
            alt="Nexora Logo"
          />
          <p className="text-md text-gray-300 ml-2 hover:text-orange-500 transition-colors duration-300">
            NEXORA
          </p>
        </Link>

        <div className="md:hidden mr-8">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-gray-300 hover:text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16"/>
            </svg>
          </button>
        </div>

        <div
          className={`${
            mobileMenuOpen ? "flex" : "hidden"
          } md:flex flex-col md:flex-row items-center gap-4 md:gap-10 absolute md:relative top-16 md:top-0 left-0 w-full md:w-auto bg-black/90 md:bg-transparent p-4 md:p-0`}
        >
          {navLinks.map((item) => {
            const isActive = location.pathname === item.path;

            return (
              <Link
                key={item.name}
                to={item.path}
                className={`text-lg transition-colors ${
                  isActive
                    ? "text-orange-500 font-bold"
                    : "text-gray-300 hover:text-orange-500"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            );
          })}

          {/* On home page: show Register only after scrolling. On other pages: always show it. */}
          {(location.pathname !== "/" || scrolled) && (
          <motion.a
            href="https://forms.gle/DamccNwnjHAnsFuq5"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-orange-500 text-black px-6 py-2 rounded-lg font-semibold"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            Register
          </motion.a>
          )}
        </div>
      </div>
    </nav>
  );
}