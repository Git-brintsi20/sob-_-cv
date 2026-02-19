'use client';

import { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import BitcoinNetwork from '@/components/BitcoinNetwork';

export default function Hero() {
  const [displayText, setDisplayText] = useState('');
  const fullText = 'Salugu Harshita Bhanu'; // You may update this name if needed

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
          Full-Stack Developer • Blockchain & AI Enthusiast • IJTB【BLOCK CHAIN】Developer Internship 2026
        </p>

        <p className="text-lg text-foreground-muted mb-12 max-w-2xl mx-auto leading-relaxed">
          Building decentralized applications and AI-powered solutions at GustoDevelopment Co., Ltd. Passionate about leveraging blockchain and artificial intelligence to drive digital transformation and create new market value.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Button
            size="lg"
            className="bg-bitcoin hover:bg-bitcoin-dark text-white font-semibold px-8 py-6 text-lg transition-all duration-300 transform hover:scale-105"
            onClick={() => {
              document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            View Internship Projects
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
