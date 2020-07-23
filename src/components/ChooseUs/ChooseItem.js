import React from 'react';

const ChooseItem = ({ item }) => {
  const { title, description, img, icon } = item;
  return (
    <div className="chooseUs-item">
      <li>
        <img src={img} alt="" />
      </li>
      <li>
        <div>
          <img src={icon} alt="" />
        </div>
        <div>
          <h5>{title}</h5>
          <p>{description}</p>
          <h6>
            See more <i className="fa fa-arrow-right"></i>{' '}
          </h6>
        </div>
      </li>
    </div>
  );
};

export default ChooseItem;
