"use client";

import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { useScrollSpy } from "@/hooks/use-scroll-spy";
import { portfolioData } from "@/lib/info";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

type HeaderProps = {
  navItems: { name: string; href: string }[];
};

const Header: React.FC<HeaderProps> = ({ navItems }) => {
  const sectionIds = React.useMemo(() => navItems.map((item) => item.href.substring(1)), [navItems]);
  const activeSection = useScrollSpy(sectionIds);

  const [hasScrolled, setHasScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 flex items-center justify-between p-4 transition-all duration-300",
        hasScrolled ? "bg-background/80 backdrop-blur-lg border-b border-border" : "bg-transparent"
      )}
    >
      <Link href="/" className="text-2xl font-bold text-glow transition-all hover:text-primary">
        {portfolioData.name.split(" ")[0]}<span className="text-primary">.</span>
      </Link>
      <nav className="hidden md:flex items-center gap-6">
        {navItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className={cn(
              "text-sm font-medium transition-colors hover:text-primary",
              activeSection === item.href.substring(1) ? "text-primary text-glow" : "text-muted-foreground"
            )}
          >
            {item.name}
          </Link>
        ))}
      </nav>
      <Button asChild>
        <a href={portfolioData.resumeUrl} download>
          <Download className="mr-2 h-4 w-4" />
          Resume
        </a>
      </Button>
    </header>
  );
};

export default Header;
