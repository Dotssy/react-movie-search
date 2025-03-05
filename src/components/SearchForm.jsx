import { useState } from 'react'
import { useMovieSearchContext } from '../context/MovieSearchContext'

const SearchForm = () => {
  const [movieNameInput, setMovieNameInput] = useState('')
  const { userQuery, setUserQuery } = useMovieSearchContext()

  const handleSearchTypeChange = (e) => {
    setUserQuery((search) => ({ ...search, searchType: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!movieNameInput.trim()) return
    setUserQuery((search) => ({ ...search, movieName: movieNameInput.trim() }))
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex items-center gap-2">
        <input
          type="text"
          value={movieNameInput}
          placeholder="For example - Shrek"
          onChange={(e) => setMovieNameInput(e.target.value)}
          className="border-b-[1px] border-b-gray-400 focus:shadow-[0_1px_0_0_#26a69a] h-[3rem] p-[0.5rem_0] outline-none text-xl w-full transition-all duration-300 ease-in-out"
        />
        <button
          type="submit"
          className="bg-[#26a69a] hover:bg-[#66beb5] shadow-lg shadow-[#66beb5] text-white p-[0.5rem_1.5rem] rounded cursor-pointer transition-colors"
        >
          Search
        </button>
      </div>
      <div className="flex justify-center gap-5 mt-5 text-base text-gray-500">
        <label className="flex gap-1.5 cursor-pointer">
          <input
            type="radio"
            name="type"
            value=""
            onChange={handleSearchTypeChange}
            checked={userQuery.searchType === ''}
          />
          <span>All</span>
        </label>
        <label className="flex gap-1.5 cursor-pointer">
          <input
            type="radio"
            name="type"
            value="movie"
            onChange={handleSearchTypeChange}
            checked={userQuery.searchType === 'movie'}
          />
          <span>Movies only</span>
        </label>
        <label className="flex gap-1.5 cursor-pointer">
          <input
            type="radio"
            name="type"
            value="series"
            onChange={handleSearchTypeChange}
            checked={userQuery.searchType === 'series'}
          />
          <span>Series only</span>
        </label>
      </div>
    </form>
  )
}

export default SearchForm
