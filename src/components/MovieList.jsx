import MovieCard from './MovieCard'
import { useMovieSearchContext } from '../context/MovieSearchContext'

const MovieList = () => {
  const { movies } = useMovieSearchContext()

  const createMovieList = () => {
    return movies.map((movie) => {
      const { imdbID, ...movieData } = movie
      return <MovieCard key={imdbID} movieData={movieData} />
    })
  }

  if (!movies.length) {
    return <div className="text-gray-500 text-center">No movies here, yet.</div>
  }

  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-5">
      {createMovieList()}
    </div>
  )
}

export default MovieList
