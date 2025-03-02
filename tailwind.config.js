/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        green: {
          50: '#f0f9f1',
          100: '#dcf1de',
          200: '#bae3be',
          300: '#8ecd94',
          400: '#5eb167',
          500: '#3c9346',
          600: '#2a7735',
          700: '#1b5e20', // Primary dark green
          800: '#1b5e20', // Primary dark green (same as 700 for consistency)
          900: '#0d3f14',
        },
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.gray.800'),
            h2: {
              color: theme('colors.green.800'),
            },
            h3: {
              color: theme('colors.green.800'),
            },
            strong: {
              color: theme('colors.green.800'),
            },
            a: {
              color: theme('colors.green.800'),
              '&:hover': {
                color: theme('colors.green.700'),
              },
            },
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};