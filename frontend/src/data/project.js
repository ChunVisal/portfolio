import apexmotor1 from "../assets/project/apexmotor1.png";
import apexmotor2 from "../assets/project/apexmotor2.png";
import apexmotor3 from "../assets/project/apexmotor3.png";
import apexmotorLogo from "../assets/project/apexmotorlogo.png";

import venubooking1 from "../assets/project/venubooking1.png";
import venubooking2 from "../assets/project/venubooking2.png";
import venubooking3 from "../assets/project/venubooking3.png";
import venubookingLogo from "../assets/project/venubookinglogo.png";

import visal from "../assets/project/visal.jpg";
import uniform from "../../public/hobbies/uniform.png";
import visallogo from "../assets/project/visallogo.png";
import visalcode from "../assets/project/visalcode.png";

export const projects = [
  {
    id: 1,
    title: "ApexMotor",
    thumbnail: apexmotor1,
    images: [apexmotor2, apexmotor3],
    logoBrand: apexmotorLogo,
    shortDescription:
      "Car marketplace where users can buy, sell, and explore vehicles with real-time updates.",
    longDescription:
      "ApexMotor is a modern car marketplace with secure Auth0 + Google login, full CRUD listings, real-time Firebase updates, Cloudinary image optimization, SEO, Google Analytics, and a custom domain. Connects buyers and sellers seamlessly.",
    tech: [
      "React",
      "Tailwind CSS",
      "Firebase Realtime DB",
      "Auth0 (Google Auth)",
      "Cloudinary",
      "JWT",
      "Google Analytics",
      "Custom Domain",
    ],
    features: [
      "Auth0 + Google authentication",
      "Full CRUD car listings",
      "Real-time database updates",
      "User-to-user contact system",
      "Cloudinary image optimization",
      "SEO optimized (Google Console)",
      "Google Analytics tracking",
      "Custom domain (apexmotor.shop)",
      "Responsive design",
      "Image lazy loading",
    ],
    github: "https://github.com/ChunVisal/apexmotor",
    demo: "https://apexmotor.shop",
    status: "Live",
    date: "2024",
    whatILearned: [
      "Auth0 & Google OAuth integration",
      "Firebase Realtime DB structure",
      "Cloudinary image CDN",
      "SEO best practices & Google Console",
      "Custom domain configuration",
      "User-to-user messaging flow",
      "Analytics implementation",
    ],
  },

  {
    id: 2,
    title: "VenuBooking (Event Platform)",
    thumbnail: venubooking1,
    images: [venubooking2, venubooking3],
    logoBrand: venubookingLogo,
    shortDescription:
      "Full-stack event booking platform with secure payments and real-time ticket generation.",
    longDescription:
      "VenuBooking lets users discover events, book tickets, and pay online. Event organizers can create and manage events. Built from scratch with React, Node.js, PostgreSQL, and Stripe.",
    tech: [
      "React (Vite)",
      "Node.js (Express)",
      "PostgreSQL (Neon)",
      "Tailwind CSS",
      "Stripe API",
      "Cloudinary",
      "Render / Netlify",
    ],
    features: [
      "Secure user auth (Email + Google 0Auth)",
      "Event CRUD for organizers",
      "Advanced search & pagination (Infinite scroll)",
      "Stripe payment integration",
      "Unique ticket code generation",
      "Real-time notification center",
      "Personalized wishlist",
      "Interactive event maps (Leaflet)",
      "Dark mode & fully responsive UI",
      "Role-based access control",
    ],
    github: "https://github.com/ChunVisal/venubooking",
    demo: "https://venubooking.netlify.app",
    status: "Live & Complete",
    date: "2025",
    whatILearned: [
      "Architecting and deploying a full-stack app from scratch.",
      "Integrating a third-party payment gateway (Stripe) securely.",
      "Managing complex database relationships (PostgreSQL).",
      "Implementing secure authentication and authorization (JWT).",
      "Creating a real-time notification system.",
      "Optimizing frontend performance with lazy loading and code splitting.",
      "Deploying frontend (Netlify), backend (Render), and database (Neon) independently.",
    ],
  },
  {
    id: 3,
    title: "Portfolio - Chun Visal",
    thumbnail: visal,
    images: [visal, visalcode],
    logoBrand: visallogo,
    shortDescription:
      "Personal portfolio website showcasing my skills, projects, and journey as a developer.",
    longDescription:
      "My personal portfolio built with Vue 3, GSAP animations, and Tailwind CSS. Features smooth page transitions, dynamic project routing, and a modern responsive layout. Optimized for SEO with meta tags and Google Console integration to improve discoverability. The site reflects my design philosophy: clean, fast, and user-friendly.",
    tech: ["Vue 3", "GSAP", "Tailwind CSS", "Vue Router", "SEO"],
    features: [
      "GSAP scroll animations",
      "Smooth page transitions",
      "Dynamic project routes",
      "Fully responsive",
      "SEO optimized",
      "Google Console verified",
      "Clean modern UI",
    ],
    github: "https://github.com/ChunVisal/portfolio",
    demo: "https://chunvisal.pro",
    status: "Live",
    date: "2025",
    whatILearned: [
      "GSAP animation timelines",
      "Vue 3 composition API",
      "SEO best practices",
      "Page transitions & routing",
      "Responsive design patterns",
    ],
  },
];
