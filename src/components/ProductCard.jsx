import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const ProductCard = ({ image, name, price }) => {
  return (
    <div className="group bg-white rounded-2xl shadow-sm hover:shadow-2xl transition duration-300 overflow-hidden border border-gray-100">
      
      {/* Image Container */}
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-64 sm:h-72 object-cover transform group-hover:scale-105 transition duration-500"
        />

        {/* Optional Overlay Effect */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition duration-300"></div>
      </div>

      {/* Content */}
      <div className="p-4 sm:p-5">
        <h3 className="text-base sm:text-lg font-semibold text-gray-800 line-clamp-1">
          {name}
        </h3>

        <p className="text-gray-600 mt-1 text-sm sm:text-base font-medium">
          ₹{price}
        </p>

        {/* WhatsApp Button */}
        <a
          href={`https://wa.me/917078944974?text=I want to order ${name}`}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 flex items-center justify-center gap-2 bg-black text-white py-2.5 rounded-full text-sm sm:text-base font-medium hover:bg-gray-800 transition duration-300"
        >
          <FaWhatsapp className="text-green-400" />
          Order on WhatsApp
        </a>
      </div>
    </div>
  );
};

export default ProductCard;