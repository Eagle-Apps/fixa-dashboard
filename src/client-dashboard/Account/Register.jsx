import React, { useState } from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import InputField from "../../components/InputField";
import { FixaLogo } from "../../components/custom-icon";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signup } from "../../store/actions/authActions";
import { ToastContainer, toast } from "react-toastify";
import { clearNotifications } from "../../store/actions/notificationsActions";

export default function Register() {
  const [inputValue, setInputValue] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    phone: "",
    password: "",
    confirmPassword: "",
    city: "",
    state: "",
    zipCode: "",
    terms: false,
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setInputValue({ ...inputValue, [e.target.name]: e.target.value });
  };

  const notification = useSelector((state) => state.notification);

  const dispatch = useDispatch();

  React.useEffect(() => {
    if (notification?.success?.message) {
      toast.success(notification?.success?.message);

      setTimeout(() => {
        navigate("/");
      }, "4000");
    }
    if (notification?.errors?.message) {
      toast.error(notification?.errors?.message);
    }
    dispatch(clearNotifications());
  }, [dispatch, notification, navigate]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);
    dispatch(signup(inputValue, navigate));
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
                    <h3 className="mt-3 mb-4 text-dark">Register to Fixa</h3>
                  </div>
                  <div className="mb-3">
                    <Form onSubmit={handleSubmit}>
                      <InputField
                        label="First Name"
                        type="text"
                        name="firstName"
                        value={inputValue.firstName}
                        onChange={handleChange}
                        placeholder="enter first name"
                        error="please enter first name"
                        className="col-lg-12"
                        require={true}
                      />
                      <InputField
                        label="Last Name"
                        type="text"
                        name="lastName"
                        value={inputValue.lastName}
                        onChange={handleChange}
                        placeholder="enter last name"
                        error="please enter last name"
                        className="col-lg-12"
                        require={true}
                      />
                      <InputField
                        label="Email"
                        type="email"
                        name="email"
                        value={inputValue.email}
                        onChange={handleChange}
                        placeholder=""
                        error="please enter a valid email address"
                        className="col-lg-12"
                        require={true}
                      />
                      <InputField
                        label="Phone"
                        type="tel"
                        name="phone"
                        value={inputValue.phone}
                        onChange={handleChange}
                        placeholder="enter phone number"
                        error="please enter a valid phone number"
                        className="col-lg-12"
                        require={true}
                      />
                      <InputField
                        label="Password"
                        type="password"
                        name="password"
                        value={inputValue.password}
                        onChange={handleChange}
                        placeholder=""
                        error="Password must be between 8 - 20 characters and must contain
            uppercase and lowercase letter with special characters."
                        className="col-lg-12"
                        require={true}
                      />
                      <InputField
                        label="Confirm Password"
                        type="password"
                        name="confirmPassword"
                        value={inputValue.confirmPassword}
                        onChange={handleChange}
                        placeholder="confirm password"
                        error="repeat password"
                        className="col-lg-12"
                        require={true}
                      />

                      <Form.Group
                        as={Col}
                        md="12"
                        controlId="validationCustom05"
                      >
                        <Form.Label>Address</Form.Label>
                        <Form.Control
                          as="textarea"
                          placeholder="Address"
                          name="address"
                          value={inputValue.address}
                          required
                          onChange={handleChange}
                        />
                        <Form.Control.Feedback type="invalid">
                          Please provide your address.
                        </Form.Control.Feedback>
                      </Form.Group>
                      <InputField
                        label="State"
                        type="text"
                        name="state"
                        value={inputValue.state}
                        onChange={handleChange}
                        placeholder="state"
                        error="Please provide a valid state."
                        require={true}
                        className="col-lg-12"
                      />

                      <Row>
                        <InputField
                          label="City"
                          type="text"
                          name="city"
                          value={inputValue.city}
                          onChange={handleChange}
                          placeholder="City"
                          error="Please provide a valid city."
                          require={true}
                          className="col-lg-6"
                        />
                        <InputField
                          label="Zipcode"
                          type="text"
                          name="zipCode"
                          value={inputValue.zipCode}
                          onChange={handleChange}
                          placeholder="zipcode"
                          error="Please provide a valid zipcode."
                          require={true}
                          className="col-lg-6"
                        />
                      </Row>

                      <Form.Group className="mb-3">
                        <Form.Check
                          required
                          label="Agree to terms and conditions"
                          feedback="You must agree before submitting."
                          feedbackType="invalid"
                          onChange={(e) =>
                            e.target.checked
                              ? setInputValue({ ...inputValue, terms: true })
                              : setInputValue({ ...inputValue, terms: false })
                          }
                        />
                      </Form.Group>

                      <div className="d-grid">
                        <Button
                          disabled={loading}
                          variant="primary"
                          type="submit"
                        >
                          Register
                        </Button>
                      </div>
                    </Form>
                    <div className="mt-3">
                      <p className="mb-0  text-center">
                        Already have an account?{" "}
                        <Link to="/" className="text-primary fw-bold">
                          Sign In
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
