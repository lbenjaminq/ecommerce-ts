import React from "react";
import { Container, Row } from "react-bootstrap";
import { FormCheckout, OrderSummary } from "../../components";
import style from "./index.module.css";

export const Checkout: React.FC<{}> = () => {
  return (
    <Container>
      <div className={style.title}>
        <h2>Último paso</h2>
        <span>Para finalizar tu compra,completa el siguiente formulario</span>
      </div>
      <div style={{width:"100%",display:"flex",justifyContent:"space-around"}}>
        <OrderSummary />
        <FormCheckout /> 
      </div>
    </Container>
  );
};
