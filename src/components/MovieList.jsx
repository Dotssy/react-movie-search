import MovieCard from './MovieCard'
import { useMovieSearchContext } from '../context/MovieSearchContext'

const MovieList = () => {
  const { movies } = useMovieSearchContext()

  const createMovieList = () => {
    return movies.map((movie) => (
      <MovieCard key={movie.imdbID} movieData={movie} />
    ))
  }

  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-5">
      {!movies.length ? <div>No movies here, yet.</div> : createMovieList()}
    </div>
  )
}

export default MovieList
