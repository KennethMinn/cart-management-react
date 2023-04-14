import React, { useContext, useEffect, useState } from "react";
import Cards from "../components/Cards";
import { SearchContext } from "../contexts/SearchContext";
import { CategoriesContext } from "../contexts/categories-context";
import { ProductsContext } from "../contexts/products-context";

const Home = () => {
  const { products, setProducts } = useContext(ProductsContext);
  const { filteredProducts, setFilteredProducts } = useContext(ProductsContext);
  const { searchField } = useContext(SearchContext);
  const { categories, setCategories } = useContext(CategoriesContext);

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
    const uniqueCategories = [
      ...new Set(data.map((product) => product.category)),
    ];
    setCategories(uniqueCategories);
  };

  return (
    <div className=" grid justify-items-center grid-cols-3 gap-44 gap-y-10 ">
      {filteredProducts.map((product) => (
        <Cards key={product.id} product={product} id={product.id} />
      ))}
    </div>
  );
};

export default Home;
