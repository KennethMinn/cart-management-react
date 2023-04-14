import React, { useContext } from "react";
import { CategoriesContext } from "../contexts/categories-context";
import { ProductsContext } from "../contexts/products-context";

const Categories = () => {
  const { filteredProducts, setFilteredProducts, products, setProducts } =
    useContext(ProductsContext);
  const { categories, setCategories } = useContext(CategoriesContext);

  const test = (e) => {
    const catItems = products.filter(
      (product) => product.category === e.target.textContent
    );
    console.log(catItems);
    setFilteredProducts(catItems);
  };

  return (
    <>
      <div className=" flex gap-4 mt-4">
        <button
          className="cat-btn"
          onClick={() => setFilteredProducts(products)}
        >
          All
        </button>
        {categories.map((cat, i) => (
          <button key={i} className=" cat-btn" onClick={test}>
            {cat}
          </button>
        ))}
      </div>
    </>
  );
};

export default Categories;
