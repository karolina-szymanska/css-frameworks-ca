import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Footer() {
  return (
    <footer>
      <Container>
        <Row className="center">
          <Col sm={12} md={5}>
            <div className="footer-media">
              <i class="fa-brands fa-vimeo-v fa-2xl"></i>
              <i class="fa-brands fa-youtube fa-2xl"></i>
            </div>
          </Col>

          <Col sm={12} md={7}>
            <div className="footer-text">
              <a href="mailto:hello@yay.com">hello@yay.com</a>
              <a href="/">Copyright &copy; 2022</a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;