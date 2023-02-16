import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function CardSingle(props) {
  return (
    <Card style={{ width: "auto" }}>
      <Card.Img variant="top" src={props.image} alt={props.title} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.text}</Card.Text>
        <Button variant="primary">MORE</Button>
      </Card.Body>
    </Card>
  );
}

export default CardSingle;