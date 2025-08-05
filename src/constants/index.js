import {
	proclone,
	alienJob,
	sleepObf,
	trojan,
	vehicles,
	PortfolioSite,
	calPoly,
	penHigh,
} from "./../Assets";

import { BiLogoJavascript } from "react-icons/bi";
import { DiRedis } from "react-icons/di";
import { MdOutlineWeb, MdSecurity } from "react-icons/md";
import {
	FaConnectdevelop,
	FaHtml5,
	FaCss3Alt,
	FaReact,
	FaGitAlt,
	FaJava,
	FaWindows,
	FaLinux,
	FaGitlab,
	FaGit,
} from "react-icons/fa";
import { FaGolang } from "react-icons/fa6";
import { BiLogoTailwindCss, BiLogoCPlusPlus } from "react-icons/bi";
import {
	SiUnrealengine,
	SiC,
	SiMicrosoftazure,
	SiGodotengine,
	SiTypescript,
	SiKubernetes,
	SiIstio,
} from "react-icons/si";
import { GiArtificialIntelligence } from "react-icons/gi";
import { IoLogoGameControllerB } from "react-icons/io";

const navLinks = [
	{
		id: "about",
		title: "About",
	},
	{
		id: "projects",
		title: "Projects",
	},
	{
		id: "education",
		title: "Education",
	},
	{
		id: "contact",
		title: "Contact",
	},
];

const interests = [
	{
		title: "Web Development",
		icon: MdOutlineWeb,
	},
	{
		title: "Software Development",
		icon: FaConnectdevelop,
	},
	{
		title: "Cyber Security",
		icon: MdSecurity,
	},
	{
		title: "Game Development",
		icon: IoLogoGameControllerB,
	},
];

const technologies = [
	{
		name: "HTML 5",
		icon: FaHtml5,
	},
	{
		name: "CSS 3",
		icon: FaCss3Alt,
	},
	{
		name: "JavaScript",
		icon: BiLogoJavascript,
	},
	{
		name: "React JS",
		icon: FaReact,
	},
	{
		name: "Tailwind CSS",
		icon: BiLogoTailwindCss,
	},
	{
		name: "git",
		icon: FaGitAlt,
	},
	{
		name: "C",
		icon: BiLogoCPlusPlus,
	},
	{
		name: "Java",
		icon: FaJava,
	},
	{
		name: "Windows",
		icon: FaWindows,
	},
	{
		name: "Linux",
		icon: FaLinux,
	},
];

const work = [
	{
		name: "Proclone",
		description: `An infrastructure automation tool to handle the deployment and management of Proxmox 
		virtual machine environments, their local virtual networking, and access permissions for users. Its 
		primary use case is the Cal Poly Pomona Student Data Center, where multiple clubs and teams use 
		it to reduce the time required to set up workshop and competition environments for participants.`,
		icons: [
			FaGolang,
			SiTypescript,
			SiKubernetes,
			FaReact,
			DiRedis,
			SiIstio,
		],
		image: proclone,
		source_code_link: "https://github.com/cpp-cyber/proclone",
		id: 6,
	},
	{
		name: "2D Shoot-em-up Game",
		description: `A shoot-em-up, 16-bit style game made using the Godot game engine. It was created by
    myself and a team of 7 friends over the span of a month as an introductory project to game development.
    Gitlab issues and merge requests were used for planning features and version control.`,
		icons: [SiGodotengine, FaGitlab, FaGit],
		image: alienJob,
		source_code_link: "https://ssmirk.itch.io/alienjob",
		id: 5,
	},
	{
		name: "Understanding Sleep Obfuscation",
		description: `During my time, Summer 2024, as a Binary Defense Threat Researcher Intern, I
    conducted in-depth research on the behavior of several open-source Windows malware sleep-obfuscation
    techniques and created query-based detections for those techniques.`,
		icons: [SiMicrosoftazure, FaWindows, MdSecurity],
		image: sleepObf,
		source_code_link:
			"https://www.binarydefense.com/resources/blog/understanding-sleep-obfuscation/",
		id: 4,
	},
	{
		name: "Vehicle AI in Unreal Engine",
		description: `A basic reflexive agent that uses two sensors to detect its orientation
    relative to its desired path, and steers based on that. Created for my introductory
    Artificial Intelligence course. Made in Unreal Engine with C++.`,
		icons: [BiLogoCPlusPlus, SiUnrealengine],
		image: vehicles,
		source_code_link: "https://github.com/ValorousKarma/AITaxiDriver",
		id: 3,
	},
	{
		name: "Windows RAT",
		description: `Windows remote access trojan executable and linux server. Acts as remote shell and
      is able to spawn keylogger. Created for Cal Poly SWIFT malware demonstration and personal
      security workshop. Written in C.`,
		icons: [SiC, FaWindows, FaLinux],
		image: trojan,
		source_code_link: "https://github.com/ValorousKarma/RubberRoom",
		id: 1,
	},
	{
		name: "Portfolio Site",
		description: `A personal programming portfolio, in the format of a website.
    Made in JavaScript using the React.js library and Tailwind CSS framework. Demonstrates
    competence with markup, styling, user-interfaces, and responsive design.`,
		icons: [FaReact, BiLogoJavascript, BiLogoTailwindCss, FaCss3Alt],
		image: PortfolioSite,
		source_code_link: "https://github.com/ValorousKarma/Portfolio",
		id: 2,
	},
];

const education = [
	{
		school: "California State Polytechnic University, Pomona",
		icon: {
			alt: "Cal Poly Pomona Icon",
			source: calPoly,
			style: "h-[85%] w-[55%] mx-auto my-[5%]",
		},
		degree: "BS Computer Science",
		grad_date: "Fall 2021 - Spring 2025",
		activities: [
			{
				name: "SWIFT",
				details: [
					"Co-Director of Competitions 2024-2025 - planned, developed, and ran IT & RvB-style competitions",
					"SWIntern program 2023-2024 - creating projects & incorporating them in club activities",
					"Proposed and led malware analysis workshop for club members",
				],
			},
			{
				name: "CCDC Team",
				details: [
					"Team Captain 2024-2025 - led 2024 summer bootcamp and mock CCDC-style tryouts and team practices",
					"Windows Team 2023-2024 - developed scripts to automate Windows security configurations, participated in mock competition practices",
					"2nd Place - National CCDC Finals 2024, 1st Place - WRCCDC Regional Finals 2024",
				],
			},
		],
		_id: 1,
	},
	{
		school: "Palos Verdes Peninsula High School",
		icon: {
			alt: "Palos Verdes Peninsula High School icon",
			source: penHigh,
			style: "h-[80%] w-[80%] mx-auto my-[5%]",
		},
		degree: "High School",
		grad_date: "Fall 2017 - Spring 2021",
		activities: [],
		_id: 2,
	},
];

export { navLinks, interests, technologies, work, education };
