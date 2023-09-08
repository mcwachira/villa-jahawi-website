/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './node_modules/flowbite-react/**/*.js',
    '.src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    '.src/components/**/*.{js,ts,jsx,tsx,mdx}',
    // './app/**/*.{js,ts,jsx,tsx,mdx}',
    './public/**/*.html'
  ],
  plugins: [],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: "1rem",
    },
    colors: {
      current: "currentColor",
      transparent: "transparent",
      white: '#eff6ff',
      black: '#172554',
      dark: "#1D2144",
      primary: "#4A6CF7",
      yellow: "#FBB040",
      "body-color": "#959CB1",

      // Light colors
				'primary-light': '#F7F8FC',
				'secondary-light': '#FFFFFF',
				'ternary-light': '#f6f7f8',

				// Dark colors
				'primary-dark': '#0D2438',
				'secondary-dark': '#102D44',
				'ternary-dark': '#1E3851',

				// Extended v3 color
				// gray: colors.neutral,

        'blue': {
          '50': '#eff6ff',
          '100': '#dbeafe',
          '200': '#bfdbfe',
          '300': '#93c5fd',
          '400': '#60a5fa',
          '500': '#3b82f6',
          '600': '#2563eb',
          '700': '#1d4ed8',
          '800': '#1e40af',
          '900': '#1e3a8a',
          '950': '#172554',
        },
    },
    screens: {
      xs: "450px",
      // => @media (min-width: 450px) { ... }

      sm: "575px",
      // => @media (min-width: 576px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "992px",
      // => @media (min-width: 992px) { ... }

      xl: "1200px",
      // => @media (min-width: 1200px) { ... }

      "2xl": "1400px",
      // => @media (min-width: 1400px) { ... }
    },

    fontSize: {
      xs: ['0.75rem', { lineHeight: '1rem' }],
      sm: ['0.875rem', { lineHeight: '1.25rem' }],
      md: ['0.938rem', { lineHeight: '1.5rem' }],
      base: ['1rem', { lineHeight: '1.75rem' }],
      lg: ['1.125rem', { lineHeight: '1.75rem' }],
      xl: ['1.25rem', { lineHeight: '1.75rem' }],
      '2xl': ['1.5rem', { lineHeight: '2rem' }],
      '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
      '4xl': ['2.25rem', { lineHeight: '2.75rem' }],
      '5xl': ['3rem', { lineHeight: '1.125' }],
      '6xl': ['3.75rem', { lineHeight: '1.125' }],
      '7xl': ['4.5rem', { lineHeight: '1.125' }],
      '8xl': ['6rem', { lineHeight: '1.125' }],
      '9xl': ['8rem', { lineHeight: '1' }],
    },
    extend: {
      boxShadow: {
        signUp: "0px 5px 10px rgba(4, 10, 34, 0.2)",
        one: "0px 2px 3px rgba(7, 7, 77, 0.05)",
        sticky: "inset 0 -1px 0 0 rgba(0, 0, 0, 0.1)",
      },
      animation: {
        'spin-slow': 'spin 12s linear infinite',
      },
      typography: {
        quoteless: {
          css: {
            'blockquote p:first-of-type::before': { content: 'none' },
            'blockquote p:first-of-type::after': { content: 'none' },
          },
        },
    },
  },
},
plugins: [
  require('@tailwindcss/typography'),
  require('@tailwindcss/line-clamp'),
  require('@tailwindcss/aspect-ratio'),
  require('@tailwindcss/forms'),
  require('flowbite/plugin'),
  // ...
],
}
