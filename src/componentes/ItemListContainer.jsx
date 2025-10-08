import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { productos } from "../data";
import "./ItemListContainer.css";

export const ItemListContainer = ({ saludo }) => {
  const [items, setItems] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    const getData = new Promise((resolve) => {
      setTimeout(() => resolve(productos), 1000);
    });

    getData.then((res) => {
      if (categoryId) {
        setItems(res.filter((prod) => prod.categoria === categoryId));
      } else {
        setItems(res);
      }
    });
  }, [categoryId]);

  return (
    <div>
      <h1>{saludo}</h1>
      <div className="product-list">
        {items.map((prod) => (
            <div key={prod.id} className="product-card">
                <img src={prod.imagen} alt={prod.nombre} />
                <h3>{prod.nombre}</h3>
                <p>Precio: ${prod.precio}</p>
                <Link to={`/item/${prod.id}`}>Ver detalle</Link>
            </div>
        ))}
      </div>
    </div>
     );
};