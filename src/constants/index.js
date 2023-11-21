import { beautyClinic, bakeryShopBlue, marioWorld } from "../assets/images";
import icons from "../assets/icons/icons.svg";

export const navLinks = [
  { href: "#About", label: "About Me" },
  { href: "#Skills", label: "Skills" },
  { href: "#Home", label: "YTSIPAK" },
  { href: "#Projects", label: "Projects" },
  { href: "#Contact", label: "Contact" },
];

export const skillsArray = [
  {
    title: "Hard Skills",
    skillsInfo: [
      {
        language: "html",
        skill: "hard",
        iconUrl: icons + "#icon-html",
      },
      {
        language: "css",
        skill: "hard",
        iconUrl: icons + "#icon-css",
      },
      {
        language: "sass",
        skill: "hard",
        iconUrl: icons + "#icon-sass",
      },
      {
        language: "tailwind",
        skill: "hard",
        iconUrl: icons + "#icon-tailwind",
      },
      {
        language: "ReactJS",
        skill: "hard",
        iconUrl: icons + "#icon-react",
      },
      {
        language: "JavaScript",
        skill: "hard",
        iconUrl: icons + "#icon-js",
      },
    ],
  },
  {
    title: "SoftSkills",
    skillsInfo: [
      {
        language: "Leadership",
        skill: "soft",
        iconUrl: icons + "#icon-leadership",
      },
      {
        language: "Communication",
        skill: "soft",
        iconUrl: icons + "#icon-communication",
      },
      {
        language: "Teamwork",
        skill: "soft",
        iconUrl: icons + "#icon-handshake",
      },
    ],
  },
];

export const projectsInfo = [
  {
    imgUrl: beautyClinic,
    alt: "Beauty Clinic Image",
    title: "Beauty Zone",
    description: "Responsive Web Design for a Cosmetology Clinic",
    github: "https://github.com/ytsipak/beauty_zone",
    liveUrl: "https://ytsipak.github.io/beauty_zone/",
    langIcons: [
      { url: icons + "#icon-html", lang: "html" },
      { url: icons + "#icon-css", lang: "css" },
      { url: icons + "#icon-sass", lang: "sass" },
      { url: icons + "#icon-js", lang: "js" },
    ],
  },
  {
    imgUrl: bakeryShopBlue,
    alt: "Bakery Shop Image",
    title: "Bakery Shop",
    description: "Responsive Web Design for a Bakery Shop",
    github: "https://github.com/ytsipak/shop_bakery",
    liveUrl: "https://ytsipak.github.io/shop_bakery/",
    langIcons: [
      { url: icons + "#icon-html", lang: "html" },
      { url: icons + "#icon-css", lang: "css" },
      { url: icons + "#icon-sass", lang: "sass" },
      { url: icons + "#icon-js", lang: "js" },
    ],
  },
  {
    imgUrl: marioWorld,
    alt: "Mario World Image",
    title: "Portfolio Website",
    description: "Responsive Web Design for a Portfolio Website",
    github: "https://github.com/ytsipak/portfolio_website",
    liveUrl: "https://ytsipak.vercel.app",
    langIcons: [
      { url: icons + "#icon-react", lang: "html" },
      { url: icons + "#icon-vite", lang: "vite" },
      { url: icons + "#icon-js", lang: "js" },
      { url: icons + "#icon-tailwind", lang: "tailwind" },
    ],
  },
];

export const showcaseDetails = [
  {
    title: "Code",
    githubIcon: {
      url: icons + "#icon-github-simple",
    },
  },
  {
    title: "Live Demo",
    githubIcon: {
      url: icons + "#icon-share",
    },
  },
];

export const contactIcons = [
  {
    href: "mailto:ytsipak@gmail.com",
    fill: "primary-yellow",
    path: icons + "#icon-gmail",
  },
  {
    href: "https://github.com/ytsipak",
    fill: "primary-yellow",
    path: icons + "#icon-github",
  },
  {
    href: "https://linkedin.com/in/ytsipak",
    fill: "primary-yellow",
    path: icons + "#icon-linkedin",
  },
];
