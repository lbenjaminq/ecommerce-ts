import React, { useContext } from "react";
import { Button, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import { Footer } from "./Footer";
import { Item } from "./Item";

const Cart = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  if (!cartItems.length) return <h5>There is no product</h5>;

  return (
    <Container>
      <div style={{ borderBottom: "1px solid #a5a5a5", marginBottom: "4%" }}>
        {cartItems?.map((product) => (
          <Item key={product.id} item={product} />
        ))}
      </div>
      <Footer />
      <Button
        style={{ width: "100%", marginTop: "4%" }}
        onClick={() => navigate("checkout")}
      >
        Proceed with the payment
      </Button>
    </Container>
  );
};

export default Cart;
