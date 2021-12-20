import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Rating } from 'react-simple-star-rating';
import { useProductContext } from '../../context/Products/ProductProvider';

import './Detail.css';

const Detail = () => {
  const [product, setProduct] = useState();
  const [timerMinutes, setTimerMinutes] = useState();
  const [timerSeconds, setTimerSeconds] = useState();

  const { products, setTimer } = useProductContext();

  const { id } = useParams();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        const foundProduct = products.find((p) => p.id === data.id);
        // eslint-disable-next-line no-param-reassign
        data.countDownTimer = foundProduct.countDownTimer;
        setProduct(data);
      });
    if (product) {
      setTimer(product.countDownTimer, setTimerMinutes, setTimerSeconds);
    }
  }, [products, product]);

  return (
    <div className="container">
      <h1 className="detail__title">PRODUCT DETAIL</h1>
      {product ? (
        <div className="product-detail__container">
          <img src={product.image} alt="" className="product-detail__image" />
          <div className="product-detail__body">
            <h4 className="product-detail__category">
              {product.category.toUpperCase()}
            </h4>
            <h2 className="product-detail__title">
              {product.title.toUpperCase()}
            </h2>
            <div className="product-detail__rating-price">
              <h2 className="product-detail__price">{product.price}</h2>
              <div className="product-detail__rating-container">
                <Rating
                  initialValue={product.rating.rate}
                  fillColor="#35E1DE"
                  size={25}
                />
                <p className="product-detail__rating-number">
                  {product.rating.rate}
                </p>
              </div>
            </div>
            <p className="product-detail__description">{product.description}</p>
            <p className="product-detail__timer">
              Time left: {timerMinutes < 10 ? `0${timerMinutes}` : timerMinutes}
              :{timerSeconds < 10 ? `0${timerSeconds}` : timerSeconds}
            </p>
            {timerMinutes === 0 && timerSeconds === 0 ? (
              <button
                type="button"
                className="product-detail__button--disabled"
                disabled
              >
                Add To Cart
              </button>
            ) : (
              <button type="button" className="product-detail__button">
                Add To Cart
              </button>
            )}
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Detail;
