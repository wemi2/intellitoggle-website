/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      colors: {
        // Brand primary – deep indigo / purple from the design
        brand: {
          50:  '#eeecff',
          100: '#e0dbff',
          200: '#c5bfff',
          300: '#a899ff',
          400: '#8b6dff',
          500: '#6c3ce0',   // main CTA purple
          600: '#5a2ec4',
          700: '#4a2599',
          800: '#3b1d74',
          900: '#2d174f',
        },
        // Warm accent – the orange/gold used on primary buttons
        accent: {
          400: '#f5a623',
          500: '#e8951a',
          600: '#d48010',
        },
        // Muted background lavender used in hero & CTA banner
        lavender: '#ede9ff',
        // Dark navy used in the hero dashboard mockup bar
        navy: '#1e1b4b',
      },
      fontFamily: {
        // Display / heading font
        display: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        // Body font
        body: ['"Inter"', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        '4.5xl': ['2.75rem', { lineHeight: '1.2' }],
        '5xl':   ['3rem',    { lineHeight: '1.15' }],
      },
      borderRadius: {
        xl:  '0.75rem',
        2xl: '1rem',
        3xl: '1.5rem',
      },
      boxShadow: {
        card: '0 2px 12px rgba(0,0,0,0.06)',
        cardHover: '0 6px 24px rgba(108,60,224,0.15)',
      },
      animation: {
        'fade-up': 'fadeUp 0.55s cubic-bezier(.22,1,.36,1) both',
        'tick':    'tick 1s steps(1) infinite',
      },
      keyframes: {
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(22px)' },
          to:   { opacity: '1', transform: 'translateY(0)'    },
        },
        tick: {
          '0%, 100%': { opacity: '1' },
          '50%':      { opacity: '0' },
        },
      },
    },
  },
  plugins: [],
}
