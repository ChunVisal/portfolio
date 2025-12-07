<script setup>
import { onMounted, onBeforeUnmount } from "vue";
import Navbar from "./components/Navbar.vue";

function generateStars(count, id) {
  const stars = [];
  const W = document.documentElement.clientWidth;
  const H = document.documentElement.clientHeight;
  for (let i = 0; i < count; i++) {
    const x = Math.random() * W;
    const y = Math.random() * H * 1.5; // safe scroll area
    stars.push(`${x}px ${y}px #FFF`);
  }
  const el = document.getElementById(id);
  if (el) el.style.boxShadow = stars.join(", ");
}

// build once and on resize (debouncnaed)
let resizeTimer = null;
function build() {
  generateStars(300, "stars");  // small
  generateStars(100, "stars2"); // medium
  generateStars(30,  "stars3"); // big
}

function onResizeDebounced() {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    build();
  }, 200);
}

onMounted(() => {
  build();
  window.addEventListener("resize", onResizeDebounced);
});

onBeforeUnmount(() => {
  window.removeEventListener("resize", onResizeDebounced);
});
</script>

<template>
  <div class="app-root">
    <div class="grid-pattern"></div>
    <div class="background-blur-cover">
      <div id="background-layer"></div>
      <div id="stars" aria-hidden="true"></div>
      <div id="stars2" aria-hidden="true"></div>
      <div id="stars3" aria-hidden="true"></div>
    </div>
    <Navbar/>
    <router-view/>
  </div>
</template>

<style>

.app-root {
  min-height: 100vh;
  background: linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%);
}

.grid-pattern {
  position: fixed;
  inset: 0;   /* send behind everything */
  pointer-events: none;  /* make it CLICK-through */
  
  background-image:
    linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px);
  background-size: 40px 40px;
  mask: linear-gradient(to bottom, transparent, black 20%, black 80%, transparent);
}

.background-blur-cover {
  background: linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%);
}

/* Global star layers: fixed, behind all content, pointer-events none */
#stars, #stars2, #stars3 {
  position: fixed;
  inset: 0;
  pointer-events: none;
  will-change: transform;
  filter: contrast(99.9%);
}

/* pixel sizes handled by generated box-shadow; make sure elements are tiny so box-shadow shows */
#stars { width: 1px; height: 1px; animation: starsSmall 40s linear infinite; }
#stars2 { width: 2px; height: 2px; animation: starsMedium 80s linear infinite; }
#stars3 { width: 3px; height: 3px; animation: starsBig 120s linear infinite; }

@keyframes starsSmall { from { transform: translateY(0); } to { transform: translateY(-100vh); } }
@keyframes starsMedium{ from { transform: translateY(0); } to { transform: translateY(-100vh); } }
@keyframes starsBig   { from { transform: translateY(0); } to { transform: translateY(-100vh); } }

</style>
