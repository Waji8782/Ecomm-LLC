import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed w-full top-0 z-50 backdrop-blur-md bg-white/70 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-3xl font-bold tracking-wide text-gray-900">
          ECOM<span className="text-black"> LLC</span>
        </h1>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-8 font-medium text-gray-700">
          <Link to="/" className="relative group">
            Home
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-black transition-all group-hover:w-full"></span>
          </Link>

          <Link to="/products" className="relative group">
            Shop
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-black transition-all group-hover:w-full"></span>
          </Link>

          <Link to="/about" className="relative group">
            About
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-black transition-all group-hover:w-full"></span>
          </Link>

          <Link to="/contact" className="relative group">
            Contact
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-black transition-all group-hover:w-full"></span>
          </Link>
        </nav>

        {/* WhatsApp Button (Desktop) */}
        <a
          href="https://wa.me/917078944974?text=I want to shop from ECOM SHOP"
          className="hidden md:inline-block bg-black text-white px-5 py-2 rounded-full hover:bg-gray-800 transition duration-300"
        >
          Shop Now
        </a>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 px-6 py-6 space-y-4 text-gray-700 font-medium">
          <div className="flex flex-col space-y-4">
            <Link to="/" onClick={() => setIsOpen(false)}>
              Home
            </Link>
            <Link to="/products" onClick={() => setIsOpen(false)}>
              Shop
            </Link>
            <Link to="/about" onClick={() => setIsOpen(false)}>
              About
            </Link>
            <Link to="/contact" onClick={() => setIsOpen(false)}>
              Contact
            </Link>
          </div>

          <a
            href="https://wa.me/917078944974"
            className="block bg-black text-white text-center py-2 rounded-full mt-4"
          >
            Shop Now
          </a>
        </div>
      )}
    </header>
  );
};

export default Navbar;
