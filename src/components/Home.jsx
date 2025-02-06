import { Link } from 'react-router'

const Home = () => {
  return (
    <div className="text-2xl flex flex-col gap-5 text-gray-600">
      <h1 className="text-5xl font-semibold text-gray-500">
        React Movie Search
      </h1>
      <p>
        This is a simple React Movie Search SPI made using React-Router, Context
        API, Tailwind CSS and{' '}
        <a
          href="https://www.omdbapi.com"
          className="text-blue-500 hover:text-blue-400 hover:underline transition-colors"
        >
          omdbapi.com
        </a>
        .
      </p>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas illum
        sint, commodi debitis voluptatum eos delectus, quos, ad labore enim
        sapiente quo ex eum praesentium a deserunt sequi nulla. Cupiditate quis
        iusto labore beatae iure perspiciatis assumenda reprehenderit culpa
        molestiae?
      </p>
      <Link
        to="search"
        className="text-blue-500 hover:text-blue-400 hover:underline transition-colors"
      >
        Start searching
      </Link>
    </div>
  )
}

export default Home
