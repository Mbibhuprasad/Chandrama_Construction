import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import PropertyDetails from "./PropertyDetails";
import AuthModal from "./AuthModal";
import { IoLocationOutline } from "react-icons/io5"; // New icon import
// import { LuAreaChart } from "react-icons/lu"; // New icon import

const PropertyCard = ({ property, onInterested }) => {
  const { user } = useContext(AuthContext);
  const [showDetails, setShowDetails] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);

  const handleViewDetails = () => {
   console.log("object")
  };

  const handleInterestedClick = () => {
    onInterested(property.id);
  };

  return (
    <div className="bg-white shadow-xl rounded-2xl overflow-hidden transform transition-transform duration-300 hover:scale-105">
      <img
        src={property.image}
        alt={property.title}
        className="w-full h-56 object-cover"
      />
      <div className="p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-1">
          {property.title}
        </h2>
        <div className="flex items-center text-gray-600 mb-2">
          <IoLocationOutline className="mr-2 text-lg" />
          <p>{property.location}</p>
        </div>
        <div className="flex items-center text-gray-600 text-sm mb-4">
          {/* <LuAreaChart className="mr-2" /> */}
          <p>
            Total Area:{" "}
            <span className="font-semibold">{property.area} Sqft</span>
          </p>
        </div>
        <div className="flex items-end justify-between mt-4">
          <p className="text-2xl font-extrabold text-blue-600">
            ₹{property.price} Lakhs
          </p>
          <div className="flex space-x-2">
            <button
              onClick={handleViewDetails}
              className="bg-blue-600 text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-blue-700 transition-colors duration-300"
            >
              View Details
            </button>
            <button
              onClick={handleInterestedClick}
              className="bg-white text-gray-800 border border-gray-300 px-5 py-2 rounded-full text-sm font-medium hover:bg-gray-100 transition-colors duration-300"
            >
              Interested
            </button>
          </div>
        </div>
      </div>

      {showDetails && (
        <PropertyDetails
          property={property}
          onClose={() => setShowDetails(false)}
        />
      )}

      {showAuthModal && <AuthModal onClose={() => setShowAuthModal(false)} />}
    </div>
  );
};

export default PropertyCard;
