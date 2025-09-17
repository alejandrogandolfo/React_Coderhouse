import CartWidget from "./Carrito";



export const NavBar = () => (
 <header>
    <div className="nav-logo">
        <img 
          src="https://infociudad.com.ar/wp-content/uploads/2023/04/ley-de-celiaquia-1024x768-1.jpg"alt="logo"></img>
    </div>
 
    <nav>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">Nosotros</a></li>
        <li><a href="#">Productos</a></li>
        <li><a href="#">Contacto</a></li>
        <li><CartWidget /></li>
      </ul>
    </nav>
  </header>
)
 

