import React, {useState} from 'react'
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
// import {Link} from 'react-router-dom';
import { MedButton } from '../../components/buttons/buttons';


function NewRequests() {
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
        <h3 className="text-dark">New Request</h3>
      </div>
      <Form noValidate validated={validated} onSubmit={handleSubmit} className="bg-light p-5">
      <Row className="mb-3">
        <Form.Group as={Col} md="6" controlId="validationCustom01" className="mb-4 ">
          <Form.Label className="text-dark">Handyman/ Technician Job type</Form.Label>
          <Form.Select aria-label="Default select example" className=" bg-transparent p-3" >
            <option>Select Services</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </Form.Select>
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="6" controlId="validationCustom02" className="mb-4">
          <Form.Label className="text-dark">What is the task to be done</Form.Label>
          <Form.Select aria-label="Default select example" className=" bg-transparent p-3" >
            <option>Services Types</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </Form.Select>
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="6" controlId="validationCustom03" className="mb-4">
          <Form.Label className="text-dark">Service Type (Express or Schedule)</Form.Label>
          <InputGroup hasValidation>
          <Form.Select aria-label="Default select example" className=" bg-transparent p-3" >
            <option>Services Types</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </Form.Select>
            <Form.Control.Feedback type="invalid">
              Please choose a service type.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
        <Form.Group as={Col} md="6" controlId="validationCustom04" className="mb-4">
          <Form.Label className="text-dark">Schedule Date</Form.Label>
          <InputGroup hasValidation>
            <Form.Control
              type="date"
              aria-describedby="inputGroupPrepend"
              required
              className=" bg-transparent p-3"
            />
            <Form.Control.Feedback type="invalid">
              Please choose a valid date
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
        <Form.Group as={Col} md="6" controlId="validationCustom05" className="mb-4">
            <Form.Label className="text-dark">Description of task to be done</Form.Label>
            <Form.Control as="textarea" placeholder="Describe the task to be done" required className="bigInput" />
            <Form.Control.Feedback type="invalid">
              Please provide a brief discription of the task.
            </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="6" controlId="validationCustom06" className="mb-4">
          <Form.Label className="text-dark">Upload a picture </Form.Label>
          <InputGroup hasValidation>
            <Form.Control
              type="file"
              aria-describedby="inputGroupPrepend"
              required
              className="bigInput"
            />
            <Form.Control.Feedback type="invalid">
              Please upload a picture
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
      </Row>
      <MedButton className="bg-primary text-light f-3"> Submit Request </MedButton>

      </Form>

      </div>



  );
}

export default NewRequests
