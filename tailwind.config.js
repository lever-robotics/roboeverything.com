/** @type {import('tailwindcss').Config} */
module.exports = {
    important: true,
    darkMode: ['class', '[data-theme="dark"]'],
    content: ['./src/**/*.{js,jsx,ts,tsx,mdx}'],
    theme: {
      extend: {
        colors: {
          lightModeBlack: '#000000',
          // colour review: https://hslpicker.com/
          // colour format must be either:
          // #XXXXXX, where characters must be uppercase, and all 6 values are required; or
          // rgb (val, val, val) / rgb(val val val) (commas are not essential)
          primary: {
            100: '#646cff', //
            200: '#646cff', //
            300: '#646cff', //
            400: '#646cff', //
            500: '#646cff', // main color
            600: '#646cff', //
            700: '#646cff', // 
            800: '#646cff', // 
          },
          neutral: {
            150: '#F0F0F0', // rgb(240, 240, 240); pale grey, Hue 0, Luminance 94
            750: '#2C2C2C', // rgb(44, 44, 44); dark grey, Hue 0, Luminance 17
          },
        },
        backgroundSize: {
          '0w': '0% 2px',
          '100w': '100% 2px',
        },
      },
    },
    plugins: [],
};