module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        cardinal: '#7B1113',
        alabaster: '#FFFFFF'
      },
      fontFamily: {
        serif: ['\"Playfair Display\"', 'serif']
      },
      backgroundImage: {
        'hero-pattern': "linear-gradient(rgba(123, 17, 19, 0.8), rgba(123, 17, 19, 0.8)), url('https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=1400&q=80')"
      }
    }
  },
  plugins: [require('@tailwindcss/forms')]
};
