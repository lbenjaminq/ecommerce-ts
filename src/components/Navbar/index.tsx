import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext } from "react";
import { Navbar, Container, Nav, Badge } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import { getProductTotal } from "../../helpers/calculate";
import { Props } from "../Navigation";
import { SearchBar } from "../SearchBar";
import style from "./index.module.css";

export const NavbarComponent: React.FC<Props> = ({ handleShow }) => {
  const { cartItems } = useContext(CartContext);
  const history = useNavigate();

  return (
    <Navbar className={style.container} expand="lg" sticky="top">
      <Container >
        <Navbar.Brand
          onClick={() => history("/")}
          style={Brand}
        >
          ECOMMERCE
        </Navbar.Brand>
        <Navbar.Brand>
          <FontAwesomeIcon
            icon={faShoppingCart}
            size={"2x"}
            style={{ cursor: "pointer",marginRight:"0.2%"}}
            onClick={handleShow}
            color="black"
          />
          <Badge bg="dark">{getProductTotal(cartItems)}</Badge>
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};

const Brand = {
  cursor:"pointer",
  fontWeight:"bold",
  fontSize:"2rem",
  fontFamily:"'JetBrains Mono', sans-serif"
}
// font-family: 'Archivo Black', sans-serif;
// font-family: 'JetBrains Mono', monospace;