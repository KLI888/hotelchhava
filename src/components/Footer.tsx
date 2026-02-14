const Footer = () => {
  return (
    <footer className="relative py-10 border-t border-border bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
        <p className="font-display text-xl text-primary tracking-[0.3em] text-glow-sm">
          CHHAVA
        </p>
        <p className="font-devanagari text-sm text-muted-foreground mt-2">
          स्वराज्याच्या स्वादाची परंपरा
        </p>
        <div className="w-16 h-[1px] gradient-gold mx-auto my-4" />
        <p className="font-body text-sm text-muted-foreground">
          © {new Date().getFullYear()} CHHAVA Restaurant. All rights reserved.
        </p>
        <p className="font-body text-xs text-muted-foreground/60 mt-1">
          Pune, Maharashtra
        </p>
      </div>
    </footer>
  );
};

export default Footer;
