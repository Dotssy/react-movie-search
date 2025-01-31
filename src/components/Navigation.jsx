import { NavLink } from 'react-router'

const Navigation = () => {
  return (
    <nav className="mt-5 flex gap-5 text-2xl text-white">
      <NavLink to="." end>
        Home
      </NavLink>
      <NavLink to="search">Search</NavLink>
      <NavLink to="about">About</NavLink>
      <NavLink to="contacts">Contacts</NavLink>
    </nav>
  )
}

export default Navigation
