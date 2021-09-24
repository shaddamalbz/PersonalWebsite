import React from "react";
import htmlParser from "react-html-parser";

// Components
import Timeline from "components/Timeline";

export default function Resume() {
  const works = [
    {
      company: "Build a Portofolio",
      role: "Learning Progress",
      timeperiod: "Present",
      jobdesc:
        "Through constant practice and learning to become frontend developer",
    },
    {
      company: "PT Fanabaka Teknologi",
      role: "Frontend Developer Intern",
      timeperiod: "December 2020 - March 2021",
      jobdesc:
        "Redesign UI using Figma, Develop more than 5 responsive pages consist of landingpage, Product, Detail Product, Cart, and some static pages like term and condition page using framework nextjs",
    },
    {
      company: "Lab Software Universitas Diponegoro",
      role: "Coordinator & Assistant",
      timeperiod: "2020 - 2021",
      jobdesc:
        "Create learning module to be used in related practicums and teach to college students who take these course :<ul class='list-disc list-inside'><li>Dasar Komputer Pemrograman</li><li>Sistem Basis Data</li><li>Pemrograman Perangkat Bergerak</li><li>Rekayasa Perangkat Lunak Berbasis Komponen</li></ul>",
    },
    {
      company: "BEM Universitas Diponegoro",
      role: "Staff",
      timeperiod: "January 2019 - December 2019",
      jobdesc:
        "Using adobe photoshop to create 2 graphical contents every week and manage offical account line by scheduling posts and respond to comments",
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

  const certificates = [
    {
      company: "Dicoding Indonesia",
      role: "Frontend Web Developer Learning Path",
      timeperiod: "2020",
      jobdesc:
        "Learning from the basics to become frontend developer. Here are some certificate that i got by taking this courses : <ul class='list-disc list-inside'><li>Belajar membangun LINE Frontend Framework (LIFF)</li><li>Membangun Progressive Web Apps</li><li>Belajar Fundamental Frontend Web Development</li><li>Belajar Dasar Programming</li></ul>",
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
              jobdesc={htmlParser(work.jobdesc)}
              key={index}
            />
          );
        })}
      </div>
      <div className="border-b-2 border-gray-200 pb-8 mb-16">
        <h3 className="text-3xl text-center font-bold mb-6">
          Course & Certificate
        </h3>
        {certificates.map((certificate, index) => {
          return (
            <Timeline
              company={certificate.company}
              role={certificate.role}
              timeperiod={certificate.timeperiod}
              jobdesc={htmlParser(certificate.jobdesc)}
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
              jobdesc={htmlParser(edu.jobdesc)}
              key={index}
            />
          );
        })}
      </div>
    </>
  );
}
