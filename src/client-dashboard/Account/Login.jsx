import React from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import { FixaLogo } from "../../components/custom-icon";
import { useDispatch, useSelector } from "react-redux";
import { signin } from "../../store/actions/authActions";

export default function Login() {
  const [inputValue, setInputValue] = React.useState({
    email: "",
    password: "",
  });

  const state = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleSubmit = () => {
    //validate
    dispatch(signin(inputValue));
  };
  return (
    <div>
      <Container>
        <Row className="vh-100 d-flex justify-content-center align-items-center text-dark">
          <Col sm={7} md={7} lg={6} xl={4} xs={12}>
            <div className=""></div>
            <Card className="shadow">
              <Card.Body>
                <div className="mb-3 mt-md-4">
                  <div className="text-center">
                    <FixaLogo />
                    <h3 className="mt-3 mb-4 text-dark">Login to Fixa</h3>
                  </div>
                  <div className="mb-3">
                    <Form>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                      </Form.Group>

                      <Form.Group
                        className="mb-3"
                        controlId="formBasicPassword"
                      >
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password " />
                      </Form.Group>
                      <Form.Group
                        className="mb-3"
                        controlId="formBasicCheckbox"
                      >
                        <p className="small">
                          <a className="text-primary" href="#!">
                            Forgot password?
                          </a>
                        </p>
                      </Form.Group>
                      <div className="d-grid">
                        <Button variant="primary" type="submit">
                          Login
                        </Button>
                      </div>
                    </Form>
                    <div className="mt-3">
                      <p className="mb-0  text-center">
                        Don't have an account?{" "}
                        <a href="{''}" className="text-primary fw-bold">
                          Sign Up
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
