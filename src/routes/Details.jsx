import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Details = () => {
  const { id } = useParams();
  const [details, setDetails] = useState({});

  useEffect(() => {
    getDetails();
  }, []);

  const getDetails = async () => {
    const res = await fetch(`https://fakestoreapi.com/products/${id}`);
    const data = await res.json();
    console.log(data);
    setDetails(data);
  };

  return <div>
    <h1>{details.title}</h1>
  </div>;
};

export default Details;
