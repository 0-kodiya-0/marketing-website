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
            '[class~="lead"]': {
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
            'ol[type="A" s]': {
              '--list-counter-style': 'upper-alpha',
            },
            'ol[type="a" s]': {
              '--list-counter-style': 'lower-alpha',
            },
            'ol[type="I"]': {
              '--list-counter-style': 'upper-roman',
            },
            'ol[type="i"]': {
              '--list-counter-style': 'lower-roman',
            },
            'ol[type="I" s]': {
              '--list-counter-style': 'upper-roman',
            },
            'ol[type="i" s]': {
              '--list-counter-style': 'lower-roman',
            },
            'ol[type="1"]': {
              '--list-counter-style': 'decimal',
            },
            h1: {
              color: 'var(--foreground)',
              fontWeight: '800',
            },
            h2: {
              color: 'var(--foreground)',
              fontWeight: '700',
            },
            h3: {
              color: 'var(--foreground)',
              fontWeight: '600',
            },
            h4: {
              color: 'var(--foreground)',
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
              paddingLeft: '0.75rem',
              paddingRight: '0.75rem',
              paddingTop: '0.75rem',
              paddingBottom: '0.75rem',
            },
            'tbody td': {
              paddingLeft: '0.75rem',
              paddingRight: '0.75rem',
              paddingTop: '0.75rem',
              paddingBottom: '0.75rem',
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