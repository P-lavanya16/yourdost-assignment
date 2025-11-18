import React from "react";
import UserTable from "./Components/UserTable.jsx";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-slate-100 to-sky-50">
      <header className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-gradient-to-r from-indigo-500 to-pink-500 flex items-center justify-center text-white font-bold shadow-lg">
            YD
          </div>
          <div>
            <h1 className="text-2xl font-semibold text-slate-800">User Directory</h1>
            <p className="text-sm text-slate-500">Fetch, search, sort, filter and paginate users (reqres.in)</p>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 pb-12">
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-6">
          <UserTable />
        </div>
      </main>

      <footer className="text-center text-sm text-slate-400 py-6">
        Built with ❤️ · Tailwind v3 · Vite
      </footer>
    </div>
  );
}
