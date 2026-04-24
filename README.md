# 🏛️ GEM Staff Guide — Museum Web App

A role-based, mobile-first PWA for museum staff. Scan a QR code → pick your role → get a personalized view of exhibits, artifacts, and the floor map.

---

## 📁 Project Structure

```
museum-app/
│
├── index.html                  ← App shell (pages + navigation)
│
├── styles/
│   └── main.css                ← All styling (GEM-inspired theme)
│
├── data/
│   ├── roles.js                ← List of all job roles
│   └── exhibits/
│       ├── guide.js            ← Tour Guide data
│       ├── security.js         ← Security data
│       ├── curator.js          ← Curator data
│       └── [role].js           ← Add one file per new role
│
├── views/
│   ├── role-picker.js          ← Role selection logic
│   ├── home.js                 ← Home + exhibit + artifact rendering
│   └── map.js                  ← Floor map data & logic
│
└── assets/
    └── map/                    ← Drop your floor plan image here (future)
```

---

## ✏️ How to Add Content

### Add a new role
1. Open `data/roles.js` and add a new object to `ROLES`.
2. Create `data/exhibits/[roleid].js` — copy from `guide.js` as a template.
3. In `index.html`, add: `<script src="data/exhibits/[roleid].js"></script>`

### Edit exhibits or artifacts
Open the relevant file in `data/exhibits/` and replace all `[ REPLACE: ... ]` placeholders.

### Edit the floor map
Open `views/map.js` and edit the `MAP_FLOORS` array. Each room has:
- `id` — must match `mapRoom` in exhibit data for the "Show on Map" button to work
- `cls` — color class: `room-ancient`, `room-science`, `room-art`, `room-nature`, `room-neutral`
- `span2` — add to `cls` to make the room take 2 columns

---

## 🚀 Deploying to GitHub + Netlify (Free)

### Step 1 — Create a GitHub repository
1. Go to [github.com](https://github.com) → **New repository**
2. Name it `museum-app` (or anything you like)
3. Set it to **Public**, click **Create repository**

### Step 2 — Push your files
If you have Git installed, run in the project folder:
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/museum-app.git
git push -u origin main
```

Or use **GitHub Desktop** (no terminal needed):
1. Download at [desktop.github.com](https://desktop.github.com)
2. File → Add Local Repository → select this folder
3. Publish repository

### Step 3 — Connect to Netlify
1. Go to [netlify.com](https://netlify.com) → **Sign up with GitHub**
2. Click **Add new site → Import an existing project**
3. Choose **GitHub** → select your `museum-app` repo
4. Leave all settings as default → click **Deploy site**
5. Your app is live at a URL like: `https://amazing-name-123.netlify.app`

### Step 4 — Auto-deploy on every update
From now on, every time you push to GitHub:
```bash
git add .
git commit -m "Updated exhibit data"
git push
```
Netlify rebuilds automatically in ~30 seconds. ✅

### Step 5 — Generate QR codes
1. Go to [qr.io](https://qr.io) or [qr-code-generator.com](https://www.qr-code-generator.com)
2. Paste your Netlify URL
3. Download and print — one QR code covers all roles (the app asks on open)

---

## 🔧 Local Development (no server needed)

Just open `index.html` in your browser — it works without any build tools.

> **Note:** If you see script loading errors, use VS Code with the **Live Server** extension, or run:
> ```bash
> npx serve .
> ```

---

## 🎨 Customizing the Theme

All colors, fonts, and spacing are CSS variables in `styles/main.css` under `:root`. Key ones:

| Variable | Default | Purpose |
|----------|---------|---------|
| `--gold` | `#c9a84c` | Primary accent color |
| `--sand-deep` | `#1c1710` | Main background |
| `--font-display` | Cormorant Garamond | Headings |
| `--font-ui` | Josefin Sans | Body text |