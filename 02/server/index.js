const express = require("express")
const app = express()
const mysql = require("mysql")

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "password",
  database: "durc02",
})

app.get("/", (req, res) => {
  const databaseInsert ="INSERT INTO movie_reviews (movieName, movieReview) VALUES ('Alice in Wonderland','Funny rabbits and stuff');"
  db.query(databaseInsert, (err, result) => {
    if (err) throw err;
    res.send("Hewwo query")
  })
})

app.listen(3001, () => {
  console.log("Server up at 3001 port")
})
