/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Space Grotesk"', 'sans-serif'],
      },
      colors: {
        'neon-blue': '#00BFFF',
        'dark-navy': '#0A0F1F',
        'deep-black': '#000814',
        'soft-blue-gray': '#A0B3C2',
      },
      boxShadow: {
        'neon': '0 0 10px #00BFFF, 0 0 20px #00BFFF',
        'neon-lg': '0 0 15px #00BFFF, 0 0 30px #00BFFF',
      },
      animation: {
        pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        glitch: 'glitch 1s linear infinite',
        float: 'float 15s linear infinite',
        'timeline-glow': 'timeline-glow 2s infinite',
      },
      keyframes: {
        pulse: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' },
        },
        glitch: {
          '2%, 64%': { transform: 'translate(2px,0) skew(5deg)' },
          '4%, 60%': { transform: 'translate(-2px,0) skew(-5deg)' },
          '62%': { transform: 'translate(0,0) skew(5deg)' },
        },
        float: {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-100vh)' },
        },
        'timeline-glow': {
          '0%, 100%': { opacity: '0.5' },
          '50%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}