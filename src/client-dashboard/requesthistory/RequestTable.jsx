import React from "react";
import Table from 'react-bootstrap/Table';

function RequestTable({ requests }) {
  return (
    <Table striped bordered hover size="sm" responsive>
      <thead>
        <th>Request ID</th>
        <th>Technician Job Type</th>
        <th>Service Type</th>
        <th>Task to be done</th>
        <th>Payment Method</th>
        <th>Status</th>
      </thead>
      <tbody >
        {requests.map((req) => {
          return (
            <tr>
              <td>{req.requestId}</td>
              <td>{req.jobType}</td>
              <td>{req.serviceType}</td>
              <td>{req.task}</td>
              <td>{req.paymentMethod}</td>
              <td
                className={
                  req.status === "completed"
                    ? "text-success"
                    : req.status === "progressing"
                    ? "text-warning"
                    : "text-danger"
                }
              >
                {req.status}
              </td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
}

export default RequestTable;
