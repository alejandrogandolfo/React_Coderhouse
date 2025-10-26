import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

export default function CartWidget() {
  const { totalItems } = useCart();

  return (
    <Link to="/cart" className="cart-widget">
      <img
        src="https://img.freepik.com/premium-vector/shopping-trolley-logo-vector-template_658089-5809.jpg"
        alt="Carrito"
      />
      {totalItems > 0 && (
        <span className="cart-count">{totalItems}</span>
      )}
    </Link>
  );
}
