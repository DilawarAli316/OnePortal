import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styles from "./Grid1.module.css";

const Grid1 = () => {
  return (
    <Container fluid>
    <Row>
      <Col>1 of 1</Col>
    </Row>
    <Row>
      <Col>1 of 2</Col>
      <Col>2 of 2</Col>
    </Row>
    <Row>
      <Col>1 of 2</Col>
      <Col>2 of 2</Col>
    </Row>
  </Container>
  )
}

export default Grid1