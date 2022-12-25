import { Col, Container, Row } from "solid-bootstrap";

import GameText from "./GameText";
import Settings from "./Settings";

import type { Component } from "solid-js";

const App: Component = () => {
  return (
    <Container fluid="md">
      <Row>
        <Col>
          <Settings />
        </Col>
      </Row>
      <GameText />
    </Container>
  );
};

export default App;
