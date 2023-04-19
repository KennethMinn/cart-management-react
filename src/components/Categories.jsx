import React from "react";
import { setFilteredProducts } from "../store/products/product-action";
import { useDispatch, useSelector } from "react-redux";
import { selectProducts } from "../store/products/product-selector";
import { selectCategories } from "../store/categories/category-selector";

const Categories = () => {
  const products = useSelector(selectProducts);
  const categories = useSelector(selectCategories);
  const dispatch = useDispatch();

  const renderCategories = (e) => {
    const catItems = products.filter(
      (product) => product.category === e.target.textContent
    );
    dispatch(setFilteredProducts(catItems));
    e.target.classList.add("active");
  };

  return (
    <>
      <div className=" flex gap-4 mt-4">
        <button
          className="cat-btn"
          onClick={() => dispatch(setFilteredProducts(products))}
        >
          All
        </button>
        {categories.map((cat, i) => (
          <button key={i} className=" cat-btn" onClick={renderCategories}>
            {cat}
          </button>
        ))}
      </div>
    </>
  );
};

export default Categories;
