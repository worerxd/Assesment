/* eslint-disable react/jsx-no-constructed-context-values */
import React, { useState, createContext, useContext, useEffect } from 'react';

const ProductContext = createContext();

// eslint-disable-next-line react/prop-types
export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState();

  const setTimer = (countDownTimer, setTimerMinutes, setTimerSeconds) => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countDownTimer - now;

      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        clearInterval(interval.current);
      } else {
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }
    }, 1000);
  };

  const valuesToPass = {
    products,
    setProducts,
    setTimer,
  };

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => {
        const newData = data.map((product) => {
          // eslint-disable-next-line no-param-reassign
          product.countDownTimer = new Date(
            Date.now() + (Math.random() * (5 - 1) + 1) * 60000,
          ).getTime();
          return product;
        });
        setProducts(newData);
      });
  }, []);

  return (
    <ProductContext.Provider value={valuesToPass}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProductContext = () => {
  const context = useContext(ProductContext);
  if (context === undefined) {
    throw new Error('useContext genera error');
  }
  return context;
};
