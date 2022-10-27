import React from "react";
import styled from "styled-components";
import { DashboardIcon } from "./custom-icon";

const Div = styled.div`
  max-width: 250px;
  width:250px
  height: 114px;
  
  .box-icon{
    width:30%
  }
.box-info{
    width:70%;
    
}
`;
export default function InfoBox(props) {
  return (
    <Div className="col-lg-3  col-sm-12 border rounded border-primary m-2">
      <div className="box-container m-2 d-flex justify-content-around">
        <div className="box-icon rounded-circle m-auto">
          <DashboardIcon />
        </div>
        <div className="box-info m-auto">
          <h4 className="text-primary mb-0 fs-6">{props.title}</h4>
          <h2 className="text-primary fw-bold"> {props.number}</h2>
        </div>
      </div>
    </Div>
  );
}
