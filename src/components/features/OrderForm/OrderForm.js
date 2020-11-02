import React from 'react';
import OrderSummary from '../../features/OrderSummary/OrderSummary';
import { Row, Col } from 'react-flexbox-grid';
import PropTypes from 'prop-types';

import pricing from '../../../data/pricing.json';
import OrderOption from '../OrderOption/OrderOption';

const OrderForm = ({ tripCost, options }) => (
  <Row>
    {pricing.map(option => (
      <Col md={4} key={option.id}>
        <OrderOption {...option} />
      </Col>
    ))}
    <Col xs={12}>
      <OrderSummary tripCost={tripCost} options={options} />
    </Col>
  </Row>
);

OrderForm.propTypes = {
  tripCost: PropTypes.any,
  options: PropTypes.any,
};

export default OrderForm;