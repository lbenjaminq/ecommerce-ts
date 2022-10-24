import React from "react";
import { Offcanvas } from "react-bootstrap";
import Cart from "../Cart/Cart";

type Props = {
  show:boolean
  handleShow: () => void
}

export const Sidebar: React.FC<Props> = ({show, handleShow}) => {
  return (
    <Offcanvas
      placement="end"
      show={show}
      onHide={handleShow}
    >
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Offcanvas</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Cart/>
      </Offcanvas.Body>
    </Offcanvas>
  );
};
