import { useState } from "react";

export const ItemCount = ({ stock, inicial = 1, onAdd }) => {
  const [cantidad, setCantidad] = useState(inicial);

  const incrementar = () => cantidad < stock && setCantidad(cantidad + 1);
  const decrementar = () => cantidad > 1 && setCantidad(cantidad - 1);

  return (
    <div>
      <button onClick={decrementar}>-</button>
      <span>{cantidad}</span>
      <button onClick={incrementar}>+</button>
      <button onClick={() => onAdd(cantidad)} disabled={stock === 0}>
        Agregar al carrito
      </button>
    </div>
  );
};
