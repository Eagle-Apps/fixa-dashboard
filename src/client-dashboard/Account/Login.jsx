import React, { useState } from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import { FixaLogo } from "../../components/custom-icon";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signin } from "../../store/actions/authActions";
import { ToastContainer, toast } from "react-toastify";
import { clearNotifications } from "../../store/actions/notificationsActions";

export default function Login() {
  const [inputs, setInputs] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;

    setInputs((values) => ({ ...values, [name]: value }));
  };

  const notification = useSelector((state) => state.notification);

  const dispatch = useDispatch();

  React.useEffect(() => {
    if (notification?.errors?.message) {
      toast.error(notification?.errors?.message);
    }
    dispatch(clearNotifications());
  }, [dispatch, notification]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);
    dispatch(signin(inputs, navigate));
    setLoading(false);
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
                    <Form onSubmit={handleSubmit}>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                          type="email"
                          onChange={handleChange}
                          placeholder="Enter email"
                          name="email"
                          value={inputs.email}
                          required
                        />
                      </Form.Group>

                      <Form.Group
                        className="mb-3"
                        controlId="formBasicPassword"
                      >
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                          type="password"
                          onChange={handleChange}
                          placeholder="Password"
                          name="password"
                          value={inputs.password}
                          required
                        />
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
                        <Button
                          disabled={loading}
                          variant="primary"
                          type="submit"
                        >
                          Login
                        </Button>
                      </div>
                    </Form>
                    <div className="mt-3">
                      <p className="mb-0  text-center">
                        Don't have an account?{" "}
                        <Link to="/register" className="text-primary fw-bold">
                          Sign Up
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <ToastContainer />
    </div>
  );
}
