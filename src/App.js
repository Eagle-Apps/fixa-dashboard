import { Routes, Route } from "react-router-dom";
import Dashboard from "./dashboard/Index";
import ClientHome from "./client-dashboard/ClientHome";
import RequestHistory from "./client-dashboard/RequestHistory";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/dashboard" element={<Dashboard />}>
          <Route index element={<ClientHome />} />
          {/* <Route path="all-request" element={<AllRequests />} /> */}
          <Route path="request-history" element={<RequestHistory />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
