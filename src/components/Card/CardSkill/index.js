import React from "react";

export default function index(props) {
  const { image, caption } = props;

  return (
    <div className="w-full rounded-xl shadow-lg" style={{ height: "135px" }}>
      <figure className="h-full pt-4 pb-6">
        <figcaption className="text-lg text-center font-bold ">
          {caption}
        </figcaption>
        <img
          src={image}
          alt={caption}
          className="object-cover mx-auto"
          width="60"
        />
      </figure>
    </div>
  );
}