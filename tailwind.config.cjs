/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        body: [ 'Poppins', 'sans-serif'],
      },
      colors: {
        light: {
          primary: '#5A5ABF',
          secondary: '#EAEDFF',
          text:'#3D3BA4',
          textSecondary: '#ACACAC',
          background:'#F5F5F5',
          buttonBackground:'#919EFA',
          
        },
        dark: {
          primary: '#FFFFFF',
          text:'#ffffff',
          textSecondary: '#ACACAC',
          secondary: '#373737',
          background:'#212121',
          buttonBackground:'#212121',
        },
       
      },
    },
  },
  plugins: [],
}