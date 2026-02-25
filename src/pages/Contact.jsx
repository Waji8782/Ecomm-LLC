import React, { useState } from "react";
import { Mail, Phone, MessageCircle } from "lucide-react";

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.target);

    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/wajidmalik@wm-ecom-llc.com", // 🔴 Replace with your email
        {
          method: "POST",
          body: formData,
        }
      );

      if (response.ok) {
        setShowPopup(true);
        e.target.reset();

        setTimeout(() => {
          setShowPopup(false);
        }, 4000);
      } else {
        alert("Something went wrong ❌");
      }
    } catch (error) {
      alert("Error sending message ❌");
    }

    setLoading(false);
  };

  return (
    <div className="pt-28 bg-gray-50 min-h-screen relative">
      
      {/* Hero Section */}
      <section className="text-center py-16 px-6">
        <h1 className="text-4xl md:text-5xl font-bold">
          Get In <span className="text-black">Touch</span>
        </h1>
        <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
          Have questions or want to place an order? We’re here to help.
        </p>
      </section>

      {/* Contact Form */}
      <section className="max-w-4xl mx-auto px-6 pb-20">
        <div className="bg-white p-10 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-bold mb-8 text-center">
            Send Us a Message
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* Hidden Fields */}
            <input type="hidden" name="_captcha" value="false" />
            <input
              type="hidden"
              name="_subject"
              value="New Contact Message - WM ECOM LLC"
            />

            <input type="hidden" name="_template" value="table" />

            <div>
              <label className="block mb-2 font-medium">Full Name</label>
              <input
                type="text"
                name="name"
                required
                placeholder="Enter your name"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium">Email Address</label>
              <input
                type="email"
                name="email"
                required
                placeholder="Enter your email"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium">Message</label>
              <textarea
                rows="4"
                name="message"
                required
                placeholder="Write your message..."
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-black text-white py-3 rounded-full hover:bg-gray-800 transition disabled:opacity-50"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </section>

      {/* Popup Modal */}
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-50">
          <div className="bg-white w-[90%] max-w-md p-8 rounded-2xl shadow-2xl text-center">
            <div className="text-green-500 text-5xl mb-4">✓</div>

            <h3 className="text-2xl font-bold mb-3">
              Thank You!
            </h3>

            <p className="text-gray-600 mb-6">
              Thank you for showing interest in our products.
              Our team will reach out to you as soon as possible.
            </p>

            <button
              onClick={() => setShowPopup(false)}
              className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;