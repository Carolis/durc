import React, { useState, useEffect } from "react"
import "./App.css"
import Axios from "axios"

function App() {
  const [movieName, setmovieName] = useState("")
  const [movieReview, setmovieReview] = useState("")
  const [reviewsList, setReviewsList] = useState([])

  useEffect(() => {
    Axios.get("http://localhost:3001/api/list").then((response) => {
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

  const deleteMovieReview = (movie) => {
    Axios.delete(`http://localhost:3001/api/delete/${movie}`)
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
      <div className="cards">
        {reviewsList.map((movie, index) => {
          return (
            <div key={index}>
              <h2>{movie.movieName} </h2> <p>{movie.movieReview}</p>
              <button
                onClick={() => {
                  deleteMovieReview(movie.movieName)
                }}
              >
                Remove review
              </button>
              <input type="text" id="update" />
              <button>Update review</button>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default App
