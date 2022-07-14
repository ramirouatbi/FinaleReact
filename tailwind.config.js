module.exports = {
    content: ["./src/**/*.{html,js}"],
    plugins: [
      require('flowbite/plugin')
      ],
      content: [
        'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
    ],
    theme: {
      fontSize: {
        'xs': '.75rem',
        'sm': '.875rem',
        'tiny': '.875rem',
        'base': '1rem',
        'lg': '1.125rem',
        'xl': '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
        '6xl': '4rem',
        '7xl': '5rem',
      },
      // colors: {
      //   'footer':'#EDEEEC'
      //   // Configure your color palette here
      // },
      extend: {
        animation: {
          type: 'type 2.7s ease-out .8s infinite alternate both',
        },
        keyframes: {
          type: {
            '0%': { transform: 'translateX(0ch)' },
            '5%, 10%': { transform: 'translateX(1ch)' },
            '15%, 20%': { transform: 'translateX(2ch)' },
            '25%, 30%': { transform: 'translateX(3ch)' },
            '35%, 40%': { transform: 'translateX(4ch)' },
            '45%, 50%': { transform: 'translateX(5ch)' },
            '55%, 60%': { transform: 'translateX(6ch)' },
            '65%, 70%': { transform: 'translateX(7ch)' },
            '75%, 80%': { transform: 'translateX(8ch)' },
            '85%, 90%': { transform: 'translateX(9ch)' },
            '95%, 100%': { transform: 'translateX(11ch)' },
          },
        },
      },
    },
   
  }