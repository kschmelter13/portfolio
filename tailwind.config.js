module.exports = {
    mode: 'jit',
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false,
    theme: {
      extend: {},
      screens: {
        'xms': {'min': '0px', 'max': '476px'},
        'xs': {'min': '0px'},
        'sm': {'min': '476px'},
        'md': {'min': '640px'},
        'lg': {'min': '768px'},
        'xl': {'min': '1024px'},
        '2xl': {'min': '1280px'},
        '3xl': {'min': '1500px'},
        'big': {'min': '75vw'},
      }
    },
    variants: {
      extend: {},
    },
    plugins: [],
}