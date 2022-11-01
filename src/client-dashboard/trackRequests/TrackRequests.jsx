import React from 'react';
import {Row, Col} from 'react-bootstrap';
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup';
import Table from 'react-bootstrap/Table'
import {EllipseIcon} from '../../components/custom-icon'

function TrackRequests() {
  return (
    <div className="container-xxl flex-grow-1 container-p-y ">
      <div className="allTitle">
        <h3 className="text-dark">Track Requests</h3>
      </div>
      <div className="bg-light p-5">
        <Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Control
            required
            type="text"
            placeholder="Request ID"
            className="bg-transparent border-3 border-dark"
          />
        </Form.Group>
        <Table striped  hover size="sm" responsive className="mt-3">
          <thead className="p-3 bg-secondary">
            <th className="p-3 fw-4 text-center text-dark fs-5">Request ID</th>
            <th className="p-3 fw-4 text-center text-dark fs-5">Technician Job Type</th>
            <th className="p-3 fw-4 text-center text-dark fs-5">Service Type</th>
            <th className="p-3 fw-4 text-center text-dark fs-5">Task to be done</th>
          </thead>
          <tbody >
            <tr className="p-3">
              <td className="p-3 text-center">FIXA0005</td>
              <td className="p-3 text-center">Plumbing</td>
              <td className="p-3 text-center">Express</td>
              <td className="p-3 text-center">Pipe Leakage</td>
            </tr>
          </tbody>
        </Table>

        <div>
          <div className="row mt-1">
            <div className="col-sm-12 col-md-4">
              <ul className="stepper stepper-vertical">
                <li className="d-flex align-items-start pb-4" >
                    <EllipseIcon/>
                    <span className="text-dark fs-5">Processing</span>
                </li>
                <li className="d-flex align-items-start pb-4" >
                    <EllipseIcon/>
                    <span className="text-dark fs-5">Approved</span>
            
                </li>
                <li className="d-flex align-items-start pb-4">
                    <EllipseIcon />
                    <span className="text-dark fs-5">Work in Progress</span>
                </li>
                <li className="d-flex align-items-start pb-4">
                    <EllipseIcon/>
                    <span className="text-dark fs-5">Completed</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TrackRequests
