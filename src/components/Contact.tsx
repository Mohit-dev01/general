import React from "react";
import {
  Phone,
  Mail,
  MapPin,
  GraduationCap,
  Globe,
  Send,
  Clock,
  User,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-20 px-4 bg-gray-900 relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-900/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-600/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-60 h-60 bg-indigo-500/5 rounded-full blur-3xl"></div>

      {/* Floating elements */}
      <div className="absolute w-8 h-8 bg-indigo-600/20 rounded-full top-20 left-[20%] animate-float"></div>
      <div
        className="absolute w-5 h-5 bg-indigo-400/30 rounded-full top-32 left-[70%] animate-float"
        style={{ animationDelay: "1s" }}
      ></div>
      <div
        className="absolute w-10 h-10 bg-indigo-500/10 rounded-full bottom-32 left-[10%] animate-float"
        style={{ animationDelay: "2s" }}
      ></div>
      <div
        className="absolute w-6 h-6 bg-indigo-600/20 rounded-full bottom-20 right-[20%] animate-float"
        style={{ animationDelay: "1.5s" }}
      ></div>

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16 animate-slide-up">
          <span className="inline-block px-4 py-1 bg-indigo-900/30 backdrop-blur-sm rounded-full text-indigo-400 font-medium text-xs mb-3">
            Get in Touch
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 drop-shadow-md">
            Contact Us
          </h2>
          <div className="h-1 w-20 bg-indigo-500 mx-auto mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm">
            Have questions about IELTS, PTE or study visa applications? Our
            expert consultants are here to help you achieve your goals.
          </p>
        </div>

        <div className="flex justify-center">
          <Card className="max-w-4xl w-full p-0 glass-effect card-hover animate-scale-in bg-gradient-to-br from-gray-800/70 to-gray-900/90 backdrop-blur-xl border border-gray-800 overflow-hidden">
            <div className="grid md:grid-cols-5">
              {/* Left info panel */}
              <div className="p-8 md:col-span-2 bg-gradient-to-br from-gray-800 to-gray-900 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-indigo-600 via-indigo-900 to-transparent"></div>

                <div className="flex justify-center mb-8">
                  <div className="w-20 h-20 rounded-full bg-indigo-900/20 flex items-center justify-center animate-pulse-slow relative backdrop-blur-sm">
                    <GraduationCap className="h-10 w-10 text-indigo-400" />
                    <div className="absolute inset-0 border-2 border-indigo-500/50 rounded-full animate-ping-slow opacity-50"></div>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-8 text-center relative">
                  <span className="bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
                    {import.meta.env.VITE_CONSULTANCY_NAME}
                  </span>
                </h3>

                <div className="space-y-8 relative">
                  <div className="flex items-start">
                    <div className="w-12 h-12 rounded-full bg-indigo-900/20 flex items-center justify-center mr-4 shadow-inner border border-gray-700">
                      <Phone className="h-5 min-w-[48px] text-indigo-400" />
                    </div>
                    <div>
                      <h4 className="font-medium text-white text-sm">Phone</h4>
                      <p className="text-gray-400 mt-1 text-sm">
                        {" "}
                        {import.meta.env.VITE_PHONE_NUMBER}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-12 h-12 rounded-full bg-indigo-900/20 flex items-center justify-center mr-4 shadow-inner border border-gray-700">
                      <Mail className="h-5 min-w-[48px] text-indigo-400" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-medium text-white text-sm">Email</h4>
                      <p className="text-gray-400 mt-1 text-sm break-all">
                        {import.meta.env.VITE_EMAIL}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-12 h-12 rounded-full bg-indigo-900/20 flex items-center justify-center mr-4 shadow-inner border border-gray-700">
                      <MapPin className="h-5 min-w-[48px] text-indigo-400" />
                    </div>
                    <div>
                      <h4 className="font-medium text-white text-sm">
                        Address
                      </h4>
                      <p className="text-gray-400 mt-1 text-sm">
                        {import.meta.env.VITE_ADDRESS}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right contact form */}
              <div className="p-8 md:col-span-3 bg-gray-850/50 backdrop-blur-md">
                <h3 className="text-xl font-bold text-white mb-6">
                  Send us a message
                </h3>

                <form className="space-y-5">
                  <div>
                    <label className="block text-gray-400 mb-2 text-xs">
                      Your Name
                    </label>
                    <div className="relative">
                      <span className="absolute inset-y-0 left-3 flex items-center text-gray-500">
                        <User className="h-4 w-4" />
                      </span>
                      <input
                        type="text"
                        className="w-full bg-gray-800/60 border border-gray-700 rounded-lg py-3 px-10 text-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-transparent"
                        placeholder="John Doe"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-400 mb-2 text-xs">
                      Email Address
                    </label>
                    <div className="relative">
                      <span className="absolute inset-y-0 left-3 flex items-center text-gray-500">
                        <Mail className="h-4 w-4" />
                      </span>
                      <input
                        type="email"
                        className="w-full bg-gray-800/60 border border-gray-700 rounded-lg py-3 px-10 text-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-transparent"
                        placeholder="example@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-400 mb-2 text-xs">
                      Service Interest
                    </label>
                    <div className="relative">
                      <span className="absolute inset-y-0 left-3 flex items-center text-gray-500">
                        <Globe className="h-4 w-4" />
                      </span>
                      <select className="w-full bg-gray-800/60 border border-gray-700 rounded-lg py-3 px-10 text-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-transparent appearance-none">
                        <option className="bg-gray-800">IELTS Coaching</option>
                        <option className="bg-gray-800">PTE Coaching</option>
                        <option className="bg-gray-800">Study Visa</option>
                        <option className="bg-gray-800">
                          Immigration Consultation
                        </option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-400 mb-2 text-xs">
                      Your Message
                    </label>
                    <div className="relative">
                      <textarea
                        className="w-full bg-gray-800/60 border border-gray-700 rounded-lg py-3 px-4 text-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-transparent min-h-[120px]"
                        placeholder="How can we help you?"
                      ></textarea>
                    </div>
                  </div>

                  <Button className="w-full bg-gradient-to-r from-indigo-500 to-indigo-600 hover:from-indigo-600 hover:to-indigo-700 text-white font-medium py-3 rounded-lg shadow-lg hover:shadow-indigo-500/20 transition-all text-sm">
                    <Send className="h-4 w-4 mr-2" /> Send Message
                  </Button>
                </form>

                <div className="mt-6 pt-6 border-t border-gray-700/50 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="flex items-center text-white w-full sm:w-auto">
                    <Clock className="h-4 w-4 text-gray-500 mr-2" />
                    <span className="text-xs">Response within 24 hours</span>
                  </div>

                  <div className="text-gray-400 w-full sm:w-auto text-center sm:text-right">
                    <span className="font-medium block text-white text-xs">
                      Contact Person:
                    </span>
                    <p className="text-xs">
                      {import.meta.env.VITE_CONTACT_PERSON}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
