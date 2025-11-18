📁 User Directory Table — React + Tailwind CSS

A professional, responsive user directory web application built using React (Vite) and Tailwind CSS v3.
This app fetches user data from the public API:

🔗 https://reqres.in/api/users

It includes powerful UI features such as search, sorting, filtering, pagination, animations, and a Google-style loading spinner.

🚀 Features
✅ 1. Fetch & Display Users

Users are automatically fetched from API

Displayed in a clean, responsive table

🔍 2. Search

Search by first name, last name, or email

Live, instant search

↕️ 3. Sorting

You can sort users by:

First Name

Email

🧹 4. Filtering

Includes:

Email domain filter

First-letter name filter

📄 5. Pagination

Handles multiple API pages

Next & Previous buttons

Smooth UI animations

🎨 6. Professional UI

Tailwind CSS v3

Soft gradients

Smooth hover effects

Card animations using Tailwind transitions

🔄 7. Loading Spinner

Google-style minimal loader

Clean & smooth fade-in animation

📱 8. Fully Responsive

Works on mobile, tablet, laptop, and large screens

🌐 Deployment Ready

Designed for Vercel / Netlify hosting

📦 Tech Stack
Technology	Purpose
React (Vite)	Fast frontend environment
Tailwind CSS v3	Modern, utility-first styling
Axios / Fetch API	API calls
Lucide Icons / Heroicons	Icon support
Vercel / Netlify	Deployment
🛠️ Installation
1. Clone Repository
git clone https://github.com/<your-username>/<your-repo-name>.git
cd <your-repo-name>

2. Install Dependencies
npm install

3. Start Development Server
npm run dev

📂 Folder Structure
frontend/
 ├── src/
 │    ├── components/
 │    │     ├── UserTable.jsx
 │    │     ├── SearchBar.jsx
 │    │     ├── Pagination.jsx
 │    │     ├── Loader.jsx
 │    │
 │    ├── App.jsx
 │    ├── main.jsx
 │    ├── index.css
 │
 ├── public/
 ├── package.json
 ├── tailwind.config.js
 ├── README.md

⚙️ Tailwind Setup (For Reference)
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p


Update tailwind.config.js:

export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: { extend: {} },
  plugins: [],
}


Add to src/index.css:

@tailwind base;
@tailwind components;
@tailwind utilities;

🚀 Deployment
Deploy on Vercel
npm run build
vercel deploy

Deploy on Netlify
npm run build
drag and drop dist/ into Netlify

📸 Screenshots (Optional)

Add UI screenshots here if needed.

🤝 Contribution

Feel free to submit issues or pull requests!

📝 License

This project is open-source and free to use.