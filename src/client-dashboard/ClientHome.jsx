import React from "react";
import { LargeButton, MedButton } from "../components/buttons/buttons";
import CategoryCard from "../components/cards/CategoryCard";
import { AutoMobileIcon, PlumbingIcon, CarpentaryIcon } from "../components/custom-icon";
import InfoBox from "../components/InfoBox";
import {Link} from 'react-router-dom'
const ClientHome = () => {

  return (
    <div>
      <div className="row d-flex  text-align-center justify-content-between m-2">
        <InfoBox number={20} title="Total Request" />
        <InfoBox number={20} title="Pending Request" />
        <InfoBox number={20} title="Successful Request" />
      </div>
      <div className="bg-primary rounded m-2 mt-4" style={{ height: "195px" }}>
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
      </div>
      <div className="d-flex justify-content-between mt-2">
        <LargeButton className="btn btn-primary">New Request</LargeButton>
        <LargeButton className="btn btn-outline-primary">
          Track Request
        </LargeButton>
      </div>
      <div className="d-flex justify-content-between w-100">
        <h3 className="text-dark">Our Top Services</h3>
        <Link to="/all-categories" className="text-dark">all categories</Link>
      </div>
      <div className="d-flex  flex-wrap justify-content-center mt-2">
        <div className="d-flex flex-wrap justify-content-between w-100">
          <CategoryCard className="col-sm-12 col-md-4" title="Automobile Mechanics">
            <AutoMobileIcon />
          </CategoryCard>
          <CategoryCard className="col-sm-12 col-md-4" title="Plumbing Services">
            <PlumbingIcon />
          </CategoryCard>
          <CategoryCard className="col-sm-12 col-md-4" title="Carpentary Services">
            <CarpentaryIcon />
          </CategoryCard>
        </div>
      </div>
    </div>
  );
};

export default ClientHome;
