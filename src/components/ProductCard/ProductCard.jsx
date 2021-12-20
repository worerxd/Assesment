import { useNavigate } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import { Rating } from 'react-simple-star-rating';
import { useEffect, useState } from 'react';
import { useProductContext } from '../../context/Products/ProductProvider';

import './ProductCard.css';

const ProductCard = ({ product }) => {
  const [timerMinutes, setTimerMinutes] = useState();
  const [timerSeconds, setTimerSeconds] = useState();

  const { setTimer } = useProductContext();

  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/detail/${product.id}`);
  };

  useEffect(() => {
    setTimer(product.countDownTimer, setTimerMinutes, setTimerSeconds);
  }, []);

  return (
    <div className="card">
      <img className="card__img" src={product.image} alt="" />
      <div className="card__body">
        <h4 className="card__category">{product.category.toUpperCase()}</h4>
        <h3 className="card__title">
          {product.title.length < 60
            ? product.title
            : `${product.title.substring(0, 60)} ...`}
        </h3>
        <div className="card__rating-price">
          <h2 className="card__price">{product.price}</h2>
          <div className="card__rating-container">
            <Rating
              initialValue={product.rating.rate}
              fillColor="#35E1DE"
              size={20}
            />
            <p className="card__rating-number">{product.rating.rate}</p>
          </div>
        </div>
        {timerMinutes === 0 && timerSeconds === 0 ? (
          <div>
            <p className="card__timer--expired">Time Expired</p>
            <button
              className="card__btn--disabled"
              type="button"
              disabled
              onClick={handleClick}
            >
              Go to Detail
            </button>
          </div>
        ) : (
          <div>
            <p className="card__timer">
              Time left: {timerMinutes < 10 ? `0${timerMinutes}` : timerMinutes}
              :{timerSeconds < 10 ? `0${timerSeconds}` : timerSeconds}
            </p>

            <button className="card__btn" type="button" onClick={handleClick}>
              Go to Detail
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCard;

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    countDownTimer: PropTypes.number.isRequired,
    rating: PropTypes.shape({
      rate: PropTypes.number,
    }).isRequired,
  }).isRequired,
};
