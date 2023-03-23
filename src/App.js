import logo from './PBS.jpg';
import './style.css'
//import {Link } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import { CarsList } from './components/CarsList';
//import { CarDetails } from './CarDetails';
import { Form } from './components/Form';
import { Navigation } from './components/Navigation'
import { CarGrid } from './components/CarGrid';
import AppRouter from './components/AppRouter';
function App() {
  <AppRouter />
  const [cars, setCars] = useState([]);
	//const [carDetails, setCarDetails] = useState('');
	const [form, setForm] = useState(false);
  
  const toggleForm = () => {
		setForm(!form);
	}
  return (
    <main>
    <div className='header'>
      <img src={logo}    className="logo" alt="logo" />
        <br/>
        
        {/*!form && !carDetails ? 
				<button className='button add-button' onClick={toggleForm}>Add Car</button> 
  : null*/}
			</div>
      <div>
          <Navigation/>
          <CarGrid/>
      </div>
			{/*form && <Form form={form} setForm={setForm} />*/}

		{/*!carDetails ?
				<CarsList cars={cars} setCarDetails={setCarDetails} form={form} setForm={setForm} /> :
				<CarDetails car={carDetails} setCarDetails={setCarDetails} />
        */} 
        <div>
          
        </div>
    </main>
  );
}

export default App;
