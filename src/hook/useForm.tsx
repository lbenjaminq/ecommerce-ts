import React,{ useState } from "react";

const useForm  = <T extends Object >(initialState: T) => {
  const [formValues, setFormValues] = useState(initialState);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const resetValues = () => {
    setFormValues(initialState);
  }

  return {
    ...formValues,
    handleChange,
    resetValues
  }

}

export default useForm;