import React from "react";
import styled from "styled-components";
import {
  AutoMobileIcon,
  PlumbingIcon,
  CarpentaryIcon,
  DrillingIcon,
  CleaningIcon,
  PaintingIcon,
  ElectricalIcon,
} from "../custom-icon";

const Div = styled.div`
  width: 300px;
  height: 229px;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  text-align: center;
  box-sizing: border-box;
  margin-bottom: 5px;

  
`;

function CategoryCard(props) {
  let icon;

  switch (props.title) {
    case "Automobile Mechanics":
      icon = <AutoMobileIcon />;
      break;
    case "Plumbing Services":
      icon = <PlumbingIcon />;
      break;
    case "Carpentary Services":
      icon = <CarpentaryIcon />;
      break;
    case "Painting Services":
      icon = <PaintingIcon />;
      break;
    case "Cleaning Services":
      icon = <CleaningIcon />;
      break;
    case "Drilling Services":
      icon = <DrillingIcon />;
      break;
    case "Electrical Services":
      icon = <ElectricalIcon />;
      break;

    default:
      break;
  }
  return (
    <Div className="d-flex justify-content-center align-items-center flex-column">
      <div className="m-auto">
        <div className="category-icon ">{icon}</div>
        <div className="category-title">
          <h4 className="text-dark fw-bold ">{props.title}</h4>
        </div>
        <div className="plan">
          <h5 className="text-success fw-bold">{props.plan}</h5>
        </div>
      </div>
    </Div>
  );
}

export default CategoryCard;
