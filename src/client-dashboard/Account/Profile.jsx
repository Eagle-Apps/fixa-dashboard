import React, { useState } from "react";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import InputField from "../../components/InputField";
import { MedButton } from "../../components/buttons/buttons";
import { useSelector } from "react-redux";
import { updateProfile } from "../../store/api";

function Profile() {
  const { profile } = useSelector((state) => state.client);

  const [inputValue, setInputValue] = useState({
    firstName: profile?.name.split(" ")[1],
    lastName: profile?.name.split(" ")[0],
    email: profile.email,
    phone: profile.phone,
    address: profile.address,
    city: profile.city,
    state: profile.state,
    zipCode: profile.zipCode,
  });

  const [validated, setValidated] = useState(false);

  const handleChange = (e) => {
    setInputValue({ ...inputValue, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      const form = event.currentTarget;

      if (form.checkValidity() === false) {
        event.stopPropagation();
      }

      setValidated(true);
    } catch (e) {}
  };

  return (
    <div
      className="tab-pane fade show active"
      id="Profile"
      role="tabpanel"
      aria-labelledby="profile-tab"
    >
      <Form
        noValidate
        validated={validated}
        onSubmit={handleSubmit}
        className="bg-light p-5"
      >
        <Row className="mb-3">
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
            label="Phone number"
            type="text"
            name="phone"
            value={inputValue.phone}
            onChange={handleChange}
            placeholder=""
            error="please enter your phone number"
            className="col-lg-12"
            require={true}
          />
          <Form.Group as={Col} md="12" controlId="validationCustom05">
            <Form.Label>Address</Form.Label>
            <Form.Control
              as="textarea"
              placeholder="Address"
              required
              name="address"
              value={inputValue.address}
              onChange={handleChange}
            />
            <Form.Control.Feedback type="invalid">
              Please provide your address.
            </Form.Control.Feedback>
          </Form.Group>
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
            label="State"
            type="text"
            name="state"
            value={inputValue.state}
            onChange={handleChange}
            placeholder="state"
            error="Please provide a valid state."
            require={true}
            className="col-lg-3"
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
            className="col-lg-3"
          />
        </Row>
        <Row className="mb-3">
          <h4 className="text-dark">Change Password</h4>
          <InputField
            label="Password"
            type="password"
            name="password"
            value={inputValue.password}
            onChange={handleChange}
            placeholder=""
            error="Password must be between 8 - 20 characters and must contain
                uppercase and lowercase letter with special characters."
            className="col-lg-4"
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
            className="col-lg-4"
            require={true}
          />
          <InputField
            label="Confirm Password"
            type="password"
            name="password"
            value={inputValue.password}
            onChange={handleChange}
            placeholder="confirm password"
            error="repeat password"
            className="col-lg-4"
            require={true}
          />
        </Row>
        <MedButton className="bg-primary w-100 text-light">
          Update Profile
        </MedButton>
      </Form>
    </div>
  );
}

export default Profile;
