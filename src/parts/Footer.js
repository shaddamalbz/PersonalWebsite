import React from "react";

// Assets
import BrandIconBg from "assets/images/BrandIconBG.svg";

export default function Footer() {
  return (
    <footer className="w-full absolute pb-8">
      <div className="h-full sm:mx-6 md:mx-12 lg:mx-24 xl:mx-48 px-4 xl:px-0">
        <div className="flex justify-between items-center border-b-4 border-blue rounded py-2">
          <div className="flex items-center">
            <p className="font-bold text-blue z-10">Shaddam</p>
            <figure className="-ml-4 z-0">
              <img src={BrandIconBg} alt="Blob" />
            </figure>
          </div>
          <p>
            Coded with love{" "}
            <span className="text-pink font-bold"> &#10084;</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
