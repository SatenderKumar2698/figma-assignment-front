"use client";
import { useEffect } from 'react';
import gsap from 'gsap';
import LoadingScreen from './components/LoadingScreen';
import Header from './components/Header';
import Hero from './components/Hero';
import Products from './components/Products';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

export default function Home() {
  useEffect(() => {
    const tl = gsap.timeline({ delay: 2.5 });
    
    tl.fromTo(
      ["header", "main", "footer"],
      { 
        opacity: 0, 
        y: 20 
      },
      { 
        opacity: 1, 
        y: 0,
        duration: 1,
        ease: "power2.out",
        stagger: 0.1
      }
    );

    return () => {
      tl.kill(); // Clean up animation
    };
  }, []);

  return (
    <>
      <LoadingScreen />
      <Header />
      <main>
        <Hero />
        <Products />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}