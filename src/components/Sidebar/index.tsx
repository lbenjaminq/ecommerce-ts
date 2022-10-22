import React from "react";
import { Offcanvas } from "react-bootstrap";

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
        Some text as placeholder. In real life you can have the elements you
        have chosen. Like, text, images, lists, etc.
      </Offcanvas.Body>
    </Offcanvas>
  );
};
