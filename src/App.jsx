import './App.css'
import { movies } from './movies/movies'
import Card from './components/Card'

function App() {
  return (
    <div className='App'>
      <header>
        <h1>My Movies</h1>
      </header>

      <div className="container">
        <div className="cards">
          {
            movies.map((item, index) => <Card key={index + item.Title} title={item.Title} img={item.Poster} year={item.Year} likes={item.Likes} />)
          }
        </div>
      </div>
    </div>
  )
}

export default App
