# Kaushik Gayal's Portfolio Website

A modern, interactive personal portfolio website inspired by Brittany Chiang's design.

## Features

- 🌙 Dark/Light mode toggle with local storage persistence
- 📱 Fully responsive design (mobile, tablet, desktop)
- ⚡ Fast load times with optimized assets
- 🔧 Simple data configuration through JSON files
- 📊 Interactive sections with animations
- 🎨 Modern UI with smooth transitions

## Tech Stack

- **Framework**: React with Vite
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: HeroIcons
- **Hosting Options**: GitHub Pages, Vercel, Netlify, or Azure Static Web Apps

## Setup & Development

### Prerequisites

- Node.js (v14+)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/kaushikgayal/portfolio.git
cd portfolio

# Install dependencies
npm install
```

### Development

```bash
# Start the development server
npm run dev
```

Visit `http://localhost:5173` to view the site.

### Building for Production

```bash
# Generate a production build
npm run build
```

The build artifacts will be stored in the `dist/` directory.

## Deployment

### GitHub Pages

1. Set the base in `vite.config.js` to your repository name:
   ```js
   base: '/portfolio/' // Replace 'portfolio' with your repo name
   ```

2. Deploy using GitHub Actions:
   - Create a `.github/workflows/deploy.yml` file
   - Set up a workflow to build and deploy to gh-pages branch

### Vercel / Netlify

1. Connect your GitHub repository
2. Configure the build command: `npm run build`
3. Set the publish directory: `dist`

### Azure Static Web Apps

1. Use the VS Code extension "Azure Static Web Apps"
2. Follow the wizard to deploy

## Customization

All content is stored in JSON files under `src/data/`:

- `config.json`: General site configuration
- `about.json`: About section content
- `experience.json`: Work experience
- `projects.json`: Portfolio projects
- `skills.json`: Skills & technologies

To update content, simply modify these files - no code changes needed!
