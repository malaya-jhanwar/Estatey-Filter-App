import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const Cards = ({ item }) => {
  return (
    <>
      <Row xs={1} md={3} className="g-4">
        {item.map((val) => {
          return (
            <Col>
              <Card>
                <Card.Img variant="top" src={val.img} />
                <Card.Body>
                  <Card.Title>{val.title}</Card.Title>
                  <Card.Text>{val.desc}</Card.Text>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">{val.price}</small>
                </Card.Footer>
              </Card>
            </Col>
          );
        })}
      </Row>
    </>
  );
};

export default Cards;
