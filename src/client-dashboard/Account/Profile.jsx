import React from 'react';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
// import {Link,} from 'react-router-dom';



function Profile() {
  
  return (
    <div className='formbox'>
      
      <Form noValidate className="bg-light p-5">
      <Row className="mb-3">
        <Form.Group as={Col} md="6" controlId="validationCustom01">
          <Form.Control
            required
            type="text"
            placeholder="Firstname"
          />
        </Form.Group>
        <Form.Group as={Col} md="6" controlId="validationCustom02">
          <Form.Control
            required
            type="text"
            placeholder="Lastname"
          />
        </Form.Group>
        <Form.Group as={Col} md="6" controlId="validationCustomEmail">
          <InputGroup hasValidation>
            <Form.Control
              type="text"
              placeholder="Email"
              aria-describedby="inputGroupPrepend"
              required
            />
          </InputGroup>
        </Form.Group>
        <Form.Group as={Col} md="6" controlId="validationCustom06">
          <Form.Control type="text" placeholder="Phone number" required />
        </Form.Group>
        <Form.Group as={Col} md="12" controlId="validationCustom05">
          <Form.Control as="textarea" placeholder="Address" required />
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <h4 className="text-dark">Change Password</h4>
             <Form.Group as={Col} md="4" controlId="validationCustom03">
          <Form.Label>Previous Password</Form.Label>
          <InputGroup hasValidation>
            <Form.Control
              type="password"
              placeholder="Previous Password"
              aria-describedby="inputGroupPrepend"
              required
            />
            <Form.Control.Feedback type="invalid">
              Password must be between 8 - 20 characters and must contain uppercase and lowercase letter with special characters.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
      <Form.Group as={Col} md="4" controlId="validationCustom03">
          <Form.Label>Password</Form.Label>
          <InputGroup hasValidation>
            <Form.Control
              type="password"
              placeholder=" Password"
              aria-describedby="inputGroupPrepend"
              required
            />
            <Form.Control.Feedback type="invalid">
              Password must be between 8 - 20 characters and must contain uppercase and lowercase letter with special characters.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom04">
          <Form.Label>Confirm Password</Form.Label>
          <InputGroup hasValidation>
            <Form.Control
              type="password"
              placeholder="Confirm Password"
              aria-describedby="inputGroupPrepend"
              required
            />
            <Form.Control.Feedback type="invalid">
              Please repeat password.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
      </Row>

    </Form>

    </div>
  );
}

export default Profile
