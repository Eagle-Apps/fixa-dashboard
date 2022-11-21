import React from "react";
import styled from "styled-components";
import { DashboardIcon } from "./custom-icon";

const Div = styled.div`
  /* max-width: 250px; */
  width: 28%;
  height: inherit;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  @media (max-width: 700px) {
    width: 45%;
  }
  .request-container {
    align-items: center !important;
    justify-content: center !important;
    /* background: red; */
    height: inherit;
  }
  .box-icon {
    width: 30%;
    svg {
      height: 30px;
      width: 100%;
      /* display: none !important; */
    }
  }
  .box-info {
    /* width: 100%; */
    text-align: center;
    h2 {
      font-size: 18px;
    }
  }
`;
export default function InfoBox(props) {
  return (
    <Div className="col-lg-3  col-sm-12 border rounded  m-2">
      <div className="box-container m-2  request-container">
        <div className="box-icon rounded-circle m-auto">
          <DashboardIcon />
        </div>
        <div className="box-info m-auto mt-3">
          <h4 className="text-primary mb-0 fs-6 mb-2">{props.title}</h4>
          <h2 className="text-primary fw-bold"> {props.number}</h2>
        </div>
      </div>
    </Div>
  );
}
