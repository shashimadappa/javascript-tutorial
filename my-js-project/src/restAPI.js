const express = require('express');
const app = express();
const port = 3000;

app.use(express.json()); // for parsing JSON bodies

// Mock DB
let users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" }
];

////////////////////////////////////////////////////
// ✅ GET – Read All Users
app.get('/users', (req, res) => {
  res.json(users);
});

////////////////////////////////////////////////////
// ✅ GET – Read One User
app.get('/users/:id', (req, res) => {
  const user = users.find(u => u.id == req.params.id);
  if (!user) return res.status(404).json({ message: "User not found" });
  res.json(user);
});

////////////////////////////////////////////////////
// ✅ POST – Create a User
app.post('/users', (req, res) => {
  const newUser = { id: Date.now(), name: req.body.name };
  users.push(newUser);
  res.status(201).json(newUser);
});

////////////////////////////////////////////////////
// ✅ PUT – Update a User
app.put('/users/:id', (req, res) => {
  const user = users.find(u => u.id == req.params.id);
  if (!user) return res.status(404).json({ message: "User not found" });
  user.name = req.body.name;
  res.json(user);
});

////////////////////////////////////////////////////
// ✅ DELETE – Delete a User
app.delete('/users/:id', (req, res) => {
  users = users.filter(u => u.id != req.params.id);
  res.status(204).send(); // No Content
});

////////////////////////////////////////////////////
// Start Server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
