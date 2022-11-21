import styled from "styled-components";

export const LargeButton = styled.button`
  /* height: 116px; */
  /* width: 460px; */
  height: 60px;
  width: 20%;
  border-radius: 5px;
  padding: 10px, 22px, 10px, 22px;
  margin: 8px;
  font-family: Montserrat;
  font-size: ${(props) => props.fontSize || "18px"};
  line-height: ${(props) => props.lineHeight || "21px"};
  font-style: normal;
  font-weight: 500;

  text-align: center;
  letter-spacing: 0.4px;
  span {
    margin: 8px;
  }
`;

export const MedButton = styled.button`
  height: 57px;
  width: 162px;
  border-radius: 5px;
  margin: 5px;
  padding: 8px 19px 8px 19px;
  background-color: ${(props) => props.color || "#fff"};
  border: ${(props) => `1px solid ${props.border}` || "#fff"};
  // color: ${(props) => props.border || "#fff"};
  font-style: normal;
  font-weight: 500;
  font-size: 11px;
  line-height: 13px;
  text-align: center;
  letter-spacing: 0.366667px;
`;
export const StyledButton = styled.button`
  margin: 0.5rem auto;
  width: 30%;
  padding: 5px 20px;
  border-radius: 5px;
  background-color: ${(props) => props.color || "#fff"};
  @media (max-width: 800px) {
    width: 90%;
  }
`;
