import React from 'react';
import './shop.css'; // Create a CSS file for styling the shop page
import Card from '../../Component/card/Card'; // Import your Card component
import shoeData from '../../assets/data/Data.json'; // Import your shoe data array

function Shop() {
  return (
    <div className="shop-container">
      {shoeData.map((shoe) => (
        <Card key={shoe.id} model={shoe} />
      ))}
    </div>
  );
}

export default Shop;
