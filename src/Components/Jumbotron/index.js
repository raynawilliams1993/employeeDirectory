import React from 'react';
import { Jumbotron, Container } from 'reactstrap';
import "./style.css"

const Example = (props) => {
  return (
    <div>
      <Jumbotron fluid>
        <Container fluid>
          <h1 className="display-3">Employee Directory System</h1>

        </Container>
      </Jumbotron>
    </div>
  );
};

export default Example;