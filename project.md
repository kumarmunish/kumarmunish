# Project Documentation

## Overview

Portfolio website with four main sections combining professional presentation with modern UX.

## System Architecture

Static React application built with modern web technologies for optimal performance and SEO.

### Frontend Architecture
- Technology stack: React 19, TypeScript, Tailwind CSS
- Framework/library: React with Vite build tool
- Build tools: Vite, PostCSS, Autoprefixer
- Routing: Wouter (lightweight client-side routing)
- State management: TanStack Query for data fetching
- UI Components: Radix UI primitives with custom styling

### Backend Architecture
- Runtime environment: Static hosting (GitHub Pages)
- Framework: None (static site)
- API design: Client-side only (contact form uses mailto)


### Configuration
- Vite configuration for React development and static build
- Tailwind CSS for responsive design and theming
- TypeScript for type safety
- PostCSS for CSS processing

## Data Flow

Static website with client-side routing and no external API dependencies.

### Database Integration
- No database required (static portfolio site)
- All content is hardcoded in React components
- Contact form uses mailto for email functionality

## External Dependencies

Modern React ecosystem optimized for performance and developer experience.

### Third-party Services
- GitHub (source code hosting)
- GitHub Pages (static hosting)

### Package Dependencies
- **Core**: React 19, TypeScript, Vite
- **Styling**: Tailwind CSS, Radix UI components, Lucide React icons
- **Routing**: Wouter (lightweight router)
- **Forms**: React Hook Form with Zod validation
- **Utils**: clsx, tailwind-merge for styling utilities

## Deployment Strategy

**Target**: GitHub Pages static hosting

### GitHub Pages Setup
1. Build static assets using `npm run build`
2. Deploy `dist` folder to `gh-pages` branch
3. Configure GitHub repository settings for Pages deployment
4. Custom domain support available if needed