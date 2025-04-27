import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  GraduationCap,
  Globe,
  BookOpen,
  ArrowRight,
  Sparkles,
  BookOpenCheck,
} from "lucide-react";

const Hero = () => {
  const [planes, setPlanes] = useState([]);
  const [clouds, setClouds] = useState([]);
  // const [isVisible, setIsVisible] = useState(false);
  const [firmNameWords, setFirmNameWords] = useState(["", ""]);
  // const [isHeroContentVisible, setIsHeroContentVisible] = useState(false);
  const [isIntroComplete, setIsIntroComplete] = useState(false);
  const [showFirmName, setShowFirmName] = useState(true);

  useEffect(() => {
    // Generate random airplane positions and animations
    const generatePlanes = () => {
      const newPlanes = [];
      const planeCount = window.innerWidth < 768 ? 2 : 4;

      for (let i = 0; i < planeCount; i++) {
        newPlanes.push({
          id: i,
          size: Math.random() * 20 + 30, // Size between 30-50px
          top: Math.random() * 70 + 5, // Position between 5-75% from top
          left: -10, // Start off-screen
          speed: Math.random() * 15 + 10, // Animation duration between 10-25s
          delay: i * 3, // Staggered delay
          rotate: Math.random() * 10 - 5, // Slight rotation between -5 and 5 degrees
          opacity: Math.random() * 0.4 + 0.6, // Opacity between 0.6-1
        });
      }

      setPlanes(newPlanes);
    };

    // Generate clouds with varied animations
    const generateClouds = () => {
      const newClouds = [];
      const cloudCount = window.innerWidth < 768 ? 4 : 7;

      for (let i = 0; i < cloudCount; i++) {
        newClouds.push({
          id: i,
          width: Math.random() * 150 + 80, // Width between 80-230px
          height: Math.random() * 60 + 40, // Height between 40-100px
          top: Math.random() * 80, // Position between 0-80% from top
          left: Math.random() * 80, // Position between 0-80% from left
          duration: Math.random() * 15 + 25, // Animation duration between 25-40s
          delay: Math.random() * 10, // Random delay up to 10s
          opacity: Math.random() * 0.4 + 0.5, // Opacity between 0.5-0.9
        });
      }

      setClouds(newClouds);
    };

    generatePlanes();
    generateClouds();

    // Timed sequence for intro animation with word-by-word appearance
    // const introSequence = () => {
    //   // Start the intro airplane
    //   setTimeout(() => {
    //     setIsIntroComplete(true);
    //   }, 100);

    //   // First word appears after 1.2s (faster)
    //   setTimeout(() => {
    //     setFirmNameWords(["Hasten", ""]);
    //   }, 1200);

    //   // Second word appears after 2s (faster)
    //   setTimeout(() => {
    //     setFirmNameWords(["Hasten", "Immigration"]);
    //   }, 2000);

    //   // After firm name fully appears, show the hero content after 1s
    //   setTimeout(() => {
    //     setIsHeroContentVisible(true);
    //     // Hide firm name when hero content appears
    //     setShowFirmName(false);
    //   }, 3500);

    //   // Finally, enable all other elements
    //   setTimeout(() => {
    //     setIsVisible(true);
    //   }, 4000);
    // };

    // introSequence();

    // Regenerate on window resize
    const handleResize = () => {
      generatePlanes();
      generateClouds();
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
      {/* Decorative Elements */}
      {/* <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 right-[10%] w-40 h-40 bg-blue-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-[5%] w-60 h-60 bg-indigo-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 left-[30%] w-80 h-80 bg-white/5 rounded-full blur-3xl"></div>
      </div> */}

      {/* Cloud Animation - Only visible after intro sequence */}
      {clouds.map((cloud) => (
        <div
          key={cloud.id}
          className="cloud animate-float-cloud"
          style={{
            width: `${cloud.width}px`,
            height: `${cloud.height}px`,
            top: `${cloud.top}%`,
            left: `${cloud.left}%`,
            animationDuration: `${cloud.duration}s`,
            animationDelay: `${cloud.delay}s`,
            opacity: cloud.opacity,
          }}
        />
      ))}

      {/* Multiple Airplane Animations - Only visible after intro */}
      {planes.map((plane) => (
        <div
          key={plane.id}
          className="absolute pointer-events-none"
          style={{
            top: `${plane.top}%`,
            left: `${plane.left}%`,
            width: `${plane.size}px`,
            height: `${plane.size}px`,
            opacity: plane.opacity,
            animation: `flyAcross ${plane.speed}s linear ${plane.delay}s infinite`,
            transform: `rotate(${plane.rotate}deg)`,
            zIndex: 10,
          }}
        >
          <img
            src="/lovable-uploads/demo.svg"
            alt="Airplane"
            className="w-full h-full object-contain"
          />
        </div>
      ))}

      {/* Intro Airplane Animation - Faster speed */}
      <div
        className={`absolute w-40 h-40 md:w-56 md:h-56 left-0 top-1/3 transform -translate-y-1/2 z-50 transition-opacity duration-500 ${
          isIntroComplete ? "opacity-100" : "opacity-0"
        }`}
      >
        <img
          src="/lovable-uploads/demo.svg"
          alt="Airplane"
          className="w-full h-full object-contain animate-intro-fly"
        />
      </div>

      {/* Firm Name Reveal - Word by word, hides when hero content appears */}
      {/* {showFirmName && (
        <div
          className={`absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 transition-all duration-1000`}
        >
          <div className="text-center">
            <h1 className="text-6xl md:text-8xl font-bold text-white drop-shadow-2xl font-playfair">
              {firmNameWords[0]}
            </h1>
            <h2 className="text-4xl md:text-6xl font-bold text-white/90 mt-2 overflow-hidden font-playfair">
              <span className="inline-block transition-all duration-500">
                {firmNameWords[1]}
              </span>
            </h2>
          </div>
        </div>
      )} */}

      <div className="container mx-auto h-full flex flex-col md:flex-row items-center justify-center px-4 pt-[100px] z-10 relative">
        {/* Left side with main content */}
        <div
          className={`md:w-1/2 text-center md:text-left transition-all duration-1000 transform ${
            // isHeroContentVisible
            "translate-x-0 opacity-100 animate-slide-up"
            // : "-translate-x-20 opacity-0"
          }`}
        >
          <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6 border border-white/20">
            <Sparkles className="h-4 w-4 text-blue-400 mr-2 animate-pulse" />
            <span className="text-white text-sm font-medium">
              Your Gateway to Global Education
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white leading-tight drop-shadow-lg font-playfair">
            Your Journey to{" "}
            <span className="bg-gradient-to-r from-indigo-400 to-blue-500 bg-clip-text text-transparent">
              International Success
            </span>
          </h1>

          <div className="h-1 w-20 bg-gradient-to-r from-indigo-400 to-white/80 mb-6 mx-auto md:mx-0 rounded-full"></div>

          <h2 className="text-xl md:text-2xl font-medium mb-6 text-white/90 drop-shadow-md">
            Expert IELTS & PTE Coaching | Study Visa Consultancy
          </h2>

          <p className="text-lg mb-8 text-white/80 max-w-xl leading-relaxed">
            Turn your international education dreams into reality with our
            specialized language coaching and visa expertise. We're with you at
            every step.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Button
              size="lg"
              className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white hover:from-indigo-700 hover:to-blue-700 border-none shadow-lg transition-all hover:shadow-xl hover:-translate-y-1"
            >
              <BookOpen className="mr-2 h-5 w-5" /> Language Programs
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/30 bg-white/5 backdrop-blur-sm text-white hover:bg-white/20 transition-all hover:-translate-y-1"
            >
              <GraduationCap className="mr-2 h-5 w-5" /> Visa Services
            </Button>
          </div>

          <div className="mt-10 flex items-center gap-3 justify-center md:justify-start bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20 inline-block animate-fade-in">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-4">
                <div className="flex -space-x-2">
                  {[
                    "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80", // Woman smiling
                    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80", // Man in henley
                    "https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80", // Woman in white shirt
                  ].map((url, i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden border-2 border-white"
                    >
                      <img
                        src={url}
                        alt={
                          i === 0
                            ? "Smiling woman"
                            : i === 1
                            ? "Man in henley top"
                            : "Woman in white shirt"
                        }
                        className="w-full h-full object-cover"
                        loading="lazy"
                        width="100"
                        height="100"
                      />
                    </div>
                  ))}
                </div>
                <div className="text-white text-sm">
                  <span className="font-bold text-blue-400">1000+</span>{" "}
                  successful visa applications
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right side with logo and decoration */}
        <div
          className={`md:w-1/2 flex justify-center items-center mt-10 md:mt-0 transition-all duration-1000 delay-300 transform ${
            // isHeroContentVisible
            "translate-x-0 opacity-100 animate-scale-in"
            // : "translate-x-20 opacity-0"
          }`}
        >
          <div className="relative perspective-effect">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/30 to-blue-400/20 blur-3xl rounded-full"></div>
            <div className="relative bg-white/10 backdrop-blur-xl p-8 rounded-2xl border border-white/20 shadow-2xl rotateY hover:shadow-blue-500/20 neo-blur">
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-indigo-600 rounded-full flex items-center justify-center shadow-lg border-4 border-gray-900">
                <GraduationCap className="h-8 w-8 text-white" />
              </div>

              <img
                src="/lovable-uploads/image.jpg"
                className="h-48 md:h-64 mx-auto object-contain drop-shadow-2xl"
              />

              <div className="mt-6 flex justify-center">
                <div className="flex items-center gap-2 bg-gradient-to-r from-gray-800 to-gray-900 px-5 py-3 rounded-full border border-white/20 shadow-inner">
                  <Globe className="h-5 w-5 text-blue-400 animate-spin-slow" />
                  <span className="font-medium text-white">
                    Your Success, Our Commitment
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Fixed WhatsApp Button */}
      {/* Animated WhatsApp Button */}
      <a
        href={import.meta.env.VITE_WHATSAPP}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-600 text-white p-4 rounded-full shadow-lg hover:bg-green-700 transition-all duration-300"
        aria-label="Chat on WhatsApp"
        style={{
          animation: "float 3s ease-in-out infinite",
          boxShadow: "0 5px 15px rgba(0, 0, 0, 0.3)",
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          className="bi bi-whatsapp"
          viewBox="0 0 16 16"
          style={{
            animation: "pulse 2s ease-in-out infinite",
          }}
        >
          <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
        </svg>
      </a>

      {/* Wave decoration at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-16 md:h-24">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="h-full w-full"
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            opacity=".25"
            className="fill-gray-800"
          ></path>
          <path
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
            opacity=".5"
            className="fill-gray-800"
          ></path>
          <path
            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
            className="fill-gray-900"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
