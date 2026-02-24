import React from "react";
import { Link } from "react-router-dom";
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { BiRefresh } from "react-icons/bi";
import { HiLocationMarker } from "react-icons/hi";

const Footer = () => {
  return (
    <footer className="bg-linear-to-br from-black via-gray-900 to-black text-gray-300 pt-16 pb-8 mt-20">
      
      <div className="max-w-7xl mx-auto px-6 grid sm:grid-cols-2 md:grid-cols-4 gap-12">
        
        {/* Brand Info */}
        <div>
          <h2 className="text-3xl font-bold text-white tracking-wide">
            ECOM LLC
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-gray-400">
            Premium fashion crafted for comfort and confidence. Elevate your
            everyday style with ECOM LLC.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-semibold mb-5 text-lg">
            Quick Links
          </h3>
          <ul className="space-y-3 text-sm">
            {[
              { name: "Home", path: "/" },
              { name: "Shop", path: "/products" },
              { name: "About", path: "/about" },
              { name: "Contact", path: "/contact" },
            ].map((link, index) => (
              <li key={index}>
                <Link
                  to={link.path}
                  className="hover:text-white transition duration-300 hover:translate-x-1 inline-block"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-white font-semibold mb-5 text-lg">
            Contact
          </h3>
          <ul className="space-y-4 text-sm">

            <li className="flex items-center gap-3">
              <FaPhoneAlt className="text-green-400" />
              +91 7078944974
            </li>

            <li className="flex items-center gap-3">
              <MdEmail className="text-red-400 text-lg" />
              <a
                href="mailto:wajidmalik8476@gmail.com"
                className="hover:text-white transition"
              >
                wajidmalik8476@gmail.com
              </a>
            </li>

            <li className="flex items-center gap-3">
              <FaWhatsapp className="text-green-500 text-lg" />
              <a
                href="https://wa.me/917078944974"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition"
              >
                WhatsApp Chat
              </a>
            </li>

            <li className="flex items-center gap-3">
              <BiRefresh className="text-blue-400 text-lg" />
              <Link
                to="/return-refund-policy"
                className="hover:text-white transition"
              >
                Return & Refund Policy
              </Link>
            </li>

          </ul>
        </div>

        {/* Address */}
        <div>
          <h3 className="text-white font-semibold mb-5 text-lg">
            Address
          </h3>
          <div className="flex items-start gap-3 text-sm text-gray-400">
            <HiLocationMarker className="text-yellow-400 text-xl mt-1" />
            <p>
              WAJID MALIK ECOM LLC <br />
              MOHD WAJID SOLE MBR <br />
              30 N GOULD ST STE R <br />
              SHERIDAN, WY 82801
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 mt-14 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()}{" "}
        <span className="text-white font-medium">ECOM LLC</span>. 
        All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;