import React from "react";
import "../../styles/ComSec.css";
import { Container } from "react-bootstrap";


const CommonSection = ({ title }) => {
  return (
    <>
      <section className="common_section">
        <Container className="text-center">
          <h1>{title}</h1>
        </Container>
      </section>
    </>
  );
};

export default CommonSection;
