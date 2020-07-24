import React, { useState, useEffect } from 'react';
import FoodItem from './FoodItem';
import foods from '../../fakedata/data';
import './Food.css';

const Food = () => {
  let selectedItem = 'lunch';

  const [activeCatagories, setActiveCatagories] = useState({
    lunchActive: true,
    dinnerActive: false,
    breakfastActive: false,
  });

  //  initials set data
  const [items, setItems] = useState([]);

  useEffect(() => {
    const data = foods.filter((item) => item.catagories === selectedItem);
    setItems(data);
  }, []);

  // conditionally set data when click catagories
  const selectHandler = (item) => {
    if (item === 'breakfast') {
      let previousState = activeCatagories;
      previousState.breakfastActive = true;
      previousState.lunchActive = false;
      previousState.dinnerActive = false;
      setActiveCatagories(previousState);
    } else if (item === 'dinner') {
      let previousState = activeCatagories;
      previousState.breakfastActive = false;
      previousState.lunchActive = false;
      previousState.dinnerActive = true;
      setActiveCatagories(previousState);
    } else if (item === 'lunch') {
      let previousState = activeCatagories;
      previousState.breakfastActive = false;
      previousState.lunchActive = true;
      previousState.dinnerActive = false;
      setActiveCatagories(previousState);
    }

    selectedItem = item;
    const data = foods.filter((item) => item.catagories === selectedItem);
    setItems(data);
  };

  const { lunchActive, dinnerActive, breakfastActive } = activeCatagories;

  return (
    <div className="food-wrapper">
      <div>
        <ul className="food-menu">
          <li
            className={breakfastActive ? 'active' : ''}
            onClick={() => selectHandler('breakfast')}
          >
            Breakfast
          </li>
          <li
            className={lunchActive ? 'active ' : ''}
            onClick={() => selectHandler('lunch')}
          >
            Lunch
          </li>
          <li
            className={dinnerActive ? 'active' : ''}
            onClick={() => selectHandler('dinner')}
          >
            Dinner
          </li>
        </ul>
      </div>
      <div className="food-items">
        {items.map((item) => (
          <FoodItem key={item.id} item={item} />
        ))}
      </div>
      <div className="checkout-btn-aria">
        <button className="btn checkout-btn  my-4 text-center text-capitalize">
          Checkout your food
        </button>
      </div>
    </div>
  );
};

export default Food;
