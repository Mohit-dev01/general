import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const OwnerSection = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/4 right-[15%] w-40 h-40 bg-indigo-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-[10%] w-60 h-60 bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-playfair">
            Meet the{" "}
            <span className="bg-gradient-to-r from-indigo-400 to-blue-500 bg-clip-text text-transparent">
              Founder
            </span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-indigo-400 to-white/80 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            The vision and driving force behind our success
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-8 max-w-5xl mx-auto">
          <motion.div
            className="w-full md:w-2/5"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Card className="bg-white/5 backdrop-blur-md border border-white/10 overflow-hidden">
              <CardContent className="p-0">
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    alt="Founder"
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4 flex items-center gap-3">
                    <Avatar className="h-12 w-12 border-2 border-white">
                      <AvatarImage src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80" />
                      <AvatarFallback>SV</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="text-white font-semibold">Sanjay Verma</h3>
                      <p className="text-white/70 text-sm">
                        Founder & Director
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            className="w-full md:w-3/5"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Card className="bg-white/5 backdrop-blur-md border border-white/10 h-full">
              <CardContent className="p-6 md:p-8">
                <h3 className="text-2xl font-semibold text-white mb-4 font-playfair">
                  A Passion for Education
                </h3>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  With over 15 years of experience in international education
                  consulting, Sanjay Verma has helped thousands of students
                  achieve their dreams of studying abroad.
                </p>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  After completing his own education in the UK, Sanjay
                  recognized the challenges that international students face and
                  founded Hasten Immigration with a vision to provide
                  comprehensive support for students pursuing global
                  opportunities.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  "My mission is to guide students through every step of their
                  international education journey, from selecting the right
                  courses to ensuring a smooth visa process. I believe that
                  education knows no boundaries, and I'm committed to making
                  global opportunities accessible to all."
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <div className="bg-white/10 backdrop-blur-md px-3 py-1.5 rounded-full text-sm text-white">
                    IELTS Certified Trainer
                  </div>
                  <div className="bg-white/10 backdrop-blur-md px-3 py-1.5 rounded-full text-sm text-white">
                    Licensed Immigration Consultant
                  </div>
                  <div className="bg-white/10 backdrop-blur-md px-3 py-1.5 rounded-full text-sm text-white">
                    Education Policy Expert
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default OwnerSection;
