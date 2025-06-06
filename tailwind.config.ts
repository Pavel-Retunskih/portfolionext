import type {Config} from "tailwindcss";


export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/widgets/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {

    screens: {
      s: '345px',
      sm: '375px',
      sl: '425px',
      md: '768px',
      lg: '1024px',
      xl: '1440px'
    },
    colors: {
      primary: {
        black: '#01080E',
        blue: '#011627',
        dark_blue: '#011221',
      },
      secondary: {
        grey: "#607B96",
        aqua: '#3C9D93',
        purple: '#4D5BCE',
        white: '#FFFFFF',
      },
      accent: {
        orange: '#FEA55F',
        aqua: '#43D9AD',
        pink: '#E99287',
        violet: '#C98BDF',
      },
      lines: '#1E2D3D',
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",

      },
      keyframes: {
        slideDown: {
          from: {height: "0px"},
          to: {height: "var(--radix-accordion-content-height)"},
        },
        slideUp: {
          from: {height: "var(--radix-accordion-content-height)"},
          to: {height: "0px"},
        },
      },
      animation: {
        slideDown: "slideDown 300ms cubic-bezier(0.87, 0, 0.13, 1)",
        slideUp: "slideUp 300ms cubic-bezier(0.87, 0, 0.13, 1)",
      },
      backgroundImage: {
        'custom-bg': "url('/BackgroundBlurs@2x.png')",
      }
    },
  },

  // eslint-disable-next-line @typescript-eslint/no-require-imports
  plugins: [require('tailwind-scrollbar')({
    nocompatible: true,
    preferredStrategy: 'pseudoelements',
  })],
} satisfies Config;
