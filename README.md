<div align="center">

# 📈 Zerodha Clone

### A full-stack trading platform clone — public site, live dashboard, and a secure API, built on the MERN stack.

[![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)
[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev/)
[![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![JWT](https://img.shields.io/badge/JWT-Auth-black?style=for-the-badge&logo=jsonwebtokens&logoColor=white)](https://jwt.io/)

[![Deployed with Vercel](https://img.shields.io/badge/Frontend-Vercel-000000?style=flat-square&logo=vercel)](https://vercel.com)
[![Deployed with Render](https://img.shields.io/badge/Backend-Render-46E3B7?style=flat-square&logo=render)](https://render.com)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](LICENSE)

[Live Demo](https://zerodha-frontend-psi.vercel.app/) · [Report a Bug](../../issues) · [Request a Feature](../../issues)

</div>

---

## ✨ Overview

This project recreates the **Zerodha** trading experience as three coordinated applications: a public marketing site where users sign up, a real trading **dashboard** that's gated behind authentication, and an **Express + MongoDB API** that powers both. It's built to mirror how real fintech products are actually architected — separate concerns, separate deployments, one shared identity layer.

> 🔐 Authentication isn't bolted on — it's the backbone. Every dashboard route, every order, every holding is only ever served to a verified, logged-in user.

---

## 🧩 Features

- 🔑 **Real authentication** — signup & login with bcrypt-hashed passwords, sessions handled via JWT in an httpOnly cookie (immune to XSS token theft)
- 🛡️ **Protected routes** — the dashboard verifies your session before rendering anything; the API rejects unauthenticated requests outright
- 📊 **Live trading dashboard** — holdings, positions, order history, funds, and a watchlist, with chart visualizations (Chart.js)
- 💸 **Order placement** — a buy action window that posts real orders to the backend and persists them in MongoDB
- 🌐 **Public marketing site** — home, about, pricing, products, and support pages, fully routed with React Router
- 🚪 **Clean logout flow** — clears the session cookie server-side, not just client-side state
- ☁️ **Production-ready deploy config** — environment-driven CORS, cookie security flags, and API URLs across all three apps

---

## 🏗️ Architecture

```
                       ┌─────────────────────┐
                       │   MongoDB Atlas      │
                       │   (Users, Holdings,  │
                       │   Positions, Orders) │
                       └──────────▲───────────┘
                                  │
                       ┌──────────┴───────────┐
                       │   Backend (Express)   │
                       │   JWT • bcrypt • CORS │
                       └────▲─────────────▲────┘
                            │             │
              httpOnly      │             │      httpOnly
              auth cookie   │             │      auth cookie
                            │             │
              ┌─────────────┴───┐   ┌─────┴─────────────┐
              │  frontend (3000) │   │  dashboard (3001)  │
              │  Public site,    │──▶│  Protected trading │
              │  Signup / Login  │   │  dashboard          │
              └──────────────────┘   └─────────────────────┘
```

Signup/login on the public site sets the auth cookie → the browser carries it to the dashboard on every API call → the dashboard verifies it on load and redirects back to `/login` if it's missing or invalid.

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| **Frontend & Dashboard** | React, React Router, Axios, Chart.js, Material UI |
| **Backend** | Node.js, Express, Mongoose |
| **Database** | MongoDB (Atlas) |
| **Auth** | JWT, bcrypt, httpOnly cookies |
| **Hosting** | Render (API) · Vercel (frontend & dashboard) |

---

## 📂 Project Structure

```
zerodha/
├── Backend/                 # Express API
│   ├── models/               # Mongoose models (User, Holdings, Positions, Orders)
│   ├── schemas/               # Mongoose schemas
│   ├── routes/                 # Auth routes (signup, login, logout, me)
│   ├── middleware/              # JWT verification middleware
│   ├── utils/                    # Token/cookie helpers
│   └── index.js                   # App entry point
│
├── frontend/                # Public marketing site
│   └── src/
│       ├── landing_page/         # Home, About, Pricing, Products, Support
│       │   ├── signup/            # Signup flow
│       │   └── login/              # Login flow
│       └── api/                      # Shared axios instance
│
└── dashboard/                # Trading dashboard (protected)
    └── src/
        ├── component/              # Holdings, Positions, Orders, Funds, etc.
        └── api/                       # Shared axios instance
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18+ recommended)
- A MongoDB Atlas cluster (or local MongoDB)
- npm

### 1. Clone the repo
```bash
git clone https://github.com/<your-username>/zerodha-clone.git
cd zerodha-clone
```

### 2. Set up the Backend
```bash
cd Backend
npm install
cp .env.example .env   # fill in MONGO_URL and JWT_SECRET
npm run dev             # nodemon, restarts on file changes
```

### 3. Set up the Frontend (public site — port 3000)
```bash
cd frontend
npm install
cp .env.example .env
npm start
```

### 4. Set up the Dashboard (port 3001)
```bash
cd dashboard
npm install
cp .env.example .env
npm start
```

### 5. Try it
1. Visit `http://localhost:3000/signup` and create an account
2. You'll be redirected to `http://localhost:3001` — already logged in
3. Visiting the dashboard while logged out bounces you back to `/login`

---

## 🔐 Environment Variables

<details>
<summary><strong>Backend/.env</strong></summary>

| Variable | Description |
|---|---|
| `MONGO_URL` | MongoDB connection string |
| `JWT_SECRET` | Secret used to sign auth tokens |
| `NODE_ENV` | `development` locally, `production` when deployed |
| `CLIENT_URLS` | Comma-separated list of allowed frontend origins |

</details>

<details>
<summary><strong>frontend/.env</strong></summary>

| Variable | Description |
|---|---|
| `REACT_APP_API_URL` | URL of the deployed Backend |
| `REACT_APP_DASHBOARD_URL` | URL of the deployed Dashboard |

</details>

<details>
<summary><strong>dashboard/.env</strong></summary>

| Variable | Description |
|---|---|
| `REACT_APP_API_URL` | URL of the deployed Backend |
| `REACT_APP_LOGIN_URL` | URL of the Frontend's login page |

</details>

> ⚠️ Never commit real `.env` files — only the `.env.example` templates are tracked in this repo.

---

## ☁️ Deployment

| App | Platform | Notes |
|---|---|---|
| Backend | [Render](https://render.com) | Set root directory to `Backend`, start command `npm start` |
| Frontend | [Vercel](https://vercel.com) | Framework preset: Create React App, root directory `frontend` |
| Dashboard | [Vercel](https://vercel.com) | Framework preset: Create React App, root directory `dashboard` |

In production, the auth cookie is sent with `SameSite=None; Secure`, which requires HTTPS — all three platforms above provide this by default.

---

## 🗺️ Roadmap

- [ ] Password reset / forgot password flow
- [ ] Email verification on signup
- [ ] Rate limiting on auth routes
- [ ] Role-based access (admin vs regular user)
- [ ] Real-time price updates via WebSockets

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome.

```bash
git checkout -b feature/your-feature
git commit -m "Add your feature"
git push origin feature/your-feature
```
Then open a Pull Request. ⭐ Star the repo if this project helped you learn something!

---

## 📄 License

This project is licensed under the [MIT License](LICENSE) — free to use, modify, and build on.

---

<div align="center">

Built with ☕ and a lot of debugging.

</div>
