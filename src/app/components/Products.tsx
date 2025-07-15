"use client";
import { useRef, useState } from 'react';
import gsap from 'gsap';
import LeftArrow from './assets/LeftArrow';
import RightArrow from './assets/RightArrow';

export default function Products() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const productsRef = useRef<HTMLDivElement>(null);
  
  const products = [
    { id: 1, name: 'Alya skin cleanser', price: '$1,299', image: '/watch.jpg' },
    { id: 2, name: 'Ritual of sakura', price: '$599', image: '/headphones.jpg' },
    { id: 3, name: 'The body lotion', price: '$899', image: '/bag.jpg' },
    { id: 4, name: 'Signature Perfume', price: '$249', image: '/perfume.jpg' },
  ];

  const handlePrev = () => {
    if (currentSlide > 0) {
      animateSlide(currentSlide - 1);
      setCurrentSlide(currentSlide - 1);
    }
  };

  const handleNext = () => {
    if (currentSlide < products.length - 1) {
      animateSlide(currentSlide + 1);
      setCurrentSlide(currentSlide + 1);
    }
  };

  const animateSlide = (newIndex: number) => {
    if (!productsRef.current) return;
    
    const direction = newIndex > currentSlide ? 1 : -1;
    const items = Array.from(productsRef.current.children);
    
    gsap.fromTo(items, {
      x: `${direction * 100}%`,
      opacity: 0
    }, {
      x: '0%',
      opacity: 1,
      duration: 0.5,
      ease: "power2.out",
      stagger: 0.1
    });
  };

  return (
    <section className="py-20 px-6 bg-[#F9F9F9]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">Best Selling Products</h2>
        
        <div className="relative">
          <div 
            ref={productsRef}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {products.map((product) => (
              <div key={product.id} className="bg-white p-6 rounded-lg shadow-sm">
                <div className="aspect-square bg-gray-100 mb-4 rounded-md overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-medium">{product.name}</h3>
                <p className="text-gray-600 mt-2">{product.price}</p>
                <button className="mt-4 px-6 py-2 bg-black text-white rounded-full hover:bg-gray-800 transition-colors duration-300">
                  View Details
                </button>
              </div>
            ))}
          </div>
          
          {/* Mobile/Tablet Navigation */}
          <div className="md:hidden flex justify-center mt-8 space-x-4">
            <button 
              onClick={handlePrev}
              className="p-3 rounded-full bg-white shadow-md hover:bg-gray-100 transition-colors"
              aria-label="Previous product"
            >
              <LeftArrow className="w-5 h-5" />
            </button>
            <button 
              onClick={handleNext}
              className="p-3 rounded-full bg-white shadow-md hover:bg-gray-100 transition-colors"
              aria-label="Next product"
            >
              <RightArrow className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}