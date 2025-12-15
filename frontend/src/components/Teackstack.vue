<template>
  <div class="scroller mt-10">
    <div class="scroll-clip">
      <div class="tag-list">
        <div v-for="n in 2" :key="n" class="tech-group">
          <div
            v-for="tech in allTech"
            :key="`${tech}-${n}`"
            class="tech-card-container"
            @mouseenter="activeTech = tech"
            @mouseleave="activeTech = null"
            @mousemove="updateTooltip"
          >
            <span class="tag">
              <div class="tag-content">
                <font-awesome-icon
                  :icon="getTech(tech).icon"
                  size="xl"
                  :style="{ color: getTech(tech).color }"
                  class="tag-icon"
                />
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
  "Tailwind",
  "Node.js",
  "Express",
  "SQL",
  "Firebase",
  "Postman",
  "VS Code",
  "Figma",
  "Git",
  "GitHub",
  "C",
  "C++",
]);

const updateTooltip = (e) => {
  tooltipStyle.value = {
    position: "fixed",
    top: e.clientY + 12 + "px",
    left: e.clientX + 12 + "px",
    zIndex: 999999,
  };
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
  mask-image: linear-gradient(
    to right,
    transparent,
    black 10%,
    black 90%,
    transparent
  );
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
    transform: translateX(calc(-50% - 0.5rem));
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
  background: rgba(255, 255, 255, 0.1);

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
