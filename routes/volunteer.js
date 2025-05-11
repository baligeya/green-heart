const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('volunteer');
});

router.post('/', (req, res) => {
  const { name, email, message } = req.body;
  console.log("Volunteer Submission:", name, email, message);
  // You can save to DB or send email here
  res.send("Thank you for volunteering!");
});

module.exports = router;
