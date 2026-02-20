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
    title: 'Smart Vendor Compliance System (Flagship)',
    description:
      'Team Project (Walmart Sparkathon 2025): Blockchain & AI-powered vendor compliance DApp. Ethereum smart contracts (Solidity 0.8), Hardhat, React, IPFS, TensorFlow Lite fraud detection, and mobile-first onboarding. Reduced fraud by 65% and improved gate checks by 80%.',
    tech: ['Solidity', 'Hardhat', 'Ethereum', 'React', 'IPFS', 'TensorFlow Lite', 'MongoDB', 'Node.js', 'React Native'],
    github: 'https://github.com/Git-brintsi20/smart-vendor-compliance',
    demo: '#',
  },
  {
    title: 'Bitcoin Transaction Parser & Analyzer',
    description:
      'Solo Project: Real-time Bitcoin transaction parser and analyzer. Decodes raw hex, analyzes UTXO, calculates fees, visualizes transaction graphs, and supports multiple script types. Live mempool dashboard with JSON-RPC integration.',
    tech: ['Node.js', 'TypeScript', 'Bitcoin Core RPC', 'React', 'Chart.js'],
    github: 'https://github.com/Git-brintsi20/bitcoin-tx-parser',
    demo: '#',
  },
  {
    title: 'Lightning Network Payment Channel Simulator',
    description:
      'Solo Project: Simulates Lightning Network payment channels, HTLCs, multi-hop routing, and penalty mechanisms. Interactive D3.js visualization and advanced smart contract logic.',
    tech: ['Python', 'FastAPI', 'WebSocket', 'React', 'D3.js'],
    github: 'https://github.com/Git-brintsi20/lightning-simulator',
    demo: '#',
  },
  {
    title: 'Bitcoin Address Validator & HD Wallet Generator',
    description:
      'Solo Project: BIP32/39/44 compliant HD wallet generator with mnemonic creation, derivation path visualization, and multi-signature address support. Supports Legacy, SegWit, Taproot formats.',
    tech: ['TypeScript', 'bitcoinjs-lib', 'Next.js', 'TailwindCSS'],
    github: 'https://github.com/Git-brintsi20/btc-address-tools',
    demo: '#',
  },
  {
    title: 'Mini Blockchain Explorer & Block Visualizer',
    description:
      'Solo Project: Real-time blockchain explorer with block header parsing, Merkle tree visualization, mempool monitoring, and difficulty analysis. PostgreSQL and Redis for persistence and caching.',
    tech: ['React', 'Node.js', 'Bitcoin Core RPC', 'PostgreSQL', 'Redis'],
    github: 'https://github.com/Git-brintsi20/bitcoin-explorer',
    demo: '#',
  },
  {
    title: 'CipherSuite — Enterprise Security Platform',
    description:
      'Solo Project: AES-256-GCM password vault, TOTP-based 2FA, JWT authentication, and security-critical design for DApp wallet systems and AI data pipelines.',
    tech: ['MERN', 'Next.js', 'Python', 'Flask', 'AES-256-GCM', 'TOTP', 'WebSocket'],
    github: 'https://github.com/Git-brintsi20/ciphersuite',
    demo: '#',
  },
  {
    title: 'Bug Tracker SaaS — Distributed Systems',
    description:
      'Solo Project: Microservices bug tracker with Redis caching, real-time WebSocket, and scalable architecture for AI model serving and decentralized infrastructure.',
    tech: ['Next.js', 'TypeScript', 'PostgreSQL', 'Prisma', 'Redis', 'Docker'],
    github: 'https://github.com/Git-brintsi20/bug-tracker-saas',
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
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center text-foreground">Flagship Blockchain & AI Projects</h2>

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
