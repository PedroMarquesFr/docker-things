const express = require("express");
const { createConnection } = require("mysql");
const PORT = 3000;
const app = express();
const config = {
  host: "db",
  user: "root",
  password: "root",
  database: "nodedb",
};

const connection = createConnection(config);
const sql = "INSERT INTO people(name) values ('Pedro')";
connection.query(sql);
connection.end();

app.get("/", (req, res) => {
  res.send("<h1>Full Cycle!!!</h1>");
});

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
