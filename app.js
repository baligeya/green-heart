const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse form data
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Set view engine
app.set('view engine', 'ejs');

// Set views directory if not default
app.set('views', path.join(__dirname, 'views'));

// Set public folder for static assets
app.use(express.static(path.join(__dirname, 'public')));

// Routes
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

// Handle contact form submission
app.post('/submit-contact', (req, res) => {
  const { name, email, message } = req.body;

  // Log the submitted data (you can replace this with actual processing)
  console.log('Contact Form Submission:', { name, email, message });

  // Redirect or send success response
  res.send(`<h1>Thank you, ${name}! Your message has been received.</h1><a href="/contact">Back to Contact</a>`);
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
