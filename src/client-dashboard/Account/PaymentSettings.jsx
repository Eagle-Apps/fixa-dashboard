import React from "react";
import { Row, Col } from "react-bootstrap";
import { AddCardIcon } from "../../components/custom-icon";
import styled from "styled-components";

export const AddCard = styled.div`
  height: 200px;
`;
function PaymentSettings() {
  return (
    <div
      className="tab-pane fade show"
      id="Payment"
      role="tabpanel"
      aria-labelledby="payment-tab"
    >
      <div className="bg-light p-3">
        <div>
          <h3 className="text-dark">Payment Card</h3>
        </div>
        <AddCard className="col-lg-3 border border-2 border-dark d-flex flex-column justify-content-center align-items-center">
          <AddCardIcon />
        </AddCard>
      </div>
    </div>
  );
}

export default PaymentSettings;
