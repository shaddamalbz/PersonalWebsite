import React, { Component } from "react";

// Part
import Header from "parts/Header";

// Components
import Button from "components/Button";

// Assets
import NotFoundImage from "assets/images/404.jpg";

export default class NotFound extends Component {
  render() {
    return (
      <>
        <Header />
        <div className="flex flex-col items-center justify-center sm:mx-6 md:mx-12 lg:mx-24 xl:mx-48 px-4 xl:px-0 mt-10">
          <figure className="mb-2" style={{ height: "360px" }}>
            <img
              className="h-full object-cover"
              src={NotFoundImage}
              alt="Cat Sad"
            />
          </figure>
          <h3 className="text-4xl font-semibold mb-2">
            404 Not Found <span className="text-blue">Meow</span>
          </h3>
          <p className="text-xl mb-2">you on wrong pages meow</p>
          <Button isPrimary isRounded hasShadow>
            Home
          </Button>
        </div>
      </>
    );
  }
}
