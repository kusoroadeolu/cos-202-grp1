# 🎓 Student Task Manager

A lightweight, fullstack task management app built for students — track assignments, prioritize work, and stay on top of deadlines.

**[Live Demo →](https://cos-202-grp1.vercel.app/dashboard)**

![Landing page](docs/screenshots/landing.png)

---

## Features

- **Task management** — create, edit, and delete tasks with a title, description, priority, and due date
- **Priority levels** — mark tasks as Low, Medium, or Urgent with color-coded badges
- **Today view** — filtered view of everything due today, sortable by priority
- **Search & sort** — search tasks by title; sort by creation date, due date, or priority
- **Mark complete** — check off tasks and track what's done vs. still active
- **Authentication** — secure sign up and login with hashed passwords and session cookies

![Dashboard](docs/screenshots/dashboard.png)

---

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend | Next.js 15 (App Router) + Tailwind CSS |
| Backend | Next.js API Routes |
| Database | PostgreSQL via Prisma ORM |
| Language | TypeScript |

![Today view](docs/screenshots/today.png)

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org) (LTS)
- A PostgreSQL database (local or hosted — e.g. [Neon](https://neon.tech), [Supabase](https://supabase.com))

### Installation

**1. Clone the repo**

```bash
git clone https://github.com/kusoroadeolu/cos-202-grp1
cd cos-202-grp1/student-task-manager
```

**2. Install dependencies**

```bash
npm install
```

**3. Set up environment variables**

```bash
cp .env.example .env
```

Fill in your `.env`:

```env
DATABASE_URL="postgresql://postgres:yourpassword@localhost:5432/taskmanager?schema=public"
```

> **Tip:** If you need a quick hosted Postgres database, run `npx create-db`.

**4. Run database migrations**

```bash
npx prisma migrate dev --name init
```

**5. Start the dev server**

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Project Structure

```
student-task-manager/
├── app/
│   ├── page.tsx                    # Landing page
│   ├── login/page.tsx              # Login
│   ├── sign-up/page.tsx            # Sign up
│   ├── dashboard/
│   │   ├── page.tsx                # Main dashboard
│   │   └── today/page.tsx          # Today's tasks view
│   └── api/
│       ├── login/route.ts
│       ├── signup/route.ts
│       └── tasks/
│           ├── route.ts            # GET /tasks, POST /tasks
│           └── [id]/route.ts       # GET, PATCH, DELETE /tasks/:id
├── components/
│   ├── SideBar.tsx
│   ├── CreateTaskModal.tsx
│   └── auth-components.tsx
├── lib/
│   └── db.ts                       # Prisma client singleton
└── prisma/
    └── schema.prisma
```

---

## API Reference

All routes are prefixed with `/api`. Auth is cookie-based — the `userId` cookie is set on login/signup.

| Method | Endpoint | Description |
|---|---|---|
| `POST` | `/api/signup` | Create account |
| `POST` | `/api/login` | Log in |
| `GET` | `/api/tasks` | Get all tasks (supports `search`, `sortBy`, `order`) |
| `POST` | `/api/tasks` | Create a task |
| `GET` | `/api/tasks/:id` | Get a single task |
| `PATCH` | `/api/tasks/:id` | Update a task |
| `DELETE` | `/api/tasks/:id` | Delete a task |

See [`API-Docs.MD`](app/api/API-Docs.MD) for full request/response details.

---

## Environment Variables

| Variable | Description |
|---|---|
| `DATABASE_URL` | PostgreSQL connection string |

> Never commit your `.env` file. Use `.env.example` to share variable names only.

---

## Useful Commands

Run these from inside the `student-task-manager/` directory.

| Command | Description |
|---|---|
| `npm run dev` | Start the dev server |
| `npx prisma studio` | Open the database UI |
| `npx prisma migrate dev` | Apply schema changes |
| `npx prisma generate` | Regenerate Prisma client after schema edits |

---

## Known Issues

- No password reset or account recovery flow yet
- Mobile responsiveness is still being refined
- No deadline reminders or notifications

---

## License

Distributed under the MIT License. See [`LICENSE`](LICENSE) for more information.