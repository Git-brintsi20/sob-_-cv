'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';

interface StatCounter {
  label: string;
  value: string;
  suffix?: string;
}

const stats: StatCounter[] = [
  { label: 'Blockchain/AI Projects', value: '6' },
  { label: 'CGPA', value: '8.1' },
  { label: 'LeetCode Problems', value: '280', suffix: '+' },
  { label: 'Open Source Contributions', value: 'Active' },
];

const skills = [
  'Solidity',
  'Smart Contracts',
  'Python',
  'TensorFlow',
  'PyTorch',
  'TypeScript',
  'Node.js',
  'React',
  'AI Model Development',
  'Data Analysis',
  'Blockchain Integration',
  'Cloud Platforms (AWS, GCP)',
  'Git/GitHub',
];

export default function About() {
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

    const element = document.getElementById('about');
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  return (
    <section id="about" className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center text-foreground">About Me</h2>

        <div className="grid md:grid-cols-2 gap-12 mb-16 items-center">
          {/* Professional image */}
          <div className={`transform transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
            <div className="aspect-square rounded-lg overflow-hidden shadow-2xl">
              <Image 
                src="/profile_image.jpeg"
                alt="Salugu Harshita Bhanu"
                width={500}
                height={500}
                className="object-cover w-full h-full object-[center_15%]"
                priority
              />
            </div>
          </div>

          {/* Bio text */}
          <div className={`transform transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
            <p className="text-lg text-foreground-muted mb-6 leading-relaxed">
              Computer Science student with hands-on experience building Ethereum smart contracts and DApps (Solidity, Hardhat, Firebase), and AI/ML-integrated systems (Python, PyTorch, TensorFlow). Strong foundation in OOP, distributed systems, and backend development. Experienced in full-stack development, security-critical applications, and distributed architecture.
            </p>
            <p className="text-lg text-foreground-muted mb-6 leading-relaxed">
              Passionate about leveraging blockchain and AI to solve real-world problems. Eager to contribute to innovative projects and grow under experienced engineers in a production environment.
            </p>
            <p className="text-lg text-foreground-muted leading-relaxed">
              Education: B.Tech CSE, IIIT Jabalpur (2023-2027) | CGPA: 8.1
              <br />
              Coding Profiles: <a href="https://leetcode.com/u/hac_brintsi20/" target="_blank" className="text-bitcoin underline">LeetCode</a> | <a href="https://github.com/Git-brintsi20" target="_blank" className="text-bitcoin underline">GitHub</a> | <a href="https://www.codechef.com/users/shiki_20" target="_blank" className="text-bitcoin underline">CodeChef</a> | <a href="https://codeforces.com/profile/shiki_20" target="_blank" className="text-bitcoin underline">Codeforces</a>
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card
              key={index}
              className={`bg-card border-border p-6 text-center transform transition-all duration-1000 hover:border-bitcoin hover:shadow-lg hover:shadow-bitcoin/20 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <p className="text-3xl font-bold text-bitcoin mb-2">
                {stat.value}
                {stat.suffix}
              </p>
              <p className="text-sm text-foreground-muted">{stat.label}</p>
            </Card>
          ))}
        </div>

        {/* Skills */}
        <div className={`transform transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <h3 className="text-2xl font-bold mb-6 text-foreground">Skills & Technologies</h3>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill, index) => (
              <Badge
                key={index}
                className="bg-card border-bitcoin text-bitcoin hover:bg-bitcoin hover:text-white transition-all duration-300"
                variant="outline"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
