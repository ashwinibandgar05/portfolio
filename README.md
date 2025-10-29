# Ashwini Bandgar - Embedded Systems Engineer Portfolio

A modern, production-ready portfolio website showcasing embedded systems projects, technical skills, and achievements.

## 🚀 Features

- **Responsive Design**: Fully responsive layout that works on all devices
- **Legacy-Inspired Aesthetic**: Terminal-like design with monospace fonts and clean layout
- **Smooth Navigation**: Fixed navigation with smooth scrolling and active section highlighting
- **Project Showcase**: Detailed project cards with technologies and achievements
- **SEO Optimized**: Proper meta tags and semantic HTML for better search engine visibility
- **Performance**: Built with Next.js 16 for optimal performance
- **Dark Mode**: Beautiful dark theme with terminal green accents

## 🛠️ Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Analytics**: Vercel Analytics
- **Fonts**: Geist & Geist Mono

## 📦 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Vercel will automatically detect Next.js and deploy

Or use the Vercel CLI:

\`\`\`bash
npm i -g vercel
vercel
\`\`\`

### Deploy to GitHub Pages

1. Install the required package:

\`\`\`bash
npm install --save-dev gh-pages
\`\`\`

2. Update `next.config.mjs`:

\`\`\`js
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: process.env.NODE_ENV === 'production' ? '/your-repo-name' : '',
}

export default nextConfig
\`\`\`

3. Add deployment scripts to `package.json`:

\`\`\`json
{
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d out"
  }
}
\`\`\`

4. Deploy:

\`\`\`bash
npm run deploy
\`\`\`

## 🏃‍♂️ Local Development

1. Install dependencies:

\`\`\`bash
npm install
\`\`\`

2. Run the development server:

\`\`\`bash
npm run dev
\`\`\`

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📝 Customization

### Update Personal Information

Edit the component files in the `components/` directory:

- `hero.tsx` - Name, title, and contact info
- `about.tsx` - About section content
- `projects.tsx` - Project details
- `education.tsx` - Educational background
- `achievements.tsx` - Awards and achievements
- `contact.tsx` - Contact information and social links

### Change Colors

Edit `app/globals.css` to customize the color scheme. The current theme uses:

- Terminal green accent (`--accent`)
- Dark background with light text
- Monospace fonts for technical feel

### Add More Sections

Create new components in `components/` and import them in `app/page.tsx`.

## 📄 License

This project is open source and available under the MIT License.

## 👤 Author

**Ashwini Bandgar**

- Email: ashwini.bandgar23@pccoepune.org
- LinkedIn: [ashwini-bandgar-97195b2b2](https://linkedin.com/in/ashwini-bandgar-97195b2b2)
- Location: Nigadi, Pune-411002

---

Built with ❤️ using Next.js and Tailwind CSS
