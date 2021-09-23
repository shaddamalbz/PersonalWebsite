import React from "react";

// Components
import Timeline from "components/Timeline";

export default function Resume() {
  const works = [
    {
      company: "PT Fanabaka Teknologi",
      role: "Frontend Developer Intern",
      timeperiod: "December 2020 - March 2021",
      jobdesc:
        "Redesign UI using Figma, Develop more than 5 responsive pages consist of landingpage, Product, Detail Product, Cart, and some static pages like term and condition page using framework nextjs",
    },
  ];

  const educations = [
    {
      company: "Universitas Diponegoro",
      role: "College Student",
      timeperiod: "2018 - Present",
      jobdesc:
        "Studying at Diponegoro University by majoring at Computer Engineering",
    },
  ];

  return (
    <>
      <div className="border-b-2 border-gray-200 pb-8 mb-16">
        <h3 className="text-3xl text-center font-bold mb-6">Work Experince</h3>
        {works.map((work, index) => {
          return (
            <Timeline
              company={work.company}
              role={work.role}
              timeperiod={work.timeperiod}
              jobdesc={work.jobdesc}
              key={index}
            />
          );
        })}
      </div>
      <div className="border-b-2 border-gray-200 pb-8 mb-16">
        <h3 className="text-3xl text-center font-bold mb-6">Education</h3>
        {educations.map((edu, index) => {
          return (
            <Timeline
              company={edu.company}
              role={edu.role}
              timeperiod={edu.timeperiod}
              jobdesc={edu.jobdesc}
              key={index}
            />
          );
        })}
      </div>
    </>
  );
}
