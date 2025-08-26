import { NextResponse } from "next/server";

export async function POST(req) {
  const { username, password } = await req.json();

  // Hardcoded user for testing
  if (username === "harun" && password === "1234") {
    return NextResponse.json({
      id: 1,
      name: "Harun",
      email: "harun@example.com",
    });
  }

  // Always return JSON even on error
  return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
}
