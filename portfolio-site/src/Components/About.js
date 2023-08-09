import React from 'react';
import { interests } from '../constants';
import { styles } from '../styles.js';
import { motion } from 'framer-motion';
import { Tilt } from 'react-tilt';

/*  RENDER INFORMATIONAL TEXT */
const RenderText = () => {
  return (
    <>
      <h1
        className={`${styles.sectionHeadText} text-dark-green font-black`}
      >
        My Passions
      </h1>
      <p
        className={`${styles.sectionSubText} w-[80%] text-gray tracking-wider mt-4`}
      >
        I've had an interest in programming since a young
        age. Now, as a college student looking to polish my
        skills and expose myself to a variety of languages,
        technologies, and design principles, I've narrowed
        my interests. I aspire to improve my frontend and
        backend development capabilities, and my familiarity
        with cyber-security principles. I hope my background
        in media production is noticable in the quality of
        my first website, this portfolio.
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
                duration: 1,
              }}
              viewport={{
                once: true,
              }}
              className={`shadow-lg w-full h-full bg-silver rounded-md 
                text-off-white grid grid-cols-1 grid-rows-2 justify-items-center`}
            >
              <div className='flex items-center justify-center w-full'>
                <interest.icon size={'75%'} />
              </div>
              <h1
                className={`flex items-center justify-center text-center 
                px-[15%] font-bold text-[16px] xxs:text-[20px]`}
              >
                {interest.title}
              </h1>
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
      className={`grid grid-col-1 grid-row-2 relative w-full max-w-7xl 
    h-screen min-h-[720px] md:min-h-[900px] lg:max-h-[900px] mx-auto space-y-4`}
    >
      <div className={`${styles.paddingX}`}>
        <RenderText />
      </div>
      <div className={`${styles.paddingX} h-4/5 mx-auto`}>
        <RenderInterests interests={interests} />
      </div>
    </section>
  );
};

export default About;
