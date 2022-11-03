import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React,{ useContext } from "react";
import { Navbar, Container, Nav, Badge } from "react-bootstrap";
import { CartContext } from "../../context/CartContext";
import { getProductTotal } from "../../helpers/calculate";
import { Props } from "../Navigation";
import { SearchBar } from "../SearchBar";
import style from "./index.module.css"

export const NavbarComponent: React.FC<Props> = ({handleShow}) => {

  const { cartItems } = useContext(CartContext)

  return (
    <Navbar className={style.container} expand="lg">
      <Container>
        <Navbar.Brand href="/">Ecommerce</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav style={{border:"2px solid red",width:"100%",display:"flex",alignItems:"center"}}>
              <Nav.Link href="/">Home</Nav.Link>
              <SearchBar/>
          </Nav>
        </Navbar.Collapse>
        <FontAwesomeIcon
          icon={faShoppingCart}
          size={"2x"}
          style={{ cursor: "pointer" }}
          onClick={handleShow}
        />
        <Badge bg="secondary">{getProductTotal(cartItems)}</Badge>
      </Container>
    </Navbar>
  );
};
