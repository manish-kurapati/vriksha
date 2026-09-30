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
          orange: '#FF7A2E', // Accent from Option 2 (Warm Premium)
          orangeHover: '#E5661D',
          orangeLight: '#FFF3EB',
          orangeGlow: 'rgba(255, 122, 46, 0.28)',
        },
        primary: {
          DEFAULT: '#006A9E', // Primary from Option 2 (Warm Premium)
          hover: '#00557E',
          light: '#E6F2F7',
          dark: '#004C70',
        },
        navy: {
          deep: '#0C2436', // Deep architectural teal-navy harmonious with #006A9E
          dark: '#081824',
        },
        blue: {
          royal: '#006A9E', // Primary from Option 2
          medium: '#1E82B2',
          soft: '#5BA6CD',
          veryLight: '#E6F2F7',
          ice: '#F5EFEB', // Warm sand-ice
        },
        secondary: {
          DEFAULT: '#DCCBB2', // Secondary from Option 2 (Warm sand / oat)
          light: '#FAF6EF',
          sand: '#DCCBB2',
          warm: '#EFE4D3',
          dark: '#BFA888',
        },
        surface: {
          white: '#FFFFFF',
          warm: '#FAF6EF', // Background from Option 2 (Warm linen ivory)
          neutral: '#FAF6EF', // Main Background & Clean Sections
          sand: '#F5EFEB',
          card: '#FFFFFF',
          secondary: '#DCCBB2',
          ice: '#F5EFEB',
          border: '#E5DACB', // Warm sand subtle border
        },
        ink: {
          main: '#1F2937', // Deep slate for optimal contrast
          headings: '#006A9E', // Headings from Option 2
          body: '#6B7280', // Text from Option 2 (#6B7280)
          muted: '#6B7280',
        }
      },
      fontFamily: {
        serif: ['var(--font-cormorant)', 'Cormorant Garamond', 'Playfair Display', 'Georgia', 'serif'],
        sans: ['var(--font-inter)', 'Inter', '-apple-system', 'sans-serif'],
      },
      letterSpacing: {
        editorial: '0.18em',
        relaxed: '0.08em',
      },
      animation: {
        marquee: 'marquee 35s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      }
    },
  },
  plugins: [],
};
