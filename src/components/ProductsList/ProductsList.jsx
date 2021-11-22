import React from 'react';
import ProductCard from '../ProductCard/ProductCard';

const ProductsList = ({cars, getInfo}) => {
    // console.log(getInfo);
    // console.log('this is cars from ProductsList', cars);
    return (
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            {
                cars.map((car) => (<ProductCard getInfo={getInfo} key={car.id} car={car}/>))
            }
        </div>
    );
};

export default ProductsList;