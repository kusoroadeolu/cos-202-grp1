# Student Task Manager

A fullstack task management app built with Next.js, PostgreSQL, and Prisma.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend | Next.js (App Router) + Tailwind CSS |
| Backend | Next.js API Routes |
| Database | PostgreSQL via Prisma ORM |
| Auth | NextAuth.js |
| Language | TypeScript |

---

## Getting Started

### Prerequisites

Make sure you have these installed:
- [Node.js](https://nodejs.org) (LTS version)
- [PostgreSQL](https://www.postgresql.org/download/) running locally

### 1. Clone the repo

```bash
git clone <your-repo-url>
cd student-task-manager
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up environment variables

Copy the example env file:

```bash
cp .env.example .env
```

Then fill in your values in `.env`:

```env
DATABASE_URL="postgresql://postgres:yourpassword@localhost:5432/taskmanager?schema=public"
NEXTAUTH_SECRET="your-random-secret"
NEXTAUTH_URL="http://localhost:3000"
```

> Generate a secret with: `openssl rand -base64 32`

### 4. Set up the database

```bash
npx prisma migrate dev --name init
```

This creates the `taskmanager` database and applies the schema automatically.

### 5. Run the dev server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) — you're good to go.

---

## Project Structure

```
student-task-manager/
├── app/
│   ├── page.tsx                        # Homepage
│   ├── dashboard/page.tsx              # Main app view
│   └── api/                            # ← BACKEND TEAM works here
│       ├── tasks/route.ts              # Task CRUD endpoints
│       ├── projects/route.ts           # Project endpoints
│       └── auth/[...nextauth]/route.ts # Auth endpoints
│
├── components/                         # ← FRONTEND TEAM works here
│   ├── TaskCard.tsx
│   └── Sidebar.tsx
│
├── lib/
│   └── db.ts                           # Shared Prisma client (don't touch)
│
├── prisma/
│   └── schema.prisma                   # ← DB schema (coordinate changes here)
│
└── __tests__/                          # ← TESTING TEAM works here
```

---

## Team Guidelines

### Backend Team
- Work inside `app/api/`
- Each file is a route — `route.ts` exports `GET`, `POST`, `PUT`, `DELETE` functions
- Use the shared Prisma client from `lib/db.ts` — don't create your own instance
- Example API route structure:

```ts
// app/api/tasks/route.ts
import { prisma } from '@/lib/db'

export async function GET() {
  const tasks = await prisma.task.findMany()
  return Response.json(tasks)
}

export async function POST(req: Request) {
  const body = await req.json()
  const task = await prisma.task.create({ data: body })
  return Response.json(task)
}
```

### Frontend Team
- Work inside `components/` and `app/` pages
- Use Tailwind CSS for styling — no separate CSS files needed
- Fetch data from the API routes the backend team creates (e.g. `fetch('/api/tasks')`)
- Keep components small and focused — one component, one responsibility

###  Testing Team
- Work inside `__tests__/`
- We use **Jest** + **React Testing Library**
- Run tests with: `npm test`
- API routes can be tested with `node-fetch` or mocked with `jest.mock`

---

## Database Schema

Defined in `prisma/schema.prisma`. Current models:

- **User** — a student account
- **Task** — a task belonging to a user

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
| `NEXTAUTH_SECRET` | Secret key for session encryption |
| `NEXTAUTH_URL` | Base URL of the app (use `http://localhost:3000` locally) |

Never commit your `.env` file. Use `.env.example` to share variable names.

---

## Useful Commands
When running these commands ensure you are in the student-task-manager dir
| Command | What it does |
|---|---|
| `npm run dev` | Start dev server |
| `npm test` | Run tests |
| `npx prisma studio` | Open database UI |
| `npx prisma migrate dev` | Apply schema changes |
| `npx prisma generate` | Regenerate Prisma client after schema edits |
| `npm run test:watch` | Run tests in watch mode |


---

