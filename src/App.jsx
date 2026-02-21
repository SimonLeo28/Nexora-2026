import { useEffect } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import EventDetails from './components/EventDetails';
import RegistrationForm from './components/RegistrationForm';
import Rules from './components/Rules';
import Prizes from './components/Prizes';
import Footer from './components/Footer';
import ParticleBackground from './components/ParticleBackground';

function App() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  return (
    <div className="relative">
      <ParticleBackground />

      <nav className="fixed top-0 w-full bg-black/60 backdrop-blur-md z-50 py-4">
        <div className="container mx-auto px-6 flex justify-center gap-6 md:gap-10 flex-wrap text-sm md:text-base">
          {['Home', 'About', 'Details', 'Register', 'Rules', 'Prizes', 'Contact'].map(item => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="hover:text-neon-blue transition-colors"
            >
              {item}
            </a>
          ))}
        </div>
      </nav>

      <main>
        <Hero />
        <About />
        <EventDetails />
        <RegistrationForm />
        <Rules />
        <Prizes />
        <Footer />
      </main>
    </div>
  );
}

export default App;