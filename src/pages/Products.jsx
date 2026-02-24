import React from "react";
import products from "../data/products";
import ProductCard from "../components/ProductCard";

const Products = () => {
  return (
    <div className="pt-24 pb-16 bg-linear-to-b from-gray-50 to-white min-h-screen">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            Our Full Collection
          </h1>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-sm sm:text-base">
            Explore our complete range of premium fashion wear crafted
            for comfort, confidence, and everyday elegance.
          </p>
        </div>

        {/* Products Grid */}
        <div className="
          grid 
          grid-cols-1 
          sm:grid-cols-2 
          md:grid-cols-3 
          lg:grid-cols-4 
          gap-6 
          sm:gap-8
        ">
          {products.map((product) => (
            <div
              key={product.id}
              className="transform transition duration-300 hover:scale-[1.02]"
            >
              <ProductCard {...product} />
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Products;