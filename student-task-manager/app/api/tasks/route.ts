import { NextResponse } from 'next/server';
import { prisma } from '@/lib/db';
import { cookies } from 'next/headers';
import { Priority } from '@/app/generated/prisma';

export async function POST(req: Request) {
  try {
    const cookieStore = await cookies();
    const userId = cookieStore.get('userId')?.value;

    if (!userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await req.json();
    const { title, description, dueDate, priority } = body;

    if (!title || typeof title !== 'string' || title.trim() === '') {
      return NextResponse.json({ error: 'Title is required' }, { status: 400 });
    }

    const validPriorities: Priority[] = ['LOW', 'MEDIUM', 'URGENT'];
    if (priority && !validPriorities.includes(priority)) {
      return NextResponse.json({ error: 'Invalid priority value' }, { status: 400 });
    }

    const task = await prisma.task.create({
      data: {
        title: title.trim(),
        description: description ?? null,
        dueDate: dueDate ? new Date(dueDate) : null,
        priority: priority ?? 'MEDIUM',
        userId,
      },
    });

    return NextResponse.json(task, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}

export async function GET(req: Request) {
  try {
    const cookieStore = await cookies();
    const userId = cookieStore.get('userId')?.value;

    if (!userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { searchParams } = new URL(req.url);
    const search = searchParams.get('search') ?? '';
    const sortBy = searchParams.get('sortBy'); // 'priority' | 'dueDate' | 'createdAt'
    const order = searchParams.get('order') === 'desc' ? 'desc' : 'asc';

    type OrderByOption =
      | { dueDate: 'asc' | 'desc' }
      | { createdAt: 'asc' | 'desc' }
      | { title: 'asc' | 'desc' };

    let orderBy: OrderByOption = { createdAt: 'desc' };

    if (sortBy === 'dueDate') {
      orderBy = { dueDate: order };
    } else if (sortBy === 'createdAt') {
      orderBy = { createdAt: order };
    }


    const tasks = await prisma.task.findMany({
      where: {
        userId,
        ...(search
          ? { title: { contains: search, mode: 'insensitive' } }
          : {}),
      },
      orderBy: sortBy !== 'priority' ? orderBy : undefined,
    });


    if (sortBy === 'priority') {
      const priorityRank: Record<Priority, number> = {
        LOW: 0,
        MEDIUM: 1,
        URGENT: 2,
      };
      tasks.sort((a, b) => {
        const diff = priorityRank[a.priority] - priorityRank[b.priority];
        return order === 'asc' ? diff : -diff;
      });
    }

    return NextResponse.json(tasks);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}