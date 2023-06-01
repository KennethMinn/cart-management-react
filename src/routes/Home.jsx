import React, { useContext, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Cards from '../components/Cards';
import { selectSearchField } from '../store/search/search-selector';
import {
  setProducts,
  setFilteredProducts,
  setIsLoading,
} from '../store/products/product-reducer';
import {
  selectProducts,
  selectFilteredProducts,
  selectIsLoading,
} from '../store/products/product-selector';
import { setCategories } from '../store/categories/category-reducer';
import ClimbingBoxLoader from 'react-spinners/ClimbingBoxLoader';

const Home = () => {
  const products = useSelector(selectProducts);

  const isLoading = useSelector(selectIsLoading);

  const filteredProducts = useSelector(selectFilteredProducts);

  const searchField = useSelector(selectSearchField);

  const dispatch = useDispatch();

  useEffect(() => {
    getProducts();
  }, []);

  useEffect(() => {
    const newFilteredProducts = products.filter(product =>
      product.title.toLowerCase().includes(searchField)
    );
    dispatch(setFilteredProducts(newFilteredProducts));
  }, [searchField, products]);

  const getProducts = async () => {
    dispatch(setIsLoading(true));
    const res = await fetch('https://fakestoreapi.com/products');
    const data = await res.json();
    dispatch(setProducts(data));
    dispatch(setIsLoading(false));
    const uniqueCategories = [
      ...new Set(data.map(product => product.category)),
    ];
    dispatch(setCategories(uniqueCategories));
  };

  if (isLoading)
    return (
      <div className=" flex justify-center items-center h-screen">
        <ClimbingBoxLoader color={'#36d7b7'} loading={true} size={20} />
      </div>
    );

  return (
    <div className=" grid justify-items-center grid-cols-3 gap-44 gap-y-10 ">
      {filteredProducts?.map(product => (
        <Cards key={product.id} product={product} id={product.id} />
      ))}
    </div>
  );
};

export default Home;
