require("dotenv").config();

const port = process.env.PORT || 5000;

const server = require("./server");
server.listen(port, () =>
  console.log(`\n=== GTD API listening on port ${port} ===\n`)
);
