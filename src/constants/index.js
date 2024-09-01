import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "BlueTech Solutions",
    icon: starbucks, // Replace with the icon of BlueTech Solutions if available
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Developed and maintained web applications using React.js and other related technologies.",
      "Collaborated with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implemented responsive design and ensured cross-browser compatibility.",
      "Participated in code reviews and provided constructive feedback to other developers.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Innovative Apps Inc.",
    icon: tesla, // Replace with the icon of Innovative Apps Inc. if available
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developed and maintained mobile applications using React Native.",
      "Worked closely with designers and product managers to create user-friendly mobile apps.",
      "Ensured high performance on both iOS and Android platforms.",
      "Provided guidance and mentorship to junior developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Global E-Commerce",
    icon: shopify, // Replace with the icon of Global E-Commerce if available
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Built and maintained e-commerce platforms with React.js.",
      "Implemented innovative solutions for online shopping experiences.",
      "Collaborated with the design team to ensure brand consistency.",
      "Optimized web applications for speed and scalability.",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "NextGen Tech",
    icon: meta, // Replace with the icon of NextGen Tech if available
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining full-stack applications using React.js, Node.js, and MongoDB.",
      "Leading projects and mentoring junior developers.",
      "Ensuring high performance and responsiveness of applications.",
      "Participating in architecture discussions and implementing best practices.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Bemnet's skills in web development transformed our online presence. The new site is both functional and visually stunning.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "Working with Bemnet was a pleasure. Their dedication to the project was evident in the final product.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "Thanks to Bemnet's optimization, our website traffic increased significantly. Their expertise is unmatched.",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "3D Portfolio",
    description:
      "A 3D portfolio website showcasing my work in an interactive and visually appealing way.",
    tags: [
      {
        name: "threejs",
        color: "blue-text-gradient",
      },
      {
        name: "react",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/bemnet884/3D-Portfolio/",
    live_demo_link: "https://bemnet884.github.io/3D-Portfolio/",
  },
  {
    name: "Human Hair",
    description:
      "A simulation of human hair using physics-based rendering, providing realistic visual effects.",
    tags: [
      {
        name: "threejs",
        color: "blue-text-gradient",
      },
      {
        name: "react",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/bemnet884/Human-Hair",
    live_demo_link: "https://bemnet884.github.io/Human-Hair/",
  },
  {
    name: "3D Shop",
    description:
      "An e-commerce platform featuring 3D models of products, enhancing the online shopping experience.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/bemnet884/3D-Shop",
    live_demo_link: "https://bemnet884.github.io/Human-Hair/",
  },
];


export { services, technologies, experiences, testimonials, projects };
