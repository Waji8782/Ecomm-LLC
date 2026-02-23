import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import { MessageCircle } from "lucide-react";

const Home = () => {

  const featuredProducts = [
    {
      id: 1,
      name: "Classic Black T-Shirt",
      price: 799,
      image: "https://images.unsplash.com/photo-1571455786673-9d9d6c194f90?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0"
    },
    {
      id: 2,
      name: "Denim Jacket",
      price: 1999,
      image: "https://images.unsplash.com/photo-1537465978529-d23b17165b3b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0"
    },
    {
      id: 3,
      name: "Summer Casual Shirt",
      price: 1199,
      image: "https://images.unsplash.com/photo-1740711152088-88a009e877bb?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0"
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="pt-24 sm:min-h-[90vh] bg-linear-to-b from-gray-50 to-white flex items-center">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          
          <div>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight text-gray-900">
              Elevate Your <span className="text-black">Style</span>
            </h1>

            <p className="mt-6 text-lg text-gray-600">
              Discover premium fashion crafted for comfort, confidence, and class.
            </p>

            {/* Updated Responsive Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              
              <Link
                to="/products"
                className="bg-black text-white text-sm sm:text-base px-4 sm:px-6 py-2.5 sm:py-3 rounded-full hover:bg-gray-800 transition duration-300 text-center w-full sm:w-auto"
              >
                Shop Collection
              </Link>

              <a
                href="https://wa.me/917078944974?text=Hello I am interested in buying your products."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 border border-black text-sm sm:text-base px-4 sm:px-6 py-2.5 sm:py-3 rounded-full hover:bg-black hover:text-white transition duration-300 w-full sm:w-auto"
              >
                <MessageCircle size={18} />
                Order
              </a>

            </div>
          </div>

          <div>
            <img
              src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d"
              alt="Fashion Model"
              className="rounded-2xl shadow-xl"
            />
          </div>

        </div>
      </section>


      {/* Featured Products Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">
              Featured Collection
            </h2>
            <p className="text-gray-600 mt-3">
              Handpicked styles just for you.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/products"
              className="bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800 transition"
            >
              View All Products
            </Link>
          </div>

        </div>
      </section>
    </>
  );
};

export default Home;