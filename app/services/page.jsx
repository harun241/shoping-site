"use client";
import { ShoppingCart, Truck, ShieldCheck, MessageCircle } from "lucide-react";

export default function Services() {
  const services = [
    {
      title: "Fast Delivery",
      description: "Get your products delivered quickly and reliably to your doorstep.",
      icon: <Truck className="w-10 h-10 text-indigo-600 mx-auto mb-4" />,
    },
    {
      title: "Secure Payments",
      description: "Shop with confidence using our safe and encrypted payment options.",
      icon: <ShieldCheck className="w-10 h-10 text-indigo-600 mx-auto mb-4" />,
    },
    {
      title: "24/7 Customer Support",
      description: "Our friendly support team is here to help you anytime, anywhere.",
      icon: <MessageCircle className="w-10 h-10 text-indigo-600 mx-auto mb-4" />,
    },
    {
      title: "Wide Selection",
      description: "We offer a huge range of products across multiple categories.",
      icon: <ShoppingCart className="w-10 h-10 text-indigo-600 mx-auto mb-4" />,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section className="bg-white py-16 text-center shadow-md">
        <h1 className="text-4xl font-bold mb-4">Our Services</h1>
        <p className="text-lg text-gray-600 max-w-xl mx-auto">
          We offer a variety of services to make your shopping experience smooth and enjoyable.
        </p>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-6 md:px-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow hover:shadow-lg p-6 text-center transition"
            >
              {service.icon}
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-700">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Optional CTA */}
      <section className="py-16 px-6 text-center">
        <h2 className="text-3xl font-semibold mb-4">Ready to Shop?</h2>
        <p className="text-gray-700 mb-6">
          Explore our products and enjoy the best shopping experience with our services.
        </p>
        <a
          href="/shop"
          className="inline-block bg-cyan-600 text-white px-6 py-3 rounded-lg hover:bg-cyan-700 transition"
        >
          Shop Now
        </a>
      </section>
    </div>
  );
}
