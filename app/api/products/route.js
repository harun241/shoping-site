import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  category: String,
  description: String,
  image: String,
});

const Product = mongoose.models.Product || mongoose.model("Product", ProductSchema);

async function connectDB() {
  if (mongoose.connection.readyState === 0) {
    await mongoose.connect(process.env.MONGO_URI);
  }
}

// GET /api/products
export async function GET(req) {
  try {
    await connectDB();

    const products = await Product.find({}).lean(); // fetch all documents
    const formatted = products.map(p => ({
      id: p._id.toString(),           // ObjectId → string
      name: p.name,
      price: Number(p.price),         // ensure number
      category: p.category || "Uncategorized",
      description: p.description || "",
      image: p.image || "/placeholder.png",
    }));

    return new Response(JSON.stringify(formatted), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ error: "Failed to fetch products" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}




// POST /api/products
export async function POST(req) {
  try {
    await connectDB();
    const body = await req.json();
    body.price = Number(body.price); // ensure numeric
    const product = await Product.create(body);
    return new Response(JSON.stringify(product), {
      status: 201,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ error: "Failed to create product" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
