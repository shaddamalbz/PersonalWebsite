import React, { Component } from "react";

// Part
import Header from "parts/Header";
import Hero from "parts/Hero";
import Summary from "parts/Summary";
import Skill from "parts/Skill";
import Project from "parts/Project";
import Banner from "parts/Banner";
import Footer from "parts/Footer";

export default class LandingPage extends Component {
  componentDidMount() {
    document.title = "Shaddam Alghafiqih";
  }

  render() {
    return (
      <>
        <Header />
        <Hero />
        <Summary />
        <Skill />
        <Project />
        <Banner />
        <Footer />
      </>
    );
  }
}
