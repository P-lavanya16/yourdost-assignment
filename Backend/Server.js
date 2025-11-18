import express from "express";
import fs from "fs-extra";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

const FILE_PATH = "./todos.json";

async function readTodos() {
  try {
    const data = await fs.readFile(FILE_PATH, "utf-8");
    return JSON.parse(data);
  } catch {
    return [];
  }
}

async function writeTodos(todos) {
  await fs.writeFile(FILE_PATH, JSON.stringify(todos, null, 2));
}

app.get("/todos", async (req, res) => {
  const todos = await readTodos();
  res.json(todos);
});

app.post("/todos", async (req, res) => {
  const { title, completed = false } = req.body;
  if (!title || typeof title !== "string") {
    return res.status(400).json({ error: "Invalid title" });
  }
  const todos = await readTodos();
  const newTodo = { id: Date.now(), title, completed };
  todos.push(newTodo);
  await writeTodos(todos);
  res.status(201).json(newTodo);
});

app.put("/todos/:id", async (req, res) => {
  const id = Number(req.params.id);
  const { title, completed } = req.body;
  const todos = await readTodos();
  const index = todos.findIndex((t) => t.id === id);
  if (index === -1) return res.status(404).json({ error: "Todo not found" });
  if (title !== undefined && typeof title !== "string")
    return res.status(400).json({ error: "Invalid title" });
  if (completed !== undefined && typeof completed !== "boolean")
    return res.status(400).json({ error: "Invalid completed value" });
  todos[index] = { ...todos[index], ...req.body };
  await writeTodos(todos);
  res.json(todos[index]);
});

app.delete("/todos/:id", async (req, res) => {
  const id = Number(req.params.id);
  const todos = await readTodos();
  const filtered = todos.filter((t) => t.id !== id);
  if (filtered.length === todos.length)
    return res.status(404).json({ error: "Todo not found" });
  await writeTodos(filtered);
  res.json({ message: "Todo deleted" });
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
