<template>
  <div class="scroller mt-10">
    <div class="scroll-clip">
      <div class="tag-list">
        <div v-for="n in 2" :key="n" class="tech-group">
          <div v-for="tech in allTech" :key="`${tech}-${n}`" class="tech-card-container" @mouseenter="activeTech = tech"
            @mouseleave="activeTech = null" @mousemove="updateTooltip">
            <span class="tag">
              <div class="tag-content">
                <!-- Use img for image URLs, i for Devicon classes -->
                <img v-if="getTechIcon(tech).isImage" :src="getTechIcon(tech).src" class="tag-icon-img" />
                <i v-else :class="getTechIcon(tech).class" class="tag-icon"></i>
                <span class="tag-name">{{ tech }}</span>
              </div>
            </span>
          </div>
        </div>

        <Teleport to="body">
          <div v-if="activeTech" class="tech-tooltip" :style="tooltipStyle">
            {{ getTech(activeTech).info }}
          </div>
        </Teleport>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import techMap from "../data/teckstack";

const activeTech = ref(null);
const tooltipStyle = ref({});

const allTech = ref([

  "HTML",
  "CSS",
  "JavaScript",
  "Vue",
  "React",
  "ChatGPT",
  "Tailwind",
  "Node.js",
  "Express",
  "SQL",
  "Firebase",
  "Postman",
  "VS Code",
  "Deepseek",
  "Figma",
  "Git",
  "Netlify",
  "Render",
  "Google",
  "Neon",
  "GitHub",
  "C",
  "C++",
  "Gemini",
]);

const updateTooltip = (e) => {
  tooltipStyle.value = {
    position: "fixed",
    top: e.clientY + 12 + "px",
    left: e.clientX + 12 + "px",
    zIndex: 999999,
  };
};

// Get icon info (either Devicon class or image URL)
const getTechIcon = (tech) => {
  const imageMap = {
    "Express": { isImage: true, src: "https://cdn.freebiesupply.com/logos/large/2x/logo-javascript-logo-black-and-white.png" },
    "Figma": { isImage: true, src: "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg" },
    "Render": { isImage: true, src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnhOO5AFkxO-ekvEEueO--qU8hU3UDBm78ng&s" },
    "GitHub": { isImage: true, src: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/github-white-icon.png" },
    "Neon": { isImage: true, src: "https://s.yimg.com/os/en/globenewswire.com/ea84af8d46d14179febb234fa36d87ec" },
    "Google": { isImage: true, src: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Google_Favicon_2025.svg/960px-Google_Favicon_2025.svg.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=thumbnail" },
    "C": { isImage: true, src: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/c-program-icon.png" },
    "C++": { isImage: true, src: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/1920px-ISO_C%2B%2B_Logo.svg.png" },
    "ChatGPT": { isImage: true, src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJI7dKa8PhJeeneF2OQwehzLo9fGQHBJ0LxA&s" },
    "Deepseek": { isImage: true, src: "https://media.licdn.com/dms/image/sync/v2/D5627AQGEfKIDceLAfg/articleshare-shrink_800/articleshare-shrink_800/0/1738626850244?e=2147483647&v=beta&t=j5LlLrZ8aaBxmfZKBQrduak_VkQhgBAdz8KMGPK7W6A" },
    "Gemini": { isImage: true, src: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/google-gemini-icon.png" },
  };

  const deviconMap = {
    "HTML": "devicon-html5-plain colored",
    "CSS": "devicon-css3-plain colored",
    "JavaScript": "devicon-javascript-plain colored",
    "Vue": "devicon-vuejs-plain colored",
    "React": "devicon-react-original colored",
    "Tailwind": "devicon-tailwindcss-plain colored",
    "Node.js": "devicon-nodejs-plain colored",
    "SQL": "devicon-mysql-plain colored",
    "Firebase": "devicon-firebase-plain colored",
    "Postman": "devicon-postman-plain colored",
    "VS Code": "devicon-vscode-plain colored",
    "Git": "devicon-git-plain colored",
    "Netlify": "devicon-netlify-plain colored",
  };

  if (imageMap[tech]) {
    return imageMap[tech];
  }

  return { isImage: false, class: deviconMap[tech] || "devicon-code-plain colored" };
};

const getTech = (name) => {
  return (
    techMap[name] || {
      icon: ["fas", "code"],
      color: "#aaa",
      info: "No information available.",
    }
  );
};
</script>

<style>
.tech-tooltip {
  background: rgba(10, 10, 30, 0.95);
  color: white;
  padding: 10px;
  width: 220px;
  border-radius: 10px;
  font-size: 0.9rem;
  line-height: 1.4;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
  pointer-events: none;
}

.scroller {
  position: relative;
  max-width: 1300px;
}

.scroll-clip {
  overflow: hidden;
  mask-image: linear-gradient(to right,
      transparent,
      black 10%,
      black 90%,
      transparent);
}

.tag-list {
  display: flex;
  gap: 1rem;
  width: max-content;
  animation: scroll 40s linear infinite;
}

.scroller:hover .tag-list {
  animation-play-state: paused;
}

.tech-group {
  display: flex;
  gap: 1rem;
  flex-shrink: 0;
}

@keyframes scroll {
  to {
    transform: translateX(calc(-70% - 0.5rem));
  }
}

/* ================= TAG CARD ================= */

.tech-card-container {
  position: relative;
  width: 70px;
  height: 70px;
  flex-shrink: 0;
}

.tech-card-container:hover {
  z-index: 1000;
}

.tag {
  width: 100%;
  height: 100%;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.059);

  display: flex;
  align-items: center;
  justify-content: center;

  transition: background-color 0.2s ease, transform 0.3s ease;
}

.tech-card-container:hover .tag {
  background: rgba(255, 255, 255, 0.2);
  transform: translateY(5px);
}

/* ================= CONTENT ================= */

.tag-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.25rem;
}

.tag-icon {
  font-size: 24px;
  transition: transform 0.3s ease;
}

.tag-icon-img {
  width: 24px;
  height: 24px;
  transition: transform 0.3s ease;
}

.tag-name {
  font-size: 0.75rem;
  font-weight: 500;
  color: #ccc;
  text-align: center;
}

/* ================= HOVER INFO ================= */

.tag-info {
  position: absolute;
  top: 100%;
  left: 50%;
  width: 200px;

  transform: translate(-50%, -10px);
  opacity: 0;
  pointer-events: none;

  background: rgba(10, 10, 30, 0.95);
  color: white;
  padding: 10px;
  border-radius: 10px;
  text-align: center;

  transition: opacity 0.3s ease, transform 0.3s ease;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
}

.tag-info p {
  margin: 0;
  font-size: 0.8rem;
  line-height: 1.3;
}

.tech-card-container:hover .tag-info {
  opacity: 1;
  transform: translate(-50%, 5px);
}
</style>
