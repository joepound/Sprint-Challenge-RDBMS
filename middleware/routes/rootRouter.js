const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send(`
    <h1>GTD API</h1>
    <p>Welcome to the GTD API!</p>
    <ul>
      ${Object.keys(process.env).map(
        key => "<li>" + key + " " + process.env[key] + "</li>"
      )}
    </ul>
  `);
});

module.exports = router;
