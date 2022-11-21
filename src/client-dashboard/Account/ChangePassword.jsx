import React from "react";
import { Form } from "react-bootstrap";
import DisplayUserCredential from "../profileDisplay";
import Row from "react-bootstrap/Row";
import InputField from "../../components/InputField";
import { MedButton, StyledButton } from "../../components/buttons/buttons";
import { VerifyStyle } from "../../components/custom.styles";
const ChangePassword = () => {
  return (
    <VerifyStyle
      className="tab-pane fade show"
      id="Changepassword"
      role="tabpanel"
      aria-labelledby="subscription-tab"
    >
      <DisplayUserCredential />
      <Form
        noValidate
        // validated={validated}
        // onSubmit={handleSubmit}
        className="bg-light p-5 text-center"
      >
        <Row className="mb-3 flex-wrap">
          <h4 className="text-dark">Change Password</h4>
          <InputField
            label="previous Password"
            type="password"
            name="password"
            // value={inputValue.password}
            // value="kdkjksjdkdkj"
            // onChange={handleChange}
            placeholder=""
            error="Password must be between 8 - 20 characters and must contain
                uppercase and lowercase letter with special characters."
            className="txt-left w-100"
            require={true}
          />
          <InputField
            label="New password"
            type="password"
            name="password"
            // value={inputValue.password}
            // onChange={handleChange}
            placeholder="change password"
            error="Password must be between 8 - 20 characters and must contain
                uppercase and lowercase letter with special characters."
            className="txt-left w-100"
            require={true}
          />
          <InputField
            label="Confirm Password"
            type="password"
            name="password"
            // value={inputValue.password}
            // onChange={handleChange}
            placeholder="confirm password"
            error="repeat password"
            className="txt-left w-100"
            require={true}
          />
        </Row>
        <StyledButton
          className="bg-primary  text-light"
          style={{ width: "50%" }}
        >
          Update Password
        </StyledButton>
      </Form>
    </VerifyStyle>
  );
};

export default ChangePassword;
