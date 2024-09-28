import React from 'react'
import Col from 'react-bootstrap/esm/Col'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'

const Grid2 = () => {
  return (
    <Container fluid>
    <Row>
      <Col>1 of 1</Col>
      <Col>1 of 2</Col>
    </Row>
    <Row>
      <Col>1 of 2</Col>
      <Col>2 of 2</Col>
      <Col>3 of 2</Col>
    </Row>
    <Row>
      <Col>1 of 3</Col>
    </Row>
  </Container>
  )
}

export default Grid2