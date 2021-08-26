import React, { useState } from "react"
import "./App.css"
import Axios from "axios"

function App() {
  const [movieName, setmovieName] = useState("")
  const [movieReview, setmovieReview] = useState("")

  const submitMovieReview = () => {
    Axios.post("http://localhost:3001/api/insert", {
      movieName,
      movieReview,
    }).then(() => {
      alert("Review sent")
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
    </div>
  )
}

export default App
