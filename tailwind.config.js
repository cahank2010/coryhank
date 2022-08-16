const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
    colors: colors,

    backgroundImage: {
      'hero-pattern':
        /*"linear-gradient( black, transparent, black), url('/bkSpace.jpg')",*/
        "linear-gradient( black, transparent, black), url('/chestnutVid1.mp4')",
    },

    zIndex: {
      auto: 'auto',
      'negative': '-1',
      '0':'0',
      '10':'10',
      '20':'20',
      '30':'30',
      '40':'40',
      '50':'50',
    }
  },
  variants: {},
  plugins: [],
}

/*linear-gradient(rgb(15, 23, 42), rgb(88, 28, 135), rgb(15, 23, 42))
radial-gradient(at center center, black, transparent)*/
