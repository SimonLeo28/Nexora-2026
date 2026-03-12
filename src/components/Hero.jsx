import { motion } from "framer-motion";
import CountdownTimer from "./CountdownTimer";
// import BackgroundPaths from 'https://21st.dev/kokonutd/background-paths/default';
import aiemslogo from "../logos/aiemslogo.jpg";
import bvvlogo from "../logos/BVVS logo222.png";
import vtulogo from "../logos/VTU-Logo.png";

export default function Hero() {

    const logos = [
        bvvlogo, vtulogo, aiemslogo,
    ];

    return (
        <section
            id="home"
            className="relative min-h-[100svh] flex flex-col justify-center items-center text-center px-3 sm:px-6 md:px-8 overflow-hidden"
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
                mt-12
                grid
                grid-cols-3
                sm:grid-cols-3
                md:grid-cols-3
                gap-2
                sm:gap-6
                items-center
                justify-items-center
                w-full
                max-w-md
                sm:max-w-lg
                md:max-w-xl
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
                        md:h-16
                        lg:h-18
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

            {/* Countdown */}
            <motion.div
               initial={{ opacity: 0, x: 20 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ duration: 0.8, delay: 0.8 }}
               className="w-full md:w-auto"
            >
              {/* <CountdownTimer /> */}
              <CounterDaisy />
            </motion.div>
          </div>
        </div>
      </NeonNodes>
    </section>
  );
}