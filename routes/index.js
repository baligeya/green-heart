// routes/index.js
const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("index", { title: "Welcome to Green Heart" });
});

module.exports = router;
