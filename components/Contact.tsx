'use client';

import { useEffect, useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail, Download } from 'lucide-react';

export default function Contact() {
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

    const element = document.getElementById('contact');
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  return (
    <section id="contact" className="py-20 px-4 bg-background">
      <div className="max-w-4xl mx-auto">
        <div className={`text-center transform transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">Let's Build Bitcoin Together</h2>

          <p className="text-lg text-foreground-muted mb-12 max-w-2xl mx-auto">
            Interested in collaborating on Bitcoin projects or discussing cryptography and distributed systems? Let's connect!
          </p>

          {/* Contact cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Email */}
            <Card className="bg-card border border-border p-8 hover:border-bitcoin transition-all duration-300 hover:shadow-lg hover:shadow-bitcoin/10">
              <Mail className="w-8 h-8 text-bitcoin mx-auto mb-4" />
              <p className="text-sm text-foreground-muted mb-3">Email</p>
              <a href="mailto:shiki2hustle@gmail.com" className="text-foreground hover:text-bitcoin transition-colors font-semibold">
                shiki2hustle@gmail.com
              </a>
            </Card>

            {/* GitHub */}
            <Card className="bg-card border border-border p-8 hover:border-bitcoin transition-all duration-300 hover:shadow-lg hover:shadow-bitcoin/10">
              <Github className="w-8 h-8 text-bitcoin mx-auto mb-4" />
              <p className="text-sm text-foreground-muted mb-3">GitHub</p>
              <a
                href="https://github.com/Git-brintsi20"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground hover:text-bitcoin transition-colors font-semibold break-all"
              >
                Git-brintsi20
              </a>
            </Card>

            {/* LinkedIn */}
            <Card className="bg-card border border-border p-8 hover:border-bitcoin transition-all duration-300 hover:shadow-lg hover:shadow-bitcoin/10">
              <Linkedin className="w-8 h-8 text-bitcoin mx-auto mb-4" />
              <p className="text-sm text-foreground-muted mb-3">LinkedIn</p>
              <a
                href="https://www.linkedin.com/in/salugu-harshita-bhanu-b447b1274/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground hover:text-bitcoin transition-colors font-semibold text-sm"
              >
               Salugu Harshita Bhanu
              </a>
            </Card>
          </div>

          {/* Resume button */}
          <Button
            size="lg"
            className="bg-bitcoin hover:bg-bitcoin-dark text-white font-semibold px-10 py-6 text-lg transition-all duration-300 transform hover:scale-105"
            onClick={() => {
              window.open('/resume.pdf', '_blank');
            }}
          >
            <Download className="w-5 h-5 mr-2" />
            Download Resume
          </Button>
        </div>
      </div>
    </section>
  );
}
