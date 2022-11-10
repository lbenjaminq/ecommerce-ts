import React from "react";
import { Container, Row } from "react-bootstrap";
import { FormCheckout, OrderSummary } from "../../components";
import style from "./index.module.css";

export const Checkout: React.FC<{}> = () => {
  return (
    <Container style={{fontFamily:'JetBrains Mono'}}>
      <div className={style.title}>
        <h1>Last step</h1>
        <span>To finalize your purchase, complete the following form</span>
      </div>
      <div className={style.content}>
        <OrderSummary />
        <FormCheckout /> 
      </div>
    </Container>
  );
};
