import logo from './PBAauto.png';
import './styles/App.css'
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
      <img src={logo} alt="logo" />
        <Navigation/>
    </div>
        <AppRouter/>
    </main>
  );
}

export default App;
