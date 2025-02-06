import { useState } from 'react'
import { useMovieSearchContext } from '../context/MovieSearchContext'

const SearchForm = () => {
  const [movieNameInput, setMovieNameInput] = useState('')
  const { setUserQuery } = useMovieSearchContext()

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!movieNameInput.trim()) return
    setUserQuery(movieNameInput.trim())
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
    </form>
  )
}

export default SearchForm
