import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/CarGrid.css'
import { useState, useEffect } from 'react';
import { CarDetails } from './CarDetails';

export function CarGrid(){
  const [cars, setCars] = useState({});
  const [showCar, setShowCar] = useState(false);
  const [carDetails, setCarDetails] = useState();

  async function fetchAllCars () {
    const res = await fetch('http://localhost:8000/cars')
    const carsData = await res.json();
    setCars(carsData);
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
    
    return (
      <>
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