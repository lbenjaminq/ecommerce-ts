import React from "react";
import { Button, Card, Stack } from "react-bootstrap";
import { DataItem } from "../../../types/type";

type Props = {
  product: DataItem;
  handleAddToCart: (product: DataItem) => void;
};

const Product: React.FC<Props> = ({ product, handleAddToCart }) => {
  const customInfo = (description: string, n: number) => {
    return description?.length > n
      ? `${description.substr(0, n)}...`
      : description;
  };

  return (
    <Card style={{ width: "18rem", height: "400px", textAlign: "center" }}>
      <Card.Img
        variant="top"
        src={product.image}
        style={{
          width: "100%",
          height: "150px",
          objectFit: "contain",
          objectPosition: "center",
        }}
      />
      <Card.Body
        style={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Card.Title>{customInfo(product.title, 40)}</Card.Title>
        <Card.Text>{customInfo(product.description, 60)}</Card.Text>
        <Card.Text>Precio: {product.price}</Card.Text>
        <Button onClick={() => handleAddToCart(product)} variant="primary">
          Agregar al carrito
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Product;
