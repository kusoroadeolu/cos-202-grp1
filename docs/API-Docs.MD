# Task Manager API Docs

All routes are prefixed with `/api`. Authentication is cookie-based — the `userId` cookie is set automatically on login/signup and must be present for all task routes.

---

## Auth

### `POST /api/signup`

Creates a new user and sets the session cookie.

**Body**
| Field | Type | Required |
|-------|------|----------|
| name | string | ✅ |
| email | string | ✅ |
| password | string (min 8 chars) | ✅ |

**Response `201`**
```json
{ "id": "cuid", "email": "you@email.com", "name": "Your Name" }
```

---

### `POST /api/login`

Logs in an existing user and sets the session cookie.

**Body**
| Field | Type | Required |
|-------|------|----------|
| email | string | ✅ |
| password | string | ✅ |

**Response `200`**
```json
{ "message": "Login successful", "user": { "id": "cuid", "email": "you@email.com", "name": "Your Name" } }
```

---

## Tasks

> All task routes require the `userId` session cookie.

### `POST /api/tasks`

Creates a new task for the logged-in user.

**Body**
| Field | Type | Required | Default |
|-------|------|----------|---------|
| title | string | ✅ | — |
| description | string | ❌ | null |
| priority | `LOW` \| `MEDIUM` \| `URGENT` | ❌ | `MEDIUM` |
| dueDate | ISO 8601 string | ❌ | null |

**Response `201`** — returns the created task object.

---

### `GET /api/tasks`

Returns all tasks for the logged-in user. Supports search and sorting via query params.

**Query Params**
| Param | Type | Description |
|-------|------|-------------|
| search | string | Filter tasks by title (case-insensitive) |
| sortBy | `priority` \| `dueDate` \| `createdAt` | Field to sort by |
| order | `asc` \| `desc` | Sort direction (default: `asc`) |

**Examples**
```
GET /api/tasks
GET /api/tasks?search=homework
GET /api/tasks?sortBy=priority&order=desc
GET /api/tasks?sortBy=dueDate&order=asc
```

**Response `200`** — returns an array of task objects.

---

### `PATCH /api/tasks/[id]`

Updates one or more fields on an existing task. All fields are optional — only send what you want to change.

**URL Param**
| Param | Description |
|-------|-------------|
| id | The task's `cuid` |

**Body**
| Field | Type |
|-------|------|
| title | string |
| description | string \| null |
| priority | `LOW` \| `MEDIUM` \| `URGENT` |
| dueDate | ISO 8601 string \| null |
| done | boolean |

**Example — mark a task as done**
```json
{ "done": true }
```

**Response `200`** — returns the updated task object.

---

### `DELETE /api/tasks/[id]`

Deletes a task by ID.

**URL Param**
| Param | Description |
|-------|-------------|
| id | The task's `cuid` |

**Response `200`**
```json
{ "message": "Task deleted" }
```

---

## Error Responses

| Status | Meaning |
|--------|---------|
| 400 | Bad request — missing or invalid fields |
| 401 | Unauthorized — no session cookie |
| 404 | Task not found or doesn't belong to you |
| 409 | Conflict — email already in use (signup) |
| 500 | Server error |