# K. Pavan Reddy - Portfolio Website

A modern, animated portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## Features

- ⚡ Built with Next.js 14 (Static Export)
- 🎨 Tailwind CSS for styling
- ✨ Framer Motion animations
- 📱 Fully responsive design
- 🌙 Dark theme with black background
- 🎯 SEO optimized
- 🚀 Production-ready

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository or download the files

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Customization Guide

### 1. Personal Information

Update the following files with your information:

#### Contact Details (`src/components/sections/Contact.tsx`)
- Line 37-58: Replace email, phone, LinkedIn, and GitHub URLs

#### Footer (`src/components/Footer.tsx`)
- Line 10-13: Update social media links

### 2. Resume

- Place your resume PDF in `/public/resume.pdf`
- Update experience and skills in `src/components/sections/Resume.tsx`

### 3. Photos

- Create folder: `/public/photos/`
- Add your professional photos to this folder
- Update image paths in `src/components/sections/Photos.tsx` (lines 17-30)
- The first photo should be your main/featured photo

### 4. Projects

Edit `src/components/sections/Projects.tsx` to update project details:
- Project titles and descriptions
- Technologies used
- Impact metrics

### 5. About Section

Edit `src/components/sections/About.tsx` to personalize:
- Your story
- What you focus on
- How you work

### 6. Add 3D Background Effects (Optional)

The Hero section has a placeholder for 3D particle effects. To add them:

1. Install a library like:
```bash
npm install @react-three/fiber @react-three/drei three
# OR
npm install react-particles
```

2. Create a component in `/src/components/ParticlesBackground.tsx`

3. Import and add it to the placeholder in `src/components/sections/Hero.tsx` (lines 32-46)

## Building for Production

1. Build the static site:
```bash
npm run build
```

2. The static files will be in the `/out` folder

3. Deploy to:
   - **Vercel**: `vercel --prod`
   - **Netlify**: Drag `/out` folder to Netlify
   - **GitHub Pages**: Copy `/out` contents to your gh-pages branch
   - **Any static host**: Upload `/out` folder contents

## Project Structure

```
├── public/
│   ├── photos/          # Your professional photos
│   ├── resume.pdf       # Your resume PDF
│   └── my photo.png     # Main photo
├── src/
│   ├── app/
│   │   ├── globals.css  # Global styles
│   │   ├── layout.tsx   # Root layout
│   │   └── page.tsx     # Main page
│   └── components/
│       ├── Navigation.tsx
│       ├── Footer.tsx
│       └── sections/
│           ├── Hero.tsx
│           ├── About.tsx
│           ├── Skills.tsx
│           ├── Projects.tsx
│           ├── Resume.tsx
│           ├── Photos.tsx
│           └── Contact.tsx
├── tailwind.config.js
├── next.config.js
└── package.json
```

## Technologies Used

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: Static Export

## Performance Optimizations

- Static site generation for fast loading
- Optimized images with Next.js Image component
- Minimal dependencies
- Efficient animations with Framer Motion
- Custom scrollbar styling
- SEO meta tags

## Contact Form Setup

The contact form is currently a placeholder. To make it functional:

1. **Using Formspree** (Recommended):
   - Sign up at [formspree.io](https://formspree.io)
   - Update form action in `Contact.tsx`

2. **Using EmailJS**:
   - Install: `npm install @emailjs/browser`
   - Configure service in `Contact.tsx`

3. **Using your own backend**:
   - Create API endpoint
   - Update `handleSubmit` function in `Contact.tsx`

## License

This project is open source and available under the MIT License.

## Support

For questions or issues, please contact K. Pavan Reddy.

---

Built with precision and attention to detail. Just like production systems should be.
