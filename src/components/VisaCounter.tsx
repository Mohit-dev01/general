import React, { useState, useEffect, useRef } from 'react';
import { Users, Award, Globe, FileCheck } from 'lucide-react';

interface CounterItemProps {
  icon: React.ElementType;
  value: number;
  label: string;
  duration: number;
}

const CounterItem = ({ icon: Icon, value, label, duration }: CounterItemProps) => {
  const [count, setCount] = useState(0);
  const counterRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      const [entry] = entries;
      setIsVisible(entry.isIntersecting);
    }, { threshold: 0.1 });

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, []);

  useEffect(() => {
    // Only start counting if visible and hasn't been animated to completion yet
    if (isVisible && !hasAnimated) {
      let start = 0;
      const increment = value / (duration / 50); // 50ms per step
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= value) {
          setCount(value);
          clearInterval(timer);
          setHasAnimated(true); // Mark as fully animated once complete
        } else {
          setCount(Math.floor(start));
        }
      }, 50);
      
      return () => clearInterval(timer);
    }
  }, [isVisible, value, duration, hasAnimated]);

  return (
    <div ref={counterRef} className="p-6 bg-gray-900 border border-gray-800 rounded-xl hover:bg-gray-800/50 transition-all duration-300 group">
      <div className="mb-4 w-14 h-14 rounded-lg bg-indigo-900/30 flex items-center justify-center group-hover:bg-indigo-900/50 transition-all">
        <Icon className="text-indigo-400 w-6 h-6" />
      </div>
      <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">{count}+</h3>
      <p className="text-gray-400 text-xs">{label}</p>
    </div>
  );
};

const VisaCounter = () => {
  return (
    <section id="counter" className="py-16 px-4 bg-gray-950">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-indigo-400 mb-4">
            Our Success Stories
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-xs">
            We take pride in our track record of successful visa applications and satisfied clients.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <CounterItem 
            icon={FileCheck}
            value={1200}
            label="Successful Visa Applications"
            duration={2000}
          />
          <CounterItem 
            icon={Users}
            value={950}
            label="Happy Clients"
            duration={2000}
          />
          <CounterItem 
            icon={Globe}
            value={25}
            label="Countries Served"
            duration={1500}
          />
          <CounterItem 
            icon={Award}
            value={8}
            label="Years of Experience"
            duration={1000}
          />
        </div>
      </div>
    </section>
  );
};

export default VisaCounter;
