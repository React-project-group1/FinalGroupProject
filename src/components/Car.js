/*import React from 'react';
import { CarDetails } from './CarDetails';
import apiURL from '../api';

export const Car = (props) => {

  async function fetchDetails(){
		try {
			const response = await fetch(`${apiURL}/cars/${props.car.id}`);
			const carData = await response.json();
			
      		props.setCarDetails(carData)
			props.setForm(false);
		} catch (err) {
			console.log("Oh no an error! ", err)
		}
	}

  return <>
  	<div className='car-wrapper'>
    	<h3>{props.car.title}</h3>
		<br />
  		<div className='car-card'>
    		<img className='car-image' 
				onClick={fetchDetails}
				src={props.car.image} 
				alt={props.car.title} />
  		</div>
  	</div>
    {props.carDetails && <CarDetails /> }
  </>
}*/