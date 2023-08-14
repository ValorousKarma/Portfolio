import {
  trojan,
  PortfolioSite,
  calPoly,
  penHigh,
} from './../Assets';

import { BiLogoJavascript } from 'react-icons/bi';
import {
  MdOutlineWeb,
  MdSecurity,
  MdOndemandVideo,
} from 'react-icons/md';
import {
  FaConnectdevelop,
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaGitAlt,
  FaJava,
  FaWindows,
  FaLinux,
} from 'react-icons/fa';
import {
  BiLogoTailwindCss,
  BiLogoCPlusPlus,
} from 'react-icons/bi';

const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'education',
    title: 'Education',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const interests = [
  {
    title: 'Frontend Development',
    icon: MdOutlineWeb,
  },
  {
    title: 'Backend Development',
    icon: FaConnectdevelop,
  },
  {
    title: 'Cyber Security',
    icon: MdSecurity,
  },
  {
    title: 'Content Creation',
    icon: MdOndemandVideo,
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: FaHtml5,
  },
  {
    name: 'CSS 3',
    icon: FaCss3Alt,
  },
  {
    name: 'JavaScript',
    icon: BiLogoJavascript,
  },
  {
    name: 'React JS',
    icon: FaReact,
  },
  {
    name: 'Tailwind CSS',
    icon: BiLogoTailwindCss,
  },
  {
    name: 'git',
    icon: FaGitAlt,
  },
  {
    name: 'C',
    icon: BiLogoCPlusPlus,
  },
  {
    name: 'Java',
    icon: FaJava,
  },
  {
    name: 'Windows',
    icon: FaWindows,
  },
  {
    name: 'Linux',
    icon: FaLinux,
  },
];

const work = [
  {
    name: 'Windows RAT',
    description: `Windows remote access trojan executable and linux server. Acts as remote shell and
      is able to spawn keylogger. Created for Cal Poly SWIFT malware demonstration and personal
      security workshop. Written in C.`,
    icons: [BiLogoCPlusPlus, FaWindows, FaLinux],
    image: trojan,
    source_code_link:
      'https://github.com/ValorousKarma/RubberRoom',
    id: 1,
  },
  {
    name: 'Portfolio Site',
    description: `A personal programming portfolio, in the format of a website.
    Made in JavaScript using the React.js library and Tailwind CSS framework. Demonstrates
    competence with markup, styling, user-interfaces, and responsive design.`,
    icons: [
      FaReact,
      BiLogoJavascript,
      BiLogoTailwindCss,
      FaCss3Alt,
    ],
    image: PortfolioSite,
    source_code_link:
      'https://github.com/ValorousKarma/Portfolio',
    id: 2,
  },
];

const education = [
  {
    school:
      'California State Polytechnic University, Pomona',
    icon: {
      alt: 'Cal Poly Pomona Icon',
      source: calPoly,
      style: 'h-[85%] w-[55%] mx-auto my-[5%]',
    },
    degree: 'BS Computer Science',
    grad_date: 'Spring 2021 - Fall 2025',
    activities: [
      {
        name: 'SWIFT',
        details: [
          'SWIntern program 2023-2024 - creating projects & incorporating them in club activities',
          '2023 CPTC Bootcamp Participant - penetration testing Windows & Linux',
          '2023 CCDC Bootcamp Participant - cyber defense on Windows & Linux',
        ],
      },
      {
        name: 'Sigma Phi Epsilon',
        details: [
          '2023 Ruck Leadership Institute - organization leadership skills',
        ],
      },
    ],
    _id: 1,
  },
  {
    school: 'Palos Verdes Peninsula High School',
    icon: {
      alt: 'Palos Verdes Peninsula High School icon',
      source: penHigh,
      style: 'h-[85%] w-[85%] mx-auto my-[5%]',
    },
    degree: 'High School',
    grad_date: 'Spring 2017 - Fall 2021',
    activities: [],
    _id: 2,
  },
];

export {
  navLinks,
  interests,
  technologies,
  work,
  education,
};