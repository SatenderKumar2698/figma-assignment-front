"use client";
import { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';

type FAQItem = {
  question: string;
  answer: string;
};

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Initialize refs array
  useEffect(() => {
    contentRefs.current = contentRefs.current.slice(0, faqs.length);
  }, []);

  const faqs: FAQItem[] = [
    {
      question: "What materials are your products made from?",
      answer: "Our products use premium materials..."
    },
    // Add other FAQ items here
  ];

  const toggleFAQ = (index: number) => {
    if (activeIndex === index) {
      // Collapse current item
      gsap.to(contentRefs.current[index], {
        height: 0,
        duration: 0.3,
        ease: "power2.inOut",
        onComplete: () => setActiveIndex(null)
      });
    } else {
      // Collapse previous item
      if (activeIndex !== null) {
        gsap.to(contentRefs.current[activeIndex], {
          height: 0,
          duration: 0.3,
          ease: "power2.inOut"
        });
      }
      
      // Expand new item
      setActiveIndex(index);
      gsap.fromTo(contentRefs.current[index], 
        { height: 0 },
        { 
          height: "auto",
          duration: 0.4,
          ease: "power2.out"
        }
      );
    }
  };

  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">
          Frequently Asked Questions
        </h2>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-200 pb-4">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center text-left py-4 focus:outline-none"
              >
                <h3 className="text-xl font-medium">{faq.question}</h3>
                <span className="text-2xl">
                  {activeIndex === index ? '−' : '+'}
                </span>
              </button>
              
              <div
                ref={el => { contentRefs.current[index] = el; }}
                className="overflow-hidden h-0"
              >
                <p className="text-gray-600 pb-4">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}