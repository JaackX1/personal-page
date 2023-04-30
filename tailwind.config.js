/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      boxShadow: {
        'personal':'0px 0px 7px 4px rgba(0,0,0,0.1)',
      }
    },
    clipPath: {
      bannerPolygon: "polygon(8% 0, 100% 0%, 100% 100%, 0 100%)",
    },
  },
  plugins: [
    require('tailwind-clip-path'),
  ],
}
