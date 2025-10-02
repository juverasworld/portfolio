import { Github, Twitter, Figma, Linkedin } from "lucide-react";

import LogoJavascript from "/public/images/logos/icon-javascript.svg";
import LogoTypescript from "/public/images/logos/icon-typescript.svg";
import LogoReact from "/public/images/logos/icon-react.svg";
import LogoNextjs from "/public/images/logos/icon-nextjs.svg";
import LogoNodejs from "/public/images/logos/icon-nodejs.svg";
import LogoExpress from "/public/images/logos/icon-express.svg";
import LogoExpressLight from "/public/images/logos/icon-express-light.svg";
import LogoNest from "/public/images/logos/icon-nest.svg";
import LogoSocket from "/public/images/logos/icon-socket.svg";
import LogoSocketLight from "/public/images/logos/icon-socket-light.svg";
import LogoPostgreSQL from "/public/images/logos/icon-postgresql.svg";
import LogoMongoDB from "/public/images/logos/icon-mongodb.svg";
import LogoSass from "/public/images/logos/icon-sass.svg";
import LogoTailwindcss from "/public/images/logos/icon-tailwindcss.svg";
import LogoFigma from "/public/images/logos/icon-figma.svg";
import LogoCypress from "/public/images/logos/icon-cypress.svg";
import LogoCypressLight from "/public/images/logos/icon-cypress-light.svg";
import LogoStorybook from "/public/images/logos/icon-storybook.svg";
import LogoGit from "/public/images/logos/icon-git.svg";

import LogoUpwork from "/public/images/stakecut.svg";
import Gloom from "/public/images/gllom.png";
import  Bluion from "/public/images/bullion.png";
import  Doc from "/public/images/document.png";
import  Assim from "/public/images/assim.png";
import  PK from "/public/images/pk.png";
import LogoUpworks from "/public/images/soul.png";
import LogoUpworkss from "/public/images/mfc.png";
import LogoGreenApex from "/public/images/daba.svg";
import LogoGreenApexLight from "/public/images/daba.svg";
import LogoDotnpixel from "/public/images/logos/cwito.svg";
import LogoDotnpixelLight from "/public/images/logos/cwito.svg";

import ProjectFiskil from "/public/images/daba-bg.png";
import ProjectFiskils from "/public/images/midcrib.png";
import ProjectWingie from "/public/images/stakecut-bg.png";
import ProjectWingiea from "/public/images/social.jpg";
import ProjectWingies from "/public/images/vemo.png";
import ProjectPepehousing from "/public/images/gscw.png";

import AvatarKrisztian from "/public/images/uche.jpg";
import AvatarKrisztians from "/public/images/amaka.jpg";
import AvatarEugen from "/public/images/1725966260394.jpg";
import AvatarDummy from "/public/images/max.jpg";

import {
  ExperienceDetails,
  ProjectDetails,
  TechDetails,
  TestimonialDetails,
} from "@/lib/types";

export const EXTERNAL_LINKS = {
  GITHUB: "https://github.com/juverasworld",
  GITHUB_REPO: "https://github.com/juverasworld",
  TWITTER: "https://x.com/vera_ifebuche",
  FIGMA: "https://www.linkedin.com/in/obasivera",
  LINKEDIN: "https://www.linkedin.com/in/obasivera",
  FIGMA_FILE:
    "https://www.figma.com/community/file/1262992249991763120/Personal-Portfolio-Website-Template-%7C-Mobile-%26-Desktop",
};

export const NAV_LINKS = [
  {
    label: "About",
    href: "#about",
  },
  {
    label: "Work",
    href: "#work",
  },
  {
    label: "Testimonials",
    href: "#testimonials",
  },
  {
    label: "Contact",
    href: "#contact",
  },
];

export const SOCIAL_LINKS = [
  {
    icon: Github,
    url: "https://github.com/juverasworld",
  },
  {
    icon: Twitter,
    url: "https://x.com/vera_ifebuche",
  },
  {
    icon: Linkedin,
    url: "https://www.linkedin.com/in/obasivera",
  },
];

export const TECHNOLOGIES: TechDetails[] = [
  {
    label: "Javascript",
    logo: LogoJavascript,
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    label: "Typescript",
    logo: LogoTypescript,
    url: "https://www.typescriptlang.org/",
  },
  {
    label: "React",
    logo: LogoReact,
    url: "https://react.dev/",
  },
  {
    label: "Next.js",
    logo: LogoNextjs,
    url: "https://nextjs.org/",
  },
  {
    label: "Node.js",
    logo: LogoNodejs,
    url: "https://nodejs.org/en",
  },
  {
    label: "Sass/Scss",
    logo: LogoSass,
    url: "https://sass-lang.com/",
  },
  {
    label: "Tailwindcss",
    logo: LogoTailwindcss,
    url: "https://tailwindcss.com/",
  },
  {
    label: "Storybook",
    logo: LogoStorybook,
    url: "https://storybook.js.org/",
  },
  {
    label: "Git",
    logo: LogoGit,
    url: "https://git-scm.com/",
  },
];

export const EXPERIENCES: ExperienceDetails[] = [
  {
    logo: LogoUpworkss,
    logoAlt: "Mfc logo",
    position: "Frontend Developer",
    startDate: new Date(2025, 7),
    currentlyWorkHere: false,
    summary: [
      
      "Used Animation,Gsap, framer motion, Tailwind CSS, TypeScript, and Next.js to implement frontend logic to ensure a seamless activity .",
      "Improved site performance, UX, and responsiveness in collaboration with backend teams.",
      "Developed reusable components and libraries to streamline development.",
      "Collaborated via GitHub, Figma, and Slack in remote agile teams.",
    ],
  },
  
  {
    logo: LogoUpwork,
    logoAlt: "Stakecut logo",
    position: "Frontend Developer",
    startDate: new Date(2021, 10),
    currentlyWorkHere: true,
    summary: [
      "Built and maintained user interfaces to support affiliate and vendor activity.",
      "Used React, Tailwind CSS, TypeScript, and Next.js to implement frontend logic.",
      "Improved site performance, UX, and responsiveness in collaboration with backend teams.",
      "Developed reusable components and libraries to streamline development.",
      "Collaborated via GitHub, Figma, and Slack in remote agile teams.",
    ],
  },
  {
    logo: LogoGreenApex,
    darkModeLogo: LogoGreenApexLight,
    logoAlt: "Digital Abundance",
    position: "Frontend Developer",
    startDate: new Date(2017, 6),
    endDate: new Date(2021, 9),
    summary: [
      "Led frontend team on large-scale projects, overseeing architecture and implementation.",
      "Managed and maintained the company website and web apps for Daba School.",
      "Built out multiple landing pages to support campaigns and product launches.",
      "Worked closely with stakeholders to translate business needs into technical solutions.",
      "Implemented reusable component libraries and design systems using React and Storybook.",
    ],
  },
  {
    logo: LogoDotnpixel,
    darkModeLogo: LogoDotnpixelLight,
    logoAlt: "Cwito",
    position: "Creative Designer",
    startDate: new Date(2015, 11),
    endDate: new Date(2017, 4),
    summary: [
      "Designed visually engaging landing pages for various clients.",
      "Worked as a full stack developer using React for frontend and Laravel for backend.",
      "Collaborated with stakeholders to deliver clean UI/UX experiences.",
    ],
  },
];

export const PROJECTS: ProjectDetails[] = [
  {
    name: "Vera Photography ",
    description:
      "A Phography website for showcasing photography services and portfolio",
    url: "https://dark-rosy.vercel.app/",
    previewImage: Gloom,
    technologies: ["Html", "Javascript", "TailwindCSS", "Redux"],
  },
  {
    name: "Assim Teacher ",
    description:
      "A Platform for teaching student, onboarding teachers and managing classes",
    url: "https://assim.app/",
    previewImage: Assim,
    technologies: ["Html", "Javascript", "TailwindCSS", "Redux"],
  },
  {
    name: "Document to Speech  ",
    description:
      "A document to speech website for converting text documents to audio files",
    url: "https://document-speech-rlwg.vercel.app/",
    previewImage: Doc,
    technologies: ["Nextjs", "Javascript", "TailwindCSS", "Redux"],
  },
  {
    name: "My Family Companion ",
    description:
      "A book launch website for buying books with paystack gateway integrated",
    url: "https://mfc-one.vercel.app/",
    previewImage: LogoUpworkss,
    technologies: ["Nextjs", "Javascript", "TailwindCSS", "Redux"],
  },
  {
    name: "Vera Forex ",
    description:
      "A Foreign exchange website for buying and selling of foreign currencies",
    url: "https://bulliona.vercel.app/",
    previewImage: Bluion,
    technologies: ["html", "Javascript", "TailwindCSS", "Css"],
  },
  // {
  //   name: "My Family Companion ",
  //   description:
  //     "A book launch website for buying books with paystack gateway integrated",
  //   url: "https://mfc-one.vercel.app/",
  //   previewImage: LogoUpworkss,
  //   technologies: ["Nextjs", "Javascript", "TailwindCSS", "Redux"],
  // },
  {
    name: "PK Ventures ",
    description:
      "A House of real estate website for buying and selling of properties",
    url: "https://mfc-one.vercel.app/",
    previewImage: PK,
    technologies: ["Nextjs", "Javascript", "TailwindCSS", "Redux"],
  },

  {
    name: "Social Media Banner Creator",
    description:
      "A platform for creating and customizing social media banners. I designed the user interface and implemented responsive layouts to ensure a seamless user experience across devices.",
    url: "https://social-banner-personalizer.vercel.app",
    previewImage: ProjectWingiea,
    technologies: ["Nextjs", "Javascript", "TailwindCSS", "Redux"],
  },
  {
    name: "Soul Sync",
    description:
      "A clean, intuitive digital platform for booking and getting developers to work on your project.",
    url: "https://midcrib.vercel.app/",
    previewImage: ProjectFiskils,
    technologies: ["Nextjs", "Javascript", "TailwindCSS", "Redux"],
  },
  {
    name: "Soul Sync",
    description:
      "A clean, intuitive digital space where you can track emotions, reflect intentionally, and sync with others. Not just another journaling app—SoulSync helps you connect your thoughts, moods, and purpose.",
    url: "https://soul-sync-xjqs.vercel.app/",
    previewImage: LogoUpworks,
    technologies: ["Nextjs", "Javascript", "TailwindCSS", "Redux"],
  },
  {
    name: "Stakecut",
    description:
      "A social fintech platform that empowers creators, vendors, and affiliates to earn commissions by promoting digital products. I worked on building dashboards, landing pages, and user flows for both affiliates and vendors.",
    url: "https://stakecut.com",
    previewImage: ProjectWingie,
    technologies: ["Nextjs", "Javascript", "TailwindCSS", "Redux"],
  },
  {
    name: "Vemo Writst Watch",
    description:
      "A platform for showcasing wrist watches, allowing users to explore various brands and models. I designed to the User interface, ensuring a responsive and user-friendly experience.",
    url: "https://juverasworld.github.io/wrist-watch/",
    previewImage: ProjectWingies,
    technologies: ["HTML", "CSS", "Javascript", "framer"],
  },
  {
    name: "Digital Abundance",
    description:
      "The parent company behind Daba School, a platform focused on financial education and wealth-building through digital courses. I contributed to landing pages, course discovery, and performance optimization.",
    url: "https://daba.school/",
    previewImage: ProjectFiskil,
    technologies: [
      "React",
      "Next.js",
      "Typescript",
      "Tailwindcss",
      "Material UI",
      "Redux Toolkit",
      "React Query",
    ],
  },
  {
    name: "Global School Of Crypto and Web3",
    description:
      "An e-learning platform offering structured courses on blockchain, cryptocurrency, and Web3 technologies. I helped build the responsive frontend, course pages, and onboarding experience.",
    url: "https://main.d3ifc9xz0hl5j5.amplifyapp.com/",
    previewImage: ProjectPepehousing,
    technologies: [
      "React",
      "Next.js",
      "Typescript",
      "Tailwindcss",
      "Redux Toolkit",
      "React Query",
    ],
  },
];


export const TESTIMONIALS: TestimonialDetails[] = [
  {
    personName: "Juliet Ibenegbu",
    personAvatar: AvatarKrisztians,
    title: "Co-President African Women in GIS ",
    testimonial:
      "I had the pleasure of working with Vera Obasi, and she is truly  outstanding. Vera consistently delivers high-quality code and collaborates effectively with the team. Her positive attitude and dedication make her a valuable asset.",
  },
  {
    personName: "Obiefuna Marcel",
    personAvatar: AvatarKrisztian,
    title: "Software Engineer ",
    testimonial:
      "I have work with vera on several projects and her drive is amazing. I highly recommend Vera for any frontend engineering role.",
  },
  {
    personName: "Arekhandia Aigbomian",
    personAvatar: AvatarEugen,
    title: "Full Stack Developer",
    testimonial:
      "She’s an ardent and enthusiastic frontend developer with a strong passion to learn new things. I love the fact that she’s open minded and has a very good professional sense of humor. Working with her, she’s also a good team player",
  },
  {
    personName: "Lotanna Maxwell Nweke",
    personAvatar: AvatarDummy,
    title: "Freelancer",
    testimonial:
      "A good team player and an excellent frontend developer. I highly recommend Vera for any frontend engineering role..",
  },
];
