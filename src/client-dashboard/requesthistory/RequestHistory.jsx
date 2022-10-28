import React, { useState } from "react";
import JsonData from "../../data/data.json";
import CustomTab from "../../components/tab/Tabs";
import RequestTable from "./RequestTable";

function RequestHistory() {
  const [requests, setRequests] = useState([]);
  const [active, setActive] = useState("All Requests");

  React.useEffect(() => {
    setRequests(JsonData.request);
  }, []);

  const tabs = ["All Requests", "Progressing", "Completed", "Cancelled"];

  const handleFilter = (e) => {
    let filtered;
    const { name } = e.target;
    setActive(name);
    if (name === "All Requests") {
      filtered = JsonData.request;
    } else {
      filtered = JsonData.request.filter((req) => {
        return req.status.toLowerCase() === name.toLowerCase();
      });
    }
    setRequests(filtered);
  };

  return (
    <div className="container-xxl flex-grow-1 container-p-y">
      <div className="allTitle">
        <h3>Request History</h3>
      </div>
      <CustomTab tabs={tabs} handleFilter={handleFilter} isActive={active}>
        <RequestTable requests={requests} />
      </CustomTab>

      {/* <div className="requestIcons">
                <FaAngleLeft className="prevIcon" />
                <FaAngleRight className="nextIcon" />
              </div> */}
    </div>
  );
}

export default RequestHistory;
