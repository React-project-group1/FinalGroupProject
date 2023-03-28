import React, { useState, useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';

function RecentCars() {
    const [index, setIndex] = useState(0);
    const [carImages, setCarImages] = useState([]);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  async function getAllImages() {
    const res = await fetch('http://localhost:8000/cars')
    const data = await res.json();

    let images = data.map((car) => car.imagePath);
    setCarImages(images);
  }
  
  
  const randomIndex = Math.floor(Math.random() * carImages.length);

  useEffect(() => {
    getAllImages();
  }, [])

  return (
    <Carousel fade activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={carImages[randomIndex]}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={carImages[randomIndex]}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={carImages[randomIndex]}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
  
  export default RecentCars;