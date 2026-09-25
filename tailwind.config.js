/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          orange: '#E8592A',
          orangeHover: '#D44A1E',
          orangeLight: '#FFF1EB',
          orangeGlow: 'rgba(232, 89, 42, 0.25)',
        },
        navy: {
          deep: '#102F57',
          dark: '#0B2545',
        },
        blue: {
          royal: '#1F5F9A',
          medium: '#3F82BC',
          soft: '#6FA8D8',
          veryLight: '#DCEBF7',
          ice: '#EEF6FB',
        },
        surface: {
          white: '#FFFFFF',
          neutral: '#F7FAFC',
          ice: '#EEF6FB',
          border: '#D8E3EC',
        },
        ink: {
          main: '#16324F',
          muted: '#66788A',
        }
      },
      fontFamily: {
        serif: ['var(--font-cormorant)', 'Cormorant Garamond', 'Playfair Display', 'Georgia', 'serif'],
        sans: ['var(--font-inter)', 'Inter', '-apple-system', 'sans-serif'],
      },
      letterSpacing: {
        editorial: '0.18em',
        relaxed: '0.08em',
      }
    },
  },
  plugins: [],
};
