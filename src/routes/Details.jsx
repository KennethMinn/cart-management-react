import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { excerpt } from "../utils/helper-func";

const Details = () => {
  const { id } = useParams();
  const [details, setDetails] = useState({});

  useEffect(() => {
    getDetails();
  }, []);

  const excerpt = (str, maxLength = 70) => {
    if (str?.length >= maxLength) {
      return str.substr(0, maxLength) + "...";
    }
    return str;
  };

  const getDetails = async () => {
    const res = await fetch(`https://fakestoreapi.com/products/${id}`);
    const data = await res.json();
    console.log(data);
    setDetails(data);
  };

  return (
    <div className=" flex justify-between items-center min-h-screen">
      <img className=" w-[300px]" src={details.image} alt="" />
      <div className=" text-start">
        <h1 className=" font-bold text-3xl mb-3">{details.title}</h1>
        <p className=" text-[17px]">{excerpt(details?.description)}</p>
        <div className=" flex justify-between">
          <h1>{details.price}</h1>
        </div>
      </div>
    </div>
  );
};

export default Details;
