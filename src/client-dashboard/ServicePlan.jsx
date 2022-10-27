import React, {useState} from 'react'
import {Row, Col} from 'react-bootstrap'
// import {} from 'react-icons/fa'
import {Link} from 'react-router-dom'
import Form from 'react-bootstrap/Form';
import { MedButton } from '../components/buttons/buttons';


function ServicePlan() {

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
      <div className="allTitle">
        <h3>Service Plan</h3>
        <p className="text-secondary">Subscribe for one of our service packages</p>
      </div>
      <Row>
        <Col className="md-6">
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Form.Group as={Col} md="12" controlId="validationCustom06">
              <Form.Label className="subscriptionLabel">Subscription Plan</Form.Label>
              <Form.Select  className="inputSubscription bg-transparent" aria-label="Default select example">
                <option >Select Plan</option>
                <option value="1">Basic</option>
                <option value="2">Lite</option>
                <option value="3">Premium</option>
              </Form.Select>
              <Form.Control.Feedback type="invalid">
                Please select a subscription plan.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="12" controlId="validationCustom06">
              <Form.Label className="subscriptionLabel">Service Category</Form.Label>
              <Form.Select  className="inputSubscription bg-transparent" aria-label="Default select example">
                <option >Select Category</option>
                <option value="1">Basic</option>
                <option value="2">Lite</option>
                <option value="3">Premium</option>
              </Form.Select>
              <Form.Control.Feedback type="invalid">
                A category is required.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="12" controlId="validationCustom06">
              <Form.Label className="subscriptionLabel">Payment Method </Form.Label>
              <Form.Select  className="inputSubscription bg-transparent" aria-label="Default select example">
                <option >Select Payment Method</option>
                <option value="1">Basic</option>
                <option value="2">Lite</option>
                <option value="3">Premium</option>
              </Form.Select>
              <Form.Control.Feedback type="invalid">
                Please select a payment method.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <MedButton className="bg-primary">

          <Link to="/" className="text-light"> Subscribe </Link>
          </MedButton>
        </Form>
        </Col>
        <Col className="md-6">

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

export default ServicePlan
