import { Routes, Route } from "react-router-dom";
import Dashboard from "./dashboard/Index";
import ClientHome from "./client-dashboard/ClientHome";
import RequestHistory from "./client-dashboard/requesthistory/RequestHistory";
import ServicePlan from "./client-dashboard/ServicePlan";
import Category from "./client-dashboard/allCategories/Category";
import FixaPay from "./client-dashboard/FixaPay/FixaPay";
import MyAccount from "./client-dashboard/Account/MyAccount";
import NewRequests from "./client-dashboard/newRequests/NewRequests";
import TrackRequests from "./client-dashboard/trackRequests/TrackRequests";

function App() {
  return (
    <div className="App">
      <Routes>
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
