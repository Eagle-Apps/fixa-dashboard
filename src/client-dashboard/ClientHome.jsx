import React from "react";
import { LargeButton, MedButton } from "../components/buttons/buttons";
import CategoryCard from "../components/cards/CategoryCard";
import {
  AutoMobileIcon,
  PlumbingIcon,
  CarpentaryIcon,
} from "../components/custom-icon";
import InfoBox from "../components/InfoBox";
import { Link } from "react-router-dom";
import {
  ChartContainer,
  ChartStyle,
  RequestContainer,
  RequestContent,
  RequestStyles,
} from "../components/custom.styles";
import PieChart from "./chart/pie";
import LineChart from "./chart";
const ClientHome = () => {
  return (
    <div>
      <RequestContainer>
        <InfoBox number={20} title="Total Requests" />
        <InfoBox number={20} title="Pending Requests" />
        <InfoBox number={20} title="Successful Requests" />
        <InfoBox number={1} title="Active subscription" />
        <InfoBox number={"$420"} title="Wallet Balance" />
        <InfoBox number={2} title="Locations" />
      </RequestContainer>
      <ChartContainer>
        <ChartStyle>
          <PieChart />
        </ChartStyle>
        <ChartStyle>
          <LineChart />
        </ChartStyle>
      </ChartContainer>
      <div
        className="d-flex  mt-2"
        style={{ width: "94%", margin: "3rem auto" }}
      >
        <LargeButton className="btn btn-primary">
          <Link
            to="/dashboard/new-requests"
            className="text-light text-decoration-none"
          >
            {" "}
            New Request
          </Link>
        </LargeButton>
        <LargeButton className="btn btn-outline-primary">
          <Link
            to="/dashboard/track-requests"
            className="text-primary text-decoration-none"
          >
            {" "}
            Track Request
          </Link>
        </LargeButton>
      </div>
      <div
        className="d-flex justify-content-between"
        style={{ width: "94%", margin: "0 auto" }}
      >
        <h3 className="text-dark">Our Top Services</h3>
        <Link to="/dashboard/all-categories" className="text-dark">
          all categories
        </Link>
      </div>
      <div className="d-flex  flex-wrap justify-content-center mt-2">
        <div
          className="d-flex flex-wrap justify-content-between"
          style={{ width: "94%" }}
        >
          <CategoryCard
            className="col-sm-12 col-md-4"
            title="Automobile Mechanics"
          >
            <AutoMobileIcon />
          </CategoryCard>
          <CategoryCard
            className="col-sm-12 col-md-4"
            title="Plumbing Services"
          >
            <PlumbingIcon />
          </CategoryCard>
          <CategoryCard
            className="col-sm-12 col-md-4"
            title="Carpentary Services"
          >
            <CarpentaryIcon />
          </CategoryCard>
        </div>
      </div>
      <RequestContent>
        <RequestStyles>
          <div className="m-4">
            <h4 className="text-white fw-bold ">
              Do you want Fixa In your City?
            </h4>
            <p className="text-white">
              we are ready to give you the world best technicians and services
            </p>
            <div>
              <MedButton className="btn btn-outline-primary">Apply</MedButton>
              <MedButton className="btn btn-primary" color="transparent">
                Learn More
              </MedButton>
            </div>
          </div>
        </RequestStyles>
        <RequestStyles>
          <div className="m-4">
            <h4 className="text-white fw-bold ">Add Another Location</h4>
            <p className="text-white">
              we are ready to give you the world best technicians and services
            </p>
            <div style={{ textAlign: "center" }}>
              <MedButton className="btn btn-outline-primary">Apply</MedButton>
              {/* <MedButton className="btn btn-primary" color="transparent">
                Learn More
              </MedButton> */}
            </div>
          </div>
        </RequestStyles>
      </RequestContent>
    </div>
  );
};

export default ClientHome;
