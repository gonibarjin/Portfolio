"use client";

import { useState, useEffect, type RefObject } from 'react';

interface IntersectionObserverOptions extends IntersectionObserverInit {
  once?: boolean;
}

export function useInView(
  ref: RefObject<Element>,
  options: IntersectionObserverOptions = {}
): boolean {
  const [isInView, setIsInView] = useState(false);
  const { once = false, ...observerOptions } = options;

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(([entry]) => {
      setIsInView(entry.isIntersecting);
      if (entry.isIntersecting && once) {
        observer.unobserve(element);
      }
    }, observerOptions);

    observer.observe(element);

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [ref, once, observerOptions]);

  return isInView;
}
