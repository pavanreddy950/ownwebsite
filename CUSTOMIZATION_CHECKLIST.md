# Portfolio Customization Checklist

Use this checklist to ensure you've personalized all parts of your portfolio.

## 📋 Essential Updates (DO THESE FIRST)

### Contact Information
- [ ] Update email in `src/components/sections/Contact.tsx` (line 37)
- [ ] Update phone number in `src/components/sections/Contact.tsx` (line 43)
- [ ] Update LinkedIn URL in `src/components/sections/Contact.tsx` (line 49)
- [ ] Update GitHub URL in `src/components/sections/Contact.tsx` (line 55)
- [ ] Update social links in `src/components/Footer.tsx` (lines 10-13)

### Resume
- [ ] Add your resume PDF to `/public/resume.pdf`
- [ ] Update experience section in `src/components/sections/Resume.tsx`
- [ ] Update core skills in `src/components/sections/Resume.tsx`

### Photos
- [ ] Add 3-4 professional photos to `/public/photos/`
- [ ] Update photo paths in `src/components/sections/Photos.tsx`
- [ ] Verify main photo is in `/public/my photo.png`

## 🎨 Content Customization

### Hero Section (`src/components/sections/Hero.tsx`)
- [ ] Review and adjust positioning statement
- [ ] Update stats (lines 97-104)
- [ ] Customize CTA button text if needed

### About Section (`src/components/sections/About.tsx`)
- [ ] Personalize introduction paragraphs (lines 56-72)
- [ ] Update "What I Focus On" list (lines 76-91)
- [ ] Review "How I Work" principles (lines 42-67)

### Skills Section (`src/components/sections/Skills.tsx`)
- [ ] Review AI & Automation skills
- [ ] Review Backend & Systems skills
- [ ] Review Product & SaaS skills
- [ ] Review Frontend & Mobile skills
- [ ] Add or remove skills as needed

### Projects Section (`src/components/sections/Projects.tsx`)
- [ ] Update JobSpring project details
- [ ] Update RAG Chatbot project details
- [ ] Update Google Business SEO project details
- [ ] Update AI Voice Bot project details
- [ ] Replace with your actual projects if different

## 🚀 Optional Enhancements

### 3D Background
- [ ] Choose particle library (React Three Fiber or react-particles)
- [ ] Install dependencies
- [ ] Create particle component
- [ ] Add to Hero section placeholder

### Contact Form
- [ ] Choose email service (Formspree, EmailJS, or custom)
- [ ] Set up account
- [ ] Configure form submission in `Contact.tsx`
- [ ] Test form submissions

### SEO
- [ ] Update meta tags in `src/app/layout.tsx`
- [ ] Add favicon to `/public/favicon.ico`
- [ ] Add og:image for social sharing

### Colors & Branding
- [ ] Review color scheme in `tailwind.config.js`
- [ ] Adjust primary/secondary/accent colors if needed
- [ ] Test color contrast for accessibility

## ✅ Pre-Deployment Checklist

### Testing
- [ ] Run `npm run dev` and test all sections
- [ ] Test on mobile (Chrome DevTools)
- [ ] Test all links (email, phone, social, navigation)
- [ ] Test contact form
- [ ] Test resume download
- [ ] Check all images load correctly

### Build
- [ ] Run `npm run build` successfully
- [ ] No build errors or warnings
- [ ] Check `/out` folder generated correctly

### Final Checks
- [ ] Remove placeholder text
- [ ] All personal information is accurate
- [ ] All links work
- [ ] Photos are optimized (not too large)
- [ ] Resume is up to date

## 🌐 Deployment

- [ ] Choose hosting platform (Vercel, Netlify, GitHub Pages)
- [ ] Deploy site
- [ ] Test deployed version
- [ ] Set up custom domain (optional)
- [ ] Add site to LinkedIn/Resume

## 📝 Maintenance

- [ ] Update projects as you build new ones
- [ ] Keep resume current
- [ ] Update skills as you learn new technologies
- [ ] Refresh photos periodically

---

**Progress**: ___/50 items completed

**Target Launch Date**: _____________

**Notes**:
