/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary)',
        'primary-2': 'var(--primary-2)',
        'primary-3': 'var(--primary-3)',
        black: 'var(--black)',
        secondary: 'var(--secondary)',
        optional: 'var(--optional)',
        'optional-2': 'var(--optional-2)',
        'optional-3': 'var(--optional-3)',
        'optional-4': 'var(--optional-4)',
        'light-1': 'var(--light-1)',
      },
      backgroundSize: {
        'auto-200': 'auto 200px',
        'auto-290': 'auto 290px',
        '240-340': '240px 340px',
        'auto-500': 'auto 500px',
        'auto-600': 'auto 600px',
      },
      backgroundPosition: {
        'center-top': 'center 20%',
        'bottom-right': 'bottom right 10%',
        'bottom-left': 'bottom left 10%',
        'center-left': 'center left',
        'top-left-half': 'center left -70%',
        'top-left-1000': 'center left 1000%',
        'center-left-150': 'center left -150%',
      },
    },
  },
  plugins: [],
};
