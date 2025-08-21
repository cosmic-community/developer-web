# Developer Portfolio Website

![Portfolio Preview](https://imgix.cosmicjs.com/bc53e240-7ec0-11f0-8dcc-651091f6a7c0-photo-1611224923853-80b023f02d71-1755802670553.jpg?w=1200&h=300&fit=crop&auto=format,compress)

A modern, professional developer portfolio website built with Next.js 15 and Cosmic CMS. Showcases projects, skills, work experience, and client testimonials with a clean, responsive design.

## ✨ Features

- **Dynamic Project Portfolio** - Showcase your work with project details, technologies, and live demos
- **Skills Matrix** - Categorized skills display with proficiency levels and experience
- **Professional Timeline** - Work experience with achievements and technologies used
- **Client Testimonials** - Star ratings with client photos and related projects
- **Responsive Design** - Optimized for desktop, tablet, and mobile devices
- **SEO Optimized** - Meta tags and structured data for search engines
- **Fast Performance** - Built with Next.js 15 for optimal loading speeds
- **Easy Content Management** - Update content through Cosmic CMS dashboard

## Clone this Bucket and Code Repository

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Bucket and Code Repository](https://img.shields.io/badge/Clone%20this%20Bucket-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](http://localhost:3040/projects/new?clone_bucket=68a76b4dffd08cae13b80313&clone_repository=68a78ce51b1f9a831b0adc59)

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> "Create a content model for a web developer portfolio with projects, skills, work experience, and testimonials"

### Code Generation Prompt

> "Build a Next.js website that uses my existing objects in this bucket"

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## 🚀 Technologies Used

- **Frontend**: Next.js 15, React 18, TypeScript
- **Styling**: Tailwind CSS with custom components
- **Content Management**: Cosmic CMS with SDK v1.5.5
- **Deployment**: Vercel (optimized for Next.js)
- **Package Manager**: Bun for fast installs

## 📋 Prerequisites

- Node.js 18+ or Bun
- A Cosmic account with the portfolio bucket
- Environment variables configured

## 🛠️ Installation

1. **Clone the repository**
```bash
git clone <repository-url>
cd developer-portfolio
```

2. **Install dependencies**
```bash
bun install
```

3. **Environment Setup**
Create a `.env.local` file:
```env
COSMIC_BUCKET_SLUG=your-bucket-slug
COSMIC_READ_KEY=your-read-key
COSMIC_WRITE_KEY=your-write-key
```

4. **Run the development server**
```bash
bun run dev
```

5. **Open your browser**
Visit [http://localhost:3000](http://localhost:3000)

## 🌐 Cosmic SDK Examples

### Fetching Projects
```typescript
import { cosmic } from '@/lib/cosmic'

const projects = await cosmic.objects
  .find({ type: 'projects' })
  .props(['title', 'slug', 'metadata'])
  .depth(1)
```

### Getting Skills by Category
```typescript
const frontendSkills = await cosmic.objects
  .find({ 
    type: 'skills',
    'metadata.category': 'frontend'
  })
  .depth(1)
```

### Fetching Work Experience
```typescript
const experience = await cosmic.objects
  .find({ type: 'work-experience' })
  .sort('metadata.start_date', -1)
  .depth(1)
```

## 🎨 Cosmic CMS Integration

This portfolio uses four main content types:

### Projects
- Project name, description, and technologies
- Project images with imgix optimization
- Live demo and GitHub repository links
- Status tracking (Completed, In Progress, Planned)
- Featured project highlighting

### Skills
- Skill categorization (Frontend, Backend, Database, Tools)
- Proficiency levels (Beginner to Expert)
- Years of experience tracking
- Skill icons and visual representation

### Work Experience
- Job titles and company information
- Employment date ranges with current position support
- Detailed job descriptions and key achievements
- Technologies used in each role

### Testimonials
- Client information with photos
- Star ratings and detailed testimonials
- Links to related projects
- Company and role details

## 🚀 Deployment Options

### Vercel (Recommended)
1. Push code to GitHub/GitLab
2. Connect repository to Vercel
3. Configure environment variables
4. Deploy automatically on push

### Netlify
1. Build the static version: `bun run build && bun run export`
2. Upload the `out` folder to Netlify
3. Configure environment variables in Netlify dashboard

### Self-hosted
1. Build the application: `bun run build`
2. Start the production server: `bun run start`
3. Configure reverse proxy (Nginx/Apache)

Remember to configure your environment variables in your deployment platform's settings.

<!-- README_END -->