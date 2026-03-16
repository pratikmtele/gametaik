# 🎮 GameTalk — Gaming Forum Platform

A Reddit-style gaming community platform where gamers can create forums, post discussions, review games, vote on content, and engage in nested comment threads.

Built with the **MERN Stack** (MongoDB, Express.js, React.js, Node.js).

---

## 🚀 Live Demo

> Coming soon...

---

## 📸 Screenshots

> Coming soon...

---

## ✨ Features

- 🔐 **Authentication** — Register, login with JWT-based auth
- 🗂️ **Forums** — Create and browse game-specific forums (like subreddits)
- 📝 **Posts** — Create, read, and delete posts inside forums
- ⬆️ **Voting** — Upvote / downvote posts and comments
- 💬 **Nested Comments** — Threaded comment replies
- 👤 **User Profiles** — View user activity, posts, and stats
- 🔍 **Search** — Search posts and forums by keyword
- 🛡️ **Admin Panel** — Manage forums and moderate content

---

## 🛠️ Tech Stack

### Frontend

| Tech             | Usage                     |
| ---------------- | ------------------------- |
| React.js         | UI framework              |
| React Router DOM | Client-side routing       |
| Axios            | HTTP requests             |
| React Query      | Server state management   |
| React Icons      | Icon library              |
| Timeago.js       | Human-readable timestamps |

### Backend

| Tech       | Usage                 |
| ---------- | --------------------- |
| Node.js    | Runtime               |
| Express.js | Web framework         |
| MongoDB    | Database              |
| Mongoose   | ODM for MongoDB       |
| JWT        | Authentication        |
| Bcrypt.js  | Password hashing      |
| Multer     | File uploads          |
| Helmet     | HTTP security headers |
| CORS       | Cross-origin requests |
| Dotenv     | Environment variables |

---

## 📁 Project Structure

```
gametalk/
├── client/                       # React frontend
│   ├── public/
│   └── src/
│       ├── components/           # Reusable UI components
│       ├── pages/                # Route-level pages
│       ├── context/              # Auth context
│       └── utils/                # Axios instance, helpers
│
├── server/                       # Node + Express backend
│   ├── src/
│   │   ├── config/               # db.js — MongoDB connection
│   │   ├── controllers/          # Business logic
│   │   ├── middleware/           # Auth, role-based access
│   │   ├── models/               # Mongoose schemas
│   │   ├── routes/               # API route definitions
│   │   └── utils/                # Helper functions
│   ├── .env                      # Environment variables
│   ├── .gitignore
│   ├── package.json
│   └── server.js                 # Entry point
│
└── README.md
```

---

## ⚙️ Getting Started

### Prerequisites

- Node.js v18+
- MongoDB Atlas account (or local MongoDB)
- Git

### 1. Clone the Repository

```bash
git clone https://github.com/pratikmtele/gametaik.git
cd gametalk
```

### 2. Setup Backend

```bash
cd server
npm install
```

Create a `.env` file inside `/server`:

```env
PORT=5000
MONGO_URI=your_mongodb_atlas_connection_string
JWT_SECRET=your_secret_key
```

Run the server:

```bash
npm run dev
```

### 3. Setup Frontend

```bash
cd ../client
npm install
npm start
```

---

## 🔌 API Endpoints

### Auth

| Method | Endpoint             | Description       |
| ------ | -------------------- | ----------------- |
| POST   | `/api/auth/register` | Register new user |
| POST   | `/api/auth/login`    | Login user        |

### Forums

| Method | Endpoint            | Description              |
| ------ | ------------------- | ------------------------ |
| GET    | `/api/forums`       | Get all forums           |
| POST   | `/api/forums`       | Create forum (admin)     |
| GET    | `/api/forums/:name` | Get single forum + posts |

### Posts

| Method | Endpoint         | Description                 |
| ------ | ---------------- | --------------------------- |
| GET    | `/api/posts`     | Get all posts (home feed)   |
| POST   | `/api/posts`     | Create post (auth required) |
| GET    | `/api/posts/:id` | Get single post + comments  |
| DELETE | `/api/posts/:id` | Delete post (owner/admin)   |

### Comments

| Method | Endpoint                  | Description      |
| ------ | ------------------------- | ---------------- |
| POST   | `/api/comments`           | Add comment      |
| POST   | `/api/comments/:id/reply` | Reply to comment |

### Votes

| Method | Endpoint     | Description        |
| ------ | ------------ | ------------------ |
| POST   | `/api/votes` | Upvote or downvote |

### Users

| Method | Endpoint               | Description        |
| ------ | ---------------------- | ------------------ |
| GET    | `/api/users/:username` | Get public profile |

---

## 🗃️ Database Schema

```
Users       → username, email, password, avatar, bio, role
Forums      → name, description, banner, createdBy, memberCount
Posts       → title, body, image, forum, author, upvotes, downvotes, commentCount
Comments    → postId, author, body, parentComment, upvotes
Votes       → userId, targetId, targetType, voteType
```

---

## 🌿 Git Branching Strategy

```
main        → stable production-ready code only
dev         → active development
feature/xxx → individual feature branches
```

---

## 📋 Roadmap

- [x] Project setup & MongoDB connection
- [ ] Auth system (register, login, JWT)
- [ ] Forum CRUD
- [ ] Post CRUD
- [ ] Voting system
- [ ] Nested comments
- [ ] React frontend setup
- [ ] Home feed & forum pages
- [ ] Post detail & comment UI
- [ ] User profiles
- [ ] Search & filters
- [ ] Admin dashboard
- [ ] Real-time notifications (Socket.io)
- [ ] Karma/points system
- [ ] Dark / Light mode

---
