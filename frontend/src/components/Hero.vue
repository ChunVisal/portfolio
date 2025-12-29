<template>
  <section id="hero" class="hero-section">
    <!-- Background Elements -->
    <div class="hero-background">
      <div class="gradient-orbs">
        <div class="orb orb-1 hidden md:block"></div>
        <div class="orb orb-2 hidden md:block"></div>
        <div class="orb orb-3 hidden md:block"></div>
      </div>
    </div>

    <!-- Main Content -->
    <div class="hero-container">
      <!-- Text Content -->
      <div class="hero-content">
        <!-- Badge -->
        <div class="badge">
          <span class="badge-dot"></span>
          Currently leveling up my skills
        </div>

        <!-- Main Headlines -->
        <div class="headlines">
          <h1 class="main-headline">
            <span class="line line-1">Building Digital</span>
            <span class="line line-2 glitch" data-text="Experiences">
              <span>Experiences</span>
              <div class="">
                <video src="/cambodiaflag.mp4" autoplay muted loop playsinline
                  class="w-20 h-10 object-cover"></video>
              </div>
            </span>
          </h1>

          <h2 class="sub-headline">
            Full-Stack Developer & Future Software Engineer
          </h2>

          <p class="description">
            Learning modern web development by building real projects, focusing
            on clean code, performance, and user experience.
          </p>
        </div>

        <!-- CTA Buttons -->
        <div class="cta-buttons">
          <button class="btn btn-primary" @click="scrollToProjects">
            <span>View Projects</span>
            <VueFeather type="arrow-up-right" size="18" class="btn-icon" />
          </button>
          <button class="btn btn-secondary" @click="scrollTofooter">
            <span>Let's Talk</span>
            <VueFeather type="message-circle" size="18" class="btn-icon" />
          </button>
        </div>
        <!-- Tech Stack -->
        <div class="tech-stack hidden sm:flex">
          <div class="tech-label">Tech I work with:</div>

          <div class="tech-items">
            <span class="tech-item">
              <font-awesome-icon :icon="['fab', 'react']" style="color: #61dbfb" />
              React
            </span>

            <span class="tech-item">
              <font-awesome-icon :icon="['fab', 'vuejs']" style="color: #41b883" />
              Vue JS
            </span>

            <span class="tech-item">
              <font-awesome-icon :icon="['fab', 'node-js']" style="color: #3c873a" />
              Node.js
            </span>

            <span class="tech-item">
              <font-awesome-icon :icon="['fas', 'database']" style="color: #0078d4" />
              SQL
            </span>

            <span class="tech-item">
              <font-awesome-icon :icon="['fas', 'fire']" style="color: #ffa611" />
              Firebase
            </span>
          </div>
        </div>
      </div>

      <!-- Visual Element -->
      <div class="hero-visual">
        <div class="code-window hidden md:block">
          <div class="window-header">
            <div class="window-dots">
              <span></span>
              <span></span>
              <span></span>
            </div>
            <span class="file-name"> Developer.ts </span>
          </div>
          <div class="code-content">
            <div class="code-line">
              <span class="code-comment">// Building the future</span>
            </div>
            <div class="code-line">
              <span class="code-keyword">const</span>
              <span class="code-variable"> developer</span>
              <span> = </span>
              <span class="code-bracket">{</span>
            </div>
            <div class="code-line indent">
              <span class="code-property">Name:</span>
              <span class="code-string"> "Chun Visal"</span>,
            </div>
            <div class="code-line indent">
              <span class="code-property">passion:</span>
              <span class="code-string"> "coding"</span>,
            </div>
            <div class="code-line indent">
              <span class="code-property">focus:</span>
              <span class="code-string"> "innovation"</span>
            </div>
            <div class="code-line indent">
              <span class="code-property">goal:</span>
              <span class="code-string"> "become full-stack pro"</span>
            </div>
            <div class="code-line">
              <span class="code-bracket">}</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Scroll Indicator -->
    <div class="scroll-indicator hidden md:block" @click="scrollToAbout">
      <div class="scroll-arrow"></div>
    </div>
  </section>
</template>

<script setup>
const scrollToProjects = () => {
  const projectsSection = document.getElementById("projects");
  projectsSection?.scrollIntoView({ behavior: "smooth" });
};

const scrollTofooter = () => {
  const footerSection = document.getElementById("contact");
  footerSection?.scrollIntoView({ behavior: "smooth" });
};
</script>

<style scoped>
.hero-section {
  min-height: 100dvh;
  height: 100dvh;

  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  color: white;
}

/* Background Elements */
.hero-background {
  position: absolute;
  inset: 0;
  z-index: 0;
}

.gradient-orbs {
  position: absolute;
  width: 100%;
  height: 100%;
}

.orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(60px);
  opacity: 0.3;
}

.orb-1 {
  width: 250px;
  height: 200px;
  background: linear-gradient(45deg, #667eea, #7122c0);
  top: 10%;
  left: 10%;
  animation: float 8s ease-in-out infinite;
}

.orb-2 {
  width: 350px;
  height: 250px;
  background: linear-gradient(45deg, #f093fb, #f5576c);
  bottom: 15%;
  right: 10%;
  animation: float 10s ease-in-out infinite reverse;
}

.orb-3 {
  width: 170px;
  height: 200px;
  background: linear-gradient(45deg, #4facfe, #00f2fe);
  top: 30%;
  right: 20%;
  animation: float 12s ease-in-out infinite;
}

/* Main Container */
.hero-container {
  max-width: 1200px;
  width: 92%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 3rem;
  align-items: center;
  position: relative;
  z-index: 1;
}

/* Content Styles */
.hero-content {
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
}

.badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(2px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 50px;
  padding: 0.4rem 0.8rem;
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.8);
  width: fit-content;
}

.badge-dot {
  width: 6px;
  height: 6px;
  background: #00ff88;
  border-radius: 50%;
  animation: pulse 2s infinite;
}

.headlines {
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
}

.main-headline {
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 700;
  line-height: 1.1;
  letter-spacing: -0.02em;
}

.line {
  display: flex;
  align-items: center;
  gap: 0.6rem;
}

.line-2 {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.glitch::before {
  content: attr(data-text);
  position: absolute;
  inset: 0;

  /* micro pixel zone */
  clip-path: inset(30% 45% 50% 40%);

  color: #ff004f;
  opacity: 0;

  animation: noisePulse 2.8s infinite steps(1);
}

@keyframes noisePulse {

  0%,
  96%,
  100% {
    opacity: 0;
    transform: none;
  }

  97% {
    opacity: 1;
    transform: translate(1px, -1px) scaleX(1.02);
  }

  98% {
    opacity: 1;
    transform: translate(-1px, 1px) scaleX(0.98);
  }

  99% {
    opacity: 1;
    transform: translate(0px, 0px) scaleX(1.02);
  }
}

.glitch {
  position: relative;
  display: flex;
  color: white;
  font-weight: 900;
}

/* base layers – multiple glitch clones */
.glitch::before,
.glitch::after,
.glitch::marker,
.glitch b,
.glitch i {
  content: attr(data-text);
  position: absolute;
  top: 0;
  left: 0;
  pointer-events: none;
  opacity: 0;
}

/* glitch slice 1 */
.glitch::before {
  color: #00eaff;
  clip-path: inset(20% 0 60% 0);
  animation: glitchA 1.4s infinite steps(1);
}

/* glitch slice 2 */
.glitch::after {
  color: #ff1f5e;
  clip-path: inset(60% 0 20% 0);
  animation: glitchB 1.4s infinite steps(1);
}

/* glitch slice 3 – tiny part of letter */
.glitch::marker {
  color: #fff;
  clip-path: inset(35% 45% 35% 45%);
  animation: glitchC 1.4s infinite steps(1);
}

/* extra clones for CHAOS */
.glitch b {
  color: #00ffa5;
  clip-path: inset(30% 30% 40% 30%);
  animation: glitchD 1.4s infinite steps(1);
}

.glitch i {
  color: #ffea00;
  clip-path: inset(10% 20% 70% 20%);
  animation: glitchE 1.4s infinite steps(1);
}

/* animations */
@keyframes glitchA {

  0%,
  88% {
    opacity: 0;
    transform: none;
  }

  90% {
    opacity: 1;
    transform: translate(-3px, -1px);
  }

  92% {
    opacity: 1;
    transform: translate(2px, 1px);
  }

  94% {
    opacity: 0;
  }
}

@keyframes glitchB {

  0%,
  90% {
    opacity: 0;
    transform: none;
  }

  92% {
    opacity: 1;
    transform: translate(3px, -1px);
  }

  94% {
    opacity: 1;
    transform: translate(-2px, 1px);
  }

  96% {
    opacity: 0;
  }
}

@keyframes glitchC {

  0%,
  93% {
    opacity: 0;
    transform: none;
  }

  94% {
    opacity: 1;
    transform: skewX(10deg);
  }

  95% {
    opacity: 1;
    transform: skewX(-10deg);
  }

  96% {
    opacity: 0;
  }
}

@keyframes glitchD {

  0%,
  92% {
    opacity: 0;
    transform: none;
  }

  93% {
    opacity: 1;
    transform: translateY(-2px);
  }

  94% {
    opacity: 1;
    transform: translateY(2px);
  }

  95% {
    opacity: 0;
  }
}

@keyframes glitchE {

  0%,
  92% {
    opacity: 0;
    transform: none;
  }

  93% {
    opacity: 1;
    transform: translateX(2px);
  }

  94% {
    opacity: 1;
    transform: translateX(-2px);
  }

  95% {
    opacity: 0;
  }
}

.sub-headline {
  font-size: clamp(1rem, 2vw, 1.3rem);
  font-weight: 500;
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.3;
}

.description {
  font-size: clamp(0.9rem, 1.5vw, 1rem);
  line-height: 1.5;
  color: rgba(255, 255, 255, 0.7);
  max-width: 450px;
}

.cta-buttons {
  display: flex;
  flex-wrap: nowrap !important;
  white-space: nowrap;
  gap: 1rem;
}

.btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1.5rem;
  border-radius: 10px;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
}

/* Keep your styles */
.btn-primary {
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: white;
}

.btn-primary:hover {
  transform: translateY(-1px);
  background: linear-gradient(135deg, #5f75e3, #6d44a0);
  /* slightly darker */
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.18);
}

.btn-secondary {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(2px);
  border: 1px solid rgba(255, 255, 255, 0.15);
  color: white;
}

.btn-secondary:hover {
  transform: translateY(-1px);
  background: rgba(255, 255, 255, 0.12);
  border-color: rgba(255, 255, 255, 0.2);
}

/* Tech Stack */
.tech-stack {
  flex-direction: column;
  gap: 0.1rem;
  white-space: nowrap;
}

.tech-label {
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.774);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.tech-items {
  display: flex;
  flex-wrap: wrap;
  gap: 0.3rem;
  text-align: center;
  justify-content: center;
  align-items: center;
}

.tech-item {
  display: flex;
  /* 🔥 makes centering possible */
  justify-content: center;
  /* horizontal center */
  align-items: center;
  /* vertical center */

  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(2px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 0.4rem 0.8rem;
  border-radius: 6px;
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.8);
  transition: all 0.3s ease;

  flex: 1;
}

.tech-item svg {
  width: 16px;
  height: 16px;
  margin-right: 3px;
}

.tech-item:hover {
  background: rgba(255, 255, 255, 0.1);
  transform: translateY(-1px);
}

/* Hero Visual */
.hero-visual {
  display: flex;
  justify-content: center;
  align-items: center;
}

.code-window {
  background: rgba(17, 25, 40, 0.8);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  padding: 1.5rem;
  max-width: 400px;
  width: 95%;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
}

.window-header {
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
}

.window-dots {
  display: flex;
  gap: 0.5rem;
}

.window-dots span {
  width: 10px;
  height: 10px;
  border-radius: 50%;
}

.window-dots span:nth-child(1) {
  background: #ff5f57;
}

.window-dots span:nth-child(2) {
  background: #ffbd2e;
}

.window-dots span:nth-child(3) {
  background: #28ca42;
}

.file-name {
  margin-left: 4px;
  font-size: 0.75rem;
  text-align: center;
  color: rgba(255, 255, 255, 0.6);
}

.code-content {
  font-family: "Monaco", "Consolas", monospace;
  font-size: 0.875rem;
  line-height: 1.8;
}

.code-line {
  margin-bottom: 0.25rem;
}

.indent {
  margin-left: 1.5rem;
}

.code-comment {
  color: #6a737d;
}

.code-keyword {
  color: #ff7b72;
}

.code-variable {
  color: #ffa657;
}

.code-bracket {
  color: #ffa657;
}

.code-property {
  color: #79c0ff;
}

.code-string {
  color: #a5d6ff;
}

/* Scroll Indicator */
.scroll-indicator {
  position: absolute;
  bottom: 2rem;
  right: 25%;
  transform: translateX(-50%);
  cursor: pointer;
  z-index: 2;
}

.scroll-arrow {
  width: 2px;
  height: 25px;
  background: rgba(255, 255, 255, 0.5);
  position: relative;
}

/* ARROW HEAD */
.scroll-arrow::after {
  content: "";
  position: absolute;
  bottom: -8px;
  left: 50%;
  transform: translateX(-50%) rotate(45deg);
  width: 8px;
  height: 8px;
  border-right: 2px solid rgba(255, 255, 255, 0.5);
  border-bottom: 2px solid rgba(255, 255, 255, 0.5);

  /* MOVE UP DOWN ANIMATION */
  animation: arrowUpDown 1.3s infinite ease-in-out;
}

/* Hover Effects */
.scroll-indicator:hover .scroll-arrow {
  background: rgba(255, 255, 255, 0.8);
}

.scroll-indicator:hover .scroll-arrow::after {
  border-color: rgba(255, 255, 255, 0.8);
}

/* KEYFRAME ANIMATION */
@keyframes arrowUpDown {
  0% {
    transform: translateX(-50%) translateY(0) rotate(45deg);
  }

  50% {
    transform: translateX(-50%) translateY(6px) rotate(45deg);
  }

  100% {
    transform: translateX(-50%) translateY(0) rotate(45deg);
  }
}

/* Mobile Responsive */
@media (max-width: 768px) {
  .hero-section {
    padding: 1rem 0.5rem;
    min-height: 90vh;
  }

  .orb-1 {
    top: 80%;
    left: 10%;
  }

  .orb-2 {
    bottom: 5%;
    right: 10%;
  }

  .orb-3 {
    top: 75%;
    right: 50%;
  }

  .hero-container {
    grid-template-columns: 1fr;
    gap: 2rem;
    text-align: center;
  }

  .hero-content {
    align-items: center;
    gap: 1.2rem;
  }

  .headlines {
    align-items: center;
    gap: 0.8rem;
  }

  .description {
    font-size: 0.9rem;
    max-width: 100%;
  }

  .btn {
    padding: 0.7rem 1.2rem;
    font-size: 0.85rem;
  }

  .tech-items {
    justify-content: center;
  }

  .code-window {
    max-width: 350px;
    margin: 0 auto;
  }

  .orb-1,
  .orb-2,
  .orb-3 {
    transform: scale(0.6);
  }
}

@media (max-width: 480px) {
  .hero-container {
    width: 95%;
    gap: 1rem;
  }

  .btn {
    width: 100%;
    justify-content: center;
  }

  .tech-items {
    gap: 0.4rem;
  }

  .tech-item {
    padding: 0.3rem 0.6rem;
    font-size: 0.75rem;
  }

  .scroll-indicator {
    bottom: 1rem;
  }
}

/* .hero-section for mobile set screen height 70% */
/* @media (max-width: 480px) {
  .hero-section {
     min-height: 80vh;
  }
} */
</style>
