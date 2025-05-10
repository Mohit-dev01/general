import React from "react";
import { useRef } from "react";
import { Book, GraduationCap, ExternalLink } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

type University = {
  name: string;
  country: string;
  image: string;
};

const UniversityPartners = ({ limit }: { limit?: number }) => {
  // Use useRef instead of useState for the plugin
  const autoplayPluginRef = useRef(
    Autoplay({
      delay: 3000,
      stopOnInteraction: false,
      stopOnMouseEnter: true,
    })
  );

  // List of university partners matching the website
  const universities: University[] = [
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

  // Display all universities or limit to the specified number
  const displayedUniversities = limit
    ? universities.slice(0, limit)
    : universities;

  return (
    <section id="university-partners" className="py-16 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <GraduationCap className="h-10 w-10 text-indigo-400" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-4 text-white">
            Our University Partners
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            We work with prestigious universities around the world to provide
            you with the best education opportunities.
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[autoplayPluginRef.current]}
          className="w-full"
          onMouseEnter={() => {
            if (autoplayPluginRef.current && autoplayPluginRef.current.stop) {
              autoplayPluginRef.current.stop();
            }
          }}
          onMouseLeave={() => {
            if (autoplayPluginRef.current && autoplayPluginRef.current.reset) {
              autoplayPluginRef.current.reset();
            }
          }}
        >
          <CarouselContent>
            {displayedUniversities.map((university, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-2 h-full">
                  <div className="bg-gray-800 rounded-lg overflow-hidden h-full shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
                    <div className="h-40 overflow-hidden">
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
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-2 bg-indigo-500 text-white hover:bg-indigo-600 border-none" />
          <CarouselNext className="right-2 bg-indigo-500 text-white hover:bg-indigo-600 border-none" />
        </Carousel>

        <div className="mt-10 text-center">
          <p className="text-gray-300 flex items-center justify-center gap-2 mb-6">
            <Book className="h-5 w-5 text-indigo-400" />
            <span>Partner with over 100+ universities worldwide</span>
          </p>

          {limit && (
            <Link to="/universities" className="inline-block">
              <Button
                variant="outline"
                className="bg-indigo-600 hover:bg-indigo-700 text-white border-none transition-all duration-300"
              >
                View More Universities <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          )}
        </div>
      </div>
    </section>
  );
};

export default UniversityPartners;
