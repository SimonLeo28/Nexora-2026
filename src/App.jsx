import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";

import CursorTrail from "./components/CursorTrail";
import CustomCursor from "./components/CustomCursor";
import ParticleBackground from "./components/ParticleBackground";

import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Prizes from "./components/Prizes";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Rules from "./Pages/Rules";
import ThemesPage from "./Pages/ThemesPage";

import AdminDashboard from "./Pages/admin/AdminDashboard";
import AdminLogin from "./Pages/admin/AdminLogin";
import NotifyMe from "./Pages/register/NotifyMe";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import TimeLine from "./components/TimeLine";
import { ToastProvider } from "./components/ui/toast";
// import { Toaster } from "react-hot-toast";

import AdminLayout from "./layouts/AdminLayout";
import UserLayout from "./layouts/UserLayout";

import RegistrationForm from "./Pages/register/RegistrationForm";

const MotionLink = motion.create(Link);

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
            href="https://forms.gle/zHTv3Cats32VdVLN7"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-orange-500 text-black px-6 py-2 rounded-lg font-semibold"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            Register Now
          </motion.a>
          // <MotionLink //after 1th april, change this to registrationcommingsoon to motion.a tag and add href to google form
          //   // href="https://forms.gle/WHKsA2tNqgnev9an7"
          //   // target="_blank"
          //   // rel="noopener noreferrer"
          //   to="/notifyme"
          //   whileHover={{ scale: 1.05 }}
          //   whileTap={{ scale: 0.95 }}
          //   className="bg-orange-500 text-black px-6 py-3 rounded-lg font-bold hover:bg-orange-600 transition-all duration-300 cursor-pointer"
          // >
          //   Register Now
          // </MotionLink>
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
          {/* <Header /> */}
          {/* <Toaster position="top-right-4" reverseOrder={false} /> */}

          <main className="relative z-10">
            <Routes>
              {/* <Route path="/" element={<Home />} /> */}
              {/* USER ROUTES */}
              <Route element={<UserLayout />}>
                <Route path="/" element={<Home />} />
              </Route>
              <Route path="/about" element={<About />} />
              <Route path="/themes" element={<ThemesPage />} />
              <Route path="/rules" element={<Rules />} />
              <Route path="/contact" element={<Contact />} />
              
              {/* Admin — hidden routes, not in navbar */}
              {/* <Route path="/admin" element={<AdminLogin />} />
              <Route path="/admin/dashboard" element={<AdminDashboard />} /> */}
              {/* ADMIN ROUTES */}
              <Route element={<AdminLayout />}>
                <Route path="/admin" element={<AdminLogin />} />
                <Route path="/admin/dashboard" element={<AdminDashboard />} />
              </Route>
              <Route path="/notifyme" element={<NotifyMe />} />
              <Route path="/register" element={<RegistrationForm />} />
            </Routes>
          </main>

        </div>
      </ToastProvider>
    </BrowserRouter>
  );
}