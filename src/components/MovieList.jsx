import MovieCard from './MovieCard'
import Loader from './Loader'
import { useMovieSearchContext } from '../context/MovieSearchContext'

const MovieList = () => {
  const { movies, isLoading } = useMovieSearchContext()

  const createMovieList = () => {
    return movies.map((movie) => {
      const { imdbID, ...movieData } = movie
      return <MovieCard key={imdbID} movieData={movieData} />
    })
  }

  if (isLoading) {
    return (
      <div className="flex w-full h-full items-center justify-center mt-30">
        <Loader />
      </div>
    )
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
