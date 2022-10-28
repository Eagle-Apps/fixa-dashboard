import { Routes, Route } from "react-router-dom";
import Dashboard from "./dashboard/Index";
import ClientHome from "./client-dashboard/ClientHome";
import RequestHistory from "./client-dashboard/RequestHistory";
import ServicePlan from "./client-dashboard/ServicePlan";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/dashboard" element={<Dashboard />}>
          <Route index element={<ClientHome />} />
          <Route path="service-plans" element={<ServicePlan />} />
          <Route path="request-history" element={<RequestHistory />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
