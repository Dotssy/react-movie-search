import { useState } from 'react'
import { NavLink } from 'react-router'

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav className="mt-5">
      <button
        onClick={toggleMenu}
        className="sm:hidden text-white focus:outline-none"
      >
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16m-7 6h7"
          ></path>
        </svg>
      </button>

      <div
        className={`${
          isOpen ? 'block' : 'hidden'
        } sm:flex sm:items-center sm:gap-5 text-2xl text-white`}
      >
        <NavLink to="." end className="block sm:inline-block mt-4 sm:mt-0">
          Home
        </NavLink>
        <NavLink to="movies" className="block sm:inline-block mt-4 sm:mt-0">
          Movies
        </NavLink>
        <NavLink to="about" className="block sm:inline-block mt-4 sm:mt-0">
          About
        </NavLink>
        <NavLink to="contacts" className="block sm:inline-block mt-4 sm:mt-0">
          Contacts
        </NavLink>
      </div>
    </nav>
  )
}

export default Navigation
