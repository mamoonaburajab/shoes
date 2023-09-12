import React from 'react';
import styles from './Home.css'; 
import shoeModels from '../../assets/data/Data.json';
import Card from '../../Component/card/Card';
import Slider from '../../Component/Slider/Slider'
import SliderData from '../../assets/data/SliderData'

function Home() {
    const featuredModels = shoeModels.slice(0, 11);

    return (
        <div className='app'>
            <Slider slides={SliderData} />
            <h1 className='welcome'>Welcome to Our Shoe Collection</h1>
            <h2 className={styles.subheading}>New Collection</h2>
            <div className={"cardContainer"}>
                {featuredModels.map((model) => (
                    <Card key={model.id} model={model}/>
                ))}
            </div>
        </div>
    );
}

export default Home;
