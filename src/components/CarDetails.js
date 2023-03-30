import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';

export function CarDetails(props) {

    let pounds = Intl.NumberFormat('en-GB', {
        style: 'currency',
        currency: 'GBP',
    });

    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        backdrop="static"
      keyboard={false}
      style = {{overlay: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(255, 255, 255, 0.75)'
      },
      content: {
        position: 'absolute',
        top: '40px',
        left: '40px',
        right: '40px',
        bottom: '40px',
        border: '1px solid #ccc',
        background: '#fff',
        overflow: 'auto',
        WebkitOverflowScrolling: 'touch',
        borderRadius: '4px',
        outline: 'none',
        padding: '20px'
      }
    }}
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter" className='text-#202070'>
            {props.carDetails.make}, {props.carDetails.model}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
              <img className='img-fluid' src={props.carDetails.imagePath} />
              <br />
              <br />
              <p>Cost: {pounds.format(props.carDetails.cost)}</p>
              <p>Mileage: {props.carDetails.mileage}</p>
              <p>Engine Size: {props.carDetails.engineSize}l</p>
              <p>Description: {props.carDetails.description}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button  onClick={props.onHide}>Purchase</Button>
        </Modal.Footer>
      </Modal>
    );
}
	// return (
    //     <div>
    //         <h2>{carDetails.model}, {carDetails.make}</h2>
    //         <h2>Cost: {pounds.format(carDetails.cost)}</h2>
    //         <br/>
    //         <h2>Mileage: {carDetails.mileage}</h2>
    //         <br/>
    //         <h2>Engine Size: {carDetails.engineSize}l</h2>
    //         <br/>
    //         <h2>Description: {carDetails.description}</h2>
    //         <br/>
    //         <img src={carDetails.imagePath} />
    //     </div>
    // )

