import mongoose from "mongoose";

// Product schema
const ProductSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  category: String,
  description: String,
  image: String,
});

const Product =
  mongoose.models.Product || mongoose.model("Product", ProductSchema);

// Connect to MongoDB
async function connectDB() {
  if (mongoose.connection.readyState === 0) {
    await mongoose.connect(process.env.NEXT_PUBLIC_MONGO_URI);
  }
}

// ✅ Notice: params এখন async
export async function GET(req, context) {
  await connectDB();

  // ⬇️ এখন এভাবে লিখতে হবে
  const { id } = await context.params;

  try {
    const product = await Product.findById(id).lean();

    if (!product) {
      return new Response(
        JSON.stringify({ error: "Product not found" }),
        { status: 404, headers: { "Content-Type": "application/json" } }
      );
    }

    return new Response(
      JSON.stringify({
        id: product._id.toString(),
        name: product.name,
        price: product.price,
        category: product.category || "Uncategorized",
        description: product.description || "",
        image: product.image || "/placeholder.png",
      }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ error: "Invalid product ID" }),
      { status: 400, headers: { "Content-Type": "application/json" } }
    );
  }
}
