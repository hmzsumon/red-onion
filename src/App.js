import React from 'react';
import Header from './components/Header/Header';
import Banner from './components/Header/Banner/Banner';
import Food from './components/FoodItem/Food';
import ChooseUs from './components/ChooseUs/ChooseUs';

function App() {
  return (
    <div>
      <Header></Header>
      <Banner></Banner>
      <Food></Food>
      <ChooseUs></ChooseUs>
    </div>
  );
}

export default App;
