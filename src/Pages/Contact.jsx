import { Mail, MapPin, Phone, Send } from "lucide-react";
import { useState } from "react";
// import toast from "react-hot-toast";
import Footer from "../components/Footer";
import GridPattern from "../components/GridPattern";
import Header from "../components/Header";
import { ShootingStars } from "../components/ShootingStars";
import { StarsBackground } from "../components/StarsBackground";
import { useToast } from "../components/ui/toast";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
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
    //   const res = await fetch("http://localhost:5000/backend/contact", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(formData),
    //   });

    const BASE_URL = "https://backend-nexora.onrender.com/backend/contact";

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
          subject: "",
          message: "",
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
      <div className="w-full overflow-hidden">

        {/* Background */}
        <div className="absolute inset-0 z-0">
          <StarsBackground />
          <ShootingStars />
        </div>

        {/* Grid Background */}
        <GridPattern
          width={60}
          height={60}
          strokeDasharray="4 2"
          className="opacity-40 -z-10"
        />

        {/* Hero Section */}
        <section className="relative min-h-[50vh] flex items-center justify-center px-4 py-20 bg-gradient-to-b from-orange-900/80 to-slate-transparent overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-yellow-400/20 rounded-full blur-3xl opacity-20 animate-blob" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-400/20 rounded-full blur-3xl opacity-20 animate-blob animation-delay-4000" />
          </div>

          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-transparent bg-clip-text bg-white">
                Get In Touch
              </span>
            </h1>

            <p className="text-xl text-slate-300">
              Have questions? We'd love to hear from you. Contact us anytime.
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="relative py-20 px-4">
          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 mb-16">

            {/* Contact Info */}
            <div className="md:col-span-1 space-y-6">

              {/* Email */}
              <div className="p-6 bg-orange-900/20 border border-orange-400/20 rounded-lg">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-orange-400/20 to-yellow-400/20 flex items-center justify-center mb-4">
                  <Mail className="text-orange-400" size={24} />
                </div>

                <h3 className="font-bold text-slate-100 mb-2">Email</h3>

                <a
                  href="mailto:infonexora2026@gmail.com"
                  className="text-slate-400 hover:text-orange-400 transition-colors"
                >
                  infonexora2026@gmail.com
                </a>
              </div>

              {/* Phone */}
              <div className="p-6 bg-orange-900/20 border border-orange-400/20 rounded-lg">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-orange-400/20 to-yellow-400/20 flex items-center justify-center mb-4">
                  <Phone className="text-orange-400" size={24} />
                </div>

                <h3 className="font-bold text-slate-100 mb-2">Phone</h3>

                <a
                  href="tel:+919148672650"
                  className="text-slate-500 hover:text-orange-400 block"
                >
                  +91 9148672650
                </a>

                <a
                  href="tel:+917019022248"
                  className="text-slate-500 hover:text-orange-400"
                >
                  +91 7019022248
                </a>
              </div>

              {/* Address */}
              <div className="p-6 bg-orange-900/20 border border-orange-400/20 rounded-lg">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-orange-400/20 to-yellow-400/20 flex items-center justify-center mb-4">
                  <MapPin className="text-orange-500" size={24} />
                </div>

                <h3 className="font-bold text-slate-100 mb-2">Address</h3>

                <a
                  href="https://maps.app.goo.gl/1rv2HBu46vJLD4Gj8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 text-sm hover:text-orange-400"
                >
                  Amruta Institute of Engineering and Management Sciences <br />
                  Near Toyota Kirloskar Motors Road, <br />
                  Bidadi Industrial Town, <br />
                  Ramanagaram, <br />
                  Bengaluru, Karnataka - 562109
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div className="md:col-span-2">
              <form onSubmit={handleSubmit} className="relative">

                <div className="absolute inset-0 bg-gradient-to-br from-orange-950/20 to-yellow-400/20 rounded-lg blur opacity-100" />

                <div className="relative p-8 bg-orange-900/10 border border-orange-500/20 rounded-lg">

                  <h3 className="text-2xl font-bold text-slate-100 mb-6">
                    Send us a Message
                  </h3>

                  <div className="space-y-4">

                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your Name"
                      required
                      className="w-full px-4 py-2 bg-orange-950/20 border border-orange-500/20 rounded-lg text-slate-100"
                    />

                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      required
                      className="w-full px-4 py-2 bg-orange-950/20 border border-orange-500/20 rounded-lg text-slate-100"
                    />

                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Subject"
                      required
                      className="w-full px-4 py-2 bg-orange-950/20 border border-orange-500/20 rounded-lg text-slate-100"
                    />

                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      placeholder="Your message..."
                      required
                      className="w-full px-4 py-2 bg-orange-950/20 border border-orange-500/20 rounded-lg text-slate-100 resize-none"
                    />

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="relative inline-flex items-center justify-center px-6 py-2 overflow-hidden font-semibold text-[#ff4d00] border border-[#ff5f00]/60 rounded-lg group w-full"
                    >

                      <span className="absolute inset-0 w-full h-full bg-[#ff5f00]/10 opacity-0 group-hover:opacity-100 transition duration-300"></span>
                      <span className="absolute inset-0 w-0 bg-[#ff5f00]/20 transition-all duration-500 group-hover:w-full"></span>

                      <span className="relative flex items-center justify-center gap-2 z-10 tracking wide">
                        <Send size={18} />
                        {isSubmitting ? "Sending..." : "Send Message"}
                      </span>
                    </button>

                  </div>
                </div>
              </form>
            </div>

            {/* Map */}
            <div className="md:col-span-3 mt-8">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3556.85111795663!2d77.40834647464695!3d12.761884887534574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae48a631204f4d%3A0x348b5d90aaf6705d!2sAmruta%20Institute%20of%20Engineering%20and%20Management%20Sciences!5e1!3m2!1sen!2sin!4v1773510436526!5m2!1sen!2sin"
                width="100%"
                height="350"
                style={{ border: 0 }}
                loading="lazy"
                className="w-full rounded-xl border border-cyan-400/20"
              />
            </div>

          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}