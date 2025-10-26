import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";  // ✅ import necesario

export const Cart = () => {
  const { cart, totalPrice, removeItem, clearCart } = useCart();

  if (cart.length === 0)
    return <h2>Tu carrito está vacío 😢</h2>;

  return (
    <div>
      <h2>Carrito de Compras</h2>
      {cart.map((p) => (
        <div key={p.id}>
          <h4>{p.nombre}</h4>
          <p>Cantidad: {p.cantidad}</p>
          <p>Subtotal: ${p.precio * p.cantidad}</p>
          <button onClick={() => removeItem(p.id)}>Eliminar</button>
        </div>
      ))}
      <h3>Total: ${totalPrice}</h3>
      <button onClick={clearCart}>Vaciar carrito</button>
      
      <div style={{ marginTop: "20px" }}>
        <Link to="/checkout">
          <button>Finalizar compra</button>
        </Link>
      </div>
    </div>
  );
};
