import { NextResponse } from 'next/server';
import { prisma } from '@/lib/db';
import bcrypt from 'bcrypt';
import { cookies } from 'next/headers';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, password } = body;

    // Find the user in the database
    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      return NextResponse.json({ error: 'Invalid credentials' });
    }

    // Compare the provided password with the hashed password in the DB
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return NextResponse.json({ error: 'Invalid credentials' });
    }

    // Set the session cookie using userId
    const cookieStore = await cookies();
    cookieStore.set('userId', user.id, {
      httpOnly: true,
      maxAge: 60 * 60 * 24 * 7,
      path: '/',
    });

    // 4. Send success response/message
    return NextResponse.json({
      message: 'Login successful',
      user: { id: user.id, email: user.email, name: user.name }
    });

  } catch (error) {
    console.error(error)
    return NextResponse.json({ error: 'Internal Server Error' });
  }
}