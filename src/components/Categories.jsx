import React, { useContext } from "react";
import { CategoriesContext } from "../contexts/categories-context";

const Categories = () => {
  const { categories, setCategories } = useContext(CategoriesContext);
  return (
    <>
      <div className=" flex gap-4 mt-4">
        {categories.map((cat) => (
          <button key={cat} className=" cat-btn">{cat}</button>
        ))}
      </div>
    </>
  );
};

export default Categories;
