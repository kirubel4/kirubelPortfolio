# 🚀 My Portfolio — Next.js Frontend Engineer

A stunning, animated portfolio built with **Next.js 14** (App Router).

## ✨ Features
- Custom animated cursor with trailing ring
- Particle network background (canvas)
- Typewriter hero animation
- Scroll-triggered fade-up animations on every section
- Animated skill bars
- Project filter by tech stack
- Contact form with sent confirmation
- Active nav highlight on scroll
- Fully responsive

## 🛠 Setup

```bash
# 1. Install dependencies
npm install

# 2. Start dev server
npm run dev

# 3. Open in browser
http://localhost:3000
```

## 🎨 Customize

### Your name
Search for `YourName` in the project and replace with your real name.

### Your photo
In `components/HeroSection.jsx`, find the comment:
```jsx
{/* 👉 Replace this div with <img src="/photo.jpg" ... /> */}
```
Put your photo in `/public/photo.jpg` and replace the emoji div with:
```jsx
<img src="/photo.jpg" style={{width:'100%',height:'100%',objectFit:'cover'}} alt="Your Name" />
```

### Your projects
Edit `data/projects.js` — update `PROJECTS` array with your real work.

### Your skills
Edit `data/projects.js` — update `SKILLS` array with your real stack and levels.

### Social links
Edit `components/ContactSection.jsx` — update the `SOCIALS` array with your real links.

## 🚀 Deploy to Vercel (free)

```bash
npm i -g vercel
vercel
```

Done — live URL in under 1 minute.
