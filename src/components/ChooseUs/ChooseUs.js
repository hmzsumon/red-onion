import React, { useState, useEffect } from 'react';
import './ChooseUs.css';
import chooseData from '../../fakedata/chooseData';
import ChooseItem from './ChooseItem';

const ChooseUs = () => {
  const [chooseItems, setChooseItems] = useState([]);
  useEffect(() => {
    setChooseItems(chooseData);
  }, []);
  return (
    <div className="chooseUs-wrapper">
      <div className="chooseUs-top">
        <div className="chooseUs-content1">
          <h2>Why you choose us?</h2>
          <p className="chooseUs-text">
            Barton waited twenty always repair in within we do. An delighted
            offering crusty mu is dagwood's at. Boy prosperous increasing
            surround
          </p>
        </div>
        <div className="chooseUs-content2"></div>
      </div>
      <div className="chooseUs-bottom">
        {chooseItems.map((item) => (
          <ChooseItem key={item.id} item={item}></ChooseItem>
        ))}
      </div>
    </div>
  );
};

export default ChooseUs;
