# 🌸 Flora Cycle

> Turning Sacred Flowers Into Sustainable Futures

Flora Cycle connects temples and flower vendors to collect discarded sacred blooms and transform them into eco-friendly products — incense sticks, natural dyes, compost, and handmade goods.

---

## 📁 Project Structure

```
Flora Cycle/
├── flora-cycle/              → React Frontend
│   └── src/
│       ├── pages/
│       │   ├── FloraCycleHero.jsx    → Landing/Hero page
│       │   ├── LoginPage.jsx         → Sign in page
│       │   └── RegisterPage.jsx      → Create account page
│       ├── api.js                    → All API calls to backend
│       ├── authStyles.js             → Shared CSS for Login & Register
│       └── App.js                    → Routes setup
│
└── flora-cycle-api/          → Node.js + Express Backend
    ├── models/
    │   ├── Temple.js                 → MongoDB schema for temples
    │   └── Vendor.js                 → MongoDB schema for vendors
    ├── routes/
    │   ├── auth.js                   → /register and /login routes
    │   └── protected.js              → Dashboard routes (JWT protected)
    ├── middleware/
    │   └── authMiddleware.js         → JWT token verification
    ├── server.js                     → Main Express server
    └── .env                          → Environment variables (NOT on GitHub)
```

---

## ✅ What's Already Done

- [x] Hero / Landing page with 3D flower animation
- [x] Register page — Temple & Vendor forms with all fields
- [x] Login page — Email/Phone + Password with role toggle
- [x] Backend — Express server with MongoDB Atlas connected
- [x] Auth — Register & Login with bcrypt password hashing
- [x] JWT authentication — token issued on login/register
- [x] MongoDB models — Temple and Vendor schemas
- [x] Protected routes — JWT middleware working
- [x] Frontend connected to backend via `api.js`

---

## 🔧 How to Run Locally

### Step 1 — Clone the repo
```bash
git clone https://github.com/YOUR_USERNAME/flora-cycle.git
cd flora-cycle
```

### Step 2 — Setup Backend
```bash
cd flora-cycle-api
npm install
```

Create a `.env` file inside `flora-cycle-api/` with:
```
PORT=5000
MONGO_URI=mongodb+srv://YOUR_USERNAME:YOUR_PASSWORD@cluster0.yzstjc9.mongodb.net/floracycle?retryWrites=true&w=majority&appName=Cluster0
JWT_SECRET=your_secret_key_here
```

> ⚠️ Ask the project owner for the actual MONGO_URI and JWT_SECRET values on WhatsApp/email. Never commit `.env` to GitHub.

Run the backend:
```bash
node server.js
```
You should see:
```
✅ MongoDB connected
🚀 Server running on http://localhost:5000
```

### Step 3 — Setup Frontend
```bash
cd ../flora-cycle
npm install
npm start
```

App opens at `http://localhost:3000`

---

## 🔐 How Authentication Works

```
Register → Password hashed with bcrypt → Saved to MongoDB → JWT token issued
Login    → Password compared → JWT token issued → Stored in localStorage
Protected pages → Token sent in request header → Server verifies → Access granted
```

Tokens are stored in `localStorage` under keys:
- `fc_token` — JWT token
- `fc_user` — user info (id, name, email, city)
- `fc_role` — `"temple"` or `"vendor"`

---

## 🚧 What Needs to Be Built Next

### 🏛️ Temple Dashboard (`/dashboard/temple`)
- Overview of total flowers donated (kg)
- Upcoming pickup schedule
- List of assigned vendors
- Impact stats (CO2 saved, products made)
- Edit profile

### ♻️ Vendor Dashboard (`/dashboard/vendor`)
- Total flowers collected (kg)
- List of assigned temples with addresses
- Pickup requests — accept / reject
- Products made from collected flowers
- Edit profile

### 📦 Pickup Management
- Temple raises a pickup request (flower type, quantity, date)
- Vendor sees open requests in their city
- Vendor accepts → status updates to "Scheduled"
- After pickup → status updates to "Completed"
- MongoDB model needed: `Pickup.js`

### 🗺️ Map View (Future)
- Show temples and vendors on a map using Google Maps API
- Filter by city

### 📊 Impact Dashboard (Future)
- Total kg collected platform-wide
- Products generated
- CO2 offset estimate

### 📱 Notifications (Future)
- Email notification when pickup is scheduled
- Use Nodemailer in the backend

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React.js |
| Styling | CSS-in-JS (authStyles.js) + inline styles |
| Backend | Node.js + Express |
| Database | MongoDB Atlas |
| Auth | JWT + bcryptjs |
| 3D Animation | Three.js |
| Routing | React Router DOM |

---

## 📡 API Endpoints

| Method | Route | Access | Description |
|---|---|---|---|
| POST | `/api/auth/register` | Public | Register temple or vendor |
| POST | `/api/auth/login` | Public | Login and get JWT token |
| GET | `/api/dashboard` | Protected | Get logged-in user's data |
| GET | `/api/temple/profile` | Temple only | Get temple profile |
| GET | `/api/vendor/profile` | Vendor only | Get vendor profile |

---

## 🔑 Where to Add New Things

### Adding a new page
1. Create `src/pages/YourPage.jsx`
2. Add route in `src/App.js`:
```jsx
<Route path="/your-path" element={<YourPage />} />
```

### Adding a new API call
1. Add the function in `src/api.js`
2. Import and call it in your page

### Adding a new backend route
1. Create `flora-cycle-api/routes/yourRoute.js`
2. Register it in `server.js`:
```js
const yourRoutes = require("./routes/yourRoute");
app.use("/api", yourRoutes);
```

### Adding a new MongoDB model
1. Create `flora-cycle-api/models/YourModel.js`
2. Import it in the route file that needs it

---

## ⚠️ Important Notes

- Never push `.env` to GitHub — it contains database credentials
- Always run **both** servers when developing (backend on 5000, frontend on 3000)
- The `flower.png` file goes in `flora-cycle/public/` — not tracked by Git if large
- All shared auth styles live in `src/authStyles.js` — edit there, not in individual pages

---

## 👥 Team

| Name | Role |
|---|---|
| Shruti | Full Stack — Hero page, Auth, Backend, Database |
| [Teammate 2] | Add your name and role |
| [Teammate 3] | Add your name and role |

---

*Built with 💜 for a greener India*