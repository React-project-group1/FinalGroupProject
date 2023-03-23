import logo from './logo.svg';
import './App.css';
//import React, { useState, useEffect } from 'react';
//import { ItemsList } from './ItemsList';
//import { ItemDetails } from './ItemDetails';
//import { Form } from './form';
import {Link } from "react-router-dom";
function Login() {
  //const [cars, setcars] = useState([]);
	//const [carDetails, setcarDetails] = useState('');
	//const [form, setForm] = useState(false);
  
  const toggleForm = () => {
		//setForm(!form);
	}
  return (
    <div className="header">
      <header className="login-header">
        <img src={logo} className="car-logo" alt="logo" />
        <p>
          Pretty Boys Auto-Mobiles
        </p>
              <br />
            <Link to="/App"><button>
              Continue as guest 
            </button>
            </Link>
      </header>
    </div>
  );
}

export default LoginPage;
