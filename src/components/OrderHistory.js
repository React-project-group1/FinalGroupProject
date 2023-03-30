import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/CarGrid.css'

export function OrderHistory(){
    return (
        <Row xs={1} md={2} lg={3} className="g-4">
          {Array.from({ length: 2 }).map((_, idx) => (
            <Col>
              <Card
               bg={"secondary"}
               >
                <Card.Img variant="" src="holder.js/100px160" />
                <Card.Body>
                  <Card.Title >Car Name</Card.Title>
                  <Card.Text>
                    <ul>
                    <li>Price:</li>
                    <li>Model:</li>
                    <li>Engine:</li>
                    <li>Colour:</li>
                    <li>Mileage:</li>
                    <li>Description:</li>
                    
                    </ul>
                    
                   
                   
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      );
}