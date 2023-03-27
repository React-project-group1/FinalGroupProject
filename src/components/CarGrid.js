import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/CarGrid.css'
import { useState, useEffect } from 'react';
import { CarDetails } from './CarDetails';
import Dropdown from 'react-bootstrap/Dropdown';

export function CarGrid(){
  const [cars, setCars] = useState({});
  const [showCar, setShowCar] = useState(false);
  const [carDetails, setCarDetails] = useState();
  const [filteredCars, setFilteredCars] = useState();

  async function fetchAllCars () {
    const res = await fetch('http://localhost:8000/cars')
    const carsData = await res.json();
    setCars(carsData);
    // setFilteredCars(carsData);
  }

  async function fetchSingleCar (id) {
    const res = await fetch(`http://localhost:8000/cars/${id}`)
    const singleCar = await res.json();
    setCarDetails(singleCar);
    setShowCar(!showCar);
  }

  useEffect(() => {
    fetchAllCars();
  }, [])

  // const handleCars = (e) => {
  //   setFilteredCars()
  //   setFilteredCars(cars.filter((car) => car.make === e));
  // }

    const handleCars = (e) => {
        setFilteredCars(cars);
        setFilteredCars(cars.filter((car) => car.make === e));
    };
    
    return (
      <>
        <Dropdown onSelect={handleCars} align={"start"} className="d-inline mx-2" autoClose="outside, true">
          <Dropdown.Toggle  id="make-Filter">
            Select Make
          </Dropdown.Toggle>
  
          <Dropdown.Menu>
          <Dropdown.Header> Select a manufacturer</Dropdown.Header>
            <Dropdown.Item eventKey={'Porsche'} href="#">Porsche</Dropdown.Item>
            <Dropdown.Item eventKey={'Lamborghini'} href="#">Lamborghini</Dropdown.Item>
            <Dropdown.Item eventKey={'Ferrari'} href="#">Ferrari</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        
        <Row xs={1} md={2} lg={3} className="g-4 mx-4">
          {Array.from({ length: cars.length }).map((_, idx) => (
            <Col>
              <Card onClick={() => fetchSingleCar(cars[idx].id)} bg={"secondary"} className="card-img-top">
                <Card.Img variant="top" src={cars[idx].imagePath} />
                  <Card.Body>
                    <Card.Title>{cars[idx].make}, {cars[idx].model}</Card.Title>
                  </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        {showCar ?         
          <CarDetails carDetails={carDetails} /> 
        : null }
      </>
      );
}