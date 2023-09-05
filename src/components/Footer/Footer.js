import React from "react";
import "./Footer.css";
import { Container, Row, Col, ListGroup, ListGroupItem } from "react-bootstrap";
import { Link } from "react-router-dom";


const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <>
      <footer className="footer">
        <Container>
          <Row>
            <Col lg="4" className="mb-4" md="6">
              <div className="logo">
                <div>
                  <h1 className="text-white">Market</h1>
                </div>
              </div>
              <p className="footer_text mt-4">
                Exploring the dense forest, we discovered a hidden waterfall,
                its beauty mesmerizing us. The clear water sparkled under the
                sunlight, surrounded.
              </p>
            </Col>
            <Col lg="3" md="3" className="mb-4">
              <div className="footer__quick-links">
                <h4 className="quick__links-title">Top Categories</h4>
                <ListGroup>
                  <ListGroupItem className="ps-0 border-0 footer__quick-links">
                    <Link to="#" className="text-white">Mobile Phones</Link>
                  </ListGroupItem>

                  <ListGroupItem className="ps-0 border-0 footer__quick-links">
                    <Link to="#" className="text-white">Modern Sofa</Link>
                  </ListGroupItem>

                  <ListGroupItem className="ps-0 border-0 footer__quick-links">
                    <Link to="#" className="text-white">Arm Chair</Link>
                  </ListGroupItem>

                  <ListGroupItem className="ps-0 border-0 footer__quick-links">
                    <Link to="#" className="text-white">Smart Watches</Link>
                  </ListGroupItem>
                </ListGroup>
              </div>
            </Col>
            <Col lg="2" md="3" className="mb-4">
              <div className="footer__quick-links">
                <h4 className="quick__links-title">Useful Links</h4>
                <ListGroup>
                  <ListGroupItem className="ps-0 border-0 footer__quick-links">
                    <Link to="/shop" className="text-white">Shop</Link>
                  </ListGroupItem>

                  <ListGroupItem className="ps-0 border-0 footer__quick-links">
                    <Link to="/cart" className="text-white">Cart</Link>
                  </ListGroupItem>

                  <ListGroupItem className="ps-0 border-0 footer__quick-links">
                    <Link to="/login" className="text-white">Login</Link>
                  </ListGroupItem>

                  <ListGroupItem className="ps-0 border-0 footer__quick-links">
                    <Link to="#" className="text-white">Privacy Policy</Link>
                  </ListGroupItem>

                </ListGroup>
              </div>
            </Col>
            <Col lg="3" md="4">
              <div className="footer__quick-links">
                <h4 className="quick__links-title">Contact</h4>
                <ListGroup>
                  <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-2 footer__quick-links">
                    <span>
                      <i className="ri-map-pin-line text-white"></i>
                    </span>
                    <p className="text-white">123 Thanh Xuan, Ha Noi, VN</p>
                  </ListGroupItem>
                  <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-2 footer__quick-links">
                    <span>
                      <i className="ri-phone-line text-white"></i>
                    </span>
                    <p className="text-white">+0123456789</p>
                  </ListGroupItem>
                  <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-2 footer__quick-links">
                    <span>
                      <i className="ri-mail-line text-white"></i>
                    </span>
                    <p className="text-white">example123@gmail.com</p>
                  </ListGroupItem>
                </ListGroup>
              </div>
            </Col>
            <Col lg="12">
              <p className="footer_copyright">
                Copyright © {year} developed by ABCXYZ. All rights
                reserved.
              </p>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
};

export default Footer;
