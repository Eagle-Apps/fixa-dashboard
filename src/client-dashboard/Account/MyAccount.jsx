import React from "react";
import CustomTab from "../../components/tab/Tabs";
import Profile from "./Profile";
import Verification from "./Verification";
import PaymentSettings from "./PaymentSettings";
import ChangePassword from "./ChangePassword";
import ServicePlan from "./ServicePlan";

function MyAccount() {
  const tabs = ["Profile", "Verification", "Service_Plan", "Changepassword"];

  return (
    <div className="container-xxl flex-grow-1 container-p-y">
      <div className="allTitle">
        <h3 className="text-dark">My Account</h3>
      </div>
      <CustomTab tabs={tabs}>
        <Profile />
        <Verification />
        <ServicePlan />
        <ChangePassword />
      </CustomTab>
    </div>
  );
}

export default MyAccount;
