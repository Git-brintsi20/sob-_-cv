'use client';

import { useEffect, useState } from 'react';
import { Card } from '@/components/ui/card';

interface TimelineEvent {
  month: string;
  year: string;
  title: string;
  description: string[];
}

const timeline: TimelineEvent[] = [
  {
    month: '2025',
    year: '',
    title: 'Blockchain & AI Foundations',
    description: ['Studied blockchain, cryptography, and AI basics', 'Built first smart contracts and ML models', 'Explored distributed systems and security'],
  },
  {
    month: '2025',
    year: '',
    title: 'Flagship Project: Smart Vendor Compliance',
    description: ['Developed Ethereum DApp with AI fraud detection', 'Integrated React, IPFS, and TensorFlow Lite', 'Won Top 8 at Walmart Sparkathon'],
  },
  {
    month: '2026',
    year: '',
    title: 'Open Source & Advanced Projects',
    description: ['Released Bitcoin tools and Lightning Network simulator', 'Built security platforms and SaaS systems', 'Active in coding competitions and open source'],
  },
];

export default function Timeline() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('timeline');
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  return (
    <section id="timeline" className="py-20 px-4 bg-background-light">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center text-foreground">Learning & Project Journey</h2>

        <div className="space-y-8 relative">
          {/* Vertical line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-bitcoin to-accent opacity-30"></div>

          {timeline.map((event, index) => (
            <div
              key={index}
              className={`transform transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className={`flex gap-8 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                {/* Content */}
                <div className="flex-1">
                  <Card className="bg-card border border-border p-8 hover:border-bitcoin transition-all duration-300 hover:shadow-lg hover:shadow-bitcoin/10">
                    <div className="flex items-baseline gap-3 mb-4">
                      <span className="text-bitcoin font-bold text-lg">{event.month}</span>
                      <span className="text-foreground-muted">{event.year}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-4">{event.title}</h3>
                    <ul className="space-y-2">
                      {event.description.map((item, itemIdx) => (
                        <li key={itemIdx} className="flex items-center gap-3 text-foreground-muted">
                          <span className="w-2 h-2 rounded-full bg-accent"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </Card>
                </div>

                {/* Timeline dot */}
                <div className="flex-shrink-0 flex items-start justify-center">
                  <div className="w-4 h-4 rounded-full bg-bitcoin border-4 border-background-light shadow-lg shadow-bitcoin/50 mt-8"></div>
                </div>

                {/* Empty space for alternating layout */}
                <div className="flex-1 hidden md:block"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
