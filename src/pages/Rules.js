import React from "react";
import { Container, Card } from "react-bootstrap";
import OrderButton from "../components/OrderButton";
import Where from "../components/Where";

const RulesPage = () => {
  return (
    <Container>
      <Where where={"rules"} />
      <h1 className="mt-5 mb-3">Match Game Rules</h1>
      <Card>
        <Card.Body>
          <Card.Title>Objective</Card.Title>
          <Card.Text>
            The objective of the match game is to find matching pairs of cards.
          </Card.Text>
        </Card.Body>
      </Card>

      <Card className="mt-3">
        <Card.Body>
          <Card.Title>How to Play</Card.Title>
          <Card.Text>
            1. Click on a card to reveal its symbol.
            <br />
            2. Click on another card to try to find a matching pair.
            <br />
            3. If the cards match, they stay face up.
            <br />
            4. If the cards do not match, they are flipped face down again.
            <br />
            5. Continue until all pairs are matched.
          </Card.Text>
        </Card.Body>
      </Card>
      <OrderButton />
    </Container>
  );
};

export default RulesPage;
