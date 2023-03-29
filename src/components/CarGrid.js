import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/CarGrid.css'
import { useState, useEffect } from 'react';
import { CarDetails } from './CarDetails';
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';

export function CarGrid(){
  const [cars, setCars] = useState({});
  const [carsCopy, setCarsCopy] = useState({}); // All cars data
  // const [showCar, setShowCar] = useState(false);
  const [carDetails, setCarDetails] = useState({}); // single car info
  const [modalShow, setModalShow] = useState(false);

  async function fetchAllCars () {
    const res = await fetch('http://localhost:8000/cars')
    const carsData = await res.json();
    setCars(carsData);
    // setShowCar(!showCar);
    setCarsCopy(carsData);
  }

  async function fetchSingleCar (id) {
    const res = await fetch(`http://localhost:8000/cars/${id}`)
    const singleCar = await res.json();
    setCarDetails(singleCar);
    setModalShow(true);
  }

  useEffect(() => {
    fetchAllCars();
  }, [])

  const handleCars = (e) => {
    setCars(carsCopy); // setCars to all data in the database
    setCars(carsCopy.filter((car) => car.make === e));
  };

  const handlePrice = (e) => {
    if (e === 'High to Low') {
      let descending = [...carsCopy].sort((a, b) => b.cost - a.cost);
      setCars(descending);
    }
    if (e === 'Low to High') {
      let ascending = [...carsCopy].sort((a, b) => a.cost - b.cost);
      setCars(ascending);
    }
  }

  const clearFilter = () => {
    setCars(carsCopy);
  }
    
    return (
      <>
        <Dropdown onSelect={handleCars} align={"start"} className="d-inline mx-2" autoClose="outside, true">
          <Dropdown.Toggle  id="make-Filter">
            Select Make
          </Dropdown.Toggle>
  
          <Dropdown.Menu>
            <Dropdown.Item eventKey={'Bentley'} href="#">Bentley</Dropdown.Item>
            <Dropdown.Item eventKey={'BMW'} href="#">BMW</Dropdown.Item>
            <Dropdown.Item eventKey={'Ferrari'} href="#">Ferrari</Dropdown.Item>
            <Dropdown.Item eventKey={'Ford'} href="#">Ford</Dropdown.Item>
            <Dropdown.Item eventKey={'Lamborghini'} href="#">Lamborghini</Dropdown.Item>
            <Dropdown.Item eventKey={'Mercedes'} href="#">Mercedes</Dropdown.Item>
            <Dropdown.Item eventKey={'Porsche'} href="#">Porsche</Dropdown.Item>
            <Dropdown.Item eventKey={'Rolls Royce'} href="#">Rolls Royce</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <Dropdown onSelect={handlePrice} align={"start"} className="d-inline mx-2" autoClose="outside, true">
          <Dropdown.Toggle  id="make-Filter">
            Sort by price
          </Dropdown.Toggle>
  
          <Dropdown.Menu>
          {/* <Dropdown.Header>Sort by price</Dropdown.Header> */}
            <Dropdown.Item eventKey={'Low to High'} href="#">Low to High</Dropdown.Item>
            <Dropdown.Item eventKey={'High to Low'} href="#">High to Low</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <button className='btn btn-dark' onClick={clearFilter}>View All</button>
        
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

        {/* Single car view, toggled by clicking on an image */}
        <CarDetails
          carDetails={carDetails}
          show={modalShow}
          onHide={() => setModalShow(false)} 
        />

      </>
      );
}