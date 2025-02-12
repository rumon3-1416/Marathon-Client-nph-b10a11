/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui';
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        greenBg: '#28A7450e',
        greenTrans: '#28A745e2',
        green: '#28A745',
        'light-green': '#D4EDDA',
        'dark-green': '#155724',
        gold: '#FFC107',
        goldBg: '#FFC1070e',
        gold2: '#f1be24',
        gray2: '#6C757D',
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
