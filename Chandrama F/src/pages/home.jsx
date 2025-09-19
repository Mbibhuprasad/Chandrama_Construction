import React, { useState, useEffect } from "react";
import Hero from "./homeContent/hero";
import PropertyCard from "../components/PropertyCard";
import SearchBar from "./homeContent/search";
import PropertiesSection from "./homeContent/PropertiesSection";
import ServicesSection from "./homeContent/ServicesSection";
import TestimonialsSection from "./homeContent/TestimonialsSection";
import { useProperty } from "../context/PropertyContext";

const Home = () => {
  // const [filteredProperties, setFilteredProperties] = useState([]);
  const [activeFilter, setActiveFilter] = useState("all");

  const { filteredProperties, loading, error, filterProperties } = useProperty();

  const handleSearch = (filters) => {
    console.log("Search filters:", filters);
    filterProperties(filters);
  };

  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
    
    if (filter === "all") {
      filterProperties({}); // Reset filters to show all
    } else {
      // You might need to adjust this based on your property data structure
      // For example, if you have a 'status' field in your plots
      filterProperties({ status: filter });
    }
  };

  // const properties = [
  //   {
  //     id: "1235013",
  //     title: "1400 Sqft Residential Land For Buy",
  //     location: "Kantabad, Bhubaneswar",
  //     area: 1400,
  //     width: 30,
  //     breadth: 46,
  //     price: 26,
  //     status: "buy",
  //     type: "residential",
  //     bedrooms: 3,
  //     bathrooms: 2,
  //     description:
  //       "BRUKSHYA VIHAR - A Gated Community Project with Nature & Highway",
  //     contact: "8144091440",
  //     features: ["Gated Community", "Park", "Water Supply", "Power Backup"],
  //     image: "data:image/jpeg;base64,...",
  //   },
  //   {
  //     id: "1235008",
  //     title: "1500 Sqft Residential Land For Buy",
  //     location: "Benapanjari, Jatani, Odisha",
  //     area: 1500,
  //     width: 30,
  //     breadth: 50,
  //     price: 10.48,
  //     status: "buy",
  //     type: "residential",
  //     bedrooms: 4,
  //     bathrooms: 3,
  //     description:
  //       "DHARITRI VIHAR - A Gated Community Project with Nature & Highway",
  //     contact: "8144091440",
  //     features: ["Near Highway", "Security", "Garden", "Shopping Center"],
  //     image: "data:image/jpeg;base64,...",
  //   },
  //   {
  //     id: "1235009",
  //     title: "1200 Sqft Apartment For Rent",
  //     location: "Nayapalli, Bhubaneswar",
  //     area: 1200,
  //     width: 0,
  //     breadth: 0,
  //     price: 15,
  //     status: "rent",
  //     type: "apartment",
  //     bedrooms: 2,
  //     bathrooms: 2,
  //     description: "Modern apartment with amenities in prime location",
  //     contact: "8144091440",
  //     features: ["Furnished", "Swimming Pool", "Gym", "24/7 Security"],
  //     image: "data:image/jpeg;base64,...",
  //   },
  // ];

  return (
    <div className="bg-gradient-to-b from-blue-50 to-white min-h-screen">
      <Hero />

      <div className="max-w-7xl mx-auto mt-6 px-4">
        <SearchBar onSearch={handleSearch} />
      </div>

      {/* Property Listings Section */}
      <section className="py-12 max-w-7xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-800">
            Featured Properties
          </h2>
          <p className="text-gray-600 mt-2">
            Discover our handpicked selection of premium properties
          </p>

          {/* Filter Tabs */}
          <div className="flex justify-center mt-6 space-x-4">
            {["all", "buy", "rent"].map((filter) => (
              <button
                key={filter}
                onClick={() => handleFilterChange(filter)}
                className={`px-4 py-2 rounded-full transition-colors ${
                  activeFilter === filter
                    ? "bg-blue-600 text-white"
                    : "bg-white text-gray-600 hover:bg-blue-50"
                }`}
              >
                {filter === "all"
                  ? "All Properties"
                  : filter === "buy"
                  ? "For Sale"
                  : "For Rent"}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProperties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>

        {filteredProperties.length === 0 && (
          <div className="text-center py-12">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-16 w-16 mx-auto text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <h3 className="text-xl font-semibold text-gray-700 mt-4">
              No properties found
            </h3>
            <p className="text-gray-500">Try adjusting your search filters</p>
          </div>
        )}
      </section>

      <PropertiesSection />
      <ServicesSection />

      {/* Call to Action Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Find Your Dream Property?
          </h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied clients who found their perfect home
            through our services
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors shadow-md">
              Browse Properties
            </button>
            <button className="border border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors">
              Contact Agent
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <TestimonialsSection></TestimonialsSection>
    </div>
  );
};

export default Home;
