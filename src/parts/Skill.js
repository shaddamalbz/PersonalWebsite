import React from "react";

// Components
import CardSkill from "components/Card/CardSkill";

// Assets
import html from "assets/images/html.jpg";
import css from "assets/images/css.jpg";
import js from "assets/images/js.jpg";
import react from "assets/images/react.jpg";
import tailwind from "assets/images/tailwind.jpg";
import github from "assets/images/github.jpg";

export default function Skill() {
  const skills = [
    {
      image: html,
      caption: "HTML",
    },
    {
      image: css,
      caption: "CSS",
    },
    {
      image: js,
      caption: "javascript",
    },
    {
      image: react,
      caption: "React",
    },
    {
      image: tailwind,
      caption: "TailwindCSS",
    },
    {
      image: github,
      caption: "Github",
    },
  ];

  return (
    <section className="w-full mb-16" style={{ minHeight: "250px" }}>
      <div className="h-full sm:mx-6 md:mx-12 lg:mx-24 xl:mx-48 px-1 xl:px-2">
        <h3 className="text-4xl">Skills</h3>
        <span className="w-20 h-1 border-b-2 border-blue"></span>
        <p className="text-lg text-gray-400 mb-5">
          Here are most commonly skillset i used for develop website
        </p>
        <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-12 gap-5">
          {skills.map((skill, index) => {
            return (
              <div className="col-span-2" key={index}>
                <CardSkill image={skill.image} caption={skill.caption} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
