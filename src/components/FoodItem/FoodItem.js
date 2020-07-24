import React from 'react';

const FoodItem = ({ item }) => {
  const { title, img, subtitle, price } = item;
  return (
    <div className="food-container">
      <li>
        <img src={img} alt="" />
        <div className="hover-content">
          <button>
            <i className="fa fa-cart-plus" aria-hidden="true"></i>
          </button>
        </div>
      </li>
      <li>
        <h2>{title}</h2>
      </li>
      <li>
        <p>{subtitle}</p>
      </li>
      <li>
        <h4>${price}</h4>
      </li>
    </div>
  );
};

export default FoodItem;
