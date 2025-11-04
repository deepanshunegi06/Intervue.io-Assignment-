export default {
  content: ['./client/**/*.{js,jsx}', './index.html'],
  theme: {
    extend: {
      fontFamily: {
        sora: ['Sora', 'sans-serif'],
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
