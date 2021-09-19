import React from "react";

// Components
import Button from "components/Button";

// Assets
import bannerVector from "assets/images/banner_vector.svg";

export default function Banner() {
  return (
    <section className="w-full mb-16 ">
      <div className="sm:mx-6 md:mx-12 lg:mx-24 xl:mx-48 px-1 xl:px-2">
        <div className="bg-blue rounded-xl" style={{ height: "285px" }}>
          <div className="h-full flex flex-row items-center justify-between">
            <div className="pl-14">
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
            <div className="h-full md:flex md:items-end hidden">
              <figure>
                <img src={bannerVector} alt="banner vector" />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
