/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors:{ 
        navTextColor:'#414885',
        btnColor:'#F1060B', 
        blueText:'#00326A'
      }, 
      backgroundImage:{ 
        'hero-pattern': 'url(./assets/hero-img.jpeg)',
      }, 
      
    },
  },
  plugins: [],
}

