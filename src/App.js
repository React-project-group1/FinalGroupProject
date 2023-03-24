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
