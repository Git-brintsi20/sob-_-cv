'use client';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background-light border-t border-border py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-4">
          <p className="text-foreground-muted">
            &copy; {currentYear} Salugu Harshita Bhanu. Portfolio for IJTB【BLOCK CHAIN】Developer Internship at GustoDevelopment Co., Ltd.
          </p>
          <p className="text-foreground-muted text-sm">
            Built with Next.js, TailwindCSS, and deployed on Vercel.
          </p>
          <p className="text-foreground-muted text-sm">
            Powered by Bitcoin ₿ (Updated for IJTB internship)
          </p>
        </div>
      </div>
    </footer>
  );
}
