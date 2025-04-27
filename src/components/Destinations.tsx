import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const destinations = [
  {
    name: "Singapore",
    image:
      "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    description:
      "Explore the vibrant city-state with its futuristic architecture and rich cultural heritage.",
  },
  {
    name: "Dubai",
    image:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    description:
      "Experience luxury and adventure in the dazzling desert metropolis.",
  },
  {
    name: "Bangkok",
    image:
      "https://images.unsplash.com/photo-1508009603885-50cf7c579365?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    description:
      "Discover the perfect blend of tradition and modernity in Thailand's capital.",
  },
  {
    name: "Europe",
    image: "/lovable-uploads/Europe.png.jpg",
    description:
      "Explore the rich history, diverse cultures, and stunning landscapes of Europe.",
  },
];

const Destinations = () => {
  return (
    <section id="destinations" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-travel-dark-blue mb-4">
            Popular Destinations
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our curated selection of top travel destinations with
            exclusive packages and offers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {destinations.map((destination, index) => (
            <Card
              key={index}
              className="overflow-hidden group hover:shadow-lg transition-shadow"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <CardContent className="p-4">
                <h3 className="font-bold text-lg mb-2 text-travel-blue">
                  {destination.name}
                </h3>
                <p className="text-gray-600 text-sm">
                  {destination.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Destinations;
