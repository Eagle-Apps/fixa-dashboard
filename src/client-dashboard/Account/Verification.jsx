import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import Form from "react-bootstrap/Form";
import { MedButton } from "../../components/buttons/buttons";
import InputField from "../../components/InputField";

function Verification() {
  const [inputValue, setInputValue] = useState({
    bvn: "",
    nin: "",
    picture: "",
  });

  const [validated, setValidated] = useState(false);

  const handleChange = (e) => {
    setInputValue({ ...inputValue, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (event) => {
    // try {
    //   event.preventDefault();
    //   const form = event.currentTarget;
    //   if (form.checkValidity() === false) {
    //     event.stopPropagation();
    //   }
    //   setValidated(true);
    //   const {
    //     data: { token },
    //   } = await fixa.post("/my-account", inputValue);
    // } catch (e) {}
  };
  let submit = useLocation();

  function handleClick() {
    submit.push("/dashboard");
  }

  return (
    <div
      className="tab-pane fade show"
      id="Verification"
      role="tabpanel"
      aria-labelledby="verification-tab"
    >
      <Form
        noValidate
        validated={validated}
        onSubmit={handleSubmit}
        className="bg-light p-5"
      >
        <Row className="mb-3">
          <InputField
            label="BVN"
            type="text"
            name="bvn"
            value={inputValue.bvn}
            onChange={handleChange}
            placeholder="enter BVN"
            error="please enter your BVN"
            className="col-lg-12 bg-transparent p-3"
            require={true}
          />
          <InputField
            label="NIN"
            type="text"
            name="nin"
            value={inputValue.nin}
            onChange={handleChange}
            placeholder="enter NIN"
            error="please enter your NIN"
            className="col-lg-12 bg-transparent p-3"
            require={true}
          />
          <Form.Group
            as={Col}
            md="12"
            className="bg-transparent p-3"
            controlId="validationCustom06"
          >
            <Form.Label>Upload picture of your NIN slip</Form.Label>
            <Form.Control
              type="File"
              placeholder="upload a picture of your NIN slip"
              required
            />
            <Form.Control.Feedback type="invalid">
              Please provide a picture of your NIN slip
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
        <MedButton
          className="bg-primary w-100 text-light"
          onSubmit={handleClick}
        >
          Update KYC
        </MedButton>
      </Form>
    </div>
  );
}

export default Verification;
