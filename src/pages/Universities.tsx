import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { GraduationCap, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";

const Universities = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  // List of university partners matching the website
  const universities = [
    {
      name: "IUKL Malaysia",
      country: "Malaysia",
      image:
        "https://images.unsplash.com/photo-1496307653780-42ee777d4833?auto=format&fit=crop&w=300&h=200",
    },
    {
      name: "Binary University",
      country: "Malaysia",
      image:
        "https://images.unsplash.com/photo-1431576901776-e539bd916ba2?auto=format&fit=crop&w=300&h=200",
    },
    {
      name: "UCSI University",
      country: "Malaysia",
      image:
        "https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?auto=format&fit=crop&w=300&h=200",
    },
    {
      name: "Asia Pacific University",
      country: "Malaysia",
      image:
        "https://images.unsplash.com/photo-1459767129954-1b1c1f9b9ace?auto=format&fit=crop&w=300&h=200",
    },
    {
      name: "Sunway University",
      country: "Malaysia",
      image:
        "https://images.unsplash.com/photo-1460574283810-2aab119d8511?auto=format&fit=crop&w=300&h=200",
    },
    {
      name: "Widad University",
      country: "Malaysia",
      image:
        "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=300&h=200",
    },
    {
      name: "Taylor University",
      country: "Malaysia",
      image:
        "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=300&h=200",
    },
    {
      name: "MAHSA University",
      country: "Malaysia",
      image:
        "https://images.unsplash.com/photo-1492321936769-b49830bc1d1e?auto=format&fit=crop&w=300&h=200",
    },
    {
      name: "HELP University",
      country: "Malaysia",
      image:
        "https://images.unsplash.com/photo-1551038247-3d9af20df552?auto=format&fit=crop&w=300&h=200",
    },
    {
      name: "SEGi University",
      country: "Malaysia",
      image:
        "https://images.unsplash.com/photo-1524230572899-a752b3835840?auto=format&fit=crop&w=300&h=200",
    },
    {
      name: "MultiMedia University",
      country: "Malaysia",
      image:
        "https://images.unsplash.com/photo-1466442929976-97f336a657be?auto=format&fit=crop&w=300&h=200",
    },
  ];

  // Animation variants for the container
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  // Animation variants for each university card
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <motion.div
      className="min-h-screen bg-gray-950 text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Navbar />

      {/* Hero section for universities page */}
      <motion.div
        className="bg-gray-900 py-20 relative"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-900/20 rounded-full opacity-30 blur-3xl -z-10"></div>
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Our University <span className="text-indigo-400">Partners</span>
            </h1>
            <p className="text-gray-300 mb-8">
              Explore our comprehensive list of partner universities offering
              world-class education opportunities across various disciplines.
            </p>
            <Link
              to="/"
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-md transition-all duration-300"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </motion.div>

      {/* University Grid Layout */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <div className="flex items-center justify-center gap-2 mb-4">
              <GraduationCap className="h-10 w-10 text-indigo-400" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-4 text-white">
              Top University Partners
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              We have partnered with prestigious universities worldwide to offer
              you quality education and excellent career opportunities.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {universities.map((university, index) => (
              <motion.div
                key={index}
                className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
                variants={itemVariants}
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={university.image}
                    alt={university.name}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-bold text-white mb-1">
                    {university.name}
                  </h3>
                  <p className="text-indigo-400">{university.country}</p>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-gray-400 text-sm flex items-center">
                      <BookOpen className="h-4 w-4 mr-1" />
                      Multiple Programs
                    </span>
                    <a
                      href="#"
                      className="text-indigo-400 hover:text-indigo-300 text-sm"
                    >
                      Learn more
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="mt-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
          >
            <p className="text-gray-300 mb-6">
              Want to learn more about our university partnerships and available
              programs?
            </p>
            <Link
              to="/"
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-md transition-all duration-300"
            >
              Contact Us For Details
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </motion.div>
  );
};

export default Universities;
