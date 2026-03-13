import { useState, useRef, useEffect } from 'react';
import Footer from '../components/Footer';
import { ShootingStars } from '../components/ShootingStars';
import { StarsBackground } from '../components/StarsBackground';
import { X } from 'lucide-react';

const THEMES = [
  {
    id: 1,
    title: "Autonomous Intelligence & Agentic AI Systems",
    description: "Developing sustainable technology for a greener planet.",
    problems: [
      "AI-driven waste management systems for urban areas.",
      "Low-cost, portable water purification using renewable energy.",
      "Optimizing EV charging networks with real-time data.",
      "Biodegradable alternative materials for electronics packaging."
    ]
  },
  {
    id: 2,
    title: "ClimateTech, Green Skills & Sustainable Infrastructure",
    description: "Revolutionizing patient care through advanced diagnostics.",
    problems: [
      "Wearable devices for early detection of neurological disorders.",
      "Blockchain-based secure patient data sharing across hospitals.",
      "Telemedicine platforms for rural and underserved communities.",
      "AI models to predict viral outbreaks in densely populated zones."
    ]
  },
  {
    id: 3,
    title: "Intelligent Robotics & Autonomous Systems",
    description: "Building the cities of tomorrow with intelligent infrastructure.",
    problems: [
      "Smart traffic management to reduce congestion and emissions.",
      "Energy-efficient street lighting using motion sensors.",
      "Citizen engagement platforms for local governance.",
      "Automated emergency response systems for urban disasters."
    ]
  },
  {
    id: 4,
    title: "Bio-Digital Convergence & Future Healthcare Technologies",
    description: "Protecting digital frontiers against evolving threats.",
    problems: [
      "Biometric authentication without storing sensitive data.",
      "AI-powered phishing detection for enterprise emails.",
      "Secure IoT communication protocols for smart homes.",
      "Real-time ransomware mitigation for critical infrastructure."
    ]
  },
  {
    id: 5,
    title: "Smart Mobility, Autonomous Transportation & Future Logistics",
    description: "Empowering learners through personalized AI tutoring.",
    problems: [
      "Gamified learning platforms for primary education.",
      "Adaptive testing systems that adjust difficulty in real-time.",
      "Virtual Reality labs for remote science education.",
      "Skill-gap analysis tools for vocational training."
    ]
  },
  {
    id: 6,
    title: "Cyber-Physical Systems & Intelligent IoT Ecosystems",
    description: "Expanding human presence beyond Earth's orbit.",
    problems: [
      "Autonomous rovers for mapping subterranean lunar caves.",
      "Life support monitoring systems for long-duration missions.",
      "Efficient satellite debris collection and disposal.",
      "3D printing habitats using local Martian resources."
    ]
  }
];

const ThemesPage = () => {
  const [selectedTheme, setSelectedTheme] = useState(null);
  const problemRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    if (selectedTheme && problemRef.current) {
      problemRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }, [selectedTheme]);

  // Handle click outside to close
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        // If the user clicks outside the modal content but within the overlay area
        // or if they click the overlay itself.
        // We only want to close if it's NOT a click on one of the theme buttons.
        if (!event.target.closest('.theme-card-button')) {
          setSelectedTheme(null);
        }
      }
    };

    if (selectedTheme) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [selectedTheme]);

  return (
    <>
      <div className="min-h-screen pt-24 pb-20 px-6 relative flex flex-col items-center overflow-x-hidden bg-neutral-950">
        {/* Background Layer: Stars & Shooting Stars */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <StarsBackground />
          <ShootingStars />
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto">
          <header className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-clip-text text-white">
               Themes
            </h1>
            <p className="text-soft-blue-gray text-lg md:text-xl max-w-2xl mx-auto">
              Choose a theme to explore specific problem statements and start your journey towards Nexora.
            </p>
          </header>

          {/* Cards Grid - 3 cards below other 3 cards on desktop */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
            {THEMES.map((theme) => (
              <div 
                key={theme.id}
                className="glass glow p-8 flex flex-col items-center text-center group hover:border-neon-blue transition-all duration-500 hover:-translate-y-2"
              >
                <div className="w-16 h-16 rounded-full bg-neon-blue/10 flex items-center justify-center mb-6 border border-neon-blue/20 group-hover:bg-neon-blue/20 group-hover:border-neon-blue/50 transition-all duration-300">
                  <span className="text-2xl font-bold text-neon-blue">{theme.id}</span>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-neon-blue transition-colors">
                  {theme.title}
                </h3>
                <p className="text-soft-blue-gray mb-8 line-clamp-2">
                  {theme.description}
                </p>
                <button 
                  onClick={() => setSelectedTheme(theme)}
                  className="theme-card-button mt-auto px-6 py-3 bg-neon-blue/10 hover:bg-neon-blue text-neon-blue hover:text-white border border-neon-blue/50 rounded-lg font-semibold transition-all duration-300 ripple"
                >
                  See Problem Statements
                </button>
              </div>
            ))}
          </div>

          {/* Problem Statements Container - In-flow with scroll effect */}
          {selectedTheme && (
            <div 
              ref={problemRef}
              className="w-full max-w-5xl mx-auto mb-20 relative pt-20"
            >
              <div 
                ref={containerRef}
                className="glass p-8 md:p-12 animate-in fade-in slide-up duration-700 relative shadow-2xl border-neon-blue/40"
              >
                <button 
                  onClick={() => setSelectedTheme(null)}
                  className="absolute top-6 right-6 p-2 hover:bg-white/10 rounded-full transition-colors text-soft-blue-gray hover:text-white z-10"
                >
                  <X size={24} />
                </button>
                
                <div className="mb-10 text-center md:text-left">
                  <span className="text-neon-blue font-mono mb-2 block uppercase tracking-widest text-sm">Theme {selectedTheme.id}</span>
                  <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                    Problem Statements: <span className="text-neon-blue">{selectedTheme.title}</span>
                  </h2>
                  <div className="w-24 h-1 bg-gradient-to-r from-neon-blue to-purple-500 rounded-full mx-auto md:mx-0"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {selectedTheme.problems.map((problem, index) => (
                    <div 
                      key={index}
                      className="p-6 bg-white/5 border border-white/10 rounded-2xl hover:border-neon-blue/50 transition-all hover:bg-white/10 duration-300 flex items-start gap-5 group/item cursor-default"
                    >
                      <span className="flex-shrink-0 w-10 h-10 rounded-xl bg-neon-blue/10 text-neon-blue flex items-center justify-center font-bold border border-neon-blue/20 group-hover/item:bg-neon-blue group-hover/item:text-white transition-colors">
                        {index + 1}
                      </span>
                      <p className="text-lg text-white/90 leading-relaxed pt-1">
                        {problem}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-12 flex justify-center">
                  <button 
                    onClick={() => setSelectedTheme(null)}
                    className="px-8 py-3 bg-white/5 hover:bg-white/10 text-white border border-white/20 rounded-xl font-semibold transition-all duration-300"
                  >
                    Hide Problems
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </>
  );
}

export default ThemesPage;

