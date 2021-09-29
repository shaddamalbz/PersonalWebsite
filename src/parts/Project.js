import React from "react";
import { Fade } from "react-awesome-reveal";

// Components
import CardProject from "components/Card/CardProject";

// Assets
import staycation from "assets/images/project_staycation.jpg";
import adminStaycation from "assets/images/project_adminstaycation.jpg";

export default function Project() {
  const projects = [
    {
      image: staycation,
      name: "Staycation",
      stack: "ReactJS, Bootstrap, Redux, API",
      link: "https://staycation-gold.vercel.app/",
    },
    {
      image: adminStaycation,
      name: "Admin Staycation",
      stack: "ExpressJS, MongoDB, API, Mocha, Chai",
      link: "https://shaddamalbz-admin-staycation.herokuapp.com/admin/dashboard",
    },
  ];

  return (
    <Fade direction="up" triggerOnce="true">
      <section className="w-full mb-16" style={{ minHeight: "250px" }}>
        <div className="h-full sm:mx-6 md:mx-12 lg:mx-24 xl:mx-48 px-4 xl:px-2">
          <span className="text-4xl text-center md:text-left border-b-2 border-blue">
            Recent Project
          </span>
          <p className="text-lg text-gray-400 mb-5 text-center md:text-left mt-2">
            Here are some preview my recent project
          </p>
          <div className="grid grid-cols-4 sm:grid-cols-8 md:grid-cols-12 gap-5">
            {projects.map((project, index) => {
              return (
                <div className="col-span-4" key={index}>
                  <Fade direction="up" delay={index * 100} triggerOnce="true">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <CardProject
                        image={project.image}
                        name={project.name}
                        stack={project.stack}
                      />
                    </a>
                  </Fade>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </Fade>
  );
}
