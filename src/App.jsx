import "./App.css";
import { ItemListContainer } from "./componentes/ItemListContainer";
import { NavBar } from "./componentes/Navbar";


function App() {
  return (
  <>
   <NavBar />
   <ItemListContainer saludo= "Bienvenidos al mundo celiaco" />
  </>
  );
}

export default App;