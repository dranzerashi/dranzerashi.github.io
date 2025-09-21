/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html","./src/**/*.{html,js}"], // adjust to where your HTML/JS lives
  theme: {
    extend: {
      colors: {
        neon: {
          50: '#eafff6',
          100: '#bbffdf',
          300: '#66ffd0',
          400: '#33ffc2',
          500: '#00FFB3',
          600: '#00d19a'
        },
        cyber: {
          50: '#f0f7ff',
          100: '#d9e7ff',
          300: '#9fbfff',
          500: '#6a8cff',
          900: '#0d1b2a'
        },
        accent: {
          red: '#EE4036',
          amber: '#FFB000'
        }
      },
      boxShadow: {
        'neon-lg': '0 10px 30px rgba(0,255,179,0.08), 0 0 20px rgba(0,255,179,0.06)'
      }
    }
  },
  plugins: [],
}
