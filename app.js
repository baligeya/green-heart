const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Set view engine
app.set('view engine', 'ejs');

// Set public folder for static assets
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.render('index'); // Home page
});        
app.get('/about', (req, res) => {
  res.render('about');
});

app.get('/programs', (req, res) => {
  res.render('programs');
});

app.get('/donate', (req, res) => {
  res.render('donate');
});

app.get('/contact', (req, res) => {
  res.render('contact');
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
