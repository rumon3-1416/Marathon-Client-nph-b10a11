/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui';
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        teal: '#5DADAA',
        teal2: '#C7E5E3',
        teal3: '#D3EBEA',
        tealBg: '#5DADAA0e',
        tealTrans: '#5DADAAe2',
        coral: '#FF7468',
        coral2: '#ff7c70',
        coral3: '#ff8d83',
        coralBg: '#FF74680e',
        green: '#28A745',
        'light-green': '#D4EDDA',
        'dark-green': '#155724',
        gold: '#FFC107',
        gray: '#6C757D',
        blue: '#17A2B8',
        orange: '#FD7E14',
        light2: '#f7f7f7',
        lightTrans: '#f7f7f7b7',
        dark: '#0a0a0a',
        dark2: '#121212',
        dark3: '#303030',
        dark4: '#424242',
        dark5: '#3c3c3c',
        darkTrans: '#424242b7',
        dark5Trans: '#3c3c3cb7',
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: ['light'],
  },
};
