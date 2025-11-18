📌 To-Do CRUD API (Backend)

A simple backend application built using Node.js + Express that allows users to create, read, update, and delete to-do items.
Data is stored in a local JSON file — no database required.

🚀 Features

Create a new todo

Get all todos

Update a todo

Delete a todo

Data stored in todos.json

Input validation

completed: true/false field

Easy to run and deploy

📂 Project Structure
todo-api/
│── server.js
│── todos.json
│── package.json
└── README.md

🛠️ Technologies Used

Node.js

Express.js

fs-extra (to read/write JSON)

CORS

⚙️ How to Install & Run (Step-by-Step)
1️⃣ Install Node.js

Download from: https://nodejs.org

(You must have Node + npm installed)

Check versions:

node -v
npm -v

2️⃣ Clone or Create Project Folder
mkdir todo-api
cd todo-api

3️⃣ Initialize npm
npm init -y


This creates package.json.

4️⃣ Install Required Packages
npm install express fs-extra cors

5️⃣ Create Required Files
✔ Create server.js

Paste the backend code here.

✔ Create todos.json
[]

6️⃣ Start the Server
node server.js


If successful, you will see:

Server running on port 5000


Server runs at:

http://localhost:5000

📡 API Endpoints
✔ GET /todos

Fetch all todos
Example Response

[
  {
    "id": 16978998712,
    "title": "Learn Backend",
    "completed": false
  }
]

✔ POST /todos

Create a todo
Request Body

{
  "title": "Learn Express",
  "completed": false
}

✔ PUT /todos/:id

Update an existing todo
Request Body

{
  "title": "Updated Title",
  "completed": true
}

✔ DELETE /todos/:id

Delete a todo by ID
Response

{
  "message": "Todo deleted"
}

📝 Example todo.json file
[]


This file automatically updates whenever you create or modify todos.