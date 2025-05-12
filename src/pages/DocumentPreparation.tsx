import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ChevronDown } from "lucide-react";

const DocumentPreparation = () => {
  const [selectedCountry, setSelectedCountry] = useState("australia");

  // Country data
  const countries = {
    australia: {
      name: "Australia",
      standard: [
        "Completed online application form",
        "One recent photograph (2x2 inches)",
        "Current original passport (valid for at least 6 months with 2 blank pages)",
        "Appointment letter (if submitting in person)",
        "Proof of payment (EFT, credit card, or money order)",
      ],
      additional: [
        "Original admission letter from an Australian educational institution",
        "Proof of financial standing (bank statements, sponsor's letter if applicable)",
        "For minors: Birth certificate, parents' passport copies, consent letter",
        "For dual nationals: Additional documents like FORM-D (if applicable)",
      ],
    },
    sweden: {
      name: "Sweden",
      standard: [
        "Completed and signed visa application form",
        "One recent color photograph (white background)",
        "Valid passport (valid for 3 months beyond visa expiry)",
        "Previous passport (covering last 7 years) or movement certificate",
        "Photocopies of biometric pages and Schengen visas (last 3 years)",
      ],
      additional: [
        "Letter of admission from a Swedish institution",
        "Proof of financial means (bank statements, scholarship letter)",
        "Accommodation proof (address in Sweden)",
        "Round-trip ticket reservation",
        "Travel medical insurance (minimum €30,000 coverage)",
      ],
    },
    switzerland: {
      name: "Switzerland",
      standard: [
        "Valid passport (issued within last 10 years, 3 months validity post-return)",
        "4 passport-sized photos (white background)",
        "3 completed and signed visa application forms",
        "Personal cover letter (study purpose, future plans)",
        "Curriculum Vitae (2 copies)",
      ],
      additional: [
        "Acceptance letter from Swiss institution",
        "Proof of tuition fee payment (if applicable)",
        "Academic certificates (secondary, university, language certificates like TOEFL/IELTS)",
        "Financial proof (sponsor's letter, bank statements, ITR for last 2 years)",
      ],
    },
    newzealand: {
      name: "New Zealand",
      standard: [
        "Offer of place from a NZ education provider",
        "Passport bio-data page copy",
        "Proof of tuition fee payment or funds availability",
        "Proof of living costs (NZD 20,000/year for tertiary, 17,000/year for school)",
      ],
      additional: [
        "Cover letter (study plan, funding source)",
        "Academic transcripts and English test results (if applicable)",
        "Health and character certificates (if required)",
        "For minors: Accommodation compliance statement from education provider",
      ],
    },
    malta: {
      name: "Malta",
      standard: [
        "Completed and signed application form",
        "One recent passport-sized photo",
        "Valid passport (3 months validity post-stay, 3 blank pages)",
        "Travel medical insurance (€30,000 coverage)",
      ],
      additional: [
        "Letter of acceptance from Maltese institution (course details, fees)",
        "Proof of sufficient funds (75% of national minimum wage/month)",
        "Proof of accommodation (hotel booking, lease, or institution-provided)",
        "Proof of tuition fee payment (varies by course cost)",
      ],
    },
    lithuania: {
      name: "Lithuania",
      standard: [
        "Completed online application form",
        "Valid passport (3 months validity post-stay, 2 blank pages)",
        "One recent photo (3.5x4.5 cm)",
        "Travel medical insurance (€30,000 coverage)",
      ],
      additional: [
        "Letter of mediation from Lithuanian institution",
        "Admission letter from higher education institution",
        "Proof of financial means (€277/month for living, €555 for return)",
        "Proof of accommodation (campus reservation or private)",
      ],
    },
    latvia: {
      name: "Latvia",
      standard: [
        "Completed long-stay visa application form",
        "One recent photo (35x45 mm)",
        "Valid passport (3 months validity post-stay, 2 blank pages)",
      ],
      additional: [
        "Invitation from Latvian educational institution (approved by OCMA)",
        "Signed study agreement",
        "Proof of residence in Latvia",
        "Bank statements (last 3 months) and ITR (last 3 years)",
      ],
    },
    germany: {
      name: "Germany",
      standard: [
        "Valid passport (issued within last 10 years, 1 year validity)",
        "2 copies of completed application form and declaration",
        "3 passport-sized photos (biometric)",
      ],
      additional: [
        "Conditional offer letter from German institution (in English/German)",
        "Proof of language proficiency (B2 level if no preparatory course)",
        "Proof of financial means (blocked account with €10,356/year)",
        "Travel health insurance (valid until university enrollment)",
      ],
    },
    czechrepublic: {
      name: "Czech Republic",
      standard: [
        "Completed and signed application form",
        "Valid passport (3 months validity post-stay, 2 blank pages)",
        "2 recent passport-sized photos",
        "Travel medical insurance (€30,000 coverage)",
      ],
      additional: [
        "Certificate of admission from Czech institution",
        "Proof of financial means (bank statements, ITR for last 2 years)",
        "Proof of accommodation (campus reservation or private)",
      ],
    },
    finland: {
      name: "Finland",
      standard: [
        "Completed Schengen visa application form",
        "Recent passport-sized photo (ICAO standards)",
        "Valid passport (3 months validity post-stay, 2 blank pages)",
      ],
      additional: [
        "Invitation letter from Finnish institution",
        "Proof of enrollment (for students)",
        "Proof of accommodation and funds (bank statements for last 3 months)",
        "Travel medical insurance (€30,000 coverage)",
      ],
    },
  };

  // Get the first country key for default open accordion
  const firstCountryKey = Object.keys(countries)[0];

  return (
    <motion.div
      className="min-h-screen bg-gray-950 text-white pt-24 pb-16"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 font-playfair">
            Document{" "}
            <span className="bg-gradient-to-r from-indigo-400 to-blue-500 bg-clip-text text-transparent">
              Preparation
            </span>
          </h1>
          <div className="h-1 w-20 bg-gradient-to-r from-indigo-400 to-white/80 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Comprehensive guide to the documents required for study visa
            applications to various countries. Expand each country below to view
            their specific document requirements.
          </p>
        </div>

        <div className="grid gap-6">
          <Accordion
            type="single"
            collapsible
            className="w-full"
            defaultValue={firstCountryKey}
          >
            {Object.entries(countries).map(([key, country]) => (
              <AccordionItem
                key={key}
                value={key}
                className="bg-gray-900/60 border border-gray-800 rounded-lg mb-4 overflow-hidden"
              >
                <AccordionTrigger className="px-6 py-4 text-xl font-medium text-indigo-400 hover:text-indigo-300 hover:no-underline">
                  <div className="flex items-center">
                    <span>{country.name}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Standard Documents */}
                    <Card className="bg-gray-800/40 border border-gray-800">
                      <CardContent className="p-6">
                        <h3 className="text-lg font-bold mb-4 text-indigo-400">
                          Standard Documents
                        </h3>
                        <ul className="space-y-2">
                          {country.standard.map((doc, index) => (
                            <li
                              key={index}
                              className="text-gray-300 flex items-start"
                            >
                              <span className="inline-block w-1.5 h-1.5 bg-indigo-400 rounded-full mt-2 mr-2"></span>
                              {doc}
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>

                    {/* Additional Documents */}
                    <Card className="bg-gray-800/40 border border-gray-800">
                      <CardContent className="p-6">
                        <h3 className="text-lg font-bold mb-4 text-indigo-400">
                          Additional Documents
                        </h3>
                        <ul className="space-y-2">
                          {country.additional.map((doc, index) => (
                            <li
                              key={index}
                              className="text-gray-300 flex items-start"
                            >
                              <span className="inline-block w-1.5 h-1.5 bg-indigo-400 rounded-full mt-2 mr-2"></span>
                              {doc}
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="mt-12 bg-gray-900/60 border border-gray-800 rounded-lg p-6">
          <h3 className="text-xl font-bold mb-4 text-indigo-400">
            Need Help with Document Preparation?
          </h3>
          <p className="text-gray-300 mb-4">
            Our team of experts can guide you through the entire document
            preparation process, ensuring that your application meets all
            requirements for your destination country.
          </p>
          <div className="flex flex-col md:flex-row gap-4 mt-6">
            <a
              href="#contact"
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-md text-center transition-colors"
            >
              Contact Us
            </a>
            <a
              href={`${import.meta.env.VITE_PHONE_NUMBER}`}
              className="bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-md text-center transition-colors"
            >
              Call Now
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default DocumentPreparation;
