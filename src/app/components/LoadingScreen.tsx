"use client";
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function LoadingScreen() {
  const loadingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();
    
    // Initial loading animation
    tl.to(loadingRef.current, {
      duration: 1.5,
      opacity: 1,
      ease: "power2.inOut"
    });
    
    // Hide loading screen
    tl.to(loadingRef.current, {
      duration: 1,
      opacity: 0,
      display: "none",
      ease: "power2.inOut",
      delay: 0.5
    });
  }, []);

  return (
    <div 
      ref={loadingRef}
      className="fixed inset-0 bg-[#F5F5F5] z-50 flex items-center justify-center opacity-0"
    >
      <div className="animate-pulse text-2xl font-medium">Loading...</div>
    </div>
  );
}