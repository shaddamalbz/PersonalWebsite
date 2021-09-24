import React from "react";

export default function Timeline(props) {
  const { company, role, timeperiod, jobdesc } = props;
  return (
    <>
      {/* <div className="flex flex-col md:flex-row justify-between md:items-center">
        <div className="relative border-l-2 border-blue pl-8 py-8">
          <p className="border-2 border-blue rounded-xl text-center text-sm">
            {timeperiod}
          </p>
          <span className="absolute left-0 top-9 w-3 h-3 rounded-full bg-blue transform -translate-x-2"></span>
          <div>
            <h3 className="text-2xl">{company}</h3>
            <p className="text-gray-400">{role}</p>
          </div>
        </div>
        <div style={{ maxWidth: "540px" }}>
          <p className="md:text-lg">{jobdesc}</p>
        </div>
      </div> */}

      <div className="relative border-l-2 border-blue pl-8 py-8">
        <p
          className="border-2 border-blue rounded-xl text-center text-sm mb-2"
          style={{ maxWidth: "250px" }}
        >
          {timeperiod}
        </p>
        <span className="absolute left-0 top-9 w-3 h-3 rounded-full bg-blue transform -translate-x-2"></span>
        <div className="flex flex-col md:flex-row justify-between ">
          <div className="mb-4 md:mb-0">
            <h3 className="text-2xl">{company}</h3>
            <p className="text-gray-400">{role}</p>
          </div>
          <div style={{ maxWidth: "540px" }}>
            <p className="md:text-lg">{jobdesc}</p>
          </div>
        </div>
      </div>
    </>
  );
}
