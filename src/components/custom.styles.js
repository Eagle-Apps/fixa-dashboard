import { NavLink } from "react-router-dom";
import styled from "styled-components";
export const RequestContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  /* background-color: orange; */
  justify-content: space-evenly;
  margin-bottom: 3rem;
`;
export const ChartContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 94%;
  margin: 0 auto;
`;
export const ChartStyle = styled.div`
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  width: 45%;
  padding: 20px 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 700px) {
    width: 90%;
  }
`;
export const RequestContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 95%;
  margin: 0 auto;
  @media (max-width: 700px) {
    justify-content: center;
  }
`;
export const RequestStyles = styled.div`
  height: "195px";
  width: "45%";
  background-color: navy;
  @media (max-width: 700px) {
    width: 95%;
  }
`;
export const MyNavLink = styled(NavLink)`
  &.${(props) => props.activeClassName} {
    color: #022060;
    background-color: rgba(105, 108, 255, 0.16) !important;
    font-weight: 600;
  }
  padding: 0.625rem 1rem;
  width: 90% !important;
  display: flex !important;
  color: #566a7f;
  margin: 0 auto !important;
  border-radius: 0.375rem;
  .flex {
    display: flex;
  }
`;

export const VerifyStyle = styled.div`
  width: 60%;
  margin: 0 auto;
  @media (max-width: 700px) {
    width: 90%;
  }
  .txt-left {
    text-align: left;
  }
`;
export const ServiceCard = styled.div`
  width: 40%;
  margin: auto;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  padding: 20px;
  height: 40vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  position: relative;
  h5 {
    text-transform: capitalize;
  }
  h2 {
    margin: 0.3rem 0;
    font-size: 30px;
    letter-spacing: 3px;
    text-transform: uppercase;
    font-weight: bolder;
  }
  p {
    font-weight: bolder;
    font-size: 24px;
  }
  button {
    border-radius: 5px;
    border-style: none;
    padding: 10px;
    width: 40%;
    background-color: #006400;
    color: #022060;
    margin: 0.7rem 0;
    @media (max-width: 700px) {
      width: 100%;
    }
  }
  a {
    color: #006400;
  }
  @media (max-width: 700px) {
    width: 100%;
  }
`;
export const ServicePlans = styled.div`
  background-color: #f5f5f9;
  position: absolute;
  width: 100%;
  margin: 0 auto;
  top: 0rem;
  left: 0rem;
  right: 0rem;
  text-align: center;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  /* height: inherit; */
  border-radius: 10px;
  padding: 20px;
  h1 {
    font-size: 20px;
  }
  button {
    width: 90%;
  }
  @media (max-width: 700px) {
    width: 100%;
  }
`;
