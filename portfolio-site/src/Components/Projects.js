import React from 'react';
import { work } from '../constants';
import { styles } from '../styles.js';
import { motion } from 'framer-motion';

const projectHeader = `md:text-[40px] sm:text-[32px] text-[24px] font-bold text-light-green`;
const projectDescription = `md:text-[20px] sm:text-[16px] text-[12px] text-gray mt-2`;

const RenderHeader = () => {
  return (
    <h2 className={`${styles.sectionHeadText} text-center`}>
      My Work.
    </h2>
  );
};

const RenderProjects = ({ projects }) => {
  return (
    <div className={`h-full w-full`}>
      {projects.map((project) => {
        const icons = project.icons;

        return (
          <motion.div
            key={project.id}
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
            className={`w-full h-90 bg-off-white text-gray rounded-md 
            border-2 border-light-green shadow-xl my-5 p-5 no-flex sm:flex 
            gap-5`}
          >
            <img
              alt={project.name}
              src={project.image}
              className={`w-full sm:w-1/3 rounded-md`}
            ></img>
            <div>
              <h3 className={projectHeader}>
                {project.name}
              </h3>
              <p className={projectDescription}>
                {project.description}
              </p>
              <div className='flex gap-5 mt-4 text-dark-gray'>
                {icons.map((Icon, index) => (
                  <Icon
                    key={index}
                    size={'32px'}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};

const Projects = () => {
  return (
    <div
      className={`${styles.paddingX} mx-auto relative w-full max-w-7xl 
      h-screen`}
    >
      <RenderHeader />
      <RenderProjects projects={work} />
    </div>
  );
};

export default Projects;
