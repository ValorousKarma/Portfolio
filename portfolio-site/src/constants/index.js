import { calPoly, trojan } from './../Assets';

import {
  MdOutlineWeb,
  MdSecurity,
  MdOndemandVideo,
  MdJavascript,
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
    title: 'Cyber-Security',
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
    icon: MdJavascript,
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

const experiences = [
  {
    title: 'Student Video Producer',
    company_name: 'MediaVision',
    icon: calPoly,
    date: 'February 2023 - Current',
    points: ['Point 1', 'Point 2', 'Point 3', 'Point 4'],
  },
];

const projects = [
  {
    name: 'Windows Remote Access Trojan',
    description: `Windows remote access trojan executable and linux server. Acts as remote shell and
      is able to spawn keylogger. Created for Cal Poly SWIFT malware demonstration and personal
      security workshop. Written in C. Keylogger demonstrates competency using Windows API,
      specifically hooks.`,
    tags: [
      {
        name: 'C',
        color: 'blue-text-gradient',
      },
      {
        name: 'Windows',
        color: 'green-text-gradient',
      },
      {
        name: 'Linux',
        color: 'pink-text-gradient',
      },
    ],
    image: trojan,
    source_code_link:
      'https://github.com/ValorousKarma/RubberRoom',
  },
];

export {
  navLinks,
  interests,
  technologies,
  experiences,
  projects,
};
