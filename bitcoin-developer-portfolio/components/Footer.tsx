'use client';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background-light border-t border-border py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-4">
          <p className="text-foreground-muted">
            © {currentYear} Harshita Bhanu. All rights reserved.
          </p>
          <p className="text-foreground-muted text-sm">
            Built with Next.js • Deployed on Vercel
          </p>
          <p className="text-foreground-muted text-sm">
            Powered by Bitcoin ₿
          </p>
        </div>
      </div>
    </footer>
  );
}
