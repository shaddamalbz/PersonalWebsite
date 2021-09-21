import React from "react";
import { Fade } from "react-awesome-reveal";

// Components
import Button from "components/Button";

// Assets
import bannerVector from "assets/images/banner_vector.svg";

export default function Banner() {
  return (
    <Fade direction="down" delay={250}>
      <section className="w-full mb-16 ">
        <div className="sm:mx-6 md:mx-12 lg:mx-24 xl:mx-48 px-4 xl:px-0">
          <div className="bg-blue rounded-xl" style={{ height: "285px" }}>
            <div className="h-full flex flex-row items-center justify-center sm:justify-between">
              <div className="px-4 sm:pl-14 text-center sm:text-left">
                <h3 className="text-5xl text-white font-bold mb-4">
                  Work Inquiry
                </h3>
                <p className="text-lg text-white mb-4">
                  Lets work together and i’ll help you by all my best
                </p>
                <Button isSecondary hasShadow isRounded>
                  Contact Me
                </Button>
              </div>
              <div className="h-full sm:flex hidden items-end">
                <figure>
                  <img src={bannerVector} alt="banner vector" />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fade>
  );
}
