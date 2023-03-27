import React from 'react';

export function CarDetails({ carDetails }) {

    let pounds = Intl.NumberFormat('en-GB', {
        style: 'currency',
        currency: 'GBP',
    });

	return (
        <div>
            <h2>{carDetails.model}, {carDetails.make}</h2>
            <h2>Cost: {pounds.format(carDetails.cost)}</h2>
            <br/>
            <h2>Mileage: {carDetails.mileage}</h2>
            <br/>
            <h2>Engine Size: {carDetails.engineSize}l</h2>
            <br/>
            <h2>Description: {carDetails.description}</h2>
            <br/>
            <img src={carDetails.imagePath} />
        </div>
    )
} 
