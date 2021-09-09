module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      blue: {
        light: '#DEF9F1',
        DEFAULT: '#86C9BE',
        dark: '#229A87',
      },
      yellow: {
        DEFAULT: '#F9ED35',
      },
      gray: {
        dark: '#282929',
        DEFAULT: '#505857',
        light: '#B7B7B7',
      },
      pink: {
        light: '#FDF6CF',
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
