import React from "react";
import {
  CheckCircle,
  GraduationCap,
  Globe,
  BookOpen,
  Target,
  Award,
  Clock,
} from "lucide-react";

const aboutPoints = [
  {
    text: "Expert coaching for IELTS & PTE examinations",
    icon: BookOpen,
  },
  {
    text: "Personalized study plans tailored to your learning style",
    icon: Target,
  },
  {
    text: "Dedicated consultants for study visa applications",
    icon: GraduationCap,
  },
  {
    text: "High success rate for visa approvals",
    icon: Award,
  },
  {
    text: "Comprehensive support throughout your application journey",
    icon: Clock,
  },
];

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-900/20 rounded-full opacity-30 blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-900/10 rounded-full opacity-20 blur-3xl -z-10"></div>

      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h6 className="text-indigo-400 font-semibold uppercase tracking-wider mb-3 text-sm">
            About Us
          </h6>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Your Trusted Education{" "}
            <span className="text-indigo-400">Partner</span>
          </h2>
          <div className="h-1 w-20 bg-indigo-500 mx-auto mb-6"></div>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <div className="relative">
              <div className="w-full h-[450px] bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl overflow-hidden shadow-2xl">
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-indigo-400 via-indigo-700 to-transparent"></div>
                <img
                  src="/lovable-uploads/education.jpg"
                  alt="Hasten Immigration"
                  className="w-full h-full object-contain p-6 hover:scale-105 transition-transform duration-700"
                />
              </div>

              <div className="absolute -bottom-8 -right-8 bg-gray-800 p-5 rounded-xl shadow-xl border border-gray-700 transform rotate-3 hover:rotate-0 transition-transform duration-300">
                <div className="flex items-center gap-3 text-white">
                  <div className="w-12 h-12 bg-indigo-900/50 rounded-lg flex items-center justify-center text-indigo-400">
                    <GraduationCap className="h-6 w-6" />
                  </div>
                  <div>
                    <span className="font-bold block">
                      Certified Consultants
                    </span>
                    <span className="text-sm text-gray-400">
                      Expert Guidance
                    </span>
                  </div>
                </div>
              </div>

              <div className="absolute -top-6 -left-6 bg-indigo-600 p-4 rounded-lg shadow-lg transform -rotate-6 hover:rotate-0 transition-transform duration-300">
                <div className="text-white font-bold">
                  1000+{" "}
                  <span className="block text-sm font-medium">
                    Success Stories
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              About{" "}
              <span className="text-indigo-400">
                {import.meta.env.VITE_CONSULTANCY_NAME}
              </span>
            </h2>
            <div className="h-1 w-20 bg-indigo-500 mb-6"></div>

            <p className="text-gray-300 mb-6 leading-relaxed text-sm">
              {import.meta.env.VITE_CONSULTANCY_NAME} is a premier education and
              visa consulting firm specializing in IELTS & PTE coaching and
              study visa services. With our expert team of language trainers and
              visa consultants, we help students achieve their dreams of
              studying abroad.
            </p>

            <p className="text-gray-300 mb-8 leading-relaxed text-sm">
              Our mission is to provide comprehensive support throughout your
              language learning and visa application journey. We pride ourselves
              on our personalized approach and high success rate in helping
              students secure their visas.
            </p>

            <div className="space-y-5">
              {aboutPoints.map((point, index) => (
                <div
                  key={index}
                  className="flex items-start p-4 rounded-lg hover:bg-gray-800 transition-colors group"
                >
                  <div className="bg-indigo-900/30 p-2 rounded-lg mr-4 text-indigo-400 group-hover:bg-indigo-800 group-hover:text-white transition-colors">
                    <point.icon className="h-5 w-5" />
                  </div>
                  <p className="text-gray-300 font-medium text-sm">
                    {point.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
