import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React,{ useState } from "react";
import { Navbar, Container, Nav, Badge } from "react-bootstrap";
import { Props } from "../Navigation";

export const NavbarComponent: React.FC<Props> = ({handleShow}) => {

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
        <Badge bg="secondary" >8</Badge>
      </Container>
    </Navbar>
  );
};
