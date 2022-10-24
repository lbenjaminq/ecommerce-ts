import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React,{ useContext, useState } from "react";
import { Navbar, Container, Nav, Badge } from "react-bootstrap";
import { CartContext } from "../../context/CartContext";
import { getProductTotal } from "../../helpers/calculate";
import { Props } from "../Navigation";

export const NavbarComponent: React.FC<Props> = ({handleShow}) => {

  const { cartItems } = useContext(CartContext)

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">Ecommerce</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
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
