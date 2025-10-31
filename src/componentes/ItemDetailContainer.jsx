import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase/config";
import { useCart } from "../context/CartContext";
import { ItemCount } from "./ItemCount";

export const ItemDetailContainer = () => {
  const [producto, setProducto] = useState(null);
  const { id } = useParams();
  const { addToCart } = useCart();

  useEffect(() => {
    const docRef = doc(db, "productos", id);
    getDoc(docRef)
      .then((res) => {
        if (res.exists()) setProducto({ id: res.id, ...res.data() });
      })
      .catch((error) => console.error("Error al cargar detalle:", error));
  }, [id]);

  const onAdd = (cantidad) => addToCart(producto, cantidad);

  if (!producto) return <h2>Cargando...</h2>;

  return (
    <div>
      <h2>{producto.nombre}</h2>
      <img src={producto.imagen} alt={producto.nombre} style={{ width: "150px" }} />
      <p>{producto.descripcion}</p>
      <p>Precio: ${producto.precio}</p>
      <ItemCount stock={5} onAdd={onAdd} />
    </div>
  );
};



