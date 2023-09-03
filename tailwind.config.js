module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['var(--font-montserrat)'],
        openSans: ['var(--font-open_sans)'],
      },
      animation: {
        'spin-slow': 'spin 20s linear infinite',
      },

      container: {
        center: true,
        padding: {
          DEFAULT: '20px',
        md: '3%',
        lg: '10%'
        },
        
      }
    },
  },
  plugins: [],
}
