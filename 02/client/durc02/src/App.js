import "./App.css"

function App() {
  return (
    <div className="App">
      <h1>EPIC dUrC</h1>
      <form action="" className="form">
        <label>Movie name</label>
        <input type="text" name="movieName" />
        <label>Movie review</label>
        <input type="text" name="movieReview" />
        <button>Send</button>
      </form>
    </div>
  )
}

export default App
