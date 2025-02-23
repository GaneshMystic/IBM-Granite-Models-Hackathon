/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}', // Enable Tailwind in your React components
  ],
  theme: {
    extend: {
      colors: {
      },
      borderRadius: {
        xl: '1.5rem',
      },
    },
  },
  plugins: [],
};
