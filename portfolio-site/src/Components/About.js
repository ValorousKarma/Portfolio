import React from "react";
import { interests } from "../constants";
import { styles } from "../styles.js";

const RenderText = () => {};

const RenderInterests = ({ interests }) => {
  return (
    <ul className="h-full w-full grid grid-cols-2 grid-rows-2 lg:grid-cols-4 lg:grid-rows-1 gap-x-[5%] gap-y-5">
      {interests.map((interest) => {
        return (
          <li
            key={interest.name}
            className="max-w-xxs list-none h-64 max-h-[95%]"
          >
            <div className="w-full h-full bg-silver rounded-md"></div>
          </li>
        );
      })}
    </ul>
  );
};

const About = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div className={`${styles.paddingX} h-1/2 mx-auto max-w-7xl`}>
        <RenderInterests interests={interests} />
      </div>
    </section>
  );
};

export default About;
