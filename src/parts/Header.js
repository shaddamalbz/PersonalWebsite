import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faBars } from "@fortawesome/free-solid-svg-icons";

// Components
import Button from "components/Button";

// Assets
import BrandIconBg from "assets/images/BrandIconBG.svg";

// utils
import useWindowDimension from "utils/WindowDimension";

export default function Header() {
  const { width } = useWindowDimension();
  const [isOpen, setIsOpen] = useState(false);

  if (width <= 1024)
    return (
      <header className="w-full h-20 shadow z-50">
        <div className="h-full sm:mx-6 md:mx-12 lg:mx-24 xl:mx-48 px-4 xl:px-0">
          <nav className="h-full">
            <div className="h-full flex justify-between items-center text-lg">
              <Link to="/" className="flex items-center">
                <p className="font-bold text-blue z-10">Shaddam</p>
                <figure className="-ml-4 z-0">
                  <img src={BrandIconBg} alt="Blob" />
                </figure>
              </Link>
              <span
                className="text-blue text-2xl cursor-pointer"
                onClick={() => setIsOpen(!isOpen)}
              >
                {!isOpen ? (
                  <FontAwesomeIcon icon={faBars} />
                ) : (
                  <FontAwesomeIcon icon={faTimes} />
                )}
              </span>
            </div>
            <ul
              className={`${
                !isOpen
                  ? "hidden"
                  : "bg-gray-50 flex flex-col items-center relative z-50 text-blue py-6 rounded-xl shadow-md mt-4"
              }`}
            >
              <li className="py-2">
                <Link to="about">About Me</Link>
              </li>
              <li className="py-2">
                <Link to="about">Portofolio</Link>
              </li>
              <li className="py-2">
                <Link to="about">Blog</Link>
              </li>
              <li>
                <Button type="button" isPrimary isRounded hasShadow>
                  Contact Me
                </Button>
              </li>
            </ul>
          </nav>
        </div>
        {isOpen && (
          <div
            className="relative bg-black opacity-50 z-40"
            style={{ minHeight: `calc(100vh - 5rem)` }}
          ></div>
        )}
      </header>
    );

  return (
    <header className="w-full h-20 shadow-sm mb-16">
      <div className="h-full sm:mx-6 md:mx-12 lg:mx-24 xl:mx-48 px-4 xl:px-2">
        <nav className="h-full flex justify-between items-center text-lg">
          <Link to="/" className="flex items-center">
            <p className="font-bold text-blue z-10">Shaddam</p>
            <figure className="-ml-4 z-0">
              <img src={BrandIconBg} alt="Blob" />
            </figure>
          </Link>
          <ul className="flex items-center ">
            <li className="mr-9">
              <Link to="about">About Me</Link>
            </li>
            <li className="mr-9">
              <Link to="about">Portofolio</Link>
            </li>
            <li className="mr-9">
              <Link to="about">Blog</Link>
            </li>
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
