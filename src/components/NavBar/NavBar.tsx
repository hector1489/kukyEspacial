

const NavBar = () => {

  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl uppercase">Kuky Espacial 🐈</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <details>
              <summary>
                Parent
              </summary>
              <ul className="p-2 bg-base-100 rounded-t-none">
                <li><a>Productos</a></li>
                <li><a>Contacto</a></li>
              </ul>
            </details>
          </li>
          <li><a>🛒</a></li>
        </ul>
      </div>
    </div>
  )
}

export default NavBar