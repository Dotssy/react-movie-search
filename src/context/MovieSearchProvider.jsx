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

  const fetchMovies = async (url) => {
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
      })
      .catch((error) => {
        setError({ type: 'error', message: error.message })
      })
  }

  useEffect(() => {
    const { movieName, searchType } = userQuery
    if (!movieName) return
    const fetchUrl = `http://www.omdbapi.com/?apikey=${API_KEY}&s=${movieName}&type=${searchType}`
    setError(inititalErrorObj) // Clear errors
    setMovies([]) // Clear movies
    fetchMovies(fetchUrl)
  }, [userQuery])

  const contextValue = { movies, userQuery, setUserQuery, error, setError }

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
