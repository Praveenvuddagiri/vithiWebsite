import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './.next/static/**/*.{html,js}',
    './.next/**/*.{html,js}',
    './public/**/*.{html,js}',
    './static/**/*.{html,js}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'primary': '#333',
        'secondary': '#70aa44',
        'light': '#444444',
        'dark': '#011A41',
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
      },
    },
  },
 plugins: [
    require('tailwindcss-animated')
  ],
}

export default config
