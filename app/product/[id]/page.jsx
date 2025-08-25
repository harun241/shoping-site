"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

export default function ProductDetailsPage() {
  const { id } = useParams(); // Get id from route
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!id) {
      setError("No product ID provided");
      setLoading(false);
      return;
    }

    fetch(`/api/products/${id}`)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch product");
        return res.json();
      })
      .then((data) => setProduct(data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <p className="text-center mt-10">Loading...</p>;
  if (error) return <p className="text-red-500 text-center mt-10">{error}</p>;
  if (!product) return <p className="text-center mt-10">Product not found</p>;

  return (
    <div className="p-6 max-w-3xl mx-auto bg-white shadow-lg rounded-lg min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-center">{product.name}</h1>

      {/* Image Container */}
      <div className="w-full h-[500px] flex items-center justify-center bg-gray-100 rounded-md mb-6">
        <img
          src={product.image || "/placeholder.png"}
          alt={product.name}
          className="max-h-full max-w-full object-contain"
        />
      </div>

      {/* Product Details */}
      <p className="text-lg font-semibold mb-2">Price: ${product.price}</p>
      <p className="text-gray-700 mb-4">{product.description}</p>
      <p className="text-sm text-blue-500">Category: {product.category}</p>
    </div>
  );
}
