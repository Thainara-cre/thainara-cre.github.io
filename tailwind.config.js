import plugin from 'tailwindcss/plugin'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: { sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'] },
      boxShadow: { glow: '0 0 80px rgba(124, 92, 255, .18)' }
    },
  },
  plugins: [
    plugin(({ addVariant }) => {
      addVariant('light', ':root.light &')
    }),
  ],
}
