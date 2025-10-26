import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase/config";
import { useCart } from "../context/CartContext";

export const CheckoutForm = () => {
  const { cart, totalPrice, clearCart } = useCart();
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [ordenId, setOrdenId] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const orden = {
      comprador: { nombre, email },
      items: cart,
      total: totalPrice,
      fecha: new Date(),
    };

    try {
      console.log("Enviando orden:", orden); // 👀 debug
      const docRef = await addDoc(collection(db, "ordenes"), orden);
      console.log("Orden generada con ID:", docRef.id);
      setOrdenId(docRef.id);
      clearCart(); // ✅ vacía carrito
    } catch (err) {
      console.error("Error al generar la orden:", err);
      setError("Hubo un problema al procesar la compra. Intenta de nuevo.");
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <h2>Procesando tu compra...</h2>;

  if (ordenId)
    return (
      <h2>
        ✅ Gracias por tu compra, {nombre}. <br />
        Tu número de orden es: <strong>{ordenId}</strong>
      </h2>
    );

  return (
    <form onSubmit={handleSubmit} style={{ marginTop: "2rem" }}>
      <h2>Finalizar compra</h2>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <input
        type="text"
        placeholder="Nombre"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
        required
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <button type="submit" disabled={loading}>
        {loading ? "Confirmando..." : "Confirmar compra"}
      </button>
    </form>
  );
};
