/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Zarla-inspired colors
        primary: '#7C3AED', // Vibrant purple
        'primary-dark': '#6D28D9',
        'primary-light': '#A78BFA',
        // Secondary color
        secondary: '#10B981', // Teal/green
        'secondary-dark': '#059669',
        'secondary-light': '#6EE7B7',
        // Accent color
        accent: '#F59E0B', // Amber
        // Dark mode colors
        dark: '#121212',
        'dark-secondary': '#1E1E1E',
        // Text colors
        'text-primary': '#F9FAFB',
        'text-secondary': '#E5E7EB',
        // Additional colors
        'zarla-info': '#3B82F6',
        'zarla-success': '#10B981',
        'zarla-warning': '#F59E0B',
        'zarla-error': '#EF4444',
      },      fontFamily: {
        'sans': ['Inter', 'sans-serif'],
        'display': ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
        'mono': ['JetBrains Mono', 'monospace'],
      },
    },
  },
  plugins: [],
};