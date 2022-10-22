import React, { useEffect, useState } from "react";
import { getData } from "../helpers/getData";
import { Data, DataItem } from "../types/type";

export const useFetch = () => {
  const [data, setData] = useState<Data>({
    products: [],
    isLoading: true,
    isError: false,
  });

  useEffect(() => {
    getData()
      .then((response) => {
        
        setData({ products:response , isLoading: false, isError: false });
      })
      .catch(() =>
        setData({ products: [], isLoading: false, isError: true })
      );
  }, []);
  return data;
};
