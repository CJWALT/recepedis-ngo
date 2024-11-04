/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors:{ 
        navTextColor:'#414885',
        btnColor:'#F1060B', 
        blueText:'#00326A',
        txtColor:'#121A6B'
      }, 
      backgroundImage:{ 
        'hero-pattern': 'url(./assets/hero-img.jpeg)',
      }, 
      filter:{ 
        'sepia-8': 'sepia(8)',
      },
      
    },
  },
  plugins: [],
}

