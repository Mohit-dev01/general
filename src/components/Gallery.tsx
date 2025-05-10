import React, { useRef } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Image } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";

// Gallery images data
const galleryImages = [
  {
    id: 1,
    src: "/lovable-uploads/education.jpg",
    alt: "Education Counseling",
    caption: "Expert Education Counseling",
  },
  {
    id: 2,
    src: "/lovable-uploads/image.jpg",
    alt: "Visa Services",
    caption: "Professional Visa Services",
  },
  {
    id: 3,
    src: "/lovable-uploads/1693ab77-ea12-4db8-9d38-c96773cba941.png",
    alt: "Student Success",
    caption: "Student Success Stories",
  },
  {
    id: 4,
    src: "/lovable-uploads/d356749d-66ec-4372-91d3-d45c4a6b7567.png",
    alt: "Immigration Consultation",
    caption: "Immigration Consultation",
  },
];

const Gallery = () => {
  // Using useRef instead of React.useRef for consistency
  const autoplayPluginRef = useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  );

  return (
    <section
      id="gallery"
      className="py-20 bg-gray-900 relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-900/20 rounded-full opacity-30 blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-900/10 rounded-full opacity-20 blur-3xl -z-10"></div>

      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h6 className="text-indigo-400 font-semibold uppercase tracking-wider mb-3 text-sm">
            Our Gallery
          </h6>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Explore Our <span className="text-indigo-400">Success Stories</span>
          </h2>
          <div className="h-1 w-20 bg-indigo-500 mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-2xl mx-auto text-sm">
            Take a glimpse at our achievements and milestones through our
            gallery showcasing our successful students and events.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <Carousel
            opts={{
              loop: true,
              align: "center",
            }}
            plugins={[autoplayPluginRef.current]}
            className="w-full"
            onMouseEnter={() => {
              if (autoplayPluginRef.current && autoplayPluginRef.current.stop) {
                autoplayPluginRef.current.stop();
              }
            }}
            onMouseLeave={() => {
              if (
                autoplayPluginRef.current &&
                autoplayPluginRef.current.reset
              ) {
                autoplayPluginRef.current.reset();
              }
            }}
          >
            <CarouselContent>
              {galleryImages.map((image) => (
                <CarouselItem
                  key={image.id}
                  className="md:basis-1/2 lg:basis-1/3"
                >
                  <div className="p-1">
                    <Card className="bg-gray-800 border-gray-700 overflow-hidden">
                      <CardContent className="p-0">
                        <div className="h-64 relative group">
                          {image.src ? (
                            <img
                              src={image.src}
                              alt={image.alt}
                              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                            />
                          ) : (
                            <div className="h-full w-full flex items-center justify-center bg-gray-700">
                              <Image className="h-16 w-16 text-gray-500" />
                            </div>
                          )}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                            <p className="text-white text-sm font-medium">
                              {image.caption}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2" />
            <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
