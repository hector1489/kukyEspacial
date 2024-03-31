import { NavLink } from "react-router-dom"

const NavBar = () => {

  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl uppercase">Kuky Espacial 🐈</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink to="/" >Home</NavLink>
          </li>
          <li>
            <NavLink to="/">🛒</NavLink>
          </li>
          <li>
            <details>
              <summary>
                Parent
              </summary>
              <ul className="p-2 bg-base-100 rounded-t-none">
                <li>
                  <NavLink to="contact">Productos</NavLink>
                </li>
                <li>
                  <NavLink to="contact">Contacto</NavLink>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default NavBar