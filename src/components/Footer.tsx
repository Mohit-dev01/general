import React from "react";
import {
  Globe,
  Facebook,
  Instagram,
  Twitter,
  Book,
  GraduationCap,
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Globe className="h-6 w-6 text-indigo-400" />
              <h3 className="text-xl font-bold">
                {import.meta.env.VITE_CONSULTANCY_NAME}
              </h3>
            </div>
            <p className="text-gray-300 mb-4">
              Your trusted partner for IELTS & PTE coaching and study visa
              services. We make it happen!
            </p>
            <div className="flex space-x-4">
              <a
                href={import.meta.env.VITE_FACEBOOK}
                target="_blank"
                className="text-gray-300 hover:text-indigo-400 transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href={import.meta.env.VITE_INSTAGRAM}
                target="_blank"
                className="text-gray-300 hover:text-indigo-400 transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href={import.meta.env.VITE_TWITTER || ""}
                target="_blank"
                className="text-gray-300 hover:text-indigo-400 transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-indigo-400">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-indigo-400 transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-gray-300 hover:text-indigo-400 transition-colors"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-gray-300 hover:text-indigo-400 transition-colors"
                >
                  About Us
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-indigo-400">
              Services
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-indigo-400 transition-colors"
                >
                  IELTS Coaching
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-indigo-400 transition-colors"
                >
                  PTE Coaching
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-indigo-400 transition-colors"
                >
                  Study Visa
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-indigo-400 transition-colors"
                >
                  Immigration Consultation
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-indigo-400 transition-colors"
                >
                  Document Preparation
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-indigo-400">
              Contact Us
            </h3>
            <ul className="space-y-2">
              <li className="text-gray-300">
                <span className="font-medium block">Phone:</span>
                {import.meta.env.VITE_PHONE_NUMBER}
              </li>
              <li className="text-gray-300">
                <span className="font-medium block">Email:</span>
                <span className="max-w-[100px] truncate">
                  {" "}
                  {import.meta.env.VITE_EMAIL}
                </span>
              </li>
              <li className="text-gray-300">
                <span className="font-medium block">Address:</span>
                {import.meta.env.VITE_ADDRESS}
              </li>
              <li className="text-gray-300">
                <span className="font-medium block">Contact Person:</span>
                {import.meta.env.VITE_CONTACT_PERSON}
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-6 text-center text-gray-400">
          <p>
            © {currentYear} {import.meta.env.VITE_CONSULTANCY_NAME}. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
