import React from 'react';
import { useParams } from 'react-router-dom';
import Data from '../../assets/data/Data.json';
import './ItemDetails.css'; // Import your custom CSS

function ItemDetails() {
    const { id } = useParams();
    const selectedModel = Data.find((model) => model.id === parseInt(id));

    if (!selectedModel) {
        return <div>Model not found</div>;
    }

    return (
        <div className="item-details">
            <div>  <img src={selectedModel.image} alt={selectedModel.name} />
            </div>
            <div><h2>{selectedModel.Name}</h2>
                <p className='Desciption'>{selectedModel.Desciption}</p>
                <p className="price">${selectedModel.price.toFixed(2)}</p>
                {/* Add more detailed information here */}
            </div>
        </div>
    );
}

export default ItemDetails;
