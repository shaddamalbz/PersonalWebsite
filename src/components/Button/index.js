import React from "react";
import { Link } from "react-router-dom";
import propTypes from "prop-types";

export default function Button(props) {
  const className = [props.className];

  if (props.isPrimary) className.push("bg-blue text-white");
  if (props.isSecondary) className.push("bg-pink text-gray-500");
  if (props.isRounded) className.push("rounded-xl");
  if (props.hasShadow) className.push("shadow");

  const onClick = () => {
    if (props.onClick) props.onClick();
  };

  if (props.type === "link") {
    if (props.isExternal) {
      return (
        <a
          href={props.href ? props.href : "/"}
          style={props.style}
          target={props.target === "_blank" ? "_blank" : undefined}
          rel="noopener noreferrer"
        >
          {props.children}
        </a>
      );
    } else {
      return (
        <Link
          to={props.href ? props.href : "/"}
          className={className.join(" ")}
          style={props.style}
          onClick={onClick}
        >
          {props.children}
        </Link>
      );
    }
  }

  return (
    <button
      className={`py-1.5 px-6 transition duration-500 ease-in-out transform hover:-translate-y-2 ${className.join(
        " "
      )}`}
      onClick={onClick}
      style={props.style}
    >
      {props.children}
    </button>
  );
}

Button.propTypes = {
  type: propTypes.oneOf(["button", "link"]),
  onClick: propTypes.func,
  target: propTypes.string,
  href: propTypes.string,
  className: propTypes.string,
  isPrimary: propTypes.bool,
  isSecondary: propTypes.bool,
  isRounded: propTypes.bool,
  isExternal: propTypes.bool,
  hasShadow: propTypes.bool,
};
