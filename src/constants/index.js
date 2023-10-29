import {
  trojan,
  vehicles,
  PortfolioSite,
  calPoly,
  penHigh,
} from './../Assets';

import { BiLogoJavascript } from 'react-icons/bi';
import { MdOutlineWeb, MdSecurity } from 'react-icons/md';
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
import { SiUnrealengine, SiC } from 'react-icons/si';
import { GiArtificialIntelligence } from 'react-icons/gi';

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
    title: 'Web Development',
    icon: MdOutlineWeb,
  },
  {
    title: 'Software Development',
    icon: FaConnectdevelop,
  },
  {
    title: 'Cyber Security',
    icon: MdSecurity,
  },
  {
    title: 'Artifical Intelligence',
    icon: GiArtificialIntelligence,
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
    name: 'Vehicle AI in Unreal Engine',
    description: `A basic reflexive agent that uses two sensors to detect its orientation
    relative to its desired path, and steers based on that. Created for my introductory
    Artificial Intelligence course. Made in Unreal Engine with C++.`,
    icons: [BiLogoCPlusPlus, SiUnrealengine],
    image: vehicles,
    source_code_link:
      'https://github.com/ValorousKarma/AITaxiDriver',
    id: 3,
  },
  {
    name: 'Windows RAT',
    description: `Windows remote access trojan executable and linux server. Acts as remote shell and
      is able to spawn keylogger. Created for Cal Poly SWIFT malware demonstration and personal
      security workshop. Written in C.`,
    icons: [SiC, FaWindows, FaLinux],
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
    grad_date: 'Fall 2021 - Spring 2025',
    activities: [
      {
        name: 'SWIFT',
        details: [
          'SWIntern program 2023-2024 - creating projects & incorporating them in club activities',
          'Proposed and led personal security workshop for club members',
          '2023-2024 Collegiate Cyber Defense Team',
        ],
      },
      {
        name: 'SigEp',
        details: [
          'Selected as one of 160 participants out of 530 applicants to attend the 2023 Ruck Leadership Institute',
          'Boosted alumni outreach - updated newsletter website and led effort to maintain it via. WordPress trainings',
          'Proposed and successfully passed organization bylaw changes after being unanimously elected to the Standards Board',
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
      style: 'h-[80%] w-[80%] mx-auto my-[5%]',
    },
    degree: 'High School',
    grad_date: 'Fall 2017 - Spring 2021',
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
