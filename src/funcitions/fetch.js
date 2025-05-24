import { useEffect, useState } from "react";

export const FetchData = () => {
  const [Data, setData] = useState([]);

  useEffect(() => {
    const fetching = async () => {
      const data = await fetch("https://fakestoreapi.com/products");
      const res = await data.json();
      setData(res);
    };
    fetching();
  }, []);
  return { Data };
};

export const FetchDataByID = (id) => {
  const [Data, setData] = useState();

  useEffect(() => {
    const fetching = async () => {
      const data = await fetch(`https://fakestoreapi.com/products/${id}`);
      const res = await data.json();
      setData(res);
    };
    fetching();
  }, []);
  return { Data };
};
