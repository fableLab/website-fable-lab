import tailwindcssAnimate from 'tailwindcss-animate'
import typography from '@tailwindcss/typography'

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  darkMode: ['selector', '[data-theme="dark"]'],
  plugins: [tailwindcssAnimate, typography],
  prefix: '',
  safelist: [
    'lg:col-span-4',
    'lg:col-span-6',
    'lg:col-span-8',
    'lg:col-span-12',
    'border-border',
    'bg-card',
    'border-error',
    'bg-error/30',
    'border-success',
    'bg-success/30',
    'border-warning',
    'bg-warning/30',
  ],
  theme: {
    container: {
      center: true,
      padding: {
        '2xl': '2rem',
        DEFAULT: '1rem',
        lg: '2rem',
        md: '2rem',
        sm: '1rem',
        xl: '2rem',
      },
      screens: {
        '2xl': '86rem',
        lg: '64rem',
        md: '48rem',
        sm: '40rem',
        xl: '80rem',
      },
    },
    extend: {
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      colors: {
        camelot: {
          50: '#fbf4f7',
          100: '#f8ebf1',
          200: '#f3d7e4',
          300: '#ebb6cd',
          400: '#dd89ab',
          500: '#cf658d',
          600: '#bb476e',
          700: '#a03656',
          800: '#802d45',
          900: '#702b3f',
          950: '#431422',
        },
        azure: {
          50: '#f1f7fd',
          100: '#E5EAF4',
          200: '#c7e1f6',
          300: '#a1ceef',
          400: '#74b2e6',
          500: '#5396de',
          600: '#3f7bd1',
          700: '#3567c0',
          800: '#355caa',
          900: '#2c497c',
          950: '#1f2d4c',
        },
        lavender: {
          50: '#f9f7fb',
          100: '#f2f0f7',
          200: '#EAE4F1',
          300: '#d6cde5',
          400: '#cabcdc',
          500: '#a98fc3',
          600: '#9675b2',
          700: '#85629f',
          800: '#6f5285',
          900: '#5d446e',
          950: '#3b2c49',
        },
        cinnabar: {
          50: '#FCE0DF',
          100: '#fee3e2',
          200: '#feccca',
          300: '#fca8a5',
          400: '#f97570',
          500: '#ef3e37',
          600: '#dd2c25',
          700: '#ba211b',
          800: '#9a1f1a',
          900: '#80201c',
          950: '#450c0a',
        },
        bees: {
          50: '#fdfee8',
          100: '#fdffc2',
          200: '#feff88',
          300: '#fff844',
          400: '#feeb1a', // primary
          500: '#eed104',
          600: '#cda301',
          700: '#a47504',
          800: '#875b0c',
          900: '#734b10',
          950: '#432705',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        background: 'hsl(var(--background))',
        border: 'hsla(var(--border))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        foreground: 'hsl(var(--foreground))',
        input: 'hsl(var(--input))',
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        ring: 'hsl(var(--ring))',
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        success: 'hsl(var(--success))',
        error: 'hsl(var(--error))',
        warning: 'hsl(var(--warning))',
      },
      fontFamily: {
        sans: ['var(--font-figtree)', 'sans-serif'],
        serif: ['var(--font-playfair)', 'serif'],
        display: ['var(--font-figtree)', 'sans-serif']
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      typography: () => ({
        DEFAULT: {
          css: [
            {
              '--tw-prose-body': 'var(--text)',
              '--tw-prose-headings': 'var(--text)',
              '--tw-prose-bullets': '#000000',
              '--tw-prose-counters': '#000000',
              h1: {
                fontWeight: 'normal',
                marginBottom: '0.25em',
              },
            },
          ],
        },
        base: {
          css: [
            {
              h1: {
                fontSize: '2.5rem',
              },
              h2: {
                fontSize: '1.25rem',
                fontWeight: 600,
              },
            },
          ],
        },
        md: {
          css: [
            {
              h1: {
                fontSize: '3.5rem',
              },
              h2: {
                fontSize: '1.5rem',
              },
            },
          ],
        },
      }),
    },
  },
}

export default config
