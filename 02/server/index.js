const express = require("express")
const app = express()
const mysql = require("mysql")
const cors = require("cors")

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "password",
  database: "durc02",
})

app.use(express.json())
app.use(cors())
app.use(express.urlencoded({ extended: true }))

//Delete
app.delete("/api/delete/:movieName", (req, res) => {
  const name = req.params.movieName
  const databaseDelete = "DELETE FROM movie_reviews WHERE movieName = ?;"
  db.query(databaseDelete, name, (error, result) => {
    if (error) console.log(error)
  })
})

//Create
app.post("/api/insert", (req, res) => {
  const movieName = req.body.movieName
  const movieReview = req.body.movieReview

  const databaseInsert =
    "INSERT INTO movie_reviews (movieName, movieReview) VALUES (?,?);"
  db.query(databaseInsert, [movieName, movieReview], (error, result) => {
    if (error) console.log(error)
  })
})

//Read
app.get("/api/list", (req, res) => {
  const databaseGet = "SELECT * FROM movie_reviews;"

  db.query(databaseGet, (error, result) => {
    if (error) console.log(error)
    res.send(result)
  })
})

app.listen(3001, () => {
  console.log("Server up at 3001 port")
})
