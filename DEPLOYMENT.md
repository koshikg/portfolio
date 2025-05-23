# Deployment Guide

This guide will help you deploy your portfolio website to various platforms.

## Prerequisites

Before deploying, make sure you have:

1. A GitHub account
2. Your site is fully tested locally
3. All environment variables and configurations are set correctly
4. Run `npm run build` to ensure it builds without errors

## Deployment Options

### 1. GitHub Pages

GitHub Pages is a free and easy way to host your static site directly from your GitHub repository.

#### Setup Steps:

1. Push your code to GitHub
2. Update `vite.config.js` to include the base path:

```js
export default defineConfig({
  plugins: [react()],
  base: '/portfolio/', // Replace 'portfolio' with your repository name
})
```

3. Create a GitHub Action workflow:
   - The workflow file is already created at `.github/workflows/deploy.yml`
   - It will automatically build and deploy your site when you push to the `main` branch

4. Enable GitHub Pages in the repository settings:
   - Go to your repository settings
   - Navigate to the "Pages" section
   - Select "GitHub Actions" as the source

5. Your site will be available at: `https://yourusername.github.io/portfolio`

### 2. Vercel

Vercel offers a seamless deployment experience, especially for React applications.

#### Setup Steps:

1. Create an account on [vercel.com](https://vercel.com)
2. Connect your GitHub account
3. Import your repository
4. Configure your project:
   - Framework Preset: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`
5. Click "Deploy"

Your site will be automatically deployed and receive a domain like `your-portfolio.vercel.app`. You can also add a custom domain in the project settings.

### 3. Netlify

Netlify is another excellent platform for hosting static sites.

#### Setup Steps:

1. Create an account on [netlify.com](https://netlify.com)
2. Click "New site from Git"
3. Connect to your GitHub repository
4. Configure your build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
5. Click "Deploy site"

Your site will be deployed with a Netlify domain, which you can customize or connect to a custom domain.

### 4. Azure Static Web Apps

Azure Static Web Apps integrates nicely with GitHub Actions for deployment.

#### Setup Steps:

1. Log in to the [Azure Portal](https://portal.azure.com)
2. Create a new Static Web App resource
3. Connect to your GitHub repository
4. Configure the build details:
   - Build Preset: Vite
   - App location: `/`
   - Output location: `dist`
5. Complete the creation process

Your site will be deployed to Azure, and GitHub Actions will automatically handle future deployments when you push changes.

## Updating Your Site

After deployment, making updates is simple:

1. Make your changes locally
2. Test thoroughly
3. Commit and push to GitHub
4. Your site will automatically rebuild and deploy (if you've set up CI/CD)

## Adding a Custom Domain

All the platforms mentioned above support custom domains:

- GitHub Pages: Add a CNAME file in your repository and update DNS settings
- Vercel/Netlify: Add domain in the project settings and follow the DNS instructions
- Azure: Configure custom domains in the Azure Portal for your Static Web App

## Troubleshooting

If your deployment fails, check:

1. Build logs for errors
2. That all dependencies are correctly installed
3. That the base path is correctly configured for the platform
4. That your node version is compatible with your deployment platform

For more help, refer to the documentation of your chosen deployment platform.
