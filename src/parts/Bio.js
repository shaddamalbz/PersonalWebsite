import React from "react";

// Assets
import pasFoto from "assets/images/Paspoto-square.png";
import cake from "assets/icons/cake.svg";
import instagram from "assets/icons/instagram.svg";
import mail from "assets/icons/mail.svg";

export default function Bio() {
  return (
    <div
      className="flex flex-col lg:flex-row justify-evenly item-center mb-16"
      style={{ minHeight: "240px" }}
    >
      <div className="flex flex-col items-center justify-center mx-auto mb-8 lg:mb-0">
        <figure className="rounded-full h-24 w-24 bg-gray-500 mb-2">
          <img
            src={pasFoto}
            alt="Profile"
            className="h-full object-cove rounded-full"
          />
        </figure>
        <h3 className="mb-2 font-bold text-lg text-center">
          Shaddam Alghafiqih Bazdha
        </h3>
        <p className="text-center">Jambi, Indonesia</p>
      </div>
      <div style={{ maxWidth: "600px" }}>
        <h3 className="text-3xl font-bold mb-4">About</h3>
        <p className="mb-4">
          Website developer who focus on Frontend Development with skill
          creating static or dynamic website and responsive. Usually using
          library reactjs and framwork tailwindcss for development but i can use
          other option like bootstrap and ant design.
        </p>
        <div className="flex flex-wrap">
          <div className="flex items-center mr-8">
            <img className="mr-2" src={mail} alt="icons mail" />
            <p>shaddam.albz@gmail.com</p>
          </div>
          <div className="flex items-center mr-8">
            <img className="mr-2" src={instagram} alt="icons instagram" />{" "}
            <p>shaddam.ab</p>
          </div>
          <div className="flex items-center mr-8">
            <img className="mr-2" src={cake} alt="icons cake" /> <p>21 Years</p>
          </div>
        </div>
      </div>
    </div>
  );
}
