import { Route, Routes } from "react-router-dom";
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



function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Dashboard />}>
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
