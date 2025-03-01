import { useCallback, useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router'
import axios from 'axios'
import { MdOutlineNoPhotography } from 'react-icons/md'
import Loader from './Loader'
import { useMovieSearchContext } from '../context/MovieSearchContext'
import { API_KEY } from '../api/apiKey'

const MoviePage = () => {
  const [movieData, setMovieData] = useState(null)
  const [loading, setLoading] = useState(true)
  const { slug } = useParams()
  const navigate = useNavigate()
  const { movies, setError } = useMovieSearchContext()
  const movieID = movies.find((movie) => movie.slug === slug).imdbID

  const fetchMovieData = useCallback(
    async (url) => {
      await axios
        .get(url)
        .then((res) => {
          setMovieData(res.data)
          setLoading(false)
        })
        .catch((error) => {
          setError({ type: 'error', message: error.message })
          setLoading(false)
          navigate('..', { relative: 'path' })
        })
    },
    [navigate, setError]
  )

  useEffect(() => {
    const fetchUrl = `http://www.omdbapi.com/?apikey=${API_KEY}&i=${movieID}&plot=full`
    fetchMovieData(fetchUrl)
  }, [movieID, fetchMovieData])

  return (
    <>
      {loading ? (
        <div className="flex w-full h-full items-center justify-center mt-30">
          <Loader />
        </div>
      ) : (
        <div>
          <h1 className="text-4xl text-gray-500">{movieData.Title}</h1>
          <div className="flex mt-5 gap-10">
            <div className="flex min-w-[300px] min-h-[450px] justify-center items-start overflow-hidden">
              {movieData.Poster === 'N/A' ? (
                <div className="flex w-full h-full bg-slate-300 justify-center items-center">
                  <MdOutlineNoPhotography size={50} className="text-gray-400" />
                </div>
              ) : (
                <img src={movieData.Poster} alt="Poster" />
              )}
            </div>
            <div className="max-w-[850px]">
              <ul>
                <li>
                  <span className="font-semibold">Year:</span> {movieData.Year}
                </li>
                <li>
                  <span className="font-semibold">Runtime:</span>{' '}
                  {movieData.Runtime}
                </li>
                <li>
                  <span className="font-semibold">Genre:</span>{' '}
                  {movieData.Genre}
                </li>
                <li>
                  <span className="font-semibold">Actors:</span>{' '}
                  {movieData.Actors}
                </li>
              </ul>
              <p className="mt-5 mb-5">{movieData.Plot}</p>
              <Link
                to=".."
                relative="path"
                className="text-blue-400 text-lg hover:underline hover:text-blue-300 transition-colors"
              >
                Back to movies
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default MoviePage
