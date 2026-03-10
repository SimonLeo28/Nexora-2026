// import { motion } from "framer-motion";
// import CountdownTimer from "./CountdownTimer";

// // Import Logos
// import logo1 from "../logos/logo1.jpg";
// import logo2 from "../logos/logo2.jpg";
// import logo3 from "../logos/logo3.jpg";
// import logo4 from "../logos/logo4.jpg";
// import logo5 from "../logos/logo5.jpg";
// import logo6 from "../logos/logo6.jpg";
// import logo7 from "../logos/logo7.jpg";
// import logo8 from "../logos/logo8.jpg";

// export default function Hero() {

//     const logos = [
//         logo1, logo2, logo3, logo4,
//         logo5, logo6, logo7, logo8
//     ];

//     return (
//         <section
//             id="home"
//             className="relative min-h-screen flex flex-col justify-center items-center text-center px-4 sm:px-6 overflow-hidden"
//         >

//             {/* Background Video */}
//             <video
//                 autoPlay
//                 loop
//                 muted
//                 playsInline
//                 className="absolute inset-0 w-full h-full object-cover -z-10"
//             >
//                 <source src="/videos/hackathon-bg.mp4" type="video/mp4" />
//             </video>

//             {/* Dark Overlay */}
//             <div className="absolute inset-0 bg-black/70 -z-10"></div>


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


//             {/* AIEMS PRESENTS */}
//             <motion.p
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ delay: 0.4 }}
//                 className="
//                 text-sm
//                 sm:text-base
//                 md:text-lg
//                 text-gray-300
//                 tracking-widest
//                 mb-4
//                 "
//             >
//                 AIEMS PRESENTS
//             </motion.p>


//             {/* Title */}
//             <motion.h1
//                 initial={{ opacity: 0, y: 70 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 1 }}
//                 className="
//                 text-4xl
//                 sm:text-5xl
//                 md:text-6xl
//                 lg:text-7xl
//                 xl:text-8xl
//                 font-extrabold
//                 mb-4
//                 text-white
//                 tracking-tight
//                 "
//             >
//                 NEXORA 2026
//             </motion.h1>


//             {/* Subtitle */}
//             <motion.p
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ delay: 0.6 }}
//                 className="
//                 text-lg
//                 sm:text-xl
//                 md:text-2xl
//                 lg:text-3xl
//                 text-gray-200
//                 mb-4
//                 "
//             >
//                 NATIONAL LEVEL HACKATHON
//             </motion.p>


//             {/* Tagline */}
//             <motion.p
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ delay: 0.8 }}
//                 className="
//                 text-sm
//                 sm:text-base
//                 md:text-lg
//                 text-gray-300
//                 mb-8
//                 "
//             >
//                 Code • Innovate • Conquer
//             </motion.p>


//             {/* Register Button */}
//             <motion.a
//                 href="https://forms.gle/DamccNwnjHAnsFuq5"
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 className="
//                 px-6
//                 sm:px-8
//                 md:px-10
//                 py-3
//                 sm:py-4
//                 bg-blue-500
//                 hover:bg-blue-400
//                 text-black
//                 font-bold
//                 text-sm
//                 sm:text-base
//                 md:text-lg
//                 rounded-xl
//                 shadow-lg
//                 transition
//                 "
//             >
//                 🚀 Register Now
//             </motion.a>


//             {/* Countdown */}
//             <motion.div
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ delay: 1 }}
//                 className="
//                 mt-6
//                 sm:mt-8
//                 p-4
//                 sm:p-5
//                 rounded-xl
//                 bg-white/10
//                 backdrop-blur-md
//                 border
//                 border-white/20
//                 w-full
//                 max-w-md
//                 "
//             >
//                 <CountdownTimer />
//             </motion.div>

//         </section>
//     );
// }
import { motion } from "framer-motion";
import CountdownTimer from "./CountdownTimer";

// Import Logos
import logo1 from "../logos/logo1.jpg";
import logo2 from "../logos/logo2.jpg";
import logo3 from "../logos/logo3.jpg";
import logo4 from "../logos/logo4.jpg";
import logo5 from "../logos/logo5.jpg";
import logo6 from "../logos/logo6.jpg";
import logo7 from "../logos/logo7.jpg";
import logo8 from "../logos/logo8.jpg";

export default function Hero() {

    const logos = [
        logo1, logo2, logo3, logo4,
        logo5, logo6, logo7, logo8
    ];

    return (
        <section
            id="home"
            className="relative min-h-screen flex flex-col justify-center items-center text-center px-4 sm:px-6 overflow-hidden"
        >

            {/* Background Video */}
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover -z-10"
            >
                <source src="/videos/bg-video6.mp4" type="video/mp4" />
            </video>

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/35 -z-10"></div>


            {/* Logos */}
            <motion.div
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="
                mt-16
                grid
                grid-cols-4
                sm:grid-cols-4
                md:grid-cols-8
                gap-4
                sm:gap-6
                items-center
                max-w-5xl
                mb-8
                "
            >
                {logos.map((logo, index) => (
                    <img
                        key={index}
                        src={logo}
                        alt={`logo-${index}`}
                        className="
                        h-8
                        sm:h-10
                        md:h-12
                        lg:h-14
                        object-contain
                        opacity-80
                        hover:opacity-100
                        hover:scale-105
                        transition
                        duration-300
                        "
                    />
                ))}
            </motion.div>


            {/* AIEMS PRESENTS */}
            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="
                text-sm
                sm:text-base
                md:text-lg
                text-gray-300
                tracking-widest
                mb-4
                "
            >
                AIEMS PRESENTS
            </motion.p>


            {/* Title */}
            <motion.h1
                initial={{ opacity: 0, y: 70 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="
                text-4xl
                sm:text-5xl
                md:text-6xl
                lg:text-7xl
                xl:text-8xl
                font-extrabold
                mb-4
                text-white
                tracking-tight
                "
            >
                NEXORA 2026
            </motion.h1>


            {/* Subtitle */}
            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="
                text-lg
                sm:text-xl
                md:text-2xl
                lg:text-3xl
                text-gray-200
                mb-4
                "
            >
                NATIONAL LEVEL HACKATHON
            </motion.p>


            {/* Tagline */}
            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="
                text-sm
                sm:text-base
                md:text-lg
                text-gray-300
                mb-8
                "
            >
                Code • Innovate • Conquer
            </motion.p>


            {/* Register Button */}
            <motion.a
                href="https://forms.gle/DamccNwnjHAnsFuq5"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="
                px-6
                sm:px-8
                md:px-10
                py-3
                sm:py-4
                bg-blue-500
                hover:bg-blue-400
                text-black
                font-bold
                text-sm
                sm:text-base
                md:text-lg
                rounded-xl
                shadow-lg
                transition
                "
            >
                🚀 Register Now
            </motion.a>


            {/* Countdown */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="
                mt-6
                sm:mt-8
                p-4
                sm:p-5
                rounded-xl
                bg-white/10
                backdrop-blur-md
                border
                border-white/20
                w-full
                max-w-xl
                "
            >
                <CountdownTimer />
            </motion.div>

        </section>
    );
}