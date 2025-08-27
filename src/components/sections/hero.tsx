"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { portfolioData } from "@/lib/info";
import { Typewriter } from "@/components/ui/typewriter";
import { ArrowDown } from "lucide-react";

const HeroSection = () => {
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const newOpacity = Math.max(0, 1 - scrollY / 500);
      setOpacity(newOpacity);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="hero" className="relative h-screen flex flex-col items-center justify-center text-center overflow-hidden">
      <div className="absolute inset-0 animated-background -z-20"></div>
      <div className="absolute inset-0 bg-background/50 -z-10"></div>
      
      <div style={{ opacity }} className="transition-opacity duration-200">
        <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto mb-8">
          <Image
            src="https://picsum.photos/400/400"
            alt="Glowing Laptop"
            width={400}
            height={400}
            className="object-contain glow-shadow"
            priority
            data-ai-hint="glowing laptop"
          />
        </div>

        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-4">
          {portfolioData.name}
        </h1>

        <div className="text-xl md:text-2xl text-primary font-medium h-8">
          <Typewriter phrases={portfolioData.hero.taglines} />
        </div>
      </div>

      <div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce"
        style={{ opacity }}
      >
        <ArrowDown className="w-6 h-6 text-muted-foreground" />
      </div>
    </section>
  );
};

export default HeroSection;
