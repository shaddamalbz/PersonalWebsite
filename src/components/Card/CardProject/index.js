import React from "react";

export default function CardProject(props) {
  const { name, stack, image } = props;
  return (
    <div className="w-full rounded-xl shadow-lg transition duration-500 ease-in-out transform hover:-translate-y-5 pt-4">
      <h3 className="text-center text-xl">{name}</h3>
      <p className="text-center text-sm text-gray-400 mb-5">{stack}</p>
      <img
        src={image}
        alt={name}
        className="w-full mx-auto object-cover px-4"
        width="280px"
      />
    </div>
  );
}
