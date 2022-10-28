import React from "react";
import styled from "styled-components";
import { AutoMobileIcon, DashboardIcon } from "../custom-icon";

const Div = styled.div`
  width: 282px;
  height: 229px;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  text-align: center;
  box-sizing: border-box;
`;

function CategoryCard(props) {
  let icon;

  switch (props.title) {
    case "Automobile Mechanic":
      icon = <AutoMobileIcon />;
      break;
    case "Plumbing Service":
      icon = <DashboardIcon />;
      break;

    default:
      break;
  }

  return (
    <Div>
      <div className="m-auto">
        <div className="category-icon ">{icon}</div>
        <div className="category-title">
          <h4 className="text-dark fw-bold ">{props.title}</h4>
        </div>
      </div>
    </Div>
  );
}

export default CategoryCard;
