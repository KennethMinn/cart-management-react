import React, { useState } from 'react';
import { setFilteredProducts } from '../store/products/product-reducer';
import { useDispatch, useSelector } from 'react-redux';
import { selectProducts } from '../store/products/product-selector';
import { selectCategories } from '../store/categories/category-selector';

const Categories = () => {
  const products = useSelector(selectProducts);
  const categories = useSelector(selectCategories);
  const dispatch = useDispatch();
  const [active, setActive] = useState('');
  const renderCategories = e => {
    const catItems = products.filter(
      product => product.category === e.target.textContent
    );
    dispatch(setFilteredProducts(catItems));
  };

  return (
    <>
      <div className=" flex gap-4 mt-4">
        <button
          className={`${active === 'null' ? 'cat-active-btn' : 'cat-btn'}`}
          onClick={() => {
            dispatch(setFilteredProducts(products));
            setActive('null');
          }}
        >
          All
        </button>
        {categories.map((cat, i) => (
          <button
            key={i}
            className={`${active === cat ? 'cat-active-btn' : 'cat-btn'}`}
            onClick={e => {
              renderCategories(e);
              setActive(cat);
            }}
          >
            {cat}
          </button>
        ))}
      </div>
    </>
  );
};

export default Categories;
