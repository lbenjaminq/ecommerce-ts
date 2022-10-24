import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { CartItem } from "../../../types/type";
import style from "./index.module.css";
import { CartContext } from "../../../context/CartContext";

type Props = {
  item: CartItem;
};

export const Item: React.FC<Props> = ({ item }) => {

  const { dispatch } = useContext(CartContext)

  return (
    <div className={style.container}>
      <div className={style.buttons}>
        <Button
          onClick={()=> dispatch({
            payload:item,
            type:'ADD'
          })}
        >
          <FontAwesomeIcon icon={faPlus} />
        </Button>
        <span>{item.amount}</span>
        <Button
          onClick={()=> dispatch({
            payload:item.id,
            type:'REMOVE'
          })}
        >
          <FontAwesomeIcon icon={faMinus} />
        </Button>
      </div>
      <div className={style.main}>
        <img src={item.image} className={style.image} />
        <span>{item.title}</span>
      </div>
      <div>
        <Button 
          variant="danger" 
          title="Remove product"
          onClick={()=> dispatch({
            payload:item.id,
            type:"REMOVE_ALL"
          })}
        >
          <FontAwesomeIcon icon={faTrashAlt} />
        </Button>
      </div>
    </div>
  );
};
