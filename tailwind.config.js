/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        pearl: '#F8F9FA',
        charcoal: '#1A1A1A',
        gold: '#D4AF37',
        'gold-light': '#E8C84A',
        slate: '#64748B',
        'slate-light': '#94A3B8',
      },
      fontFamily: {
        outfit: ['Outfit', 'sans-serif'],
        cormorant: ['"Cormorant Garamond"', 'serif'],
        jakarta: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '3rem',
      },
    },
  },
  plugins: [],
}
