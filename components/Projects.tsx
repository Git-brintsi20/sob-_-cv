'use client';

import { useEffect, useState } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  tech: string[];
  github: string;
  demo?: string;
}

const projects: Project[] = [
  {
    title: 'Decentralized Voting DApp',
    description:
      'A secure decentralized application for transparent voting using smart contracts (Solidity) and blockchain integration. Features real-time results, user authentication, and testnet deployment.',
    tech: ['Solidity', 'React', 'Node.js', 'Ethereum Testnet', 'Web3.js'],
    github: '#',
    demo: '#',
  },
  {
    title: 'AI-Powered Sentiment Analysis Tool',
    description:
      'Machine learning model for sentiment analysis on social media data. Built with Python, TensorFlow, and deployed as a working prototype. Includes data preprocessing, training, and cloud integration.',
    tech: ['Python', 'TensorFlow', 'React', 'AWS'],
    github: '#',
    demo: '#',
  },
  {
    title: 'Smart Contract-Based Supply Chain Tracker',
    description:
      'A DApp for tracking supply chain events using blockchain. Implements smart contracts for provenance, integrates with front-end, and tested on a blockchain testnet.',
    tech: ['Solidity', 'Node.js', 'React', 'Hardhat'],
    github: '#',
    demo: '#',
  },
  {
    title: 'AI Image Classification Prototype',
    description:
      'Developed a prototype AI application for image classification using PyTorch. Includes data preprocessing, model training, and deployment as a web app.',
    tech: ['Python', 'PyTorch', 'React', 'Google Cloud'],
    github: '#',
    demo: '#',
  },
];

export default function Projects() {
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

    const element = document.getElementById('projects');
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  return (
    <section id="projects" className="py-20 px-4 bg-background-light">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center text-foreground">IJTB Internship Projects</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className={`bg-card border-2 border-card hover:border-bitcoin p-8 transform transition-all duration-500 hover:shadow-xl hover:shadow-bitcoin/20 hover:-translate-y-2 cursor-pointer group ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Project icon area */}
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-bitcoin to-accent flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-white font-bold text-lg">₿</span>
              </div>

              <h3 className="text-xl font-bold text-foreground mb-3">{project.title}</h3>

              <p className="text-foreground-muted mb-6 leading-relaxed line-clamp-3">{project.description}</p>

              {/* Tech stack */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech, idx) => (
                  <Badge key={idx} className="bg-bitcoin/20 text-bitcoin border-0 text-xs" variant="secondary">
                    {tech}
                  </Badge>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex gap-3">
                <Button
                  size="sm"
                  className="bg-bitcoin hover:bg-bitcoin-dark text-white flex-1 transition-all duration-300"
                  onClick={() => window.open(project.github, '_blank')}
                >
                  <Github className="w-4 h-4 mr-2" />
                  View Code
                </Button>
                {project.demo && project.demo !== '#' && (
                  <Button size="sm" variant="outline" className="border-bitcoin text-bitcoin hover:bg-bitcoin/10 flex-1 bg-transparent" onClick={() => window.open(project.demo, '_blank')}>
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </Button>
                )}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
