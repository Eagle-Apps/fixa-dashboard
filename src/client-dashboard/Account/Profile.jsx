import React, { useState } from "react";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import InputField from "../../components/InputField";
import { MedButton } from "../../components/buttons/buttons";
import { useSelector } from "react-redux";
import DisplayUserCredential from "../profileDisplay";
import { FormDisplay } from "../profileDisplay/style";
import { useEffect } from "react";
// import { updateProfile } from "../../store/api";

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

  const fetchData = JSON.parse(localStorage.getItem("userData"));
  console.log(fetchData);
  const [validated, setValidated] = useState(false);
  const [userData, setUserData] = useState(fetchData);
  // console.log(userData);

  const [displayForm, setDisplayForm] = useState(false);
  const handleChange = (e) => {
    setInputValue({ ...inputValue, [e.target.name]: e.target.value });
  };

  const handleEdit = () => {
    displayForm === false ? setDisplayForm(true) : setDisplayForm(false);
  };
  useEffect(() => {
    console.log(fetchData);
  }, [fetchData]);
  const handleSubmit = async (event) => {
    try {
      // event.preventDefault();
      localStorage.setItem("userData", JSON.stringify(inputValue));
      displayForm === false ? setDisplayForm(true) : setDisplayForm(false);
      // const newData = inputValue;
      // setUserData(newData);
      // console.log(userData);
    } catch (err) {
      console.log(err);
    }

    // try {
    //   event.preventDefault();
    //   const form = event.currentTarget;

    //   if (form.checkValidity() === false) {
    //     event.stopPropagation();
    //   }

    //   setValidated(true);
    // } catch (e) {}
  };

  return (
    <div
      className="tab-pane fade show active"
      id="Profile"
      role="tabpanel"
      aria-labelledby="profile-tab"
    >
      <DisplayUserCredential
        handleButton={handleEdit}
        display={displayForm}
        userName={`${userData.firstName}  ${userData.lastName}`}
        email={userData.email}
        address={userData.address}
        mobile={userData.phone}
      />
      <FormDisplay display={displayForm}>
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

          <MedButton className="bg-primary w-100 text-light">
            Update Profile
          </MedButton>
        </Form>
      </FormDisplay>
    </div>
  );
}

export default Profile;
