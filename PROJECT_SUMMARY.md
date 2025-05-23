# Project Summary: Portfolio Website

## Overview

This project is a modern, responsive portfolio website for Kaushik Gayal, built with React, Vite, and Tailwind CSS. It's designed to showcase Kaushik's professional experience, skills, and projects in an interactive and visually appealing format.

## Key Features

- **Responsive Design**: Fully optimized for mobile, tablet, and desktop
- **Dark/Light Mode**: Toggle between themes with system preference detection
- **Interactive Sections**: Interactive experience timeline, filterable projects, and categorized skills
- **Smooth Animations**: Subtle animations and transitions for a modern feel
- **Fast Performance**: Optimized for speed with lazy loading and minimal dependencies
- **SEO Friendly**: Proper meta tags and semantic HTML structure
- **Easy Content Updates**: All content stored in JSON files for simple updates

## Tech Stack

- **Framework**: React 19 with Vite 6
- **Styling**: Tailwind CSS for utility-first styling
- **Animations**: Framer Motion for smooth animations
- **Icons**: Various SVG icons for visual elements
- **Deployment**: Ready to deploy to GitHub Pages, Vercel, Netlify, or Azure Static Web Apps

## Project Structure

```
portfolio/
├── public/             # Static assets
│   ├── resume.pdf      # Resume download
│   └── og-image.png    # Open Graph image for social sharing
├── src/
│   ├── assets/         # Local assets (images, etc.)
│   ├── components/     # React components
│   │   ├── About.jsx       # About section
│   │   ├── Contact.jsx     # Contact section
│   │   ├── Experience.jsx  # Experience timeline
│   │   ├── Footer.jsx      # Page footer
│   │   ├── Hero.jsx        # Hero/intro section
│   │   ├── NavBar.jsx      # Navigation bar
│   │   ├── Projects.jsx    # Projects showcase
│   │   ├── Skills.jsx      # Skills section
│   │   └── ThemeToggle.jsx # Dark/light mode toggle
│   ├── data/          # Content in JSON format
│   │   ├── about.json      # About section content
│   │   ├── config.json     # Site configuration
│   │   ├── experience.json # Work experience data
│   │   ├── projects.json   # Projects data
│   │   └── skills.json     # Skills categories and items
│   ├── App.jsx        # Main app component
│   ├── App.css        # App-specific styles
│   ├── index.css      # Global styles
│   └── main.jsx       # Entry point
├── index.html         # HTML template
├── tailwind.config.js # Tailwind configuration
├── README.md          # Project documentation
└── DEPLOYMENT.md      # Deployment guide
```

## Content Management

All content is stored in JSON files in the `src/data` directory:

- **config.json**: Basic information like name, title, location, and navigation links
- **about.json**: Professional bio and introduction
- **experience.json**: Work history with responsibilities
- **projects.json**: Portfolio projects with descriptions and technologies
- **skills.json**: Technical skills organized by category

To update the site, simply edit these JSON files - no code changes required.

## Getting Started

1. Clone the repository
2. Run `npm install` to install dependencies
3. Run `npm run dev` to start the development server
4. Make changes as needed
5. Run `npm run build` to build for production

## Deployment

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed deployment instructions for various platforms.

## Customization

- **Colors**: Edit the color palette in `tailwind.config.js`
- **Content**: Update the JSON files in the `src/data` directory
- **Images**: Replace files in the `public` and `src/assets` directories
- **Fonts**: Change the font imports in `index.css` and update the font family in `tailwind.config.js`

## License

MIT
