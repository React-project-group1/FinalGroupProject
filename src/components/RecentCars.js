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

      <Carousel.Item className='d-flex justify-content-center'>
        <img
          className="d-block w-75"
          src={carImages[randomIndex]}
          alt="First slide"
        />
      </Carousel.Item>

      <Carousel.Item className='d-flex justify-content-center'>
        <img
          className="d-block w-75"
          src={carImages[randomIndex]}
          alt="Second slide"
        />
      </Carousel.Item>

      <Carousel.Item className='d-flex justify-content-center'>
        <img
          className="d-block w-75"
          src={carImages[randomIndex]}
          alt="Third slide"
        />
      </Carousel.Item>

    </Carousel>
  );
}
  
  export default RecentCars;