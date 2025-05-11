import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import VisaCounter from "@/components/VisaCounter";
import About from "@/components/About";
import Gallery from "@/components/Gallery";
import UniversityPartners from "@/components/UniversityPartners";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Instagram from "@/components/Instagram";

const Index = () => {
  // Add scroll animation effects
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-slide-up");
            entry.target.classList.add("opacity-100");
          }
        });
      },
      { threshold: 0.1 }
    );

    // Target all sections except Hero (which has its own animations)
    const sections = document.querySelectorAll(".animate-on-scroll");
    sections.forEach((section) => {
      section.classList.add("opacity-0");
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <motion.div
      className="min-h-screen bg-gray-950 text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
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
        <Gallery />
      </div>
      <div className="animate-on-scroll">
        {/* Show only 6 universities on the homepage */}
        <UniversityPartners limit={6} />
      </div>
      <div className="animate-on-scroll">
        <Testimonials />
      </div>
      <div className="animate-on-scroll">
        <Instagram />
      </div>
      <div className="animate-on-scroll">
        <Contact />
      </div>
      <Footer />
    </motion.div>
  );
};

export default Index;
