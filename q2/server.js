const express = require('express');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Serve static files from public folder
app.use(express.static(path.join(__dirname, 'public')));

// API endpoint example
app.post('/api/greet', (req, res) => {
  const { name } = req.body;
  res.json({ message: `Hello, ${name || 'Guest'}!` });
});

// Serve index.html for any other route (optional SPA support)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(3000);
