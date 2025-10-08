import "./App.css";
import { NavBar } from "./componentes/Navbar";
import { ItemListContainer } from "./componentes/ItemListContainer";
import { ItemDetailContainer } from "./componentes/ItemDetailContainer";
import { Routes, Route } from "react-router-dom";
 
function App() {
  return (
    <>
      <NavBar />
      <Routes>
        {/* esto seria el catálogo principal, osea todos los productos */}
        <Route path="/" element={<ItemListContainer saludo="Bienvenidos al mundo celiaco" />} />

        {/* aca al seleccionar una categoría */}
        <Route path="/category/:categoryId" element={<ItemListContainer saludo="Productos seleccionado/s"/>} />

        {/* detalle de un producto */}
        <Route path="/item/:id" element={<ItemDetailContainer />} />

        {/* si no encuentra la pagina, Ruta 404 */}
        <Route path="*" element={<h2>404 - Página no encontrada</h2>} />
      </Routes>
    </>
  );
}

export default App;