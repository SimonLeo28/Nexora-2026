import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { useState } from "react";
import Footer from "../../components/Footer";
import GridPattern from '../../components/GridPattern';
import Header from "../../components/Header";
import { ShootingStars } from '../../components/ShootingStars';
import { StarsBackground } from '../../components/StarsBackground';
import { useToast } from "../../components/ui/toast";

const MotionDiv = motion.create('div');

export default function NotifyMe() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const { showToast } = useToast();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // try {
    //   const res = await fetch("http://localhost:5000/backend/waitlist", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(formData),
    //   });

    const BASE_URL = "https://backend-nexora.onrender.com/backend/waitlist";

    try {
      const res = await fetch(BASE_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        // showToast.success("Message sent successfully");
        showToast("Message sent successfully!", "success");

        setFormData({
          name: "",
          email: "",
        });
      } else {
        // showToast.error(data.message || "Failed to send message");
        showToast(data.message || "Failed to send message", "error");

      }
    } catch (error) {
      console.error(error);
      // showToast.error("Server error. Please try again.");
      showToast("Server error. Please try again.", "error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Header />
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
              1<sup className="lowercase">st</sup> April 2026
            </span>
            . Stay tuned and be the first to register!
          </p>

          {/* Form / Success Message */}
          {isSubmitting ? (
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
                <span className="relative flex items-center justify-center gap-2 z-10 tracking wide">
                  <Send size={18} />
                  {isSubmitting ? "Sending..." : "Notify Me !"}
                </span>
              </button>
            </form>
          )}
        </motion.div>
      </section>
      <Footer />
    </>
  );
}