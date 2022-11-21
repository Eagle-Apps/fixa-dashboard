import React from "react";
import { StyledUserDisplay } from "./style";
import logoImage from "../../assets/LOGO9c.png";
const DisplayUserCredential = ({
  handleButton,
  display,
  userName,
  mobile,
  address,
  email,
}) => {
  return (
    <StyledUserDisplay display={display}>
      <div className="logo">
        <div class="avatar-edit">
          <input
            type="file"
            id="imageUpload"
            accept=".png, .jpg, .jpeg"
            hidden="true"
          />
          <label for="imageUpload" className="imageContainer">
            <img src={logoImage} />
            <p>upload image</p>
          </label>
        </div>
        {/* <img src={logoImage} /> */}
      </div>
      <div className="details">
        <h4 className="name">{userName}</h4>
        <p className="mail">{email}</p>
        <div>
          <p>Phone No:</p>
          <h4>{mobile}</h4>
        </div>
        <div>
          <p>Address:</p>
          <h5>{address}</h5>
        </div>

        <button className="editBtn" onClick={handleButton}>
          Edit profile
        </button>
      </div>
    </StyledUserDisplay>
  );
};

export default DisplayUserCredential;
