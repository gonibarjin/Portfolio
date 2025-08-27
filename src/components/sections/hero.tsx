"use client";

import React, { useEffect, useState } from "react";
import { portfolioData } from "@/lib/info";
import { Typewriter } from "@/components/ui/typewriter";
import { ArrowDown } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import Particles from "@/components/ui/particles";

const HeroSection = () => {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 200, 500], [1, 0.5, 0]);
  const scale = useTransform(scrollY, [0, 200], [1, 0.8]);
  const y = useTransform(scrollY, [0, 500], [0, 200]);

  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <motion.section
      id="hero"
      className="relative h-screen flex flex-col items-center justify-center text-center overflow-hidden"
      style={{ opacity }}
    >
      <div className="absolute inset-0 animated-background -z-20"></div>
      <Particles className="absolute inset-0 -z-10" />
      <div className="absolute inset-0 bg-background/80 -z-10"></div>
      
      <motion.div style={{ scale, y }} className="transition-transform duration-200">
        <motion.h1 
          className="text-5xl md:text-7xl font-bold tracking-tighter mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {portfolioData.name}
        </motion.h1>

        <motion.div 
          className="text-xl md:text-2xl text-primary font-medium h-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Typewriter phrases={portfolioData.hero.taglines} />
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          repeatType: "loop",
        }}
      >
        <ArrowDown className="w-6 h-6 text-muted-foreground" />
      </motion.div>
    </motion.section>
  );
};

export default HeroSection;
