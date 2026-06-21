# Zerodha Clone

A three-app project: a public marketing site (`frontend/`), a trading dashboard
(`dashboard/`), and an Express + MongoDB API (`Backend/`).

Authentication: email/password, hashed with bcrypt, sessions handled via a
JWT stored in an **httpOnly cookie** issued by the Backend. The Dashboard
checks that cookie on load and bounces unauthenticated users to the
Frontend's `/login` page.

## Project layout

```
zerodha/
├── Backend/      Express API + MongoDB (auth, holdings, positions, orders)
├── dashboard/    React trading dashboard (protected, requires login)
└── frontend/     React public site (home, signup, login, about, pricing...)
```

## 1. Local setup

### Backend

```bash
cd Backend
npm install
cp .env.example .env   # then fill in MONGO_URL and JWT_SECRET
npm start
```

Required `.env` values:
- `MONGO_URL` — your MongoDB connection string
- `JWT_SECRET` — any long random string (e.g. `openssl rand -hex 32`)
- `CLIENT_URLS` — comma-separated origins allowed to call the API (defaults
  to `http://localhost:3000,http://localhost:3001`)

### Frontend (public site, port 3000)

```bash
cd frontend
npm install
cp .env.example .env
npm start
```

### Dashboard (port 3001 — must differ from frontend)

```bash
cd dashboard
npm install
cp .env.example .env
npm start
```

CRA reads `PORT` from `.env`/the shell, so the dashboard's `.env` already
sets `PORT=3001`.

### Try it

1. Visit `http://localhost:3000/signup`, create an account.
2. You're redirected to `http://localhost:3001` (the dashboard) — already
   logged in, since signup sets the auth cookie.
3. Visiting the dashboard directly while logged out redirects you to
   `http://localhost:3000/login`.
4. Logout lives in the dashboard's profile menu (bottom-left avatar).

## 2. Push to GitHub

This is now a single repo (the old per-app `.git` folders were removed).
From the project root:

```bash
git init
git add .
git commit -m "Add authentication"
git branch -M main
git remote add origin https://github.com/<your-username>/<repo-name>.git
git push -u origin main
```

`.env` files are gitignored — only `.env.example` files get committed.
Double check with `git status` that no `.env` file is staged before you
commit.

## 3. Deploying

Three separate apps need three separate deployments:

- **Backend** → a Node host that supports long-running servers, e.g.
  Render, Railway, or Fly.io. Set `MONGO_URL`, `JWT_SECRET`, `NODE_ENV=production`,
  and `CLIENT_URLS` (your deployed frontend + dashboard URLs) as environment
  variables there.
- **Frontend** and **Dashboard** → static hosts for CRA builds, e.g. Vercel
  or Netlify. Set `REACT_APP_API_URL` to your deployed Backend URL, and
  `REACT_APP_DASHBOARD_URL` (frontend) / `REACT_APP_LOGIN_URL` (dashboard)
  to each other's deployed URLs.

Important: in production the frontend/dashboard and the backend will be on
different domains, so the auth cookie needs `SameSite=None; Secure` — the
code already does this automatically when `NODE_ENV=production`, but it
requires the Backend to be served over **HTTPS** (all the hosts above give
you this by default).

If you'd like, I can also generate a `render.yaml` / Vercel config, or walk
through the actual deploy step by step once you've picked hosts.
