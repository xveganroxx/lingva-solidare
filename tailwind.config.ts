import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        accent: {
          DEFAULT: '#0891b2', // cyan-600 - modern, international blue/teal
          dark: '#0e7490', // cyan-700
          light: '#06b6d4', // cyan-500
        },
      },
    },
  },
  plugins: [],
}
export default config

