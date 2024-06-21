/** @type {import('tailwindcss').Config} */
module.exports = {
    important: true,
    darkMode: ['class', '[data-theme="dark"]'],
    content: ['./src/**/*.{js,jsx,ts,tsx,mdx}'],
    theme: {
      extend: {
        colors: {
          // colour review: https://hslpicker.com/
          // colour format must be either:
          // #XXXXXX, where characters must be uppercase, and all 6 values are required; or
          // rgb (val, val, val) / rgb(val val val) (commas are not essential)
          primary: {
            100: '#1e2e36', // very light variant of #14252e
            200: '#1a2930', // lighter variant of #14252e
            300: '#16242a', // lighter variant of #14252e
            400: '#5c7887', // lighter variant of #14252e
            500: '#14252e', // main color
            600: '#5c7887', // darker variant of #14252e
            700: '#10191f', // darker variant of #14252e
            800: '#0e1519', // darker variant of #14252e
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