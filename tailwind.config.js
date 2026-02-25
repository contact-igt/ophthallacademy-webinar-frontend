/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Sora', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      colors: {
        navy: {
          DEFAULT: '#0c2b4d',
          50: '#eef3f8',
          100: '#c9daea',
          200: '#a4c1dc',
          300: '#7ea8ce',
          400: '#598fc0',
          500: '#3476b2',
          600: '#2a5d8e',
          700: '#1f446a',
          800: '#152b46',
          900: '#0c2b4d',
        },
        teal: {
          DEFAULT: '#002f42',
          dark: '#002f42',
          light: '#00AEEF',
        },
        brand: {
          orange: '#f47920',
          cyan: '#00AEEF',
          navy: '#0c2b4d',
          teal: '#002f42',
        },
      },
      fontSize: {
        'display-xl': ['72px', { lineHeight: '1.05', letterSpacing: '-0.03em', fontWeight: '700' }],
        'display': ['56px', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '700' }],
        'h1': ['44px', { lineHeight: '1.15', letterSpacing: '-0.02em', fontWeight: '700' }],
        'h2': ['36px', { lineHeight: '1.2', letterSpacing: '-0.015em', fontWeight: '600' }],
        'h3': ['28px', { lineHeight: '1.3', letterSpacing: '-0.01em', fontWeight: '600' }],
        'h4': ['22px', { lineHeight: '1.4', fontWeight: '600' }],
        'lead': ['20px', { lineHeight: '1.7', fontWeight: '400' }],
        'body-lg': ['18px', { lineHeight: '1.7', fontWeight: '400' }],
        'body': ['16px', { lineHeight: '1.6', fontWeight: '400' }],
        'body-sm': ['14px', { lineHeight: '1.6', fontWeight: '400' }],
        'label': ['12px', { lineHeight: '1.5', letterSpacing: '0.08em', fontWeight: '600' }],
        'micro': ['11px', { lineHeight: '1.4', letterSpacing: '0.12em', fontWeight: '600' }],
      },
    },
  },
  plugins: [],
}
