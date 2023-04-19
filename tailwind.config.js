/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    letterSpacing: {
      xs: '0.12rem',
      sm: '0.3rem',
      base: '0.5rem',
      md: '0.8rem',
      lg: '1rem',
      xl: '1.2rem',
    },
    fontSize: {
      sm: 'clamp(0.7rem, 0.31vw + 0.62rem, 0.89rem)',
      base: 'clamp(0.88rem, 0.5vw + 0.75rem, 1.19rem)',
      md: 'clamp(1.09rem, 0.78vw + 0.9rem, 1.58rem)',
      lg: 'clamp(1.37rem, 1.19vw + 1.07rem, 2.11rem)',
      xlg: 'clamp(1.71rem, 1.77vw + 1.27rem, 2.81rem) ',
      '2xl': 'clamp(2.14rem, 2.58vw + 1.49rem, 3.75rem)',
      '3xl': 'clamp(2.67rem, 3.72vw + 1.74rem, 5rem)',
      '4xl': 'clamp(3rem, 4vw + 2rem, 6.5rem)',
      '5xl': 'clamp(3.34rem, 4.3vw + 2.5rem,8rem)',
    },
    extend: {
      colors: {
        primary: '#8b6f4e',
        secondary: '#a4bbc3',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};
