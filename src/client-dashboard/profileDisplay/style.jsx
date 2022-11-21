import styled from "styled-components";
import logoImage from "../../assets/LOGO9c.png";
export const StyledUserDisplay = styled.div`
  /* background: url(${logoImage}); */
  /* box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px; */
  display: ${({ display }) => (display === false ? "block" : "none")};
  width: 70%;
  margin: auto;
  padding: 10px 20px;
  /* background: white; */
  border-radius: 5px;
  text-align: center;
  height: inherit;
  .logo {
    width: 10%;
    margin: 1rem auto;
    height: inherit;
    /* background-color: red; */
    opacity: 0.6;
    .avatar-edit {
      .imageContainer {
        height: 60px;
        img {
          width: 100%;
          height: inherit;
        }
      }
    }
  }
  .details {
    .name {
      text-transform: uppercase;
      margin: 0.1px 0;
    }
    .mail {
      font-weight: 450;
      font-style: italic;
    }
    .editBtn {
      border: 2px solid #41578c;
      padding: 5px 15px;
      background-color: #e7e7ff;
      color: #41578c;
      border-radius: 5px;
    }
  }
`;

export const FormDisplay = styled.div`
  display: ${({ display }) => (display === false ? "none" : "block")};
`;
