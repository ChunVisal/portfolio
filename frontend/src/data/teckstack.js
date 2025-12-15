// Map technology names to Font Awesome icons, colors, and detailed, experience-based information
const techMap = {
  // Frontend
  HTML: {
    icon: ["fab", "html5"],
    color: "#E34F26",
    info: "Web pages are structured using semantic elements such as header, nav, section, aside, and footer. Clean parent–child layouts are planned with Grid to maintain strong visual hierarchy and structure.",
  },

  CSS: {
    icon: ["fab", "css3"],
    color: "#1572B6",
    info: "Flexible layouts are built with nested Flexbox systems, ensuring consistent UI behavior across different screen sizes, zoom levels, and devices.",
  },

  JavaScript: {
    icon: ["fab", "js"],
    color: "#F7DF1E",
    info: "APIs are fetched from local and external sources, JSON responses are handled with async/await, errors are managed properly, and UI interactions are controlled through DOM events and localStorage.",
  },

  Vue: {
    icon: ["fab", "vuejs"],
    color: "#4FC08D",
    info: "Vue Router, props, event handling, and API integration are used to build reactive, component-based applications with structured data flow.",
  },

  React: {
    icon: ["fab", "react"],
    color: "#61DAFB",
    info: "Applications are developed using React Router, hooks such as useState and useEffect, component communication, form handling, and API-driven data rendering.",
  },

  Tailwind: {
    icon: ["fas", "wind"],
    color: "#06B6D4",
    info: "Responsive interfaces are created with Tailwind utilities, custom themes, breakpoints (sm–xl), spacing systems, and layout utilities for clean, scalable UI design.",
  },

  // Backend
  "Node.js": {
    icon: ["fab", "node-js"],
    color: "#339933",
    info: "Backend logic is implemented using Express, focusing on structured routing, request handling, and smooth communication between server and client.",
  },

  Express: {
    icon: ["fas", "server"],
    color: "#CCCCCC",
    info: "RESTful routes, middleware, and CRUD operations are designed to support scalable and functional APIs.",
  },

  SQL: {
    icon: ["fas", "database"],
    color: "#00758F",
    info: "Relational databases are designed with structured tables, defined relationships, and full CRUD operations for reliable data management.",
  },

  Firebase: {
    icon: ["fas", "fire"],
    color: "#FFCA28",
    info: "Firebase Authentication and Firestore are configured to handle user access control, real-time data storage, and secure CRUD operations.",
  },

  // Tools
  Postman: {
    icon: ["fas", "bolt"],
    color: "#FF6C37",
    info: "APIs are tested by sending requests, inspecting responses, validating payloads, and verifying backend logic during development.",
  },

  "VS Code": {
    icon: ["fas", "code"],
    color: "#007ACC",
    info: "Development is optimized using extensions, shortcuts, debugging tools, and organized workspaces for efficient coding workflows.",
  },

  Figma: {
    icon: ["fab", "figma"],
    color: "#F24E1E",
    info: "Design concepts and wireframes are translated into functional user interfaces while maintaining visual accuracy and layout consistency.",
  },

  Git: {
    icon: ["fab", "git"],
    color: "#F05032",
    info: "Version control is handled through commits, branching, merging, and maintaining a clean project history.",
  },

  GitHub: {
    icon: ["fab", "github"],
    color: "#FFFFFF",
    info: "Repositories are managed using pull requests, structured commits, and deployment-ready code practices.",
  },

  // Languages
  C: {
    icon: ["fas", "code"],
    color: "#A8B9C8",
    info: "Low-level programming concepts such as memory handling, data structures, and algorithmic logic are implemented using C.",
  },

  "C++": {
    icon: ["fas", "code"],
    color: "#00599C",
    info: "Object-oriented programming principles, classes, and algorithmic structures are applied to build efficient C++ programs.",
  },

  // Learning / Future
  AWS: {
    icon: ["fab", "aws"],
    color: "#FF9900",
    info: "Cloud services and deployment concepts are currently being explored to expand backend and infrastructure knowledge.",
  },
};

export default techMap
