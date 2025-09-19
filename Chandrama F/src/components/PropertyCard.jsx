import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import PropertyDetails from "./PropertyDetails";
import AuthModal from "./AuthModal";
import { IoLocationOutline } from "react-icons/io5";

const PropertyCard = ({ property, onInterested }) => {
  const { user } = useContext(AuthContext);
  const [showDetails, setShowDetails] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);

  const handleViewDetails = () => {
    console.log("object");
  };

  const handleInterestedClick = () => {
    onInterested(property.id);
  };

  return (
    <div className="bg-black shadow-xl rounded-2xl overflow-hidden transform transition-transform duration-300 hover:scale-105">
      <img
        src={property.image}
        alt={property.title}
        className="w-full h-56 object-cover"
      />
      <div className="p-6">
        <h2 className="text-2xl font-bold text-yellow-500 mb-1">
          {property.title}
        </h2>
        <div className="flex items-center text-gray-300 mb-2">
          <IoLocationOutline className="mr-2 text-lg text-yellow-500" />
          <p>{property.location}</p>
        </div>
        <div className="flex items-center text-gray-300 text-sm mb-4">
          <p>
            Total Area:{" "}
            <span className="font-semibold text-yellow-500">
              {property.area} Sqft
            </span>
          </p>
        </div>
        <div className="flex items-end justify-between mt-4">
          <p className="text-2xl font-extrabold text-yellow-500">
            ₹{property.price} Lakhs
          </p>
          <div className="flex space-x-2">
            <button
              onClick={handleViewDetails}
              className="bg-yellow-500 text-black px-5 py-2 rounded-full text-sm font-medium hover:bg-yellow-600 transition-colors duration-300"
            >
              View Details
            </button>
            <button
              onClick={handleInterestedClick}
              className="bg-black text-yellow-500 border border-yellow-500 px-5 py-2 rounded-full text-sm font-medium hover:bg-yellow-600 hover:text-black transition-colors duration-300"
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
