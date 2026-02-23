import React from 'react'
import products from "../data/products";
import ProductCard from "../components/ProductCard";

const Products = () => {
  return (
    <div className="pt-28 pb-20 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold">Our Full Collection</h1>
          <p className="text-gray-600 mt-3">
            Explore our complete range of premium fashion wear.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>

      </div>
    </div>
  );
};

export default Products;