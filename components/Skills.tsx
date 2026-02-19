'use client';

import { useEffect, useState } from 'react';
import { Card } from '@/components/ui/card';

interface SkillCategory {
  title: string;
  icon: string;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    title: 'Blockchain & Smart Contracts',
    icon: '🔗',
    skills: ['Solidity', 'Smart Contract Design', 'Hardhat', 'Truffle', 'Web3.js', 'Ethereum Testnet', 'Blockchain Integration'],
  },
  {
    title: 'Artificial Intelligence',
    icon: '🤖',
    skills: ['Python', 'TensorFlow', 'PyTorch', 'AI Model Development', 'Data Preprocessing', 'Cloud Deployment (AWS, GCP)'],
  },
  {
    title: 'Web & Full-Stack Development',
    icon: '🛠️',
    skills: ['TypeScript', 'JavaScript', 'React', 'Node.js', 'Express.js', 'Next.js', 'PostgreSQL', 'MongoDB'],
  },
  {
    title: 'DevOps & Tools',
    icon: '🧰',
    skills: ['Docker', 'Git/GitHub', 'Linux', 'CI/CD', 'Cloud Platforms', 'Testnet Operations'],
  },
];

export default function Skills() {
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

    const element = document.getElementById('skills');
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  return (
    <section id="skills" className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center text-foreground">Technical Arsenal</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className={`bg-card border border-border p-8 hover:border-bitcoin transition-all duration-500 transform hover:shadow-lg hover:shadow-bitcoin/10 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="text-3xl">{category.icon}</div>
                <h3 className="text-2xl font-bold text-foreground">{category.title}</h3>
              </div>

              <div className="space-y-3">
                {category.skills.map((skill, skillIdx) => (
                  <div key={skillIdx} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-bitcoin"></div>
                    <span className="text-foreground-muted">{skill}</span>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
