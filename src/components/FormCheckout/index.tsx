import React, { FormEvent, useContext, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { CartContext } from "../../context/CartContext";
import postData from "../../helpers/postData";
import useForm from "../../hook/useForm";
import { Customer, Order } from "../../types/type";

const initialState = {
  name: "",
  lastName: "",
  email: "",
  address: "",
};

const notify = (msj: string) => toast(msj);

export const FormCheckout = () => {
  const [showToast, setShowToast] = useState(false);
  const { cartItems, dispatch } = useContext(CartContext);
  const { name, lastName, email, address, handleChange, resetValues } =
    useForm<Customer>(initialState);
  //HACER EL USEFORM
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    // const orderDetails = cartItems.map(({ id, image, ...item }) => item);
    // if (orderDetails.length > 0) {
    //   const order: Order = {
    //     customer: {
    //       name,
    //       lastName,
    //       email,
    //       address,
    //     },
    //     order_details: orderDetails,
    //   };
    //   const fetchApi = await postData(order);
    //   if (!fetchApi.ok) {
    //     notify("No se pudo procesar");
    //   } else {
    //     notify("Orden realizada");
    //     resetValues();

    //     dispatch({
    //       payload: [],
    //       type: "CLEAR",
    //     });
    //   }
    // } else {
      // }
      setShowToast(true);
    if(!cartItems.length){
      notify("❌ There are no products to process");
      // 
    }else if(name && lastName && email && address){
      notify("✔ Order processed");
    }else{
      notify("❌ Missing data");
    }
    setTimeout(()=> setShowToast(false),5000)
  };

  return (
    <div className="col-md-7 col-lg-4">
      <h2>CHECKOUT</h2>
      <form autoComplete="off" onSubmit={handleSubmit}>
        <div className="row g-3">
          <div className="col-sm-6">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type={"text"}
              className="form-control"
              name="name"
              id="name"
              placeholder="Name.."
              onChange={handleChange}
              value={name}
            />
          </div>
          <div>
            <label htmlFor="lastName" className="form-label">
              LastName
            </label>
            <input
              type={"text"}
              className="form-control"
              name="lastName"
              id="lastName"
              placeholder="LastName.."
              onChange={handleChange}
              value={lastName}
            />
          </div>
          <div>
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type={"email"}
              className="form-control"
              name="email"
              id="email"
              placeholder="Email.."
              onChange={handleChange}
              value={email}
            />
          </div>
          <div>
            <label htmlFor="address" className="form-label">
              Address
            </label>
            <input
              type={"text"}
              className="form-control"
              name="address"
              id="address"
              placeholder="Address.."
              onChange={handleChange}
              value={address}
            />
          </div>
        </div>
        <br />
        <button className="w-100 btn btn-primary" type="submit">
          Procesar Orden
        </button>
        {showToast && (
          <Toaster
            toastOptions={{
              position: "top-right",
            }}
          />
        )}
      </form>
    </div>
  );
};
