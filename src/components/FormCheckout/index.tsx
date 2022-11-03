import React, { FormEvent, useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";

type UserValue = {
  name: string;
  lastName: string;
  email: string;
  address: string;
};

const initialState = {
  name: "",
  lastName: "",
  email: "",
  address: "",
};

export const FormCheckout = () => {
  const [values, setValues] = useState<UserValue>(initialState);
  const { cartItems, dispatch } = useContext(CartContext);
//HACER EL USEFORM 
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    
    setValues(initialState);
    dispatch({
      payload:[],
      type:"CLEAR"
    })
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  console.log(values);

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
              value={values.name}
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
              value={values.lastName}
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
              value={values.email}
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
              value={values.address}
            />
          </div>
        </div>
        <br />
        <button className="w-100 btn btn-primary" type="submit">
          Procesar Orden
        </button>
      </form>
    </div>
  );
};
