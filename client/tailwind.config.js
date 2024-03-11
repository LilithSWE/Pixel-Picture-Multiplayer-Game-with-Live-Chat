/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'inter': ['Inter', 'sans-serif'],
      'slab': ['"Josefin Slab"', 'serif']
    },
    extend: {},
  },
  plugins: [],
  corePlugins: {
    preflight: false,
}
}

