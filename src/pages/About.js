import React, { Component } from "react";

// Part
import Header from "parts/Header";
import Bio from "parts/Bio";
import Resume from "parts/Resume";
import Footer from "parts/Footer";

export default class About extends Component {
  componentDidMount() {
    document.title = "Shaddamalbz | About Me";
  }

  render() {
    return (
      <>
        <Header />
        <div className="sm:mx-6 md:mx-12 lg:mx-24 xl:mx-48 px-4 xl:px-0">
          <Bio />
          <Resume />
        </div>
        <Footer />
      </>
    );
  }
}
