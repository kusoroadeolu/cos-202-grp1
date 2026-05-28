# Student Task Manager

> A fullstack, lightweight task management app designed to help students organize assignments, track deadlines, and stay on top of daily productivity.

🔗 **Live Demo:** [cos-202-grp1.vercel.app](https://cos-202-grp1.vercel.app)

---

<!-- Screenshot: Landing / Hero -->
![App Preview](./docs/images/hero.png)

---

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend | Next.js (App Router) + Tailwind CSS |
| Backend | Next.js API Routes |
| Database | PostgreSQL via Prisma ORM |
| Auth | Custom cookie-based auth (bcrypt) |
| Language | TypeScript |

---

## Features

<!-- Screenshot: Dashboard view -->
![Dashboard](./docs/images/dashboard.png)

- Create, edit, and delete tasks with title, description, priority, and due date
- Mark tasks as complete with animated status transitions
- Filter today's tasks by due date
- Search tasks by title and sort by priority, due date, or creation date
- Secure signup and login with hashed passwords and session cookies

---

## 🚀 Getting Started

### Prerequisites

Make sure you have these installed:
- [Node.js](https://nodejs.org) (LTS version)
- [PostgreSQL](https://www.postgresql.org/download/) running locally

### Installation

**1. Clone the repo**
```bash
git clone https://github.com/kusoroadeolu/cos-202-grp1
```

**2. Navigate to the project directory**
```bash
cd student-task-manager
```

**3. Install dependencies**
```bash
npm install
```

**4. Set up environment variables**

Copy the example env file:
```bash
cp .env.example .env
```

Then fill in your values in `.env`:
```env
DATABASE_URL="postgresql://postgres:yourpassword@localhost:5432/taskmanager?schema=public"
```

> 💡 Tip: Generate a secure secret with `openssl rand -base64 32`

**5. Set up the database**
```bash
npx prisma migrate dev --name init
```

**6. Run the dev server**
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) and you're good to go.

---

## Project Structure

```
student-task-manager/
├── app/
│   ├── page.tsx                      # Landing page
│   ├── login/page.tsx                # Login page
│   ├── sign-up/page.tsx              # Signup page
│   ├── dashboard/
│   │   ├── page.tsx                  # Main dashboard
│   │   └── today/page.tsx            # Today's tasks view
│   └── api/                          # Backend — API routes
│       ├── login/route.ts
│       ├── signup/route.ts
│       └── tasks/
│           ├── route.ts              # GET all tasks, POST new task
│           └── [id]/route.ts         # GET, PATCH, DELETE by task ID
│
├── components/                       # Frontend — reusable UI components
│   ├── SideBar.tsx
│   ├── CreateTaskModal.tsx
│   └── auth-components.tsx
│
├── lib/
│   └── db.ts                         # Shared Prisma client (don't touch)
│
└── prisma/
    └── schema.prisma                 # DB schema (coordinate changes here)
```

---

## Team Guidelines

### ⚙️ Backend Team (Akanbi Ibukunoluwa and Nneji Kamsiyochukwu)
- Work inside `app/api/`
- Each file is a route — `route.ts` exports `GET`, `POST`, `PATCH`, `DELETE` functions
- Use the shared Prisma client from `lib/db.ts` — don't create your own instance
- Auth is cookie-based: read `userId` from cookies and validate on every task route

Example API route:
```ts
// app/api/tasks/route.ts
import { prisma } from '@/lib/db'
import { cookies } from 'next/headers'

export async function GET(req: Request) {
  const cookieStore = await cookies()
  const userId = cookieStore.get('userId')?.value
  if (!userId) return Response.json({ error: 'Unauthorized' }, { status: 401 })

  const tasks = await prisma.task.findMany({ where: { userId } })
  return Response.json(tasks)
}
```

### 🎨 Frontend Team (Awodeyi Bernice and Nweje Chukwudumebi)
- Work inside `components/` and `app/` pages
- Use Tailwind CSS for styling — no separate CSS files needed
- Fetch data from the API routes using `fetch('/api/tasks', { credentials: 'include' })`
- Keep components small and focused — one component, one responsibility
- Use Figma to sketch out UI mocks before building

### 📋 QA / Documentation Team (Olamiju Oluwasemilore and Ezeukwu Jeffery)
- Work inside `__tests__/`
- We use **Jest** + **React Testing Library**
- Run tests with: `npm test`
- API routes can be tested with `node-fetch` or mocked with `jest.mock`

---

## Database Schema

Defined in `prisma/schema.prisma`. Current models:

- **User** — a student account (id, email, name, password)
- **Task** — a task belonging to a user (title, description, priority, dueDate, done)

To view the database visually:
```bash
npx prisma studio
```

> **If you change the schema**, run `npx prisma migrate dev --name describe_your_change` and commit the generated migration file.

---

## Environment Variables

| Variable | Description |
|---|---|
| `DATABASE_URL` | PostgreSQL connection string |

Never commit your `.env` file. Use `.env.example` to share variable names only.

---

## Useful Commands

Make sure you're inside the `student-task-manager` folder before running these.

| Command | What it does |
|---|---|
| `npm run dev` | Start dev server |
| `npm test` | Run tests |
| `npx prisma studio` | Open database UI |
| `npx prisma migrate dev` | Apply schema changes |
| `npx prisma generate` | Regenerate Prisma client after schema edits |

---

## Known Issues

- Password reset and account recovery are not yet implemented
- Mobile responsiveness is still being optimized for smaller screen sizes
- Email or push notification reminders for upcoming deadlines are not yet available

---

## License

Distributed under the MIT License. See `LICENSE` for more information.