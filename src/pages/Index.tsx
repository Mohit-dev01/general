
import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import VisaCounter from "@/components/VisaCounter";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  // Add scroll animation effects
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-slide-up');
          entry.target.classList.add('opacity-100');
        }
      });
    }, { threshold: 0.1 });

    // Target all sections except Hero (which has its own animations)
    const sections = document.querySelectorAll('.animate-on-scroll');
    sections.forEach(section => {
      section.classList.add('opacity-0');
      observer.observe(section);
    });

    return () => {
      sections.forEach(section => observer.unobserve(section));
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <Navbar />
      <Hero />
      <div className="animate-on-scroll">
        <Services />
      </div>
      <div className="animate-on-scroll">
        <VisaCounter />
      </div>
      <div className="animate-on-scroll">
        <About />
      </div>
      <div className="animate-on-scroll">
        <Contact />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
