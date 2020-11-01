import React from 'react';
import OrderSummary from '../../features/OrderSummary/OrderSummary';
import { Row, Col } from 'react-flexbox-grid';

const OrderForm = (tripCost, options) => (
  <Row>
    <Col xs={12}>
      <OrderSummary tripCost={tripCost} options={options} />
    </Col>
  </Row>
);

export default OrderForm;