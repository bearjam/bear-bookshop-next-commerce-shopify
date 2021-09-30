const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  future: {
    purgeLayersByDefault: true,
    applyComplexClasses: true,
  },
  purge: {
    content: [
      './pages/**/*.{js,ts,jsx,tsx}',
      './components/**/*.{js,ts,jsx,tsx}',
      './bearbookshop/**/*.{js,ts,jsx,tsx}',
    ],
    options: {
      safelist: {
        standard: ['outline-none'],
      },
    },
  },
  theme: {
    screens: {
      ...defaultTheme.screens,
    },
    colors: {
      ...defaultTheme.colors,
      primary: '#113065',
      secondary: '#F5CF68',
    },
    spacing: {
      ...defaultTheme.spacing,
    },
    fontFamily: {
      display: ['Montserrat'],
      body: ['Montserrat'],
    },
    extend: {},
  },
}
