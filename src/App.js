import React from "react";
import { Route, Routes } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getProfile } from "./store/actions/userProfileActions";
import Login from "./client-dashboard/Account/Login";
import MyAccount from "./client-dashboard/Account/MyAccount";
import Category from "./client-dashboard/allCategories/Category";
import ClientHome from "./client-dashboard/ClientHome";
import FixaPay from "./client-dashboard/FixaPay/FixaPay";
import NewRequests from "./client-dashboard/newRequests/NewRequests";
import RequestHistory from "./client-dashboard/requesthistory/RequestHistory";
import ServicePlan from "./client-dashboard/ServicePlan";
import TrackRequests from "./client-dashboard/trackRequests/TrackRequests";
import Dashboard from "./dashboard/Index";
import Register from "./client-dashboard/Account/Register";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route index element={<ClientHome />} />
          <Route path="service-plans" element={<ServicePlan />} />
          <Route path="request-history" element={<RequestHistory />} />
          <Route path="all-categories" element={<Category />} />
          <Route path="fixa-pay" element={<FixaPay />} />
          <Route path="my-account" element={<MyAccount />} />
          <Route path="new-requests" element={<NewRequests />} />
          <Route path="track-requests" element={<TrackRequests />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
