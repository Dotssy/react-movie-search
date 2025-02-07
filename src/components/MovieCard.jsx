import PropTypes from 'prop-types'
import { Link } from 'react-router'
import { MdOutlineNoPhotography } from 'react-icons/md'

const MovieCard = ({ movieData }) => {
  const { Title, Year, Type, Poster, slug } = movieData

  return (
    <div>
      <div className="flex min-h-[333px] bg-slate-300 justify-center items-center overflow-hidden">
        {Poster !== 'N/A' ? (
          <img src={Poster} alt="Poster" />
        ) : (
          <MdOutlineNoPhotography size={50} className="text-gray-400" />
        )}
      </div>
      <div className="flex flex-col gap-1.5 mt-1.5">
        <h5 className="text-2xl">{Title}</h5>
        <span className="text-xl text-gray-500">
          {Year}, {Type}
        </span>
        <Link
          to={`../movies/${slug}`}
          className="text-blue-400 text-xl hover:underline hover:text-blue-300 transition-colors"
        >
          Read more
        </Link>
      </div>
    </div>
  )
}

MovieCard.propTypes = {
  movieData: PropTypes.object,
}

export default MovieCard
