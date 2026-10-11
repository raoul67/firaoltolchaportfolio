# Firaol Tolcha - Portfolio Website

A premium personal portfolio website built with React, Vite, and modern CSS. Designed for Firaol Tolcha, a Computer Science student and web developer.

## Features

- **Premium Dark Theme**: Sophisticated color system with deep midnight black and electric cobalt blue accents
- **Responsive Design**: Optimized for mobile, tablet, and desktop devices
- **Smooth Animations**: Purposeful interactions and transitions
- **Project Filtering**: Interactive project gallery with category filters
- **Accessible**: Keyboard navigation, focus indicators, and reduced-motion support
- **SEO Optimized**: Meta tags, semantic HTML, and Open Graph metadata
- **Easy to Customize**: All personal data stored in dedicated configuration files

## Tech Stack

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **Lucide React** - Icon library
- **CSS Variables** - Design system with custom properties
- **Google Fonts** - Space Grotesk, Inter, and JetBrains Mono

## Project Structure

```
portfolio/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/       # Reusable UI components
│   ├── sections/        # Page sections
│   ├── data/            # Configuration files
│   │   ├── profile.js   # Personal information
│   │   ├── projects.js  # Project data
│   │   ├── skills.js    # Skills data
│   │   ├── services.js  # Services data
│   │   └── principles.js # Working principles
│   ├── App.jsx          # Main app component
│   ├── main.jsx         # Entry point
│   ├── index.css        # Global styles
│   └── sections.css     # Section-specific styles
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone or download this repository
2. Navigate to the project directory:
   ```bash
   cd profira
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

### Development

Run the development server:
```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser to view the site.

### Production Build

Create an optimized production build:
```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

Preview the production build locally:
```bash
npm run preview
```

## Customization

### Personal Information

Edit `src/data/profile.js` to update:
- Name and title
- About section narrative
- Experience entries
- Contact information
- Social media links
- Navigation items

### Projects

Edit `src/data/projects.js` to:
- Add, remove, or modify projects
- Update project descriptions
- Add technology tags
- Configure source code and live demo links

### Skills

Edit `src/data/skills.js` to:
- Update skill categories
- Add or remove technologies
- Modify icon assignments

### Services

Edit `src/data/services.js` to:
- Update service descriptions
- Modify service icons

### Colors and Typography

Edit CSS variables in `src/index.css` to customize:
- Color scheme
- Font families
- Spacing values
- Border radius
- Transition speeds

## Deployment to Vercel

### Option 1: Vercel CLI

1. Install Vercel CLI:
   ```bash
   npm install -g vercel
   ```

2. Deploy:
   ```bash
   vercel
   ```

3. Follow the prompts to complete deployment

### Option 2: Vercel Dashboard

1. Push your code to GitHub
2. Log in to [Vercel](https://vercel.com)
3. Click "Add New Project"
4. Import your GitHub repository
5. Vercel will automatically detect the Vite configuration
6. Click "Deploy"

### Option 3: Git Integration

1. Push your code to GitHub, GitLab, or Bitbucket
2. Import the repository in Vercel
3. Enable automatic deployments on push

## Environment Variables

No environment variables are required for basic operation. The site works as a static frontend.

## Performance

- Lazy loading for optimal performance
- Optimized bundle size
- CSS-in-JS for component isolation
- Font optimization with Google Fonts

## Accessibility

- Semantic HTML structure
- ARIA labels where appropriate
- Keyboard navigation支持
- Focus indicators
- Reduced-motion support
- Color contrast compliance

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is for personal use. Feel free to use it as a template for your own portfolio.

## Contact

For questions or feedback about this portfolio, please use the contact information provided on the website.

---

Built with ❤️ using React and Vite
