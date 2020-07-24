import React from 'react';
import foodData from '../../fakeData/foodData';
function Inventory() {
  const hndleAddProduct = () => {
    const product = foodData;
    console.log(product);
    fetch('http://localhost:4500/api/v1/foods', {
      method: 'POST',
      body: JSON.stringify(product),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
  };
  return (
    <div>
      <h2>This is Inventory</h2>
      <button onClick={hndleAddProduct}>Add Product</button>
    </div>
  );
}

export default Inventory;
