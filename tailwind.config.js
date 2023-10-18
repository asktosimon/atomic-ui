/** @type {import('tailwindcss').Config} */
export default {
  jit: true,
  content:["./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
}

