"use client";

import React, { useState, useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";

const Particles = ({
  count: initialCount = 100,
  className,
}: {
  count?: number;
  className?: string;
}) => {
  const isMobile = useIsMobile();
  const count = isMobile ? Math.floor(initialCount / 2) : initialCount;
  const [particles, setParticles] = useState<any[]>([]);

  useEffect(() => {
    const newParticles = Array.from({ length: count }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 1,
      duration: Math.random() * 10 + 10,
      delay: Math.random() * 10,
    }));
    setParticles(newParticles);
  }, [count]);
  
  const memoizedParticles = useMemo(() => particles.map((p) => (
    <motion.div
      key={p.id}
      className="absolute rounded-full bg-primary/20"
      style={{
        left: `${p.x}%`,
        top: `${p.y}%`,
        width: p.size,
        height: p.size,
        opacity: 0,
      }}
      animate={{
        x: (Math.random() - 0.5) * 200,
        y: (Math.random() - 0.5) * 200,
        opacity: [0, 1, 0],
      }}
      transition={{
        duration: p.duration,
        repeat: Infinity,
        repeatType: "loop",
        delay: p.delay,
        ease: "linear",
      }}
    />
  )), [particles]);


  return (
    <div className={`absolute inset-0 -z-20 overflow-hidden ${className}`}>
      {memoizedParticles}
    </div>
  );
};

export default Particles;
