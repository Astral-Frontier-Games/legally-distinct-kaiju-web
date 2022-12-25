import { Col, Container, Row } from "solid-bootstrap";
import GameText from "./GameText";

import type { Component } from "solid-js";

const App: Component = () => {
  return (
    <Container fluid="md">
      <Row>
        <Col>
          <GameText />
        </Col>
      </Row>
    </Container>
  );
};

export default App;
