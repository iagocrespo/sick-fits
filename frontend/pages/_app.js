import React from "react";
import App, { Container } from "next/app";

class MyApp extends App {
  render() {
    const Component = this.props.Component;

    return (
      <Container>
        <p>Hey I´m one every page!</p>
        <Component />
      </Container>
    );
  }
}

export default MyApp;
