import SearchForm from './SearchForm'
import MovieList from './MovieList'

const Search = () => {
  return (
    <div className="text-2xl flex flex-col gap-8 text-gray-600">
      <SearchForm />
      <MovieList />
    </div>
  )
}

export default Search
