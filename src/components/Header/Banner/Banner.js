import React from 'react';
import './Banner.css';

const Banner = () => {
  return (
    <div className="banner-wrapper">
      <h2>Best food waiting for your belly</h2>
      <div class="banner-input">
        <input type="text" placeholder="Search food items" />
        <button class="btn btn-primary">Search</button>
      </div>
    </div>
  );
};

export default Banner;
