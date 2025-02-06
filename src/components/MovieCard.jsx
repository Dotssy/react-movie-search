import PropTypes from 'prop-types'
import { Link } from 'react-router'

const MovieCard = ({ movieData }) => {
  const { Title, Year, Type, Poster, slug } = movieData

  return (
    <div>
      <div>{Poster !== 'N/A' ? <img src={Poster} alt="Poster" /> : 'N/A'}</div>
      <div>
        <span>{Title}</span>
        <p>
          <span>
            {Year}, {Type}
          </span>
          <Link to={`movies:${slug}`}>Read more</Link>
        </p>
      </div>
    </div>
  )
}

MovieCard.propTypes = {
  movieData: PropTypes.object,
}

export default MovieCard
