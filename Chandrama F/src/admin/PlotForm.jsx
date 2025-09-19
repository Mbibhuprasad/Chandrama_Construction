import React, { useState } from "react";
import API from "../../services/api";

const PlotForm = ({ plot, onSubmit, onCancel }) => {
  const [formData, setFormData] = useState({
    name: plot?.name || "",
    address: plot?.address || "",
    squareFeet: plot?.squareFeet || "",
    location: plot?.location || "",
    price: plot?.price || "",
    facing: plot?.facing || "",
    boundary: plot?.boundary || "",
    description: plot?.description || "",
    amenities: plot?.amenities || [],
  });
  const [images, setImages] = useState([]);
  const [newAmenity, setNewAmenity] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    setImages(Array.from(e.target.files));
  };

  const handleAddAmenity = () => {
    if (newAmenity.trim()) {
      setFormData({
        ...formData,
        amenities: [...formData.amenities, newAmenity.trim()],
      });
      setNewAmenity("");
    }
  };

  const handleRemoveAmenity = (index) => {
    setFormData({
      ...formData,
      amenities: formData.amenities.filter((_, i) => i !== index),
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const submitData = new FormData();

      // Append all form fields
      Object.keys(formData).forEach((key) => {
        if (key === "amenities") {
          submitData.append(key, JSON.stringify(formData[key]));
        } else {
          submitData.append(key, formData[key]);
        }
      });

      // Append images
      images.forEach((image) => {
        submitData.append("images", image);
      });

      let response;
      if (plot) {
        // Update existing plot
        response = await API.put(`/admin/plots/${plot._id}`, submitData, {
          headers: { "Content-Type": "multipart/form-data" },
        });
      } else {
        // Create new plot
        response = await API.post("/admin/plots", submitData, {
          headers: { "Content-Type": "multipart/form-data" },
        });
      }

      onSubmit(response.data);
    } catch (error) {
      console.error("Failed to save plot:", error);
      setError(error.response?.data?.message || "Failed to save plot");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 max-h-96 overflow-y-auto p-2"
    >
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
          {error}
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Name *
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Location *
          </label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Address *
          </label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Square Feet *
          </label>
          <input
            type="number"
            name="squareFeet"
            value={formData.squareFeet}
            onChange={handleChange}
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Price ($) *
          </label>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Facing *
          </label>
          <select
            name="facing"
            value={formData.facing}
            onChange={handleChange}
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border"
          >
            <option value="">Select Direction</option>
            <option value="North">North</option>
            <option value="South">South</option>
            <option value="East">East</option>
            <option value="West">West</option>
            <option value="North-East">North-East</option>
            <option value="North-West">North-West</option>
            <option value="South-East">South-East</option>
            <option value="South-West">South-West</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Boundary *
          </label>
          <input
            type="text"
            name="boundary"
            value={formData.boundary}
            onChange={handleChange}
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Images
          </label>
          <input
            type="file"
            multiple
            onChange={handleImageChange}
            className="mt-1 block w-full p-2 border rounded-md"
            accept="image/*"
          />
          <p className="text-xs text-gray-500 mt-1">
            Select multiple images (max 10)
          </p>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Description *
        </label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          required
          rows={3}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Amenities
        </label>
        <div className="flex space-x-2 mt-1">
          <input
            type="text"
            value={newAmenity}
            onChange={(e) => setNewAmenity(e.target.value)}
            placeholder="Add amenity"
            className="flex-1 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border"
          />
          <button
            type="button"
            onClick={handleAddAmenity}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Add
          </button>
        </div>
        <div className="mt-2 flex flex-wrap gap-2">
          {formData.amenities.map((amenity, index) => (
            <span
              key={index}
              className="bg-gray-200 px-2 py-1 rounded flex items-center"
            >
              {amenity}
              <button
                type="button"
                onClick={() => handleRemoveAmenity(index)}
                className="ml-2 text-red-600 hover:text-red-800"
              >
                ×
              </button>
            </span>
          ))}
        </div>
      </div>

      <div className="flex justify-end space-x-3 pt-4">
        <button
          type="button"
          onClick={onCancel}
          className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400"
        >
          Cancel
        </button>
        <button
          type="submit"
          disabled={loading}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-50"
        >
          {loading ? "Saving..." : plot ? "Update Plot" : "Add Plot"}
        </button>
      </div>
    </form>
  );
};

export default PlotForm;
