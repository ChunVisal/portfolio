// devicon-config.js
// Devicon CDN: https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css

export const techIcons = {
  // Languages
  C: {
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg",
    class: "devicon-c-plain",
  },
  "C++": {
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg",
    class: "devicon-cplusplus-plain",
  },
  PHP: {
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg",
    class: "devicon-php-plain",
  },
  Laravel: {
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg",
    class: "devicon-laravel-plain",
  },
  Flutter: {
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg",
    class: "devicon-flutter-plain",
  },
  JavaScript: {
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
    class: "devicon-javascript-plain",
  },
  "Node.js": {
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
    class: "devicon-nodejs-plain",
  },
  Express: {
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg",
    class: "devicon-express-original",
  },
  Firebase: {
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-plain.svg",
    class: "devicon-firebase-plain",
  },
  SQL: {
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg",
    class: "devicon-azuresqldatabase-plain",
  },
  HTML5: {
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
    class: "devicon-html5-plain",
  },
  CSS3: {
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
    class: "devicon-css3-plain",
  },
  Tailwind: {
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
    class: "devicon-tailwindcss-plain",
  },
  Bootstrap: {
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg",
    class: "devicon-bootstrap-plain",
  },
  React: {
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
    class: "devicon-react-plain",
  },
  Vue: {
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg",
    class: "devicon-vuejs-plain",
  },

  // Tools & Platforms
  Git: {
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
    class: "devicon-git-plain",
  },
  GitHub: {
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
    class: "devicon-github-plain",
  },
  Cloudinary: {
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cloudinary/cloudinary-original.svg",
    class: "devicon-cloudinary-plain",
  },
  Stripe: {
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/stripe/stripe-original.svg",
    class: "devicon-stripe-plain",
  },
  VSCode: {
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg",
    class: "devicon-vscode-plain",
  },
  "Android Studio": {
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/androidstudio/androidstudio-original.svg",
    class: "devicon-androidstudio-plain",
  },
  Figma: {
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg",
    class: "devicon-figma-plain",
  },
  Postman: {
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg",
    class: "devicon-postman-plain",
  },
  Render: {
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/render/render-original.svg",
    class: "devicon-render-plain",
  },
  Railway: {
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/railway/railway-original.svg",
    class: "devicon-railway-plain",
  },
  Netlify: {
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/netlify/netlify-original.svg",
    class: "devicon-netlify-plain",
  },
  Neon: {
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/neon/neon-original.svg",
    class: "devicon-neon-plain",
  },
  "Google Cloud": {
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/googlecloud/googlecloud-original.svg",
    class: "devicon-googlecloud-plain",
  },
  "Google Analytics": {
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/google/google-original.svg",
    class: "devicon-google-plain",
  },
};

// Helper function to get icon data
export const getTechIcon = (techName) => {
  // Find matching key (case-insensitive)
  const key = Object.keys(techIcons).find(
    (k) => k.toLowerCase() === techName.toLowerCase(),
  );
  return key ? techIcons[key] : null;
};
