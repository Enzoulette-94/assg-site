/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      colors: {
        purple:         '#7B4FD4',
        'purple-light': '#A87CE8',
        'purple-dark':  '#4A2A8A',
        'purple-pale':  '#EDE8FA',
        yellow:         '#FFE533',
        'yellow-dark':  '#bba800',
        orange:         '#F97316',
        blue:           '#3B82F6',
        pink:           '#E87BB5',
        'pink-pale':    '#FBEAF0',
        'pink-dark':    '#72243E',
        'gray-bg':      '#F5F4FA',
        'gray-text':    '#6b6880',
      },
      fontFamily: {
        display: ['Boogaloo', 'cursive'],
        body:    ['Nunito', 'sans-serif'],
      },
      borderRadius: {
        DEFAULT: '12px',
        sm:      '8px',
        pill:    '30px',
      },
    }
  },
  plugins: [],
}
