import React from 'react'

const ProductCard = ({ image, name, price }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition duration-300">
      
      <div className="overflow-hidden">
        <img
          src={image}
          alt={name}
          className="h-72 w-full object-cover hover:scale-105 transition duration-500"
        />
      </div>

      <div className="p-5">
        <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
        <p className="text-gray-600 mt-1">₹{price}</p>

        <a
          href={`https://wa.me/917078944974?text=I want to order ${name}`}
          className="block mt-4 bg-black text-white text-center py-2 rounded-full hover:bg-gray-800 transition"
        >
          Order on WhatsApp
        </a>
      </div>
    </div>
  );
};

export default ProductCard;
