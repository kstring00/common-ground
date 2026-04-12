import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Texas ABA Centers logo palette — tasteful accents, not overdone
        brand: {
          navy: {
            50:  '#ebeef4',
            100: '#c8cfe0',
            200: '#9aa8c6',
            300: '#6c81ac',
            400: '#476399',
            500: '#1a3264',
            600: '#162b57',
            700: '#112147',
            800: '#0c1837',
            900: '#070e22',
          },
          red: {
            50:  '#fceef0',
            100: '#f5cdd3',
            200: '#eda3ad',
            300: '#e27986',
            400: '#d55565',
            500: '#c8364c',
            600: '#b02e42',
            700: '#912538',
            800: '#721c2d',
            900: '#521320',
          },
          burgundy: {
            50:  '#f5ecf0',
            100: '#e2c7d2',
            200: '#cc9cb0',
            300: '#b5718e',
            400: '#a34f74',
            500: '#8c2040',
            600: '#7a1b38',
            700: '#64162e',
            800: '#4e1124',
            900: '#370c19',
          },
          purple: {
            50:  '#f0ecf5',
            100: '#d2c7e2',
            200: '#b09ccc',
            300: '#8e71b5',
            400: '#7550a3',
            500: '#3c2264',
            600: '#341d57',
            700: '#2a1847',
            800: '#201237',
            900: '#160c25',
          },
          warm: {
            50:  '#fefcf9',
            100: '#fdf8f0',
            200: '#fbf1e0',
            300: '#f7e5c8',
            400: '#f3d9b1',
            500: '#f0cf8e',
          },
        },
        primary: {
          DEFAULT: '#1a3264',
          light: '#476399',
          dark: '#112147',
          foreground: '#ffffff',
        },
        accent: {
          DEFAULT: '#c8364c',
          light: '#d55565',
          dark: '#912538',
          foreground: '#ffffff',
        },
        surface: {
          DEFAULT: '#ffffff',
          muted: '#f8f9fb',
          subtle: '#f1f3f5',
          border: '#e2e5ea',
        },
      },
      fontFamily: {
        display: ['var(--font-display)', 'system-ui', 'sans-serif'],
        body: ['var(--font-body)', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
      boxShadow: {
        'soft': '0 2px 20px rgba(26, 50, 100, 0.06)',
        'card': '0 4px 24px rgba(0, 0, 0, 0.05)',
        'card-hover': '0 8px 32px rgba(26, 50, 100, 0.10)',
        'glow': '0 0 40px rgba(26, 50, 100, 0.12)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'slide-up': 'slideUp 0.5s ease-out forwards',
        'slide-in-right': 'slideInRight 0.3s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(16px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
