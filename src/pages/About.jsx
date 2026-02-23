import React from 'react'

import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="pt-28 bg-white">

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 text-center py-16">
        <h1 className="text-4xl md:text-5xl font-bold">
          About <span className="text-black">ECOM LLC</span>
        </h1>
        <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
          We create fashion that blends comfort, confidence, and class.
          Our mission is to redefine everyday style with premium quality clothing.
        </p>
      </section>

      {/* Brand Story Section */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-center">
        
        <div>
          <img
            src="https://images.unsplash.com/photo-1483985988355-763728e1935b"
            alt="Brand Story"
            className="rounded-2xl shadow-lg"
          />
        </div>

        <div>
          <h2 className="text-3xl font-bold">Our Story</h2>
          <p className="mt-6 text-gray-600 leading-relaxed">
            ECOM LLC started with a simple idea — make premium fashion accessible.
            We carefully design and select every piece to ensure high quality,
            modern trends, and comfortable wear.
          </p>

          <p className="mt-4 text-gray-600 leading-relaxed">
            From casual essentials to statement pieces, our collection is crafted
            to help you express your personality through fashion.
          </p>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          
          <h2 className="text-3xl md:text-4xl font-bold">
            Why Choose Us?
          </h2>

          <div className="grid md:grid-cols-3 gap-10 mt-12">
            
            <div className="p-6 bg-white rounded-2xl shadow-md">
              <h3 className="text-xl font-semibold">Premium Quality</h3>
              <p className="mt-4 text-gray-600">
                High-quality products with long-lasting comfort and quality.
              </p>
            </div>

            <div className="p-6 bg-white rounded-2xl shadow-md">
              <h3 className="text-xl font-semibold">Affordable Prices</h3>
              <p className="mt-4 text-gray-600">
                Stylish fashion without breaking your budget.
              </p>
            </div>

            <div className="p-6 bg-white rounded-2xl shadow-md">
              <h3 className="text-xl font-semibold">Customer Satisfaction</h3>
              <p className="mt-4 text-gray-600">
                Dedicated support and easy WhatsApp ordering.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 text-center">
        <h2 className="text-3xl font-bold">
          Ready to Upgrade Your Style?
        </h2>

        <div className="mt-8 flex justify-center gap-4">
          <Link
            to="/products"
            className="bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800 transition"
          >
            Explore Collection
          </Link>

          <a
            href="https://wa.me/917078944974"
            className="border border-black px-8 py-3 rounded-full hover:bg-black hover:text-white transition"
          >
            Contact on WhatsApp
          </a>
        </div>
      </section>

    </div>
  );
};

export default About;
