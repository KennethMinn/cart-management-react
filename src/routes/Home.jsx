import React, { useContext, useEffect, useState } from "react";
import Cards from "../components/Cards";
import { SearchContext } from "../contexts/SearchContext";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState(products);
  const { searchField } = useContext(SearchContext);

  useEffect(() => {
    getProducts();
  }, []);

  useEffect(() => {
    const newFilteredProducts = products.filter((product) =>
      product.title.toLowerCase().includes(searchField)
    );
    setFilteredProducts(newFilteredProducts);
  }, [searchField, products]);

  const getProducts = async () => {
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();
    setProducts(data);
    console.log(data);
  };

  return (
    <div className=" grid grid-cols-3 gap-44 gap-y-10 ">
      {filteredProducts.map((product) => (
        <Cards key={product.id} product={product} id={product.id} />
      ))}
    </div>
  );
};

export default Home;
