const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        raleway: ['Raleway', ...defaultTheme.fontFamily.sans],
        cinzel: ['Cinzel', ...defaultTheme.fontFamily.serif],
      },
      maxWidth: {
        'app-width': '160rem',
      },
      height: {
        'desktop-header': '67.25rem',
        'mobile-header': '32.8125rem',
      },
      backgroundPosition: {
        'app-header-position': '0 75%',
      },
      backgroundImage: {
        'desktop-banner':
          "linear-gradient(180deg, rgba(33, 33, 33, 0.44) 0%, rgba(33, 33, 33, 0) 51.04%, rgba(33, 33, 33, 0.62) 100%), url('/public/assets/desktop-bg.jpg')",
        'mobile-banner':
          "linear-gradient(180deg, rgba(33, 33, 33, 0.38) 0%, rgba(33, 33, 33, 0.02) 34.49%, #212121 100%), url('/public/assets/mobile-bg.png')",
      },
      colors: {
        'app-neutral': '#212121',
        'app-yellow': '#edac2c',
        'app-black': '#121212',
      },
      screens: {
        // sm: { min: '640px', max: '767px' },
        // md: { min: '768px', max: '1023px' },
        // lg: { min: '1024px', max: '1279px' },
        // xl: { min: '1280px', max: '1535px' },
        // '2xl': { min: '1536px', max: '1699px' },
        'max-less-600': { min: '1700px' },
        'max-less-300': { min: '2010px' },
        max: { min: '2360px' },
      },
    },
  },
  plugins: [],
};
