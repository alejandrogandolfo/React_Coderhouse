import CartWidget from "./Carrito";
import { Link } from "react-router-dom";
import "./Navbar.css";

export const NavBar = () => (
  <header>
    <div className="nav-logo">
      <img
        src="https://infociudad.com.ar/wp-content/uploads/2023/04/ley-de-celiaquia-1024x768-1.jpg"
        alt="logo"
      />
    </div>

    <nav>
      <ul className="menu">
        <li><Link to="/">Home</Link></li>
        <li><a href="#">Nosotros</a></li>

        {/* Dentro de este submenu estan las diferentes categorias */}
        <li className="submenu">
          <a href="#">Productos ▾</a>
          <ul className="submenu-items">
            <li><Link to="/category/panificados">Panificados</Link></li>
            <li><Link to="/category/snacks">Snacks</Link></li>
            <li><Link to="/category/congelados">Congelados</Link></li>
            <li><Link to="/category/pastas">Pastas</Link></li>
          </ul>
        </li>

        <li><a href="#">Contacto</a></li>
        <li><CartWidget /></li>
      </ul>
    </nav>
  </header>
);
