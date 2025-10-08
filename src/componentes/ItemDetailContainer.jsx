import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { productos } from "../data";

export const ItemDetailContainer = () => {
  const [producto, setProducto] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const getData = new Promise((resolve) => {
      setTimeout(() => resolve(productos.find((p) => p.id === id)), 1000);
    });

    getData.then((res) => setProducto(res));
  }, [id]);

  if (!producto) return <h2>Cargando...</h2>;

  return (
    <div>
      <h2>{producto.nombre}</h2>
      <img 
      src={producto.imagen} 
      alt={producto.nombre} 
      style={{ width: "100px", borderRadius: "10px" }} 
      />
      <p>{producto.descripcion}</p>
      <p>Precio: ${producto.precio}</p>
    </div>
  );
};