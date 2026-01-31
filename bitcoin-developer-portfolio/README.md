# Bitcoin Developer Portfolio - Harshita Bhanu

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/Git-brintsi20/sob-_-cv)

## 🌟 Overview

Professional portfolio website showcasing Bitcoin development projects and technical skills for Summer of Bitcoin 2026 application.

**Live Demo**: Coming soon on Vercel

## ✨ Features

- 🎨 **Modern Design**: Dark theme with Bitcoin orange (#F7931A) accents
- 🌐 **Animated Background**: Interactive Bitcoin network visualization with Canvas API
- ⚡ **Lightning Fast**: Next.js 14 with App Router, optimized for performance
- 📱 **Fully Responsive**: Mobile-first design with smooth transitions
- 🔧 **Bitcoin Projects Showcase**: 4 featured Bitcoin development projects
- 🎯 **SEO Optimized**: Complete metadata and Open Graph tags

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: TailwindCSS v4
- **UI Components**: Shadcn/UI + Radix UI
- **Animations**: Framer Motion + Custom Canvas animations
- **Icons**: Lucide React
- **Analytics**: Vercel Analytics
- **Deployment**: Vercel

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/Git-brintsi20/sob-_-cv.git
cd bitcoin-developer-portfolio

# Install dependencies (pnpm recommended)
pnpm install

# Run development server
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start
```

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Visit [Vercel](https://vercel.com)
3. Import your repository
4. Vercel will auto-detect Next.js and deploy!

Or use the Vercel CLI:

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

### Environment Variables

No environment variables required for basic deployment.

## 📂 Project Structure

```
bitcoin-developer-portfolio/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Home page
│   └── globals.css         # Global styles with custom colors
├── components/
│   ├── Hero.tsx            # Hero section with typewriter effect
│   ├── About.tsx           # About section with stats
│   ├── Projects.tsx        # Bitcoin projects showcase
│   ├── Skills.tsx          # Technical skills grid
│   ├── Timeline.tsx        # Learning journey timeline
│   ├── Contact.tsx         # Contact section
│   ├── Footer.tsx          # Footer component
│   ├── BitcoinNetwork.tsx  # Animated Bitcoin network background
│   └── ui/                 # Shadcn UI components
├── public/
│   ├── resume.pdf          # Resume PDF (replace with yours)
│   ├── og-image.svg        # Open Graph image
│   └── *.png               # Icons
└── package.json
```

## 🎨 Color Palette

```css
--bitcoin: #F7931A          /* Bitcoin Orange */
--bitcoin-dark: #E87E0A     /* Darker Orange */
--accent: #3B82F6           /* Electric Blue */
--background: #0A0A0A       /* Deep Dark */
--background-light: #111111 /* Lighter Dark */
--foreground: #FFFFFF       /* White */
--foreground-muted: #9CA3AF /* Gray */
```

## 📝 Customization

### Update Personal Information

1. **Hero Section**: Edit `components/Hero.tsx` - Change name and titles
2. **About Section**: Edit `components/About.tsx` - Update bio, stats, and skills
3. **Projects**: Edit `components/Projects.tsx` - Add/modify your projects
4. **Contact**: Edit `components/Contact.tsx` - Update email, GitHub, LinkedIn
5. **Resume**: Replace `public/resume.pdf` with your actual resume

### Update Metadata

Edit `app/layout.tsx`:
- Update title, description, keywords
- Change Open Graph images and URLs
- Modify Twitter card information

## 🔧 Available Scripts

```bash
pnpm dev      # Start development server (localhost:3000)
pnpm build    # Create production build
pnpm start    # Start production server
pnpm lint     # Run ESLint
```

## 🌐 Featured Projects

1. **Bitcoin Transaction Parser & Analyzer**
   - Real-time transaction decoder with UTXO analysis
   - Tech: Node.js, TypeScript, Bitcoin Core RPC, React

2. **Lightning Network Payment Channel Simulator**
   - Interactive HTLC mechanics demonstration
   - Tech: Python, FastAPI, WebSocket, D3.js

3. **Bitcoin Address Validator & HD Wallet Generator**
   - BIP32/39/44 compliant wallet tools
   - Tech: TypeScript, bitcoinjs-lib, Next.js

4. **Mini Blockchain Explorer & Block Visualizer**
   - Real-time testnet data visualization
   - Tech: React, Node.js, PostgreSQL, Redis

## 📊 Performance

- ✅ 95+ Lighthouse Performance Score
- ✅ Mobile-first responsive design
- ✅ Optimized images and lazy loading
- ✅ Server-side rendering with Next.js
- ✅ Fast page load times

## 🤝 Contributing

This is a personal portfolio project. Feel free to fork and customize for your own use!

## 📄 License

MIT License - Feel free to use this template for your own portfolio

## 📧 Contact

- **Email**: shiki2hustle@gmail.com
- **GitHub**: [@Git-brintsi20](https://github.com/Git-brintsi20)
- **LinkedIn**: [Salugu Harshita Bhanu](https://www.linkedin.com/in/salugu-harshita-bhanu-b447b1274/)

---

**Summer of Bitcoin 2026** | Built with ❤️ and ₿ by Harshita Bhanu
