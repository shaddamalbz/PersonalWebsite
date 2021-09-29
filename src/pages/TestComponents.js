import React, { Component } from "react";

// Components
import ToogleTheme from "components/Toogle/ToogleTheme";

export default class TestComponents extends Component {
  render() {
    return (
      <section className="h-screen flex justify-center items-center">
        <ToogleTheme />
      </section>
    );
  }
}
