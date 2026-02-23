import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 pt-16 pb-8 mt-20">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10">
        {/* Brand Info */}
        <div>
          <h2 className="text-2xl font-bold text-white">ECOM LLC</h2>
          <p className="mt-4 text-sm leading-relaxed">
            Premium fashion crafted for comfort and confidence. Elevate your
            everyday style with ECOM LLC.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-3 text-sm">
            <li>
              <Link to="/" className="hover:text-white transition">
                Home
              </Link>
            </li>
            <li>
              <Link to="/products" className="hover:text-white transition">
                Shop
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-white transition">
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-white transition">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-white font-semibold mb-4">Contact</h3>
          <ul className="space-y-4 text-sm">
            <li>📞 +91 7078944974</li>
            <li>
              📧{" "}
              <a
                href="mailto:wajidmalik8476@gmail.com"
                className="hover:text-white transition"
              >
                wajidmalik8476@gmail.com
              </a>
            </li>
            <li>
              <a
                href="https://wa.me/917078944974"
                className="hover:text-white transition"
              >
                WhatsApp Chat
              </a>
            </li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-white font-semibold mb-4">Address</h3>
          <div className="flex space-x-4">
            <p className="text-sm ">
              WAJID MALIK ECOM LLC
              <br />
              MOHD WAJID SOLE MBR <br />
              30 N GOULD ST STE R <br />
              SHERIDAN, WY 82801
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-12 pt-6 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} ECOM LLC. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
