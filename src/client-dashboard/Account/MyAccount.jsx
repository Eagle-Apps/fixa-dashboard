import React from "react";
import CustomTab from "../../components/tab/Tabs";
import Profile from "./Profile";
import Verification from "./Verification";
import Subscription from "./Subscription"
import PaymentSettings from "./PaymentSettings";

function MyAccount() {
  

  const tabs = ["Profile", "Verification", "Subscription", "Payment Settings"];

  

  return (
    <div className="container-xxl flex-grow-1 container-p-y">
      <div className="allTitle">
        <h3 className="text-dark">My Account</h3>
      </div>
      <CustomTab tabs={tabs} >
        <Profile />
        {/* <Verification/> */}
        {/* <Subscription/> */}
        {/* <PaymentSettings/> */}
      </CustomTab>

    </div>
  );
}

export default MyAccount;
