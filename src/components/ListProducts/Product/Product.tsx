import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Button, Card, Stack } from "react-bootstrap";
import { DataItem } from "../../../types/type";
import style from "./Product.module.css"

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
    <Card
      style={{
        width: "18rem",
        height: "400px",
        textAlign: "center",
        borderRadius: "20px",
      }}
    >
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
          alignItems: "center",
        }}
      >
        <Card.Title>{customInfo(product.title, 40)}</Card.Title>
        <Card.Text>{customInfo(product.description, 60)}</Card.Text>
        <Card.Footer
          style={{
            display: "flex",
            width: "100%",
            alignItems: "center",
            justifyContent: "space-between",
            fontFamily: "JetBrains Mono",
          }}
        >
          <strong>Price: ${product.price} USD</strong>
          <button
            onClick={() => handleAddToCart(product)}
            className={style.Button}
          >
            <FontAwesomeIcon icon={faCirclePlus} size="2x" color="#ff8c00" />
          </button>
        </Card.Footer>
      </Card.Body>
    </Card>
  );
};

export default Product;
