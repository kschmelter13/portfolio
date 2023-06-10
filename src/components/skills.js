import React from "react";
import { skillData } from "../portfolioData";

export default function Skills() {
  return (
    <div className="py-10">
      <div className="rounded-md  px-4 py-4 mx-auto mt-20 xs:w-5/6">
        <h2 className="xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 text-center">
          Skills
        </h2>
        <div className="grid grid-cols-4 xl:grid-cols-6 xs:gap-8 xl:gap-16 mt-20">
          {skillData.map((skill) => (
            <Skill key={skill.name} skill={skill} />
          ))}
        </div>
        <h2 className="xs:text-md sm:text-lg md:text-xl lg:text-2xl  font-semibold text-gray-200 ml-4 mt-8 mb-8 text-center">
          And many more...
        </h2>
      </div>
    </div>
  );
}

function Skill({ skill }) {
  return (
    <div className="mb-5">
      <div
        className="rounded-circle shadow-xl xs:p-3 md:p-4 lg:p-5 xl:p-6 2xl:p-7 mb-6 mx-auto"
        style={{ width: "calc(30px + 5vw)", height: "calc(30px + 5vw)" }}
      >
        <img
          className="logo w-18 h-18 transition-all duration-200 "
          src={skill.image}
          alt={skill.name}
          style={{ opacity: "100%" }}
        />
      </div>
      <div className="text-center">
        <span className="text-xl xs:text-xs sm:text-sm md:text-md lg:text-lg xl:text-xl text-white mt-2">
          {skill.name}
        </span>
      </div>
    </div>
  );
}
