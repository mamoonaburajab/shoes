// AllModels.js
import React from 'react';
import shoeModels from '../../assets/data/Data.json'; // Import the shoe model data
import Card from '../../Component/card/Card'; // Import your Card component

function AllModels() {
  return (
    <div>
      <h1>All Shoe Models</h1>
      <div className="model-list">
        {shoeModels.map((model) => (
          <Card key={model.id} model={model} />
        ))}
      </div>
    </div>
  );
}

export default AllModels;
