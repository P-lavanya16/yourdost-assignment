import React, { useEffect, useMemo, useState } from "react";
import LoadingSpinner from "./Components/LoadingSpinner.jsx";

export default function UserTable() {
  const [users, setUsers] = useState([]); // all aggregated users
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState("");
  const [filterLetter, setFilterLetter] = useState("");
  const [sortKey, setSortKey] = useState(null); // "first_name" or "email"
  const [sortDir, setSortDir] = useState("asc");
  const [page, setPage] = useState(1);
  const pageSize = 6;

  useEffect(() => {
    // fetch all pages (reqres small)
    let canceled = false;
    async function fetchAll() {
      setLoading(true);
      try {
        const r1 = await fetch("https://reqres.in/api/users?page=1").then(r => r.json());
        const pages = r1.total_pages || 1;
        let all = [...r1.data];
        for (let p = 2; p <= pages; p++) {
          const rr = await fetch(`https://reqres.in/api/users?page=${p}`).then(r => r.json());
          all = all.concat(rr.data);
        }
        if (!canceled) {
          setUsers(all);
          setPage(1);
        }
      } catch (e) {
        console.error("fetch error", e);
      } finally {
        if (!canceled) setLoading(false);
      }
    }
    fetchAll();
    return () => { canceled = true; };
  }, []);

  const processed = useMemo(() => {
    let arr = users.slice();

    if (query.trim()) {
      const q = query.toLowerCase();
      arr = arr.filter(u => (`${u.first_name} ${u.last_name} ${u.email}`).toLowerCase().includes(q));
    }

    if (filterLetter) {
      arr = arr.filter(u => u.first_name.toLowerCase().startsWith(filterLetter.toLowerCase()));
    }

    if (sortKey) {
      arr.sort((a,b) => {
        const va = (a[sortKey] || "").toLowerCase();
        const vb = (b[sortKey] || "").toLowerCase();
        if (va < vb) return sortDir === "asc" ? -1 : 1;
        if (va > vb) return sortDir === "asc" ? 1 : -1;
        return 0;
      });
    }

    return arr;
  }, [users, query, filterLetter, sortKey, sortDir]);

  const totalPages = Math.max(1, Math.ceil(processed.length / pageSize));
  const pageData = processed.slice((page-1)*pageSize, page*pageSize);

  useEffect(() => {
    if (page > totalPages) setPage(totalPages);
  }, [totalPages]);

  function toggleSort(key) {
    if (sortKey === key) {
      setSortDir(prev => prev === "asc" ? "desc" : "asc");
    } else {
      setSortKey(key);
      setSortDir("asc");
    }
  }

  return (
    <div>
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
        <div className="flex items-center gap-3">
          <input
            className="px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring focus:border-blue-300 w-[240px]"
            placeholder="Search by name or email..."
            value={query}
            onChange={(e) => { setQuery(e.target.value); setPage(1); }}
          />

          <select className="px-3 py-2 border rounded-lg" value={filterLetter} onChange={e => { setFilterLetter(e.target.value); setPage(1); }}>
            <option value="">All letters</option>
            {"ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").map(l => <option key={l} value={l}>{l}</option>)}
          </select>
        </div>

        <div className="flex items-center gap-2">
          <button onClick={() => toggleSort("first_name")} className="px-3 py-2 bg-white border rounded-lg hover:shadow transition">
            Sort First {sortKey === "first_name" ? (sortDir==="asc" ? "↑":"↓") : ""}
          </button>
          <button onClick={() => toggleSort("email")} className="px-3 py-2 bg-white border rounded-lg hover:shadow transition">
            Sort Email {sortKey === "email" ? (sortDir==="asc" ? "↑":"↓") : ""}
          </button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full table-auto border-separate [border-spacing:0_.5rem]">
          <thead>
            <tr className="text-left text-sm text-slate-500">
              <th className="pl-4">User</th>
              <th>First</th>
              <th>Last</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr><td colSpan="4" className="py-12"><LoadingSpinner /></td></tr>
            ) : pageData.length === 0 ? (
              <tr><td colSpan="4" className="py-6 text-center text-slate-500">No results</td></tr>
            ) : pageData.map(u => (
              <tr key={u.id} className="bg-white rounded-xl shadow-sm hover:shadow-md transition row-appear">
                <td className="pl-4 py-3">
                  <div className="flex items-center gap-3">
                    <img src={u.avatar} alt="" className="w-12 h-12 rounded-full object-cover border" />
                    <div className="text-sm">
                      <div className="font-medium text-slate-700">{u.first_name} {u.last_name}</div>
                      <div className="text-xs text-slate-400">ID: {u.id}</div>
                    </div>
                  </div>
                </td>
                <td className="py-3">{u.first_name}</td>
                <td className="py-3">{u.last_name}</td>
                <td className="py-3 text-slate-600">{u.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="mt-4 flex items-center justify-between gap-4">
        <div className="text-sm text-slate-500">
          Showing <strong>{Math.min((page-1)*pageSize + 1, processed.length)}</strong> - <strong>{Math.min(page*pageSize, processed.length)}</strong> of <strong>{processed.length}</strong>
        </div>

        <div className="flex items-center gap-2">
          <button disabled={page === 1} onClick={() => setPage(p => Math.max(1, p-1))}
            className={`px-3 py-1 rounded-lg border ${page===1 ? "opacity-50 cursor-not-allowed" : "hover:shadow"}`}>
            Prev
          </button>

          {Array.from({length: totalPages}).map((_, idx) => {
            const p = idx + 1;
            return (
              <button key={p} onClick={() => setPage(p)} className={`px-3 py-1 rounded-lg border ${p === page ? "bg-indigo-500 text-white" : "bg-white"}`}>
                {p}
              </button>
            );
          })}

          <button disabled={page === totalPages} onClick={() => setPage(p => Math.min(totalPages, p+1))}
            className={`px-3 py-1 rounded-lg border ${page===totalPages ? "opacity-50 cursor-not-allowed" : "hover:shadow"}`}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

