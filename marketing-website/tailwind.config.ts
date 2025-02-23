import type { Config } from "tailwindcss";
import typography from '@tailwindcss/typography';

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        muted: "var(--muted)",
        "blue-accent": "var(--blue-accent)",
        "blue-accent-hover": "var(--blue-accent-hover)",
        "card-hover": "var(--card-hover)",
        "card-background": "var(--card-background)",
        "border-color": "var(--border-color)",
        "dot-color": "var(--dot-color)",
      },
      animation: {
        blink: 'blink 1s steps(1) infinite',
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
      },
      typography: {
        DEFAULT: {
          css: {
            color: 'var(--foreground)',
            maxWidth: '65ch',
            'h1, h2, h3, h4': {
              color: 'var(--foreground)',
            },
            '.lead': {
              color: 'var(--muted)',
            },
            a: {
              color: 'var(--blue-accent)',
              '&:hover': {
                color: 'var(--blue-accent-hover)',
              },
            },
            strong: {
              color: 'var(--foreground)',
            },
            'ol[type="A"]': {
              '--list-counter-style': 'upper-alpha',
            },
            'ol[type="a"]': {
              '--list-counter-style': 'lower-alpha',
            },
            'ol[type="I"]': {
              '--list-counter-style': 'upper-roman',
            },
            'ol[type="i"]': {
              '--list-counter-style': 'lower-roman',
            },
            'ol[type="1"]': {
              '--list-counter-style': 'decimal',
            },
            h1: {
              fontWeight: '800',
            },
            h2: {
              fontWeight: '700',
            },
            h3: {
              fontWeight: '600',
            },
            h4: {
              fontWeight: '600',
            },
            code: {
              color: 'var(--foreground)',
            },
            'code::before': {
              content: '""',
            },
            'code::after': {
              content: '""',
            },
            pre: {
              color: 'var(--foreground)',
              backgroundColor: 'var(--card-background)',
            },
            thead: {
              color: 'var(--foreground)',
            },
            'thead th': {
              padding: '0.75rem',
            },
            'tbody td': {
              padding: '0.75rem',
            },
            'tbody tr': {
              borderBottomColor: 'var(--border-color)',
            },
          },
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [typography],
} satisfies Config;