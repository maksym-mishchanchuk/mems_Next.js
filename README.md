# Meme Directory App

A responsive React application built using [HeroUI](https://www.heroui.com), styled with Tailwind CSS, and deployed on [Railway](https://railway.app). The app showcases a collection of popular memes with two different views: a table and a card list.

## 🔗 Live Demo

[Access the deployed app here](https://your-railway-project-url.railway.app)

---

## 📋 Features

- ✅ 10 memes displayed in two formats: table and card list
- ✅ Separate static pages for each view
- ✅ Navigation between views via HeroUI `Navbar`
- ✅ Editable meme details via HeroUI `Modal` and `Input` components
- ✅ Data is persisted in browser cookies
- ✅ Responsive layout optimized for mobile and desktop
- ✅ Full validation of meme fields

---

## 📄 Pages Overview

### 1. **Table View**
- Each meme is a row in a HeroUI `Table`
- Columns:
    - ID (read-only)
    - Name
    - Number of Likes
    - Actions (with `Edit` button)
- Clicking `Edit` opens a HeroUI `Modal` with a form to edit meme fields

### 2. **Card View**
- Grid of HeroUI `Card` components (4 columns on desktop, 1 on mobile)
- Each card includes:
    - Meme image
    - Meme title
    - Like count
    - External link to the meme source

---

## 🧠 Meme Schema

| Field       | Type     | Notes                                      |
|-------------|----------|--------------------------------------------|
| `id`        | number   | Auto-generated, read-only                  |
| `title`     | string   | Required, 3–100 characters                 |
| `imageUrl`  | string   | Required, must be a valid `.jpg` URL       |
| `likes`     | number   | Random number between 0–99                 |
| `link`      | string   | Required, URL to meme source               |

---

## ⚙️ Tech Stack

- [React](https://reactjs.org)
- [Next.js](https://nextjs.org)
- [Tailwind CSS](https://tailwindcss.com)
- [HeroUI](https://www.heroui.com)
- [js-cookie](https://www.npmjs.com/package/js-cookie)
- [Railway DEMO](https://memsnextjs-production.up.railway.app/list) for deployment

---

## 🚀 How to Run Locally

1. Clone the repo:

```bash
git clone https://github.com/maksym-mishchanchuk/meme-directory.git
cd meme-directory

