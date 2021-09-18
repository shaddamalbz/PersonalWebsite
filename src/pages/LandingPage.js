import React, { Component } from "react";

// Part
import Header from "parts/Header";
import Hero from "parts/Hero";

export default class LandingPage extends Component {
  componentDidMount() {
    document.title = "Shaddamalbz | Personal Website";
  }

  render() {
    return (
      <>
        <Header />
        <Hero />
      </>
    );
  }
}
