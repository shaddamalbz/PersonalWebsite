import React, { Component } from "react";

// Part
import Header from "parts/Header";
import Hero from "parts/Hero";
import Skill from "parts/Skill";
import Footer from "parts/Footer";

export default class LandingPage extends Component {
  componentDidMount() {
    document.title = "Shaddamalbz | Personal Website";
  }

  render() {
    return (
      <>
        <Header />
        <Hero />
        <Skill />
        <Footer />
      </>
    );
  }
}
