import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      sans: 'var(--font-inter)',
    },
    extend: {
      width: {
        'without-scrollbar': 'calc(100% - 0.5rem)',
      },
      height: {
        'screen-95': '95vh',
      },
      colors: {
        primary: '#1E293B',
        'primary-dark': '#1D2939',
        primary2: '#171717',
        secondary: '#FD853A',

        'secondary-light': '#FEB273',
      },
    },
  },
  plugins: [],
}
export default config
