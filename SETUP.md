# Portfolio Setup Guide

Follow these steps to customize and deploy your portfolio website.

## Step 1: Install Dependencies

```bash
npm install
```

## Step 2: Test the Site

```bash
npm run dev
```

Visit http://localhost:3000 to see your site running locally.

## Step 3: Customize Content

### A. Update Contact Information

**File**: `src/components/sections/Contact.tsx`

Find and replace:
- Line 37: `your.email@example.com` → Your actual email
- Line 43: `+91 XXXXX XXXXX` → Your phone number
- Line 49: `linkedin.com/in/yourprofile` → Your LinkedIn URL
- Line 55: `github.com/yourprofile` → Your GitHub URL

**File**: `src/components/Footer.tsx`

Update social links (lines 10-13) with your actual URLs.

### B. Add Your Photos

1. Add professional photos to `/public/photos/` folder
   - Recommended: 3-4 high-quality photos
   - Format: JPG, PNG, or WebP
   - Size: Around 800x1000px for portraits, 1200x800px for landscapes

2. Update photo paths in `src/components/sections/Photos.tsx` (lines 20-35)

Example:
```typescript
const photos = [
  {
    src: '/my photo.png',
    alt: 'K. Pavan Reddy - Professional Photo 1',
    featured: true,
  },
  {
    src: '/photos/working.jpg',
    alt: 'K. Pavan Reddy at work',
    featured: false,
  },
  // Add more photos...
]
```

### C. Add Your Resume

1. Export your resume as a PDF
2. Save it as `/public/resume.pdf`
3. Update the experience section in `src/components/sections/Resume.tsx`

### D. Update Projects

**File**: `src/components/sections/Projects.tsx`

Modify the projects array (starting line 12) with your actual projects:
- Update titles and descriptions
- Add real tech stacks
- Update impact metrics
- Modify problem/solution statements

### E. Personalize About Section

**File**: `src/components/sections/About.tsx`

- Update the "What I Focus On" list (lines 67-83)
- Personalize the description paragraphs (lines 56-65)

### F. Update Meta Information

**File**: `src/app/layout.tsx`

Update SEO metadata:
- Title
- Description
- Keywords

## Step 4: Add 3D Background (Optional)

The hero section includes a placeholder for 3D particle effects.

### Option A: React Three Fiber

1. Install dependencies:
```bash
npm install @react-three/fiber @react-three/drei three
```

2. Create `/src/components/ParticlesBackground.tsx`:
```typescript
'use client'
import { Canvas } from '@react-three/fiber'
import { Stars } from '@react-three/drei'

export default function ParticlesBackground() {
  return (
    <Canvas className="absolute inset-0">
      <Stars radius={100} depth={50} count={5000} factor={4} />
    </Canvas>
  )
}
```

3. Import in `src/components/sections/Hero.tsx`:
```typescript
import ParticlesBackground from '@/components/ParticlesBackground'

// Replace the placeholder (lines 32-46) with:
<div className="particles-container">
  <ParticlesBackground />
</div>
```

### Option B: React Particles

1. Install:
```bash
npm install react-tsparticles tsparticles
```

2. Follow the [react-tsparticles documentation](https://github.com/matteobruni/tsparticles) to set up

## Step 5: Configure Contact Form

The contact form needs a backend service to send emails.

### Option A: Formspree (Easiest)

1. Sign up at [formspree.io](https://formspree.io)
2. Create a new form
3. Update `src/components/sections/Contact.tsx`:

```typescript
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()

  const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(formData)
  })

  if (response.ok) {
    alert('Message sent successfully!')
    setFormData({ name: '', email: '', subject: '', message: '' })
  }
}
```

### Option B: EmailJS

1. Sign up at [emailjs.com](https://www.emailjs.com/)
2. Install: `npm install @emailjs/browser`
3. Follow EmailJS React documentation

## Step 6: Build for Production

```bash
npm run build
```

The static site will be generated in the `/out` folder.

## Step 7: Deploy

### Deploy to Vercel (Recommended)

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Deploy:
```bash
vercel --prod
```

### Deploy to Netlify

1. Drag the `/out` folder to [Netlify Drop](https://app.netlify.com/drop)
2. Or use Netlify CLI:
```bash
npm install -g netlify-cli
netlify deploy --prod --dir=out
```

### Deploy to GitHub Pages

1. Install gh-pages:
```bash
npm install --save-dev gh-pages
```

2. Add to `package.json`:
```json
"scripts": {
  "deploy": "gh-pages -d out"
}
```

3. Deploy:
```bash
npm run build && npm run deploy
```

## Troubleshooting

### Images not showing
- Make sure images are in `/public/` folder
- Use paths starting with `/` (e.g., `/photos/image.jpg`)
- Check file names match exactly (case-sensitive)

### Animations not working
- Check if Framer Motion is installed: `npm list framer-motion`
- Clear `.next` folder and rebuild: `rm -rf .next && npm run dev`

### Build errors
- Delete `node_modules` and reinstall: `rm -rf node_modules && npm install`
- Clear Next.js cache: `rm -rf .next`

## Customization Tips

1. **Colors**: Edit `tailwind.config.js` to change the color scheme
   - `primary`: Main accent color (currently green)
   - `secondary`: Secondary accent (currently blue)
   - `accent`: Tertiary accent (currently pink)

2. **Fonts**: Import different fonts in `src/app/globals.css`

3. **Sections**: Remove unwanted sections by commenting them out in `src/app/page.tsx`

4. **Animations**: Adjust animation timing in component files (look for `transition` props)

## Need Help?

Refer to the main README.md for more information, or check:
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Framer Motion Documentation](https://www.framer.com/motion/)

---

Good luck with your portfolio! 🚀
