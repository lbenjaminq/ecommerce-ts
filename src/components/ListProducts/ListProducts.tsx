import React,{useContext} from "react";
import { Col, Row } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { CartContext } from "../../context/CartContext";
import { useFetch } from "../../hook/useFetch";
import { DataItem } from "../../types/type";
import Product from "./Product/Product";

const ListProducts = () => {
  const {products, isLoading} = useFetch();
  const { dispatch } = useContext(CartContext)

  const handleAddToCart = (product:DataItem) => {
    dispatch({
      payload:product,
      type:"ADD"
    })
  }

  if(isLoading) return <h5>Cargando</h5>

  return (
    <Container>
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
