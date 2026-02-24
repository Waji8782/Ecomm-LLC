import React from "react";

const ReturnRefund = () => {
  return (
    <div className="pt-24 bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section
        className="relative h-[40vh] flex items-center justify-center text-center text-white"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1556740738-b6a63e27c4df?q=80&w=1200&auto=format&fit=crop')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 px-6">
          <h1 className="text-3xl md:text-5xl font-bold">
            Return & Refund Policy
          </h1>
          <p className="mt-4 text-sm md:text-lg text-gray-200 max-w-2xl mx-auto">
            We value your trust and want you to shop with confidence.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <div className="grid gap-8">
          {/* Returns Card */}
          <div className="bg-white/70 backdrop-blur-md p-8 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300">
            <h2 className="text-2xl font-semibold mb-4">Returns</h2>
            <p className="text-gray-700 leading-relaxed">
              You have 7 days from the date of delivery to request a return. The
              product must be unused, unworn, and in its original packaging.
              Items damaged due to misuse are not eligible for return.
            </p>
          </div>

          {/* Refunds Card */}
          <div className="bg-white/70 backdrop-blur-md p-8 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300">
            <h2 className="text-2xl font-semibold mb-4">Refunds</h2>
            <p className="text-gray-700 leading-relaxed">
              Once your returned item is received and inspected, we will notify
              you about the approval status. If approved, refunds will be
              processed within 5–7 business days to your original payment
              method.
            </p>
          </div>

          {/* Exchange Policy */}
          <div className="bg-white/70 backdrop-blur-md p-8 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300">
            <h2 className="text-2xl font-semibold mb-4">Exchanges</h2>
            <p className="text-gray-700 leading-relaxed">
              We only replace items if they are defective or damaged. If you
              need to exchange it for the same item, please contact us with your
              order details.
            </p>
          </div>

          {/* Contact Section */}
          <div className="bg-black text-white p-8 rounded-2xl shadow-lg text-center">
            <h2 className="text-2xl font-semibold mb-4">Need Help?</h2>
            <p className="text-gray-300">
              For any questions regarding returns or refunds, feel free to
              contact us at:
            </p>
            <p className="mt-3 font-medium">
              <a
                href="mailto:wajidmalik8476@gmail.com"
                className="hover:text-white transition"
              >
                wajidmalik8476@gmail.com
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ReturnRefund;
