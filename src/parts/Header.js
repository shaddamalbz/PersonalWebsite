import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faBars } from "@fortawesome/free-solid-svg-icons";
import { Fade } from "react-awesome-reveal";

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
            {isOpen && (
              <Fade className="relative z-50" direction="down" delay={100}>
                <div>
                  <ul className="flex flex-col items-center text-blue rounded-xl shadow-md mt-4 py-6 bg-white">
                    <li className="py-2">
                      <Link to="about">About Me</Link>
                    </li>
                    <li className="py-2">
                      <Link to="portofolio">Portofolio</Link>
                    </li>
                    <li className="py-2">
                      <Link to="blog">Blog</Link>
                    </li>
                    <li>
                      <Button type="button" isPrimary isRounded hasShadow>
                        Contact Me
                      </Button>
                    </li>
                  </ul>
                </div>
              </Fade>
            )}
          </nav>
        </div>
        {isOpen && (
          <Fade className="relative z-40" delay={100}>
            <div
              className=" bg-black opacity-50 "
              style={{ minHeight: `calc(100vh - 5rem)` }}
            ></div>
          </Fade>
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
              <Link to="portofolio">Portofolio</Link>
            </li>
            <li className="mr-9">
              <Link to="blog">Blog</Link>
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
