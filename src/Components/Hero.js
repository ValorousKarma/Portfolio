import {
  AiFillGithub,
  AiFillLinkedin,
} from 'react-icons/ai';

import { styles } from '../styles';

const Button = (props) => {
  return (
    <a
      href={props.link}
      rel='noreferrer'
      target='_blank'
    >
      <button className='shadow-lg bg-light-green hover:bg-dark-green text-off-white md:py-2 md:px-7 py-2 px-2 rounded-md'>
        <props.icon size={60} />
      </button>
    </a>
  );
};

const Hero = () => {
  return (
    <section className='relative w-full h-screen min-h-[500px]'>
      <div
        className={`${styles.paddingX} mx-auto absolute inset-0 top-[120px] 
        max-w-7xl flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 bg-light-green' />
          <div className='w-1 sm:h-80 h-40 light-green-gradient' />
        </div>
        <div className='flex flex-col justify-center items-left mt-5 max-w-2xl lg:max-w-3xl'>
          <h1 className='text-gray font-bold text-[26px] sm:text-[38px] md:text-[50px] lg:text-[64px]'>
            Hi, I'm{' '}
            <span className='text-dark-green font-black'>
              Dylan Michalak
            </span>
          </h1>
          <p className='text-gray text-[16px] sm:text-[20px] md:text-[24px] tracking-wider'>
            I am a 3rd year Computer Science student
            interested in fullstack web, cloud, and
            security.
          </p>
        </div>
      </div>
      <div
        className={`absolute bottom-[10%] w-full flex flex-row 
        gap-5 justify-center`}
      >
        <Button
          link='https://github.com/ValorousKarma'
          icon={AiFillGithub}
        />
        <Button
          link='https://www.linkedin.com/in/dylan-michalak-a1260a221/'
          icon={AiFillLinkedin}
        />
      </div>
    </section>
  );
};

export default Hero;
