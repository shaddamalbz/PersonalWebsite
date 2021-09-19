import React from "react";

// Components
import Button from "components/Button";

// Assets
import BrandIconBg from "assets/images/BrandIconBG.svg";

// utils
import useWindowDimension from "utils/WindowDimension";

export default function Header() {
  const { width } = useWindowDimension();

  if (width <= 1024)
    return (
      <header className="w-full h-20 shadow-sm">
        <div className="h-full sm:mx-6 md:mx-12 lg:mx-24 xl:mx-48 px-4 xl:px-2">
          <nav className="h-full flex justify-between items-center text-lg">
            <div className="flex items-center">
              <p className="font-bold text-blue z-10">Shaddam</p>
              <figure className="-ml-4 z-0">
                <img src={BrandIconBg} alt="Blob" />
              </figure>
            </div>
            <span className="text-blue text-2xl">
              <i className="fas fa-bars"></i>
            </span>
          </nav>
        </div>
      </header>
    );

  return (
    <header className="w-full h-20 shadow-sm mb-16">
      <div className="h-full sm:mx-6 md:mx-12 lg:mx-24 xl:mx-48 px-4 xl:px-2">
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
