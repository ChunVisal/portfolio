<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";

// components
import Navbar from "../components/Navbar.vue";
import Hero from "../components/Hero.vue";
import About from "../components/About.vue";
import Projects from "../components/Projects.vue";
import Footer from "../components/Footer.vue";

// config
const SECTIONS = ["Hero","About","Projects","Footer"];
const SCROLL_FACTOR = 0.01;
const DRAG_FACTOR = 0.010;
const BASE_ZOOM = 1.0;
const ZOOM_SCALE_FACTOR = 0.18;
const LERP_SPEED = 0.12;

// state
const progress = ref(0);
const targetProgress = ref(0);
const isDragging = ref(false);
const lastY = ref(0);
const animFrame = ref(null);
const cameraRef = ref(null);
const maxProgress = SECTIONS.length - 1;

const clamp = (v,a,b) => Math.max(a, Math.min(b, v));

function goToSection(i){ targetProgress.value = clamp(i,0,maxProgress); }

function sectionOpacity(index, fadeFactor = 1.6){
  const d = Math.abs(progress.value - index);
  return Math.max(0, 1 - d * fadeFactor);
}

function applyDelta(delta){
  targetProgress.value = clamp(targetProgress.value + delta, 0, maxProgress);
}
function clientYFromEvent(e){
  if (e.touches && e.touches.length) return e.touches[0].clientY;
  if (e.clientY !== undefined) return e.clientY;
  return 0;
}

function onWheel(e){
  e.preventDefault();
  const delta = e.deltaY * SCROLL_FACTOR;
  applyDelta(delta);
}
function onDown(e){
  if (e.type === "mousedown" && e.button !== 1) return;
  isDragging.value = true;
  lastY.value = clientYFromEvent(e);
  document.body.style.cursor = "grabbing";
}
function onMove(e){
  if (!isDragging.value) return;
  e.preventDefault();
  const curY = clientYFromEvent(e);
  const dy = curY - lastY.value;
  applyDelta(+dy * DRAG_FACTOR);
  lastY.value = curY;
}
function onUp(){
  if (!isDragging.value) return;
  isDragging.value = false;
  document.body.style.cursor = "";
}
function onTouchStart(e){ isDragging.value = true; lastY.value = clientYFromEvent(e); }
function onTouchMove(e){ if(!isDragging.value) return; e.preventDefault(); const curY = clientYFromEvent(e); applyDelta(- (curY - lastY.value) * DRAG_FACTOR); lastY.value = curY; }
function onTouchEnd(){ isDragging.value = false; }

onMounted(()=>{
  document.body.style.overflow = "hidden";
  window.addEventListener("wheel", onWheel, { passive: false });
  window.addEventListener("mousedown", onDown);
  window.addEventListener("mousemove", onMove);
  window.addEventListener("mouseup", onUp);
  window.addEventListener("touchstart", onTouchStart, { passive: false });
  window.addEventListener("touchmove", onTouchMove, { passive: false });
  window.addEventListener("touchend", onTouchEnd);

  // render loop: lerp toward targetProgress and scale cameraRef
  const loop = () => {
    progress.value += (targetProgress.value - progress.value) * LERP_SPEED;
    if (cameraRef.value) {
      const s = BASE_ZOOM + progress.value * ZOOM_SCALE_FACTOR;
      cameraRef.value.style.transform = `scale(${s})`;
    }
    animFrame.value = requestAnimationFrame(loop);
  };
  animFrame.value = requestAnimationFrame(loop);
});

onBeforeUnmount(()=>{
  document.body.style.overflow = "";
  window.removeEventListener("wheel", onWheel);
  window.removeEventListener("mousedown", onDown);
  window.removeEventListener("mousemove", onMove);
  window.removeEventListener("mouseup", onUp);
  window.removeEventListener("touchstart", onTouchStart);
  window.removeEventListener("touchmove", onTouchMove);
  window.removeEventListener("touchend", onTouchEnd);
  if (animFrame.value) cancelAnimationFrame(animFrame.value);
});
</script>

<template>
  <div class="home-root">
    <Navbar />

    <!-- SIDE NAV -->
   <div class="side-nav-mobile-fixed fixed inset-x-0 bottom-0 z-50 flex justify-around p-3 bg-gray-900/70 border-t border-gray-800">
  
    <div v-for="(s,i) in SECTIONS" :key="i" class="flex items-center gap-1 cursor-pointer md:gap-3" @click="goToSection(i)" :title="s">
      
      <div :class="['hidden md:block w-2 h-2 rounded-full transition-all duration-300', Math.floor(targetProgress) === i ? 'bg-blue-300 scale-125 ring-2 ring-blue-200' : 'bg-gray-400 hover:scale-110']"></div>
      
      <span class="text-sm font-medium whitespace-nowrap transition-all duration-300 text-center" 
            :class="Math.floor(targetProgress) === i ? 'text-blue-300 font-bold' : 'text-gray-400'" 
            :style="{opacity: Math.floor(targetProgress) === i ? 1 : 0.6}">
        {{ i === 0 ? 'Home' : i === 1 ? 'About' : i === 2 ? 'Projects' : 'Contact' }}
      </span>
    </div>
  </div>

    <!-- CAMERA / VIEWPORT: MUST be fixed and cover the screen -->
    <div ref="cameraRef" class="viewport fixed inset-0 z-10 overflow-hidden">
      <!-- SECTION 0 - HERO -->
      <section class="page-section absolute inset-0 p-1 md:p-auto" :style="{ opacity: sectionOpacity(0), pointerEvents: Math.floor(progress) === 0 ? 'auto' : 'none' }">
        <Hero />
      </section>
      <!-- SECTION 1 - ABOUT -->
      <section class="page-section absolute inset-0" :style="{ opacity: sectionOpacity(1), pointerEvents: Math.floor(progress) === 1 ? 'auto' : 'none' }">
        <About />
      </section>

      <!-- SECTION 2 - PROJECTS -->
      <section class="page-section absolute inset-0" :style="{ opacity: sectionOpacity(2), pointerEvents: Math.floor(progress) === 2 ? 'auto' : 'none' }">
        <Projects />
      </section>

      <!-- SECTION 3 - FOOTER -->
      <section class="page-section absolute inset-0" :style="{ opacity: sectionOpacity(4), pointerEvents: Math.floor(progress) === 4 ? 'auto' : 'none' }">
        <Footer />
      </section>
    </div>
  </div>
</template>

<style>
.home-root { min-height: 100vh; }

/* viewport MUST be fixed and above background/stars */
.viewport {
  position: fixed;
  inset: 0;
  z-index: 10;            /* above stars/background (they should be z-index 1/2) */
  transform-origin: center center;
  will-change: transform;
  background: transparent; /* ensure background layer is behind (handled in App.vue) */
}

/* each section is full-screen and absolute inside viewport */
.page-section {
  position: absolute;
  inset: 0;
  height: 100vh;
  width: 100%;
  display: block;
  box-sizing: border-box;
  backdrop-filter: blur(0.7px) saturate(100%);
}

/* nav stays above everything */
nav { z-index: 190; position: relative; }

/* side nav: ensure very high z so labels clickable */
.side-nav { z-index: 200; }
/* Add this inside your <style> block at the end */
@media (min-width: 768px) {
  .side-nav-mobile-fixed {
    /* Reset mobile positioning */
    left: auto !important;
    right: 1rem !important; /* This is the 'right-4' equivalent (4 * 0.25rem = 1rem) */
    bottom: auto !important;

    /* Apply vertical centering (top-1/2 -translate-y-1/2 equivalent) */
    top: 50% !important;
    transform: translateY(-50%) !important;

    /* Revert flex properties for vertical layout */
    display: flex !important;
    flex-direction: column !important;
    gap: 1rem !important; /* md:gap-4 equivalent */
    
    /* Remove background, padding, border */
    padding: 0 !important;
    background: transparent !important;
    border-top: none !important;
  }
}
</style>
