import { Routes, Route } from "react-router-dom";
import Dashboard from "./dashboard/Index";
import ClientHome from "./client-dashboard/ClientHome";
import RequestHistory from "./client-dashboard/requesthistory/RequestHistory";
import ServicePlan from "./client-dashboard/ServicePlan";
import Category from "./client-dashboard/allCategories/Category";
import FixaPay from "./client-dashboard/FixaPay/FixaPay";

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

        </Route>
      </Routes>
    </div>
  );
}

export default App;
