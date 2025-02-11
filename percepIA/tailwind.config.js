module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        veryPeri: {
          light: '#c3b1e1', // tom mais claro
          DEFAULT: '#6667AB', // tom padrão
          dark: '#4b4c7a', // tom mais escuro
        },
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
} 