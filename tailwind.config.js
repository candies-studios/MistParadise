/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          50: '#f3f6f4',
          100: '#e3eae6',
          200: '#c7d6cf',
          300: '#a3b8ae',
          400: '#7a9088',
          500: '#5b716a',
          600: '#475a54',
          700: '#3a4843',
          800: '#2f3a36',
          900: '#262e2b',
          950: '#141a18',
        },
        mist: {
          50: '#f0f7f4',
          100: '#dcebe4',
          200: '#bbd7ca',
          300: '#90bba7',
          400: '#6a9b87',
          500: '#4e7d69',
          600: '#3d6452',
          700: '#325142',
          800: '#2a4135',
          900: '#1d2d24',
        },
        gold: {
          50: '#fbf7ee',
          100: '#f5ebd2',
          200: '#ecd7a3',
          300: '#e0bd6c',
          400: '#d4a541',
          500: '#c08c2b',
          600: '#a36f23',
          700: '#82541f',
          800: '#5e3c1c',
          900: '#432b16',
        },
        ember: {
          400: '#f97316',
          500: '#ea6a0b',
          600: '#c2560a',
        },
      },
      fontFamily: {
        display: ['"Fraunces"', 'Georgia', 'serif'],
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest2: '0.32em',
      },
      keyframes: {
        mistDrift: {
          '0%, 100%': { transform: 'translateX(0) translateY(0)', opacity: '0.55' },
          '50%': { transform: 'translateX(-4%) translateY(-2%)', opacity: '0.75' },
        },
        mistDriftSlow: {
          '0%, 100%': { transform: 'translateX(0) translateY(0)', opacity: '0.35' },
          '50%': { transform: 'translateX(6%) translateY(1%)', opacity: '0.5' },
        },
        floatY: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.96)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        emberFlicker: {
          '0%, 100%': { opacity: '0.85', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.05)' },
        },
      },
      animation: {
        'mist-drift': 'mistDrift 18s ease-in-out infinite',
        'mist-drift-slow': 'mistDriftSlow 26s ease-in-out infinite',
        'float-y': 'floatY 7s ease-in-out infinite',
        shimmer: 'shimmer 6s linear infinite',
        'fade-up': 'fadeUp 0.9s cubic-bezier(0.22, 1, 0.36, 1) forwards',
        'fade-in': 'fadeIn 1.2s ease forwards',
        'scale-in': 'scaleIn 1.1s cubic-bezier(0.22, 1, 0.36, 1) forwards',
        'ember-flicker': 'emberFlicker 3s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
