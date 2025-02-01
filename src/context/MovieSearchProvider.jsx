import PropTypes from 'prop-types'
import { useState } from 'react'
import { MovieSearchContext } from './MovieSearchContext'

const MovieSearchProvider = ({ children }) => {
  const [movies, setMovies] = useState([])

  const contextValue = { movies, setMovies }

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
