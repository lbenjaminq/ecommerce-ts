import { Navigation, Sidebar } from "./components";
import { useState } from "react"
import { CartProvider } from "./context/CartContext";

function App() {

  const [show, setShow] = useState(false)

  const handleShow = () => {
    setShow(!show)
  }

  return (
    <CartProvider>
      <>
        <Navigation handleShow={handleShow} />
        <Sidebar show={show} handleShow={handleShow}/>
      </>
    </CartProvider>
  );
}

export default App;
