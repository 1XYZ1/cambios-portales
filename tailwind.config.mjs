/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // habilita el modo dark por clase
  content: [
    './src/**/*.{astro,html,js,jsx,ts,tsx,vue,svelte}'
  ],
  theme: {
    extend: {
      animation: {
        fadeIn: 'fadeIn 0.6s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0, transform: 'translateY(10px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' }
        }
      }
    },
  },
  plugins: [],
}
