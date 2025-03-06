import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { MovieSearchContext } from './MovieSearchContext'
import { API_KEY } from '../api/apiKey.js'
import { generateSlug } from '../utils/generateSlug.js'

const inititalErrorObj = { type: '', message: '' }

const MovieSearchProvider = ({ children }) => {
  const [userQuery, setUserQuery] = useState({
    movieName: '',
    searchType: '',
  })
  const [movies, setMovies] = useState([])
  const [error, setError] = useState(inititalErrorObj)
  const [isLoading, setIsLoading] = useState(false)

  const fetchMovies = async (url) => {
    setIsLoading(true)
    await axios
      .get(url)
      .then((res) => {
        if (res.data.Error) {
          setError({ type: 'warning', message: res.data.Error })
        } else {
          const moviesWithSlug = res.data.Search.map((movie) => ({
            ...movie,
            slug: generateSlug(movie.Title),
          }))

          setMovies(moviesWithSlug)
        }
        setIsLoading(false)
      })
      .catch((error) => {
        setError({ type: 'error', message: error.message })
        setIsLoading(false)
      })
  }

  useEffect(() => {
    const { movieName, searchType } = userQuery
    if (!movieName) return
    const fetchUrl = `https://www.omdbapi.com/?apikey=${API_KEY}&s=${movieName}&type=${searchType}`
    setError(inititalErrorObj) // Clear errors
    setMovies([]) // Clear movies
    fetchMovies(fetchUrl)
  }, [userQuery])

  const contextValue = {
    movies,
    userQuery,
    setUserQuery,
    error,
    setError,
    isLoading,
  }

  return (
    <MovieSearchContext.Provider value={contextValue}>
      {children}
    </MovieSearchContext.Provider>
  )
}

// Prop Types
MovieSearchProvider.propTypes = {
  children: PropTypes.element.isRequired,
}

export default MovieSearchProvider
