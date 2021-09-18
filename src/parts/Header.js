import React from "react";

// Components
import Button from "components/Button";

// Assets
import BrandIconBg from "assets/images/BrandIconBG.svg";

export default function Header() {
  return (
    <header className="container h-20 shadow-sm">
      <div className="h-full lg:mx-48 lg:px-2">
        <nav className="h-full flex justify-between items-center text-lg">
          <div className="flex items-center">
            <p className="font-bold text-blue z-10">Shaddam</p>
            <figure className="-ml-4 z-0">
              <img src={BrandIconBg} alt="Blob" />
            </figure>
          </div>
          <ul className="flex items-center ">
            <li className="mr-9">Home</li>
            <li className="mr-9">About Me</li>
            <li className="mr-9">Portofolio</li>
            <li className="mr-9">Blog</li>
            <li>
              <Button type="button" isPrimary isRounded hasShadow>
                Contact Me
              </Button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
