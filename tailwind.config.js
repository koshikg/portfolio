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
        // Azure brand color
        primary: '#0078D4', 
        'primary-dark': '#106EBE',
        'primary-light': '#50C8FF',
        // Azure DevOps color
        secondary: '#0072C6',
        // Dark mode colors
        dark: '#1B1B1B',
        'dark-secondary': '#252525',
        // Text colors
        'text-primary': '#F8F8F8',
        'text-secondary': '#A7CAE8',
        // Status colors (similar to Azure portal)
        'azure-info': '#60A9FF',
        'azure-success': '#8CCD42',
        'azure-warning': '#FCD116',
        'azure-error': '#F25022',
      },
      fontFamily: {
        'segoe': ['Segoe UI', 'sans-serif'], // Microsoft's Segoe UI font
      },
    },
  },
  plugins: [],
};