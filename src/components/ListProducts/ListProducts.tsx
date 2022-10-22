import React from "react";
import { Col, Row } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { useFetch } from "../../hook/useFetch";
import { DataItem } from "../../types/type";
import Product from "./Product/Product";

const ListProducts = () => {
  const {products, isLoading} = useFetch();

  const handleAddToCart = (product:DataItem) => {
    console.log("Agregando")
  }

  return (
    <Container fluid>
      <Row xs={1} md={2} lg={4}>
        {
          products.map((product)=>(
            <Col key={product.id} style={{display:"flex",justifyContent:"center",margin:"2% 0px"}}>
              <Product 
                product={product}
                handleAddToCart={handleAddToCart}
              />
            </Col>
          ))
        }
      </Row>
    </Container>
    )
};

export default ListProducts;
