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
            "code::before": {
              content: '""',
              "padding-left": "0.25rem"
            },
            "code::after": {
              content: '""',
              "padding-right": "0.25rem"
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
