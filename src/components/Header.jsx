import { BiMoviePlay } from 'react-icons/bi'
import { Link } from 'react-router'
import Navigation from './Navigation'

const Header = () => {
  return (
    <header className="bg-slate-700 flex justify-center p-5">
      <div className="w-[1200px]">
        <Link to="." className="inline-block">
          <div className="text-4xl max-[330px]:text-3xl text-white font-bold flex gap-1.5 items-center">
            <BiMoviePlay size={50} />
            <span>Movie Search</span>
          </div>
        </Link>
        <Navigation />
      </div>
    </header>
  )
}

export default Header
