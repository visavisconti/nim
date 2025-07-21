// tailwind.config.mjs
import plugin from 'tailwindcss/plugin'
import typography from '@tailwindcss/typography'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        surface: 'var(--background)',
        card: 'var(--card-bg)',
        primary: 'var(--text)',
        secondary: 'var(--text-faded)',
        contrast: 'var(--text-highlight)',
        border: 'var(--border)',
      },
      // Optionale Erweiterungen (z. B. Schrift, Spacing, Radius)
    },
  },
  plugins: [typography],
}
