'use client';

import { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import BitcoinNetwork from '@/components/BitcoinNetwork';

export default function Hero() {
  const [displayText, setDisplayText] = useState('');
  const fullText = 'Salugu Harshita Bhanu';

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < fullText.length) {
        setDisplayText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 py-20 bg-gradient-to-b from-background to-background-light overflow-hidden">
      {/* Animated Bitcoin Network Background */}
      <BitcoinNetwork />

      {/* Gradient background particles (fallback/enhancement) */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-bitcoin rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent rounded-full filter blur-3xl animate-pulse opacity-20"></div>
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-4 text-foreground h-20 md:h-28">
          {displayText}
          {displayText.length < fullText.length && (
            <span className="animate-pulse">_</span>
          )}
        </h1>

        <p className="text-xl md:text-2xl text-foreground-muted mb-8 leading-relaxed max-w-3xl mx-auto">
          Full-Stack Developer • Bitcoin Enthusiast • Summer of Bitcoin 2026
        </p>

        <p className="text-lg text-foreground-muted mb-12 max-w-2xl mx-auto leading-relaxed">
          Crafting decentralized solutions through Bitcoin development, Lightning Network protocols, and cryptographic innovations.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Button
            size="lg"
            className="bg-bitcoin hover:bg-bitcoin-dark text-white font-semibold px-8 py-6 text-lg transition-all duration-300 transform hover:scale-105"
            onClick={() => {
              document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            View Bitcoin Projects
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-bitcoin text-bitcoin hover:bg-bitcoin/10 font-semibold px-8 py-6 text-lg transition-all duration-300 bg-transparent"
            onClick={() => {
              window.open('/resume.pdf', '_blank');
            }}
          >
            Download Resume
          </Button>
        </div>

        <div className="flex justify-center animate-bounce">
          <ChevronDown className="w-8 h-8 text-bitcoin" />
        </div>
      </div>
    </section>
  );
}




























































































































**Ready when you are! Provide the data and I'll update everything immediately.** 🚀---```- Project 4: [URL or "no demo"]- Project 3: [URL or "no demo"]- Project 2: [URL or "no demo"]- Project 1: [URL or "no demo"]Demo URLs: Resume: [uploading now / will upload / skip for now]Profile Photo: [uploading now / will upload / skip for now]LeetCode: [your count]CGPA: [your number]```Just copy this and fill in:## 💬 QUICK REPLY FORMAT:---- ✅ (Optional) Demo URLs- ✅ Your actual resume- ✅ Your profile photo- ✅ Actual LeetCode count- ✅ Actual CGPA### Fully ready after:- ⚠️ Placeholder resume- ⚠️ No profile photo (will show HB gradient)- ⚠️ Placeholder LeetCode (200+)- ⚠️ Placeholder CGPA (8.1)- ✅ Correct year- ✅ Correct name### Can deploy NOW with:## 🚀 DEPLOYMENT READINESS:---| GitHub Links | ✅ Correct | None || Contact Info | ✅ Correct | None || Demo URLs | ⚠️ Optional | Provide if available || Resume PDF | ⚠️ Placeholder | Replace with actual || Profile Photo | ⚠️ Missing | Upload image || LeetCode Count | ⚠️ Placeholder | Provide actual value || CGPA | ⚠️ Placeholder | Provide actual value || Year of Study | ✅ Updated | None || Name | ✅ Updated | None ||------|--------|---------------|| Item | Status | Action Needed |## 📊 CURRENT STATUS:---6. ✅ You'll be ready to deploy to Vercel!5. ✅ Push to GitHub4. ✅ Commit all changes to Git3. ✅ Update demo URLs or remove demo buttons2. ✅ Replace profile photo placeholder with actual image1. ✅ Update the stats in About.tsxI will:5. Demo URLs (optional)4. Resume PDF3. Profile photo (optional but recommended)2. LeetCode count1. CGPAOnce you provide:### Immediate Updates:## 🎯 AFTER YOU PROVIDE DATA:---```dir resume.pdf# Verifycopy "C:\path\to\your\actual-resume.pdf" resume.pdf# Copy your resume (MUST name it resume.pdf)del resume.pdf# Remove placeholdercd d:\Git-REPOs\2.Current\SOB_CV\bitcoin-developer-portfolio\public# Navigate to public folder```bash### Steps:## 📄 HOW TO REPLACE RESUME:---- ✅ File size: Under 2MB preferred- ✅ Good lighting and clear face- ✅ Professional-looking photo- ✅ Square aspect ratio preferred- ✅ Recommended size: 400x400px minimum (can be larger)- ✅ Format: JPG or PNG### Image Requirements:4. Rename it to `profile-photo.jpg`3. Copy your photo file into that folder2. Right-click → "Reveal in File Explorer"1. Open the `public` folder in VS Code### Option 2: Use VS Code```dir profile-photo.jpg# Verify it's therecopy "C:\path\to\your\photo.jpg" profile-photo.jpg# Copy your photo there (rename it to profile-photo.jpg)cd d:\Git-REPOs\2.Current\SOB_CV\bitcoin-developer-portfolio\public# Navigate to public folder```bash### Option 1: Upload to Project## 📸 HOW TO ADD YOUR PROFILE PHOTO:---If **NO**, I'll remove the "Live Demo" buttons (they currently don't show because demo='#')- **Mini Blockchain Explorer & Block Visualizer:** _______________- **Bitcoin Address Validator & HD Wallet Generator:** _______________- **Lightning Network Payment Channel Simulator:** _______________- **Bitcoin Transaction Parser & Analyzer:** _______________If **YES**, provide the URLs:**Do you have live deployed versions of these projects?****Current state:** All demo links are `'#'` (placeholder)**Location:** `components/Projects.tsx` lines 24, 32, 40, 48### 5️⃣ **PROJECT LIVE DEMO URLS** (Optional)---3. I'll commit the change2. Add your resume (must be named `resume.pdf`)1. Delete the current placeholder: `rm public/resume.pdf`**Action:**- Full path: `d:\Git-REPOs\2.Current\SOB_CV\bitcoin-developer-portfolio\public\resume.pdf`- Replace existing file at: `bitcoin-developer-portfolio/public/resume.pdf`**Where to save:**- File name: MUST be named `resume.pdf`- Your actual resume in PDF format**What you need:****Current state:** Placeholder PDF with basic text**Location:** `public/resume.pdf`### 4️⃣ **RESUME PDF** ---```/>  className="rounded-lg object-cover"  height={400}  width={400}  alt="Salugu Harshita Bhanu"  src="/profile-photo.jpg" <Image ```tsxAfter you add the image, I'll replace the gradient box with:**How I'll update it:**- Full path: `d:\Git-REPOs\2.Current\SOB_CV\bitcoin-developer-portfolio\public\profile-photo.jpg`- Place in `bitcoin-developer-portfolio/public/` folder**Where to save:** - File name: `profile-photo.jpg` or `profile-photo.png`- JPG or PNG format- Square format (400x400px or larger recommended)- Professional photo of yourself**What you need:****Current state:** Gradient box with "HB" initials**Location:** `components/About.tsx` line 63-67### 3️⃣ **PROFILE PHOTO** ---```{ label: 'LeetCode Problems', value: '200', suffix: '+' },  // <-- Update this```tsxI'll update this line:Please provide your actual count: ___________**Location:** `components/About.tsx` line 16### 2️⃣ **LeetCode Problems Count** (Currently: 200+)---```{ label: 'CGPA', value: '8.1' },  // <-- Update this```tsxI'll update this line:Please provide your actual CGPA: ___________**Location:** `components/About.tsx` line 15### 1️⃣ **CGPA** (Currently: 8.1)## ❓ INFORMATION NEEDED FROM YOU:---- ✅ Updated to "Third-year" student (from "Second-year")- ✅ Name changed to "Salugu Harshita Bhanu" (from "Harshita Bhanu")## ✅ COMPLETED UPDATES:import { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import BitcoinNetwork from '@/components/BitcoinNetwork';

export default function Hero() {
  const [displayText, setDisplayText] = useState('');
  const fullText = 'Salugu Harshita Bhanu';

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < fullText.length) {
        setDisplayText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 py-20 bg-gradient-to-b from-background to-background-light overflow-hidden">
      {/* Animated Bitcoin Network Background */}
      <BitcoinNetwork />

      {/* Gradient background particles (fallback/enhancement) */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-bitcoin rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent rounded-full filter blur-3xl animate-pulse opacity-20"></div>
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-4 text-foreground h-20 md:h-28">
          {displayText}
          {displayText.length < fullText.length && (
            <span className="animate-pulse">_</span>
          )}
        </h1>

        <p className="text-xl md:text-2xl text-foreground-muted mb-8 leading-relaxed max-w-3xl mx-auto">
          Full-Stack Developer • Bitcoin Enthusiast • Summer of Bitcoin 2026
        </p>

        <p className="text-lg text-foreground-muted mb-12 max-w-2xl mx-auto leading-relaxed">
          Crafting decentralized solutions through Bitcoin development, Lightning Network protocols, and cryptographic innovations.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Button
            size="lg"
            className="bg-bitcoin hover:bg-bitcoin-dark text-white font-semibold px-8 py-6 text-lg transition-all duration-300 transform hover:scale-105"
            onClick={() => {
              document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            View Bitcoin Projects
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-bitcoin text-bitcoin hover:bg-bitcoin/10 font-semibold px-8 py-6 text-lg transition-all duration-300 bg-transparent"
            onClick={() => {
              window.open('/resume.pdf', '_blank');
            }}
          >
            Download Resume
          </Button>
        </div>

        <div className="flex justify-center animate-bounce">
          <ChevronDown className="w-8 h-8 text-bitcoin" />
        </div>
      </div>
    </section>
  );
}
