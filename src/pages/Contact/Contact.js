import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import PageHeading from "../../components/typography/PageHeading";
import Paragraph from "../../components/typography/Paragraph";
import FormContact from "../../components/forms/FormContact";

function Contact() {
  return (
    <>
      <Container>
        <div className="d-none d-md-block">
          <PageHeading content="Submit your details" />
        </div>
        <Row>
          <Col md={6} className="order-md-2">
            <div className="list-group-container">
              <ListGroup>
                <ListGroup.Item>
                  <i class="fa-solid fa-envelope fa-2xl"></i>
                  <Paragraph content="hello@yay.com" />
                </ListGroup.Item>
                <ListGroup.Item>
                  <i class="fa-solid fa-phone-flip fa-2xl"></i>
                  <Paragraph content="123 456 7890" />
                </ListGroup.Item>
                <ListGroup.Item>
                  <i class="fa-solid fa-location-dot fa-2xl"></i>
                  <div>
                    <Paragraph content="123 Some Street" />
                    <Paragraph content="Somewhere" />
                    <Paragraph content="Some City" />
                    <Paragraph content="10000" />
                  </div>
                </ListGroup.Item>
              </ListGroup>

              <div className="d-md-none">
                <PageHeading content="Submit your details" />
              </div>
            </div>
          </Col>
          <Col md={6} className="order-md-1">
            <FormContact />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Contact;