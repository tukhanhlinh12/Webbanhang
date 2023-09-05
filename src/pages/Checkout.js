import React from "react";
import { Container, Row, Col, Form, FormGroup } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";

const Checkout = () => {
  return(
    <Helmet title="Checkout">
      <CommonSection title="Checkout" />
      <Container>
        <Row>
          <Col></Col>
          <Col></Col>
        </Row>
      </Container>
    </Helmet>);
};

export default Checkout;
