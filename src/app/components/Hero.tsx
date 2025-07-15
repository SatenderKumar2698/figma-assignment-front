"use client";
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const textRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (!textRef.current) return;

    const words = textRef.current.textContent?.split(' ') || [];
    textRef.current.textContent = '';
    
    words.forEach((word, i) => {
      const span = document.createElement('span');
      span.textContent = word + ' ';
      span.style.opacity = '0.2';
      textRef.current?.appendChild(span);
      
      ScrollTrigger.create({
        trigger: span,
        start: "top 80%",
        onEnter: () => {
          gsap.to(span, {
            opacity: 1,
            duration: 0.3,
            ease: "power2.out"
          });
        }
      });
    });
  }, []);

  return (
    <section className="h-screen flex items-center justify-center px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold mb-8">Skin Care</h1>
        <p 
          ref={textRef}
          className="text-xl leading-relaxed"
        >
            Your skin deserves the best care.
          Skincare that brings out your natural Radiance.
        </p>
      </div>
    </section>
  );
}