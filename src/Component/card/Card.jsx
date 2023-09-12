import { Link } from 'react-router-dom';
import React from 'react';
import './Card.css';

function Card({ model }) {
    return (
        <div className="card">
            <img className='img' src={model.image} alt={model.Name} />
            <h2 className='NameModel'>{model.Name}</h2>
            <p className='price'>${model.price.toFixed(2)}</p>
            <button className='AddToCard'><Link className='LinkBtn' to={`/`}>Add to Cart</Link></button>
            <Link to={`/item/${model.id}`} className='links'>View Details</Link>
        </div>
    );
}

export default Card;
