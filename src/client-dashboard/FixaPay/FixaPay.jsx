import React, {useState} from 'react'
import {Row, Col} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import Form from 'react-bootstrap/Form';
import { MedButton } from '../../components/buttons/buttons';
import {CheckboxIcon} from '../../components/custom-icon'

function FixaPay() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };
  
  return (
    <div className="container-xxl flex-grow-1 container-p-y">
      <Row>
        <Col className="md-6">
          <div className="allTitle">
            <h3 className="text-dark">Card Number</h3>
            <p className="text-secondary">Enter the digits of your card</p>
          </div>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Row className="mb-3">
              <Form.Group as={Col} md="12" className="mb-4" controlId="validationCustom06">
                <Form.Label className="text-dark">Card Number</Form.Label>
                <p className="text-secondary">Enter digits on the card</p>
                <Form.Control className="text-secondary p-3 bg-transparent" type="text" placeholder="5410 **** **** **** 4321" required />
              </Form.Group>
              <Form.Group as={Col} md="6" className="mb-4" controlId="validationCustom06">
                <Form.Label className="text-dark">Card Expiry Date</Form.Label>
                <p className="text-secondary">Enter card expiry date</p>
                <Form.Control className="text-secondary p-3 bg-transparent" type="text" placeholder="01/29" required />
              </Form.Group>
              <Form.Group as={Col} md="6" className="mb-4" controlId="validationCustom06">
                <Form.Label className="text-dark">CVV</Form.Label>
                <p className="text-secondary">Enter the 3 digits CVV</p>
                <Form.Control className="text-secondary p-3 bg-transparent" type="text" placeholder="***" required /> 
              </Form.Group>
              <Form.Group as={Col} md="6" className="mb-4" controlId="validationCustom06">
                <Form.Label className="text-dark">Card Pin</Form.Label>
                <p className="text-secondary">Enter Card Pin</p>
                <Form.Control className="text-secondary p-3 bg-transparent" type="text" placeholder="****" required />   
              </Form.Group>
            </Row>
            <MedButton className="bg-primary w-100">

            <Link to="/dashboard" className="text-light"> Pay Now </Link>
            </MedButton>
          </Form>
        </Col>
        <Col className="md-6 d-flex justify-content-center align-items-start">
          <div className="d-flex flex-column justify-content-center align-items-center w-50 h-50 bg-primary p-3">
            <h3 className="text-light mt-2">Lite</h3>
            <h5 className="text-light"> &#8358;20,000</h5>
            <ul className="list-unstyled">
              <li className="text-light mb-2"> <CheckboxIcon/> Lörem ipsum syn bivase om debel,</li>
              <li className="text-light mb-2"> <CheckboxIcon/> Lörem ipsum syn bivase om debel,</li>
              <li className="text-light mb-2"> <CheckboxIcon/> Lörem ipsum syn bivase om debel,</li>
              <li className="text-light mb-2"> <CheckboxIcon/> Lörem ipsum syn bivase om debel,</li>
              <li className="text-light mb-2"> <CheckboxIcon/> Lörem ipsum syn bivase om debel,</li>
            </ul>
          </div>
        </Col>

      </Row>


      <div id="subscribePlan">
        
        <Row className="mb-3">
            <Col className="md-6" >

            </Col>
          </Row>
      </div>
    </div>
  )
}

export default FixaPay
