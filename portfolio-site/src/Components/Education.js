import React from 'react';
import { education } from '../constants';
import { styles } from '../styles.js';
import { Tilt } from 'react-tilt';

const schoolNameStyles =
  'text-light-green md:text-[28px] sm:text-[22px] text-[18px] font-bold';
const subheaderStyles =
  'text-dark-gray md:text-[22px] sm:text-[18px] text-[14px] font-medium';
const activityNameStyles =
  'text-dark-gray md:text-[20px] sm:text-[16px] text-[12px] ml-4 mt-4';
const activityDetailStyles =
  'text-gray md:text-[18px] sm:text-[14px] text-[12px] ml-8';

/* RENDER SECTION HEADER */
const RenderHeader = () => {
  return (
    <>
      <h2
        className={`${styles.sectionHeadText} text-center my-16`}
      >
        My Education.
      </h2>
    </>
  );
};

/* RENDER ACTIVITES OF EDUCATION OBJECT */
const RenderActivities = ({ activities }) => {
  return (
    <ul>
      {activities.map((activity, index) => {
        return (
          <li key={index}>
            <h5 className={activityNameStyles}>
              {activity.name}
            </h5>
            {activity.details.map((detail, index) => (
              <p
                key={index}
                className={activityDetailStyles}
              >
                {'- ' + detail}
              </p>
            ))}
          </li>
        );
      })}
    </ul>
  );
};

/* RENDER ICON OF EDUCATION OBJECT */
const SchoolIcon = ({ school }) => {
  return (
    <Tilt
      options={{ max: 0, scale: 1.5 }}
      className={`z-1 absolute w-8 sm:w-16 h-8 sm:h-16 rounded-full left-[-82px] sm:left-[-101px] 
    border-2 border-light-green bg-off-white`}
    >
      <img
        alt={school.icon.alt}
        src={school.icon.source}
        className={school.icon.style}
      />
    </Tilt>
  );
};

/* RENDER EACH EDUCATION OBJECT */
const RenderSchools = ({ schools }) => {
  return (
    <div className='h-full'>
      {schools.map((school) => {
        return (
          <div
            key={school._id}
            className='relative z-0 w-full sm:w-2/3'
          >
            <SchoolIcon school={school} />
            <h3 className={schoolNameStyles}>
              {school.school}
            </h3>
            <h4 className={subheaderStyles}>
              {school.degree}
            </h4>
            <h4 className={subheaderStyles}>
              {school.grad_date}
            </h4>
            <RenderActivities
              activities={school.activities}
            />
          </div>
        );
      })}
    </div>
  );
};

/* EXPORT ALL RENDERED COMPONENTS */
const Education = () => {
  return (
    <section
      className={`${styles.paddingX} mx-auto relative w-full max-w-7xl`}
    >
      <RenderHeader />
      <div className='flex flex-row mb-16'>
        <div className='z-0 w-2 bg-light-green mr-16 rounded-md' />
        <RenderSchools schools={education} />
      </div>
    </section>
  );
};

export default Education;
