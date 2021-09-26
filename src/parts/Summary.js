import React from "react";
import { Fade } from "react-awesome-reveal";

// Assets
import blob from "assets/images/summary_blob.svg";

export default function Summary() {
  return (
    <Fade direction="up" delay={150} triggerOnce="true">
      <section className="mb-20">
        <div className="sm:mx-6 md:mx-12 lg:mx-24 xl:mx-48 px-4 xl:px-0">
          <div className="flex justify-evenly">
            <div className="relative flex" style={{ maxWidth: 200 }}>
              <h3 className="text-5xl mr-6 z-10">&gt;1</h3>
              <p className="text-2xl z-10">Work Experience</p>
              <img
                className="absolute left-8 z-0 transform -translate-y-5"
                src={blob}
                alt="Blob"
              />
            </div>
            <div className="relative flex" style={{ maxWidth: 150 }}>
              <h3 className="text-5xl mr-6 z-10">2</h3>
              <p className="text-2xl z-10">Completed Project</p>
              <img
                className="absolute left-8 z-0 transform -translate-y-5"
                src={blob}
                alt="Blob"
              />
            </div>
          </div>
        </div>
      </section>
    </Fade>
  );
}
