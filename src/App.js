import logo from './PBS.jpg';
import './App.css'
import React, { useState, useEffect } from 'react';
import Auth from './components/Auth';
import AppRouter from './components/AppRouter';
import { Navigation } from './components/Navigation'
function App() {
  const [cars, setCars] = useState([]);
	//const [carDetails, setCarDetails] = useState('');
	const [form, setForm] = useState(false);

  const fetchAllCars = async () => {
    await fetch('http://localhost:8000/cars')
      .then((response) => response.json())
      .then((data) => console.log(data));
  }
  
  fetchAllCars();

  const toggleForm = () => {
		setForm(!form);
	}
  return (
    <main>
    <div className='header'>
      <img src={logo}    className="logo" alt="logo" />
        <Navigation/>
        <AppRouter/>
        
      
    </div>
    </main>
  );
}

export default App;
