import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase/config";
import "./ItemListContainer.css";

export const ItemListContainer = ({ saludo }) => {
  const [items, setItems] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    const productosRef = collection(db, "productos");
    const q = categoryId
      ? query(productosRef, where("categoria", "==", categoryId))
      : productosRef;

    getDocs(q)
      .then((res) => {
        setItems(res.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
      })
      .catch((error) => console.error("Error cargando productos:", error));
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
