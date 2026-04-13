# Contributing Guide

Welcome to the team! Read this before touching anything. It's short, promise.

---

## Branching strategy

We use a three-tier branch structure:

```
main        stable, deployable code only
└── dev     integration branch, all features merge here first
    └── your-branch  - where you actually do work
```

**Never push directly to `main` or `dev`.** Always work on your own branch and open a Pull Request. Never force merge to main or dev as well

---

## Getting started

```bash
# 1. Clone the repo
git clone https://github.com/kusoroadeolu/cos-202-grp1.git
cd cos-202-grp1
```

_Coming Soon_
---

## Starting a new feature

Always branch off `dev`, not `main`:

```bash
git checkout dev
git pull origin dev
git checkout -b your-name/feature-name
```

Branch naming examples:
- `victor/add-task-form`
- `kamsi/delete-task-endpoint`
- `dumebi/fix-login-bug`

---

## Committing your work

Try to keep commits short and descriptive:

```bash
git add .
git commit -m "add delete button to task card"
git push origin your-name/feature-name
```

---

## Opening a Pull Request

1. Go to the repo on GitHub
2. Click **"Compare & pull request"** on your branch
3. Set the base branch to **`dev`** (not `main`)
4. Write a short description of what you did
5. Tag the team lead (Kusoro Victor) for review

**Don't merge your own PR.** Wait for a review.

---

## Project structure
_Coming Soon..._

## GitHub basics (if you're new to this)

**Branch** — your own personal copy of the code where you make changes without affecting anyone else.

**Commit** — saving a snapshot of your changes with a message describing what you did. Think of it like hitting "save" with a label.

**Push** — uploading your commits from your computer to GitHub so others can see them.

**Pull Request (PR)** — a formal way of saying "hey, I finished my feature, can someone check it before we merge it in?" You open one on GitHub when your branch is ready. It lets the team see exactly what changed.

**Review** — when I look over your PR, leave comments, and either approve it or ask for changes. It's just a sanity check before code hits `dev`.

**Merge** — when the PR is approved, the changes get combined into `dev`. I'll handle this.

**Issue** — a GitHub to-do item. We use these to track features, bugs, or tasks. If you're assigned one, that's what you should be working on.

---

## Rules of thumb

- Pull from `dev` often so you don't fall behind: `git pull origin dev`
- One feature per branch - don't bundle unrelated changes
- If you break something, pls say something.
- When in doubt, ask in the group chat before doing anything drastic

---

*Questions? Ping the team lead (Kusoro Victor).*