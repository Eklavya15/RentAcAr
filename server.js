const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

console.log("🚀 server.js loaded");

// Serve all static files (css, js, images, etc.)
app.use(express.static(__dirname));

// Serve HTML pages
app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'car.html')));
app.get('/c1', (req, res) => res.sendFile(path.join(__dirname, 'c1.html')));
app.get('/login', (req, res) => res.sendFile(path.join(__dirname, 'login.html')));
app.get('/signup', (req, res) => res.sendFile(path.join(__dirname, 'signup.html')));

// Extra navbar routes (placeholders for now)
app.get('/buy-sell', (req, res) => res.send('<h1>Buy/Sell Page Coming Soon</h1>'));
app.get('/contact', (req, res) => res.send('<h1>Contact Us Page Coming Soon</h1>'));
app.get('/about', (req, res) => res.send('<h1>About Us Page Coming Soon</h1>'));
app.get('/blog', (req, res) => res.send('<h1>Blog Page Coming Soon</h1>'));

// Start the server
app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
