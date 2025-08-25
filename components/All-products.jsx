"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Loader from "./loader";

export default function AllProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true); 
  const router = useRouter();

  useEffect(() => {
    fetch("/api/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Error fetching products:", err))
      .finally(() => setLoading(false)); 
  }, []);

  if (loading) {
    return <Loader />; 
  }

  if (!products.length) {
    return (
      <p className="text-center mt-10 text-gray-500">
        No products found
      </p>
    );
  }

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">All Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product, index) => (
          <div
            key={product._id || product.id || index}
            className="border rounded-lg shadow hover:shadow-lg transition p-4 flex flex-col"
          >
            {/* Product Image */}
            <img
              src={product.image || "/placeholder.png"}
              alt={product.name}
              className="w-full h-64 object-cover rounded mb-4"
            />

            {/* Product Text */}
            <h2 className="text-lg font-semibold mb-1">{product.name}</h2>
            <p className="text-gray-600 mb-1">${product.price}</p>
            <p className="text-sm text-gray-500 mb-3">{product.category}</p>

            {/* View Details Button */}
            <button
              onClick={() =>
                router.push(`/product/${product.id || product._id}`)
              }
              className="mt-auto bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 rounded transition"
            >
              View Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
