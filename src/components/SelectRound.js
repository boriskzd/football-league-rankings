import React from "react";
// data with all matches
import data from "../data/data.json";

import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function SelectRound(props) {
  function handleChange(e) {
    props.onChange(e.target.value);
  }

  return (
    <Container>
      <Form.Group
        as={Row}
        controlId="exampleForm.ControlSelect1"
        className="select-cont"
      >
        <Form.Label column="6" className="select-round-text">
          Select Round
        </Form.Label>
        <Col xs="6">
          <Form.Control
            as="select"
            defaultValue={props.roundNumber}
            onChange={e => handleChange(e)}
            className="select-round-dropdown"
          >
            {data.map((x, i) => (
              <option key={x.round}>{x.round}</option>
            ))}
          </Form.Control>
        </Col>
      </Form.Group>
    </Container>
  );
}

export default SelectRound;
