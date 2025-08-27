"use client";

import React, { useRef } from 'react';
import { useInView } from '@/hooks/use-in-view';
import { cn } from '@/lib/utils';

interface SectionProps {
  children: React.ReactNode;
  id: string;
  className?: string;
}

export const Section: React.FC<SectionProps> = ({ children, id, className }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, threshold: 0.1 });

  return (
    <section
      ref={ref}
      id={id}
      className={cn(
        'container px-8 md:px-16 py-20 md:py-28 transition-all duration-700 ease-out',
        isInView ? 'section-visible' : 'section-hidden',
        className
      )}
    >
      {children}
    </section>
  );
};
