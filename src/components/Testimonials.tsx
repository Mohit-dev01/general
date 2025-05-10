import React, { useRef } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";

// Testimonial data
const testimonials = [
  {
    id: 1,
    name: "Ananya Singh",
    role: "Study Visa to Canada",
    rating: 5,
    text: "Hasten Immigration made my Canada study visa process incredibly smooth. Their expert guidance helped me secure admission to a top university and obtain my visa without any hassle.",
    image: null,
  },
  {
    id: 2,
    name: "Rahul Sharma",
    role: "IELTS Preparation",
    rating: 5,
    text: "The IELTS coaching at Hasten Immigration was exceptional. The personalized attention and practice sessions helped me achieve a band score of 7.5, exceeding my expectations!",
    image: null,
  },
  {
    id: 3,
    name: "Priya Patel",
    role: "UK Student Visa",
    rating: 5,
    text: "I'm extremely grateful to the team for their support throughout my UK visa application. Their attention to detail and thorough preparation made all the difference.",
    image: null,
  },
  {
    id: 4,
    name: "Amit Kumar",
    role: "PTE Success Story",
    rating: 5,
    text: "The PTE coaching program was tailored to address my weaknesses. The mock tests and feedback sessions were invaluable in helping me achieve a high score.",
    image: null,
  },
];

const Testimonials = () => {
  // Using useRef for plugin
  const autoplayPluginRef = useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  );

  return (
    <section
      id="testimonials"
      className="py-20 bg-gray-950 relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-indigo-900/20 rounded-full opacity-30 blur-3xl -z-10"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-900/10 rounded-full opacity-20 blur-3xl -z-10"></div>

      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h6 className="text-indigo-400 font-semibold uppercase tracking-wider mb-3 text-sm">
            Testimonials
          </h6>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            What Our <span className="text-indigo-400">Students</span> Say
          </h2>
          <div className="h-1 w-20 bg-indigo-500 mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-2xl mx-auto text-sm">
            Hear from our satisfied students who have successfully achieved
            their academic and immigration goals with our support.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
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
              {testimonials.map((testimonial) => (
                <CarouselItem key={testimonial.id}>
                  <Card className="mx-4 border-0 shadow-xl bg-gray-800/40 backdrop-blur-sm">
                    <CardContent className="p-8">
                      <div className="flex flex-col items-center text-center space-y-4">
                        <div className="w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center text-2xl font-bold text-white mb-2">
                          {testimonial.name.charAt(0)}
                        </div>
                        <div className="space-y-2">
                          <h3 className="text-white font-semibold text-lg">
                            {testimonial.name}
                          </h3>
                          <p className="text-indigo-400 text-sm">
                            {testimonial.role}
                          </p>
                          <div className="flex justify-center space-x-1 my-2">
                            {[...Array(testimonial.rating)].map((_, i) => (
                              <Star
                                key={i}
                                className="h-4 w-4 fill-yellow-500 text-yellow-500"
                              />
                            ))}
                          </div>
                          <p className="text-gray-300 text-sm italic">
                            "{testimonial.text}"
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-8">
              <CarouselPrevious className="mx-2" />
              <CarouselNext className="mx-2" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
