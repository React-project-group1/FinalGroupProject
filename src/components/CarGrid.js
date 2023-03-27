import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import 'bootstrap/dist/css/bootstrap.min.css'
import './CarGrid.css'
import { useState, useEffect } from 'react';

export function CarGrid(){
  const [cars, setCars] = useState({});

  async function fetchAllCars () {
    const res = await fetch('http://localhost:8000/cars')
    const carData = await res.json();
    setCars(carData);
  }

  useEffect(() => {
    fetchAllCars();
  }, [])
    
    return (
      <>
        <Row xs={1} md={2} lg={3} className="g-4 mx-4">
          {Array.from({ length: cars.length }).map((_, idx) => (
            <Col>
              <Card bg={"secondary"} className="card-img-top">
                <Card.Img variant="top" src={cars[idx].imagePath} />
                  <Card.Body>
                    <Card.Title>{cars[idx].make}, {cars[idx].model}</Card.Title>
                  </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </>
      );
}