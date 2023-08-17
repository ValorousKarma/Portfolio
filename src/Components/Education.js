import { Suspense, useRef } from 'react';
import { education } from '../constants';
import { styles } from '../styles.js';

import { motion } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';

import { Tilt } from 'react-tilt';
import { directionalFade } from '../Animations/motion.js';

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
        className={`${styles.sectionHeadText} text-center py-16`}
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
      className={`z-2 absolute w-8 sm:w-16 h-8 sm:h-16 rounded-full left-[-82px] sm:left-[-101px] 
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
    <div className='h-full w-full sm:w-1/2'>
      {schools.map((school) => {
        return (
          <div
            key={school._id}
            className='relative z-1'
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

function PaperPencil(props) {
  const ref = useRef();

  useFrame((_, delta) => {
    ref.current.rotation.y += 1 * delta;
  });

  const { nodes, materials } = useGLTF(
    './pencilPaper.glb',
    true
  );

  return (
    <group
      {...props}
      dispose={null}
    >
      <group
        rotation={[-Math.PI / 2, 0, 0]}
        ref={ref}
      >
        <mesh
          geometry={nodes.Object_2.geometry}
          material={materials.Material}
        />
        <mesh
          geometry={nodes.Object_3.geometry}
          material={materials['Material.001']}
        />
        <mesh
          geometry={nodes.Object_4.geometry}
          material={materials['Material.002']}
        />
        <mesh
          geometry={nodes.Object_5.geometry}
          material={materials['Material.003']}
        />
        <mesh
          geometry={nodes.Object_6.geometry}
          material={materials['Material.004']}
        />
        <mesh
          geometry={nodes.Object_7.geometry}
          material={materials['Material.005']}
        />
        <mesh
          geometry={nodes.Object_8.geometry}
          material={materials['Material.006']}
        />
      </group>
    </group>
  );
}

const ThreeDCanvas = () => {
  return (
    <div className='z-0 h-[400px] w-1/2 hidden sm:block self-center'>
      <Canvas
        camera={{
          position: [-35, 61, -16],
          rotation: [
            -(Math.PI / 2),
            -(Math.PI / 180) * 26,
            (Math.PI / 180) * 16,
          ],
          fov: 50,
        }}
      >
        <ambientLight intensity={1} />
        <pointLight
          position={[-15, 27, -36]}
          intensity={400}
        />
        <Suspense fallback={null}>
          <PaperPencil />
        </Suspense>
      </Canvas>
    </div>
  );
};

/* EXPORT ALL RENDERED COMPONENTS */
const Education = () => {
  return (
    <section
      className={`${styles.paddingX} mx-auto relative w-full max-w-7xl`}
      id='education'
    >
      <RenderHeader />
      <motion.div
        className='flex flex-row mb-16 h-[100%]'
        variants={directionalFade(null, 1, 0.25)}
        initial='hidden'
        whileInView='show'
      >
        <div className='z-0 w-2 bg-light-green mr-16 rounded-md' />
        <RenderSchools schools={education} />
        <ThreeDCanvas />
      </motion.div>
    </section>
  );
};

export default Education;
