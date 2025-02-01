import { createContext, useContext } from 'react'

// Context
export const MovieSearchContext = createContext()

export const useMovieSearchContext = () => {
  const context = useContext(MovieSearchContext)

  if (context === undefined) {
    throw new Error(
      'useMovieSearchContext must be used within an MovieSearchProvider'
    )
  }

  return context
}
