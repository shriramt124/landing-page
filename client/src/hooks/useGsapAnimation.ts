import { useEffect, useRef, RefObject } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function useGsapFadeIn(options: {
  y?: number;
  duration?: number;
  delay?: number;
  stagger?: number;
}) {
  const elementRef = useRef<HTMLDivElement>(null);
  const scrollTriggerRef = useRef<ScrollTrigger | null>(null);

  useEffect(() => {
    if (!elementRef.current) return;

    const element = elementRef.current;
    const children = element.children;

    if (children.length > 0 && options.stagger) {
      const animation = gsap.fromTo(
        children,
        {
          opacity: 0,
          y: options.y || 30,
        },
        {
          opacity: 1,
          y: 0,
          duration: options.duration || 0.8,
          stagger: options.stagger,
          delay: options.delay || 0,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: element,
            start: 'top 80%',
            toggleActions: 'play none none none',
            onRefresh: (self) => {
              scrollTriggerRef.current = self;
            },
          },
        }
      );
      
      scrollTriggerRef.current = animation.scrollTrigger as ScrollTrigger;
    } else {
      const animation = gsap.fromTo(
        element,
        {
          opacity: 0,
          y: options.y || 30,
        },
        {
          opacity: 1,
          y: 0,
          duration: options.duration || 0.8,
          delay: options.delay || 0,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: element,
            start: 'top 80%',
            toggleActions: 'play none none none',
            onRefresh: (self) => {
              scrollTriggerRef.current = self;
            },
          },
        }
      );
      
      scrollTriggerRef.current = animation.scrollTrigger as ScrollTrigger;
    }

    return () => {
      if (scrollTriggerRef.current) {
        scrollTriggerRef.current.kill();
        scrollTriggerRef.current = null;
      }
    };
  }, [options.y, options.duration, options.delay, options.stagger]);

  return elementRef;
}

export function useGsapParallax(speed: number = 0.5): RefObject<HTMLDivElement> {
  const elementRef = useRef<HTMLDivElement>(null);
  const scrollTriggerRef = useRef<ScrollTrigger | null>(null);

  useEffect(() => {
    if (!elementRef.current) return;

    const element = elementRef.current;

    const animation = gsap.to(element, {
      y: () => window.innerHeight * speed,
      ease: 'none',
      scrollTrigger: {
        trigger: element,
        start: 'top top',
        end: 'bottom top',
        scrub: true,
        onRefresh: (self) => {
          scrollTriggerRef.current = self;
        },
      },
    });
    
    scrollTriggerRef.current = animation.scrollTrigger as ScrollTrigger;

    return () => {
      if (scrollTriggerRef.current) {
        scrollTriggerRef.current.kill();
        scrollTriggerRef.current = null;
      }
    };
  }, [speed]);

  return elementRef;
}

export function useGsapStagger(delay: number = 0.1): RefObject<HTMLDivElement> {
  const elementRef = useRef<HTMLDivElement>(null);
  const scrollTriggerRef = useRef<ScrollTrigger | null>(null);

  useEffect(() => {
    if (!elementRef.current) return;

    const element = elementRef.current;
    const children = Array.from(element.children);

    const animation = gsap.fromTo(
      children,
      {
        opacity: 0,
        y: 40,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: delay,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: element,
          start: 'top 75%',
          toggleActions: 'play none none none',
          onRefresh: (self) => {
            scrollTriggerRef.current = self;
          },
        },
      }
    );
    
    scrollTriggerRef.current = animation.scrollTrigger as ScrollTrigger;

    return () => {
      if (scrollTriggerRef.current) {
        scrollTriggerRef.current.kill();
        scrollTriggerRef.current = null;
      }
    };
  }, [delay]);

  return elementRef;
}
