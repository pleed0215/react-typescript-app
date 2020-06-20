import React, { Component } from "react";
import styled from "styled-components";
import Number from "./Number";

import { Form, Input } from "./Input";

const Container = styled.div`
  background-color: blue;
  font-size: 50px;
`;

interface IApp {
  counter: any;
}

class App extends Component<{}, IApp> {
  state = {
    counter: 0,
  };

  render() {
    return (
      <Container>
        <Form onFormSubmit={this.onFormSubmit}>
          <Input value="haha" onChange={this.onChange} />
        </Form>

        <Number count={this.state.counter} />
        <button onClick={this.add}>Add</button>
      </Container>
    );
  }

  add = () => {
    this.setState((prev) => {
      return {
        counter: prev.counter + 1,
      };
    });
  };

  onChange = (event: React.SyntheticEvent<HTMLInputElement>) => {
    console.log(event.target);
  };

  onFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();
  };
}

export default App;
