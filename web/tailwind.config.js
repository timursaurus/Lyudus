module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class',
  important: true,
  theme: {
    extend: {
      fontFamily: {
        body: ['PT Serif']
      },
      typography: {
        DEFAULT: {
          css: {
            p: {
              margin: '0.2rem',
              marginBottom: '0.5rem',
            },
            h1: {
              margin: '0.5rem',
              fontWeight: '400'
            },
            h2: {
              margin: '0.5rem',
              fontWeight: '400'
            },
            h3: {
              margin: '0.5rem',
              fontWeight: '400'
            }
          },
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography')],
}
