import React from "react";

// Components
import Button from "components/Button";

// assets
import Indonesia from "assets/images/IndonesiaFlag.svg";
import HeroCat from "assets/images/hero_cat.png";
import HeroBg from "assets/images/hero_bg.svg";

export default function Hero() {
  return (
    <section className="w-full mb-16">
      <div
        className="sm:mx-6 md:mx-12 lg:mx-24 xl:mx-48 px-1 xl:px-2"
        style={{ height: "420px" }}
      >
        <div className="h-full flex justify-between items-center">
          <div>
            <figure className="mb-4">
              <img src={Indonesia} alt="Indonesia Flag" />
            </figure>
            <h3 className="text-4xl  font-bold mb-4">Hy! I am</h3>
            <h3 className="text-4xl text-blue font-bold mb-4">
              Shaddam Alghafiqih Bazdha
            </h3>
            <p className="font-bold text-gray-400 mb-4">Frontend Developer</p>
            <Button className="px-11" isPrimary isRounded hasShadow>
              Hire Me
            </Button>
          </div>
          <div className="mr-12">
            <div className="flex" style={{ height: "380px" }}>
              <figure className="z-10" style={{ height: "320px" }}>
                <img src={HeroCat} alt="Cat" className="h-full object-cover" />
              </figure>
              <figure className="-ml-40 mt-24 z-0" style={{ height: "260px" }}>
                <img src={HeroBg} alt="Cat" className="h-full object-cover" />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
