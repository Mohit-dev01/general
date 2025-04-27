
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  GraduationCap,
  FileText,
  Globe,
  Book,
  UsersRound,
  FileCheck,
} from "lucide-react";

const serviceItems = [
  {
    title: "IELTS Coaching",
    description:
      "Professional coaching to help you achieve your target IELTS score",
    icon: Book,
  },
  {
    title: "PTE Coaching",
    description: "Expert guidance for PTE Academic test preparation",
    icon: Book,
  },
  {
    title: "Study Visa",
    description: "Comprehensive assistance for international study visas",
    icon: GraduationCap,
  },
  {
    title: "Immigration Consultation",
    description: "Expert advice on immigration pathways and procedures",
    icon: UsersRound,
  },
  {
    title: "Document Preparation",
    description: "Professional assistance with visa documentation",
    icon: FileText,
  },
  {
    title: "Application Processing",
    description: "End-to-end support for visa application submission",
    icon: FileCheck,
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 px-4 bg-gray-950">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-indigo-400 mb-4">
            Our Services
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm">
            We offer specialized services in language coaching and visa processing to help you achieve your international education and immigration goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceItems.map((service, index) => (
            <Card
              key={index}
              className="hover:shadow-lg transition-shadow overflow-hidden group bg-gray-900 border-gray-800"
            >
              <CardHeader>
                <div className="w-12 h-12 bg-indigo-900/30 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="text-indigo-400" />
                </div>
                <CardTitle className="text-white text-lg">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-400 text-sm">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
