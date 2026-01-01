import apexmotor1 from "../assets/project/apexmotor1.png";
import apexmotor2 from "../assets/project/apexmotor2.png";
import apexmotor3 from "../assets/project/apexmotor3.png";
import apexmotorLogo from "../assets/project/apexmotorlogo.png";

import venubooking1 from "../assets/project/venubooking1.png";
import venubooking2 from "../assets/project/venubooking2.png";
import venubookingLogo from "../assets/project/venubookinglogo.png";

import visal from "../assets/project/visal.jpg";
import visal1 from "../assets/project/visal1.jpg";
import visallogo from "../assets/project/visallogo.png";
import visalcode from "../assets/project/visalcode.png";

export const projects = [
  {
    id: 1,
    title: "ApexMotor",
    thumbnail: apexmotor1,
    images: [apexmotor2, apexmotor3, apexmotor3],
    shortDescription: "A website where users can buy and sell cars.",
    logoBrand: apexmotorLogo,
    longDescription:
      "ApexMotor is a modern platform for car enthusiasts where users can buy, sell, and explore vehicles. Built with React and Firebase, it provides realtime updates and smooth UI with Tailwind.",
    tech: ["React", "Tailwind", "Firebase"],
    features: [
      "User authentication",
      "Car listing system",
      "Realtime database updates",
      "Responsive UI",
    ],
    github: "https://github.com/ChunVisal/apexmotor",
    demo: "https://apexmotor.shop",
    status: "Completed",
    date: "2024",
    whatILearned: [
      "State management with React",
      "Using RESTfull Firebase Realtime DB",
      "Responsive design with Tailwind",
    ],
  },

  {
    id: 2,
    title: "VenuBooking",
    thumbnail: venubooking1,
    images: [venubooking2, venubooking2],
    shortDescription: "A platform to book event tickets quickly and easily.",
    logoBrand: venubookingLogo,
    longDescription:
      "VenuBooking was built to make event ticket booking fast and seamless. Integrates with Node.js backend, uses Tailwind for UI, and React for interactive components.",
    tech: ["React", "Node", "Tailwind", "Mysql"],
    features: [
      "Ticket booking system",
      "Admin dashboard",
      "QR code ticket verification",
    ],
    // github: "https://github.com/yourgithub/portfolio",
    // demo: "https://yourdomain.com",
    status: "In Progress",
    date: "2025",
    whatILearned: [
      "Building scalable backend with Node",
      "API integration",
      "UI flow design",
    ],
  },
  {
    id: 3,
    title: "Portfolio - Chun Visal",
    thumbnail: visal,
    images: [visal, visalcode],
    logoBrand: visallogo,
    shortDescription: "A personal website showcasing my skills and projects.",
    longDescription:
      "This is my full personal portfolio built with Vue, GSAP animations, and Tailwind CSS. It includes my projects, skills, experience, and a modern interactive UI with smooth transitions and responsive layout.",

    tech: ["Vue", "GSAP", "Tailwind"],

    features: [
      "Fully responsive design",
      "Dynamic project routing",
      "Smooth GSAP page animations",
      "Clean and modern UI components",
    ],

    github: "https://github.com/ChunVisal/portfolio",
    demo: "https://chunvisal.pro",

    status: "Completed",
    date: "2025",

    whatILearned: [
      "GSAP animation timeline",
      "Vue component structure",
      "Responsive layout fundamentals",
      "Reusable UI components",
      "Page transitions & routing",
    ],
  },
];
