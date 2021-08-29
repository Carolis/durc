import React, { useState, useEffect } from "react"
import "./App.css"
import Axios from "axios"

function App() {
  const [movieName, setmovieName] = useState("")
  const [movieReview, setmovieReview] = useState("")
  const [reviewsList, setReviewsList] = useState([])

  useEffect(() => {
    Axios.get("http://localhost:3001/api/list").then((response) => {
      console.log(response)
      setReviewsList(response.data)
    })
  }, [])

  const submitMovieReview = () => {
    Axios.post("http://localhost:3001/api/insert", {
      movieName,
      movieReview,
    }).then(() => {
      setReviewsList([...reviewsList, { movieName, movieReview }])
    })
  }

  return (
    <div className="App">
      <h1>EPIC dUrC</h1>
      <form action="" className="form">
        <label>Movie name</label>
        <input
          type="text"
          name="movieName"
          onChange={(e) => {
            setmovieName(e.target.value)
          }}
        />
        <label>Movie review</label>
        <input
          type="text"
          name="movieReview"
          onChange={(e) => {
            setmovieReview(e.target.value)
          }}
        />
        <button onClick={submitMovieReview}>Send</button>
      </form>
      <div>
        {reviewsList.map((movie, index) => {
          console.log(
            "🚀 ~ file: App.js ~ line 50 ~ {reviewsList.map ~ movie",
            movie
          )
          return (
            <div key={index}>
              <span>
                <b>{movie.movieName} </b> {movie.movieReview}
              </span>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default App
