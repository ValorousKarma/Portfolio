import React from 'react';
import { interests } from '../constants';
import { styles } from '../styles.js';
import { motion } from 'framer-motion';
import { Tilt } from 'react-tilt';

const text = `
I've had an interest in programming since a young
age. Now, as a college student looking to polish my
skills and expose myself to a variety of languages,
technologies, and design principles, I've narrowed
my interests. I aspire to improve my frontend and
backend development capabilities, and my familiarity
with cyber-security principles. This portfolio
demonstrates my competency with modern, responsive
web design.
`;

/*  RENDER INFORMATIONAL TEXT */
const RenderText = () => {
  return (
    <>
      <h2
        className={`${styles.sectionHeadText} text-center my-16`}
      >
        My Passions.
      </h2>
      <p
        className={`${styles.sectionSubText} w-[80%] mx-auto text-center`}
      >
        {text}
      </p>
    </>
  );
};

/*  RENDER ANIMATED CARDS 
  - uses the react-tilt and
    framer-motion libraries to render cards
    representing my interests in the about 
    section*/
const RenderInterests = ({ interests }) => {
  return (
    <div
      className={`h-full w-full grid grid-cols-2 grid-rows-2 lg:grid-cols-4 
    lg:grid-rows-1 gap-x-[5%] gap-y-5`}
    >
      {interests.map((interest, index) => {
        return (
          <Tilt
            key={index}
            className='xl:max-w-xs lg:max-w-xxs list-none lg:h-64 h-48 max-h-[95%]'
          >
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{
                opacity: 1,
              }}
              transition={{
                delay: `${index * 0.25}`,
                duration: 1,
              }}
              viewport={{
                once: true,
              }}
              className={`shadow-xl w-full h-full bg-light-green rounded-md 
                text-off-white grid grid-cols-1 grid-rows-2 justify-items-center`}
            >
              <div className='flex items-center justify-center w-full'>
                <interest.icon size={'75%'} />
              </div>
              <h3
                className={`flex items-center justify-center text-center 
                px-[15%] font-bold text-[16px] xxs:text-[20px]`}
              >
                {interest.title}
              </h3>
            </motion.div>
          </Tilt>
        );
      })}
    </div>
  );
};

/*  MAIN FUNCTION
  - returns the combined jsx
    for this section */
const About = () => {
  return (
    <section
      className={`${styles.paddingX} mx-auto grid grid-col-1 grid-row-2 relative 
      justify-center w-full max-w-7xl`}
      id='about'
    >
      <div>
        <RenderText />
      </div>
      <div className={`mx-auto my-16`}>
        <RenderInterests interests={interests} />
      </div>
    </section>
  );
};

export default About;
