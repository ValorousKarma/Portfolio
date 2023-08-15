import React from 'react';
import { work } from '../constants';
import { styles } from '../styles.js';
import { motion } from 'framer-motion';
import { TbBrandGithubFilled } from 'react-icons/tb';
import { directionalFade } from '../Animations/motion.js';

/*  STYLING FOR INDIVIDUAL PROJECT HEADERS & DESCRIPTIONS */
const projectHeader = `md:text-[40px] sm:text-[32px] text-[24px] font-bold text-light-green`;
const projectDescription = `md:text-[20px] sm:text-[16px] text-[12px] text-gray mt-2`;

/*  RENDER SECTION HEADER */
const RenderHeader = () => {
  return (
    <h2
      className={`${styles.sectionHeadText} py-16 text-center`}
    >
      My Work.
    </h2>
  );
};

/* MAKE PROJECT REPO LINK BUTTON */
const RepoButton = ({ project }) => {
  return (
    <div
      className={`z-1 absolute w-[48px] h-[48px] rounded-full
      left-7 top-7 text-off-white bg-light-green hover:bg-dark-green cursor-pointer
      shadow-lg`}
      onClick={() => {
        window.open(
          project.source_code_link,
          '_blank',
          'noreferrer'
        );
      }}
    >
      <TbBrandGithubFilled
        size={'40'}
        className='mx-auto pt-2'
      />
    </div>
  );
};

/*  RENDER PROJECT CARDS
  - This function is messy and definitely not single-purpose,
    I will be refactoring it eventually */
const RenderProjects = ({ projects }) => {
  return (
    <div className={`h-full w-full`}>
      {projects.map((project) => {
        const icons = project.icons;

        return (
          <motion.div
            key={project.id}
            variants={directionalFade('bottom', 0.5, 0.25)}
            initial='hidden'
            whileInView='show'
            className={`relative z-0 w-full min-h-[524px] sm:min-h-0 bg-off-white text-gray rounded-md 
            border-2 border-light-green shadow-xl my-5 p-5 no-flex sm:flex 
            gap-5`}
          >
            <img
              alt={project.name}
              src={project.image}
              className={`w-full sm:w-1/3 h-[298px] sm:h-[370px] rounded-md`}
            />
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
            <RepoButton project={project} />
          </motion.div>
        );
      })}
    </div>
  );
};

const Projects = () => {
  return (
    <section
      className={`${styles.paddingX} mx-auto relative w-full max-w-7xl`}
      id='projects'
    >
      <RenderHeader />
      <RenderProjects projects={work} />
    </section>
  );
};

export default Projects;
