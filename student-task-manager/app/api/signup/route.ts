import { prisma } from "@/lib/db";
import bcrypt from "bcrypt";
import { cookies } from "next/headers";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email, password, name } = body;

    // Check if user already exists in the db
    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser) {
      return Response.json({ error: "User already exists" }, { status: 409 });
    }

    // Hashing the password and saving
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await prisma.user.create({
      data: { email, name, password: hashedPassword },
    });

    // Creates the session by setting a cookie
    const cookieStore = await cookies();
    cookieStore.set("userId", user.id, {
      httpOnly: true, 
      path: "/",      
      maxAge: 60 * 60 * 24 * 7, 
    });

    return Response.json(
      { id: user.id, email: user.email, name: user.name }
    );
  } catch (error) {
    console.error(error);
    return Response.json({ error: "Server error" });
  }
}