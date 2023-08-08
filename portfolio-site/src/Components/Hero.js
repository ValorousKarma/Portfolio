import { motion } from "framer-motion";

import { styles } from "../styles";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] 
        max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 bg-light-green" />
          <div className="w-1 sm:h-80 h-40 light-green-gradient" />
        </div>
        <div className="flex flex-col justify-center items-left mt-5 max-w-2xl lg:max-w-3xl">
          <h1 className="text-gray font-bold text-[26px] sm:text-[38px] md:text-[50px] lg:text-[64px]">
            Hi, I'm <span className="text-dark-green">Dylan Michalak</span>
          </h1>
          <p className="text-gray text-[16px] sm:text-[20px] md:text-[24px]">
            I am a 3rd year Computer Science student interested in fullstack
            web, cloud, and security.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
