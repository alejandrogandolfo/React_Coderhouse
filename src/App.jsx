import "./App.css";
import { NavBar } from "./componentes/Navbar";
import { ItemListContainer } from "./componentes/ItemListContainer";
import { ItemDetailContainer } from "./componentes/ItemDetailContainer";
import { Routes, Route } from "react-router-dom";
import { Cart } from "./componentes/Cart";
import { CheckoutForm } from "./componentes/CheckoutForm"; // ✅ Importar el formulario

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        {/* catálogo principal */}
        <Route
          path="/"
          element={<ItemListContainer saludo="Bienvenidos al mundo celiaco" />}
        />

        {/* categoría */}
        <Route
          path="/category/:categoryId"
          element={<ItemListContainer saludo="Productos seleccionado/s" />}
        />

        {/* detalle del producto */}
        <Route path="/item/:id" element={<ItemDetailContainer />} />

        {/* carrito */}
        <Route path="/cart" element={<Cart />} />

        {/* checkout */}
        <Route path="/checkout" element={<CheckoutForm />} /> {/* ✅ Nueva ruta */}

        {/* ruta 404 */}
        <Route path="*" element={<h2>404 - Página no encontrada</h2>} />
      </Routes>
    </>
  );
}

export default App;
