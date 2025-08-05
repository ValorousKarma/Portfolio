import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

import { styles } from "../styles";
import { HeroCanvas } from "../3D/HeroBalls.js";

const Button = (props) => {
	return (
		<a href={props.link} rel="noreferrer" target="_blank">
			<button className="shadow-lg bg-light-green hover:bg-dark-green text-off-white md:py-2 md:px-7 py-2 px-2 rounded-md">
				<props.icon size={60} />
			</button>
		</a>
	);
};

const Hero = () => {
	return (
		<section className="relative w-full h-screen min-h-[800px]">
			<div
				className={`${styles.paddingX} mx-auto absolute inset-0 top-[120px] 
        max-w-7xl flex flex-row items-start gap-5 bg-transparent`}
			>
				<div className="flex flex-col justify-center items-center mt-5">
					<div className="z-10 w-5 h-5 bg-light-green" />
					<div className="z-10 w-1 sm:h-80 h-40 light-green-gradient" />
				</div>
				<div className="flex flex-col justify-center items-left mt-5 max-w-2xl lg:max-w-3xl">
					<h1 className="z-10 text-gray font-bold text-[26px] sm:text-[38px] md:text-[50px] lg:text-[64px]">
						Hi, I'm{" "}
						<span className="text-dark-green font-black">
							Dylan Michalak
						</span>
					</h1>
					<p className="z-10 text-gray text-[16px] sm:text-[20px] md:text-[24px] drop-shadow-xl-white tracking-wider">
						I am a recent Computer Science graduate passionate about
						cybersecurity, web development, and software
						development.
					</p>
				</div>
			</div>
			<div className={"z-0 absolute bottom-0 h-full w-full flex"}>
				<HeroCanvas />
			</div>
			<div
				className={`z-1 absolute bottom-[10%] w-full flex flex-row 
        gap-5 justify-center`}
			>
				<Button
					link="https://github.com/ValorousKarma"
					icon={AiFillGithub}
				/>
				<Button
					link="https://www.linkedin.com/in/dylan-michalak-a1260a221/"
					icon={AiFillLinkedin}
				/>
			</div>
		</section>
	);
};

export default Hero;
