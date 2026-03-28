import { motion } from "framer-motion";
import { useState } from "react";
import Footer from "../../components/Footer";
import GridPattern from '../../components/GridPattern';
import { ShootingStars } from '../../components/ShootingStars';
import { StarsBackground } from '../../components/StarsBackground';

const MotionDiv = motion.create('div');

export default function NotifyMe() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // 👉 You can replace this with API call
    console.log("User Data:", formData);

    setSubmitted(true);
  };

  return (
  <>
    <section id="notifyme" className="min-h-screen flex items-center justify-center text-white px-4">
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

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-xl w-full border-2 border-amber-900 bg-transparent backdrop-blur-lg rounded-2xl shadow-xl p-8 text-center"
      >
        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-orange-400">
          Registration Starts Soon
        </h1>

        {/* Subtitle */}
        <p className="text-lg mb-6 text-gray-300">
          Registration will open from{" "}
          <span className="text-orange-500 font-semibold">
            6th April 2026
          </span>
          . Stay tuned and be the first to register!
        </p>

        {/* Form / Success Message */}
        {submitted ? (
          <div className="text-green-400 font-medium">
            You’ll be notified when registration opens!
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name */}
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-lg bg-black/30 border border-gray-600 focus:outline-none focus:border-orange-400"
            />

            {/* Email */}
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-lg bg-black/30 border border-gray-600 focus:outline-none focus:border-orange-400"
            />

            {/* Button */}
            <button
              type="submit"
              className="w-full bg-orange-600 hover:bg-orange-800 transition-all py-2 rounded-lg font-semibold"
            >
              Notify Me !
            </button>
          </form>
        )}
      </motion.div>
    </section>
    <Footer />
  </>
  );
}