import "./App.css"
import Movies from "./components/Movies";
import MovieByTitle from "./components/MovieByTitle";
import AddMovieForm from "./components/AddMovieForm";

const App = () => {
  return (
    <main>
      <AddMovieForm />
      <Movies />
      <MovieByTitle title="PK"/>
    </main>
  )
}

export default App;