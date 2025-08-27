"use client";

import { useState, useEffect, useRef } from 'react';

export function useScrollSpy(
  sectionIds: string[],
  options?: IntersectionObserverInit
): string | null {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    if (observer.current) {
      observer.current.disconnect();
    }

    const handleIntersect: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    observer.current = new IntersectionObserver(handleIntersect, {
      rootMargin: '-50% 0px -50% 0px', // Trigger when section is in the middle of the viewport
      threshold: 0,
      ...options,
    });

    const elements = sectionIds.map((id) => document.getElementById(id)).filter(Boolean);
    elements.forEach((el) => el && observer.current?.observe(el));

    return () => observer.current?.disconnect();
  }, [sectionIds, options]);

  return activeSection;
}
