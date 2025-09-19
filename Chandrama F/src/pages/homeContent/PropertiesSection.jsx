// src/components/PropertiesSection.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";

const properties = [
  { name: "Residential Land", count: 3 },
  { name: "Flat/Apartment", count: 2 },
  { name: "Agricultural Land", count: 0 },
  { name: "Farm House", count: 0 },
  { name: "Warehouse/Godown", count: 0 },
  { name: "Commercial Land", count: 0 },
  { name: "Villa", count: 0 },
  { name: "Residential Duplex", count: 0 },
  { name: "Commercial Shop", count: 0 },
  { name: "Studio Apartment", count: 0 },
];

const PropertiesSection = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  // Filter options
  const filterOptions = ["all", "residential", "commercial", "land"];

  return (
    <div className="py-16 bg-gradient-to-b from-blue-50 to-white text-center">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
            Explore Our Properties
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Assetlive gracefully facilitates real estate business owners by
            making property management easier & affordable. Discover your dream
            property from our extensive collection.
          </p>

          {/* Stats */}
          <div className="mt-8 flex flex-wrap justify-center gap-6">
            <div className="bg-white p-4 rounded-xl shadow-md">
              <p className="text-2xl font-bold text-blue-600">50+</p>
              <p className="text-gray-500">Properties Listed</p>
            </div>
            <div className="bg-white p-4 rounded-xl shadow-md">
              <p className="text-2xl font-bold text-blue-600">100%</p>
              <p className="text-gray-500">Verified Listings</p>
            </div>
            <div className="bg-white p-4 rounded-xl shadow-md">
              <p className="text-2xl font-bold text-blue-600">24/7</p>
              <p className="text-gray-500">Customer Support</p>
            </div>
          </div>
        </motion.div>

        {/* Filter Options */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex justify-center mb-8 flex-wrap gap-4"
        >
          {filterOptions.map((option) => (
            <button
              key={option}
              className={`px-4 py-2 rounded-full transition-all ${
                activeFilter === option
                  ? "bg-blue-600 text-white shadow-md"
                  : "bg-white text-gray-600 hover:bg-blue-50"
              }`}
              onClick={() => setActiveFilter(option)}
            >
              {option.charAt(0).toUpperCase() + option.slice(1)}
            </button>
          ))}
        </motion.div>

        {/* Property Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6"
        >
          {properties.map((item, index) => (
            <motion.div
              key={index}
              className="border rounded-xl p-5 bg-white shadow-md hover:shadow-xl transition-all cursor-pointer group relative overflow-hidden"
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Decorative element */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-purple-500"></div>

              {/* Icon based on property type */}
              <div className="w-12 h-12 mx-auto mb-3 bg-blue-100 rounded-full flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                <span className="text-blue-600 text-xl">
                  {item.name.includes("Land")
                    ? "🌿"
                    : item.name.includes("Flat")
                    ? "🏢"
                    : item.name.includes("Farm")
                    ? "🏡"
                    : item.name.includes("Warehouse")
                    ? "🏭"
                    : item.name.includes("Commercial")
                    ? "🏬"
                    : item.name.includes("Villa")
                    ? "🏘️"
                    : item.name.includes("Duplex")
                    ? "🏠"
                    : item.name.includes("Shop")
                    ? "🛒"
                    : item.name.includes("Studio")
                    ? "🏠"
                    : "🔑"}
                </span>
              </div>

              <h3 className="text-blue-600 font-semibold group-hover:text-blue-800 transition-colors">
                {item.name}
              </h3>
              <p className="text-gray-500 text-sm mt-2">
                {item.count} {item.count === 1 ? "Property" : "Properties"}
              </p>

              {/* Hover effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-50 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl"></div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-8 text-white shadow-lg"
        >
          <h3 className="text-2xl font-bold mb-4">
            Can't Find What You're Looking For?
          </h3>
          <p className="mb-6 max-w-2xl mx-auto">
            Join thousands of satisfied clients who found their dream property
            through our personalized service.
          </p>
          <button className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors shadow-md">
            Contact Our Agents
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default PropertiesSection;
    