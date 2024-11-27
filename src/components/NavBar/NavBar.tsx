import { NavLink } from "react-router-dom"
import './NavBar.css'

const NavBar = () => {

  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl uppercase">R A S H T I 🪷</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1 gap-1">
          <li>
            <NavLink to="/" >Inicio</NavLink>
          </li>
          <li>
            <NavLink to="Cart">🛒</NavLink>
          </li>
          <li>
            <NavLink to="products">Productos</NavLink>
          </li>
          <li>
            <NavLink to="contact">Contacto</NavLink>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default NavBar