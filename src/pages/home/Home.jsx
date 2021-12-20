import React from 'react';
import ProductCard from '../../components/ProductCard/ProductCard';
import Spinner from '../../components/Spinner/Spinner';
import { useProductContext } from '../../context/Products/ProductProvider';

import './Home.css';

const Home = () => {
  const { products } = useProductContext();

  return (
    <div>
      <h1 className="home__title">Products</h1>
      <div className="container">
        <div className="wrapper">
          {products ? (
            products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          ) : (
            <Spinner customText="Loading" />
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
