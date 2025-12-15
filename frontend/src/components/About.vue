<template>
  <section id="about" class="about-section relative pt-10 pb-5 overflow-hidden">
    <div class="about-background">
      <div class="gradient-orbs">
        <div class="orb orb-1"></div>
        <div class="orb orb-2"></div>
        <div class="orb orb-3"></div>
      </div>
    </div>

    <div class="about-title px-5 sm:px-10">
      <div class="title-left">
        <div class="section-badge">
          <VueFeather type="code" stroke="green" size="14" />
          Full Stack Developer
        </div>

        <h1 class="main-title">
          <span class="greeting">Hi, I'm </span>
          <span class="name">Chun Visal</span>
        </h1>

        <p class="tagline">"Crafting digital experiences that matter"</p>
      </div>

      <!-- image for mobile -->
      <div class="title-right block sm:hidden">
        <div class="swap-wrapper">
          <transition name="fade">
            <!-- use currentIndex as key so Vue always transitions -->
            <img
              :src="hobbies[currentIndex]"
              :key="currentIndex"
              class="swap-image"
              alt="hobby"
              @click="openImage(hobbies[currentIndex])"
            />
          </transition>
        </div>
      </div>
    </div>

    <!-- CENTERED CONTAINER -->
    <div
      class="about-container flex flex-col px-5 sm:px-10 sm:flex-row gap-3 sm:gap-10"
    >
      <!-- LEFT COLUMN -->
      <div class="left-col">
        <div class="about-left">
          <div class="content-section">
            <h2 class="section-header">What I Do</h2>
            <div class="section-content">
              I'm a fast-learning full-stack developer in training. I build
              <span>high-performance web applications</span>, clean UI and
              functional APIs. I learn by building — trying ideas, breaking
              things, and fixing them again. Every project moves me closer to
              the developer I want to become.
            </div>
          </div>

          <div class="content-section">
            <h2 class="section-header">My Approach</h2>
            <div class="section-content">
              Write simple, readable code and solve problems step by step. Care
              about design, performance, and improving every single day. If
              <span>I don't know something, I learn it quick</span>.
            </div>
          </div>

          <div class="content-section">
            <h2 class="section-header">Beyond Code</h2>
            <div class="section-content">
              I vibe with tech, cars, gaming, and leveling up my skills nonstop.
              Building projects, experimenting, breaking things,
              <span>fixing them daily</span>.
            </div>
          </div>

          <div class="content-section hidden sm:block">
            <h2 class="section-header">Hobbies & Interests</h2>
            <div class="hobbies-scroll-wrapper">
              <div class="hobbies-grid">
                <div
                  class="hobby-item"
                  v-for="(img, index) in hobbies"
                  :key="'h1-' + index"
                  @click="openImage(img)"
                >
                  <img :src="img" alt="" />
                </div>
                <div
                  class="hobby-item"
                  v-for="(img, index) in hobbies"
                  :key="'h2-' + index"
                  @click="openImage(img)"
                >
                  <img :src="img" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- RIGHT COLUMN -->
      <div class="right-col">
        <div class="content-section">
          <h2 class="section-header">Tech Arsenal</h2>

          <div class="tech-grid">
            <div class="tech-category">
              <div class="tech-category-header">Frontend</div>
              <div class="tech-items">
                <div class="tech-item">
                  <font-awesome-icon
                    :icon="['fab', 'html5']"
                    size="sm"
                    :style="{ color: '#e34c26' }"
                  />
                  HTML
                </div>
                <div class="tech-item">
                  <font-awesome-icon
                    :icon="['fab', 'css3']"
                    size="sm"
                    :style="{ color: '#264de4' }"
                  />
                  CSS
                </div>
                <div class="tech-item">
                  <font-awesome-icon
                    :icon="['fab', 'vuejs']"
                    size="sm"
                    :style="{ color: '#42b883' }"
                  />
                  Vue
                </div>
                <div class="tech-item">
                  <font-awesome-icon
                    :icon="['fab', 'react']"
                    size="sm"
                    :style="{ color: '#61dafb' }"
                  />
                  React
                </div>
                <div class="tech-item">
                  <font-awesome-icon
                    :icon="['fab', 'js']"
                    size="sm"
                    :style="{ color: '#f7df1e' }"
                  />
                  JavaScript
                </div>
                <div class="tech-item">
                  <font-awesome-icon
                    :icon="['fas', 'wind']"
                    size="sm"
                    :style="{ color: '#38bdf8' }"
                  />
                  Tailwind
                </div>
              </div>
            </div>
            <div class="tech-category">
              <div class="tech-category-header">Backend</div>
              <div class="tech-items">
                <div class="tech-item">
                  <font-awesome-icon
                    :icon="['fab', 'node-js']"
                    size="sm"
                    :style="{ color: '#68a063' }"
                  />
                  Node.js
                </div>
                <div class="tech-item">
                  <font-awesome-icon
                    :icon="['fas', 'server']"
                    size="sm"
                    :style="{ color: '#a855f7' }"
                  />
                  Express
                </div>
                <div class="tech-item">
                  <font-awesome-icon
                    :icon="['fas', 'database']"
                    size="sm"
                    :style="{ color: '#4ade80' }"
                  />
                  SQL
                </div>
                <div class="tech-item">
                  <font-awesome-icon
                    :icon="['fas', 'fire']"
                    size="sm"
                    :style="{ color: '#f97316' }"
                  />
                  Firebase
                </div>
              </div>
            </div>

            <div class="tech-category">
              <div class="tech-category-header">Tools</div>
              <div class="tech-items">
                <div class="tech-item">
                  <font-awesome-icon
                    :icon="['fas', 'bolt']"
                    size="sm"
                    :style="{ color: '#facc15' }"
                  />
                  Postman
                </div>
                <div class="tech-item">
                  <font-awesome-icon
                    :icon="['fas', 'code']"
                    size="sm"
                    :style="{ color: '#3b82f6' }"
                  />
                  VS Code
                </div>
                <div class="tech-item">
                  <font-awesome-icon
                    :icon="['fab', 'figma']"
                    size="sm"
                    :style="{ color: '#a855f7' }"
                  />
                  Figma
                </div>
                <div class="tech-item">
                  <font-awesome-icon
                    :icon="['fab', 'github']"
                    size="sm"
                    :style="{ color: '#fff' }"
                  />
                  Git/Github
                </div>
                <div class="tech-item">
                  <font-awesome-icon
                    :icon="['fas', 'rocket']"
                    size="sm"
                    :style="{ color: '#fff' }"
                  />
                  Railway
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="stats-section">
          <div class="stats-grid">
            <div class="stat-item">
              <div class="stat-number">Internship</div>
              <div class="stat-label">Student</div>
            </div>

            <div class="stat-item">
              <div class="stat-number">3+</div>
              <div class="stat-label">Projects</div>
            </div>

            <div class="stat-item">
              <div class="stat-number">ထ</div>
              <div class="stat-label">Learning</div>
            </div>

            <div class="stat-item">
              <div class="stat-number">100%</div>
              <div class="stat-label">Effort</div>
            </div>
          </div>
        </div>
      </div>

      <Teleport to="body">
        <div v-if="viewerImg" class="viewer" @click="closeViewer">
          <img :src="viewerImg" class="viewer-img" />
        </div>
      </Teleport>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";

import car from "../../public/hobbies/car.png";
import coding from "../../public/hobbies/coding.png";
import cybersecurity from "../../public/hobbies/cybersecurity.png";
import fastandfurious from "../../public/hobbies/fastandfurious.png";
import fortnite from "../../public/hobbies/fortnite.png";
import gym from "../../public/hobbies/gym.png";
import minecraft from "../../public/hobbies/minecraft.png";
import music from "../../public/hobbies/music.png";
import visal from "../../public/hobbies/visal.jpg";

const hobbies = [
  car,
  coding,
  cybersecurity,
  fastandfurious,
  fortnite,
  gym,
  minecraft,
  music,
  visal,
];

const currentIndex = ref(0);
const viewerImg = ref(null);
let intervalId = null;

onMounted(() => {
  setInterval(() => {
    currentIndex.value = (currentIndex.value + 1) % hobbies.length;
  }, 3000);
});

onBeforeUnmount(() => {
  if (intervalId) clearInterval(intervalId);
});

function openImage(img) {
  viewerImg.value = img;
}

function closeViewer() {
  viewerImg.value = null;
}
</script>

<style>
/* ---------------------------
   THE BACKGROUND ORN
---------------------------- */
.about-background {
  inset: 0;
  overflow: hidden;
  pointer-events: none;
  position: absolute;
  z-index: 0;
}

.about-container {
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: 1300px;
}

@media (min-width: 640px) {
  .about-container {
    flex-direction: row;
  }
}

.left-col {
  flex: 1;
  min-width: 0;
}

.right-col {
  flex: 0.8 !important;
  display: flex;
  flex-direction: column;
  gap: 20px;
  min-width: 0;
}

.about-left {
  display: flex;
  flex-direction: column;
  gap: 8px;
  min-width: 0;
}

.about-left h2 {
  background: linear-gradient(135deg, #ffffff 0%, #7a38bc 100%);
  background-clip: text;
  display: inline-block;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 0 4px rgba(174, 116, 255, 0.07),
    0 0 8px rgba(174, 116, 255, 0.091);
}

.about-section {
  box-sizing: border-box;
  color: white;
  margin: 0 auto;
  overflow: hidden;
  position: relative;
  width: 100%;
}

.about-title {
  align-items: center;
  display: flex;
  gap: 10px;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 1300px;
}

/* ---------------------------
   ORBS + GENERAL
---------------------------- */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.8s ease, transform 0.8s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: scale(0.98);
}

.fade-enter-to,
.fade-leave-from {
  opacity: 1;
  transform: scale(1);
}

.gradient-orbs {
  height: 100%;
  position: absolute;
  width: 100%;
}

/* GENERAL ORB */
.orb {
  animation: floatOrb 14s ease-in-out infinite;
  border-radius: 50%;
  filter: blur(60px);
  height: 200px;
  mix-blend-mode: screen;
  opacity: 0.55;
  position: absolute;
  width: 200px;
}

.orb-1 {
  animation-delay: 0s;
  background: radial-gradient(circle, #9b5cff, #352bff);
  height: 70px;
  left: 15%;
  top: 10%;
  width: 100px;
}

.orb-2 {
  animation-delay: 4s;
  background: linear-gradient(45deg, #f193fb57, #f5576c8c);
  bottom: 15%;
  height: 260px;
  right: 10%;
  width: 260px;
}

.orb-3 {
  animation-delay: 8s;
  background: linear-gradient(45deg, #4facfe, #00f2fe);
  height: 180px;
  left: 59%;
  top: 45%;
  width: 180px;
}

/* ORB ANIMATION */
@keyframes floatOrb {
  0%,
  100% {
    transform: translateY(0) scale(1);
  }
  50% {
    transform: translateY(15px) scale(1.03);
  }
}

/* ---------------------------
   HOBBIES
---------------------------- */
.hobbies-grid {
  animation: scrollInfinite 15s linear infinite;
  display: flex;
  gap: 10px;
  width: max-content;
}

.hobbies-scroll-wrapper {
  cursor: pointer;
  overflow: hidden;
  padding-top: 10px;
  width: 100%;
}

.hobbies-scroll-wrapper:hover .hobbies-grid {
  animation-play-state: paused;
}

.hobby-item {
  border-radius: 5px;
  flex: 0 0 auto;
  height: 50px;
  overflow: hidden;
  width: 85px;
}

.hobby-item img {
  border-radius: 5px;
  height: 100%;
  object-fit: cover;
  width: 100%;
}

.hobby-item img:hover {
  transform: scale(1.05);
  transition: transform 0.3s ease;
}

/* HOBBY SCROLL ANIMATION */
@keyframes scrollInfinite {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

/* ---------------------------
   COMMON TEXT + BADGES
---------------------------- */
.main-title {
  font-weight: 700;
  letter-spacing: -0.02em;
  line-height: 1.1;
}

.main-title .name {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.section-badge {
  align-items: center;
  backdrop-filter: blur(2px);
  background: rgba(109, 35, 178, 0.085);
  border: 1px solid rgba(169, 85, 247, 0.557);
  border-radius: 25px;
  display: inline-flex;
  font-size: 0.8rem;
  gap: 5px;
  justify-content: center;
  margin-bottom: 10px;
  padding: 3px 10px;
}

.section-content {
  color: rgba(255, 255, 255, 0.873);
  font-size: clamp(0.9rem, 1.4vw, 1rem);
}

.section-content span {
  background: linear-gradient(135deg, #66ea99 0%, #2fd2af 100%);
  background-clip: text;
  display: inline-block;
  font-size: clamp(1rem, 1.5vw, 1.1rem);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.section-header {
  font-size: 1.2rem;
}

.swap-image {
  display: block;
  height: 100%;
  inset: 0;
  object-fit: cover;
  position: absolute;
  width: 100%;
}

.swap-wrapper {
  border-radius: 12px;
  height: 120px;
  overflow: hidden;
  position: relative;
  width: 120px;
}

/* ---------------------------
   RIGHT COLUMN
---------------------------- */
.right-col {
  display: flex;
  flex-direction: column;
  flex: 0 0 40%;
  gap: 20px;
}

.right-col h2 {
  background: linear-gradient(135deg, #ffffff 0%, #7a38bc 100%);
  background-clip: text;
  display: inline-block;
  margin-bottom: 8px;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 0 4px rgba(174, 116, 255, 0.07),
    0 0 8px rgba(174, 116, 255, 0.091);
}

/* ---------------------------
   TECH GRID
---------------------------- */
.tech-category-header {
  color: rgba(255, 255, 255, 0.774);
  font-size: 0.9rem;
  letter-spacing: 0.05em;
  text-transform: uppercase;
}

.tech-grid {
  background: rgba(17, 25, 40, 0.8);
  backdrop-filter: blur(20px);
  border-radius: 16px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  display: grid;
  gap: 10px;
  grid-template-columns: 1fr;
  padding: 1rem 1rem;
  width: 100%;
}

.tech-item {
  align-items: center;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(2px);
  border-radius: 5px;
  display: inline-flex;
  font-size: 0.9rem;
  gap: 2px;
  margin-right: 9px;
  margin-top: 7px;
  padding: 5px 10px;
}

.tech-items {
  display: flex;
  flex-wrap: wrap;
}

/* ---------------------------
   STATS
---------------------------- */
.stat-item {
  align-items: center;
  background: rgba(17, 25, 40, 0.8);
  backdrop-filter: blur(20px);
  border-radius: 5px;
  display: flex;
  flex: 1;
  flex-direction: column;
  font-size: 0.8rem;
  justify-content: center;
  padding: 7px;
  text-align: center;
}

.stat-label {
  color: rgba(255, 255, 255, 0.848);
  font-size: 0.75rem;
  margin-top: 2px;
}

.stat-number {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  background-clip: text;
  font-size: 1rem;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.stats-grid {
  display: flex;
  gap: 15px;
  margin-bottom: 10px;
  width: 100%;
}

/* ---------------------------
   VIEWER
---------------------------- */
.viewer {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.7);

  display: flex;
  align-items: center;
  justify-content: center;

  z-index: 99999;
}

.viewer-img {
  max-width: 90vw;
  max-height: 90vh;
  object-fit: contain;
  border-radius: 12px;
}
  

/* ---------------------------
   MEDIA QUERY
---------------------------- */
@media (max-width: 480px) {
  .orb-1 {
    bottom: 30% !important;
    height: 80px !important;
    left: auto !important;
    top: auto !important;
    width: 500px !important;
  }

  .orb-2 {
    bottom: 10% !important;
    height: 200px !important;
    left: 10% !important;
    top: auto !important;
    width: 150px !important;
  }

  .orb-3 {
    bottom: 10% !important;
    height: 150px !important;
    left: auto !important;
    right: 15% !important;
    top: auto !important;
    transform: none !important;
    width: 100px !important;
  }
}
</style>
