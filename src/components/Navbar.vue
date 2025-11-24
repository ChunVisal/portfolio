<template>
  <div class="topbar">
    <button class="x-burger" @click="open = !open" aria-label="Menu">
      <span />
      <span />
      <span />
    </button>

    <div class="right-actions">
      <a href="/path/to/your/cv.pdf" target="_blank" class="cv-btn">
        <VueFeather type="user" class="icon-spacing" size="14"/>
        CV
      </a>
      </div>
    </div>

  <div class="x-backdrop" v-if="open" @click="open = false"></div>

  <aside class="x-drawer" :class="{ show: open }">
    <nav>
      <a v-for="(item, i) in links" :key="i" href="#">{{ item }}</a>
    </nav>
  </aside>
</template>

<script setup>
import { ref } from 'vue'
const open = ref(false)
const links = ["Hero", "About", "Projects", "Tech Stack", "Contact"] // Renamed "Tech" to "Tech Stack" for clarity
</script>

<style scoped>
/*
|------------------------------------------------
| EXISTING STYLES (Burger, Backdrop, Drawer)
|------------------------------------------------
*/

/* ULTRA MINIMAL BURGER */
.x-burger {
  all: unset;
  position: fixed;
  top: 18px;
  left: 18px;
  display: grid;
  gap: 4px;
  cursor: pointer;
  z-index: 200;
  border-radius: 5px;

  /* 🔥 ULTRA BLUR GLASS BACKGROUND */
  padding: 10px;
  background: rgba(255, 255, 255, 0.07);
  position: fixed;
  backdrop-filter: blur(4px) saturate(180%);
  -webkit-backdrop-filter: blur(28px) saturate(200%);
}


.x-burger span {
  width: 20px;
  height: 2px;
  background: rgba(255,255,255,0.85);
  display: block;
  transition: 0.25s ease;
}

/* BACKDROP (very subtle) */
.x-backdrop {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.25);
  backdrop-filter: blur(4px);
  z-index: 150;
}

/* DRAWER — TRUE PREMIUM */
.x-drawer {
  position: fixed;
  top: 0;
  left: 0;
  width: 150px; /* thin af */
  height: 100vh;
  padding: 60px 0 0 !important; /* top only */

  background: rgba(255,255,255,0.04);
  backdrop-filter: blur(18px) saturate(180%);
  border-right: 1px solid rgba(255,255,255,0.08);

  transform: translateX(-110%);
  transition: 0.35s cubic-bezier(.3, .8, .25, 1);

  z-index: 160;
  padding: 80px 18px 0;
}

.x-drawer.show {
  transform: translateX(0);
}

/* LINKS — MINIMAL, ADULT, CLEAN */
.x-drawer nav {
  display: flex;
  flex-direction: column;
  padding: 0 !important;
  margin: 0;
}

.x-drawer a {
  display: block;
  width: 100%;
  padding: 10px 0;           /* vertical only */
  margin: 0;
  border-radius: 0;
  text-indent: 18px;         /* ← THIS keeps text aligned */
  background: transparent;
  color: rgba(255,255,255,0.82);
  font-size: 0.9rem;
  font-weight: 350;
  font-family: "Exo 2", sans-serif;
}

.x-drawer a:hover {
  background: rgba(255,255,255,0.08);
  width: 100%;
  color: #fff;
}


/*
|------------------------------------------------
| NEW / MODIFIED STYLES (Topbar & Right Actions)
|------------------------------------------------
*/

.topbar {
  /* Ensure the topbar spans the width but is hidden behind the burger */
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 70px; /* Adjust height as needed */
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0 18px; /* Padding on the right side */
  z-index: 190; /* Below the burger, above everything else */
}

.right-actions {
  display: flex;
  gap: 16px; /* Space between the CV button and the project link */
  pointer-events: auto; /* Re-enable pointer events for the actions */
}

/* CV Button - Making it stand out slightly */
.cv-btn {
  all: unset;
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 6px 10px;
  gap: 3px;
  border-radius: 5px;
  font-size: 0.9rem;
  font-weight: 500;
  text-decoration: none;

  /* Your existing glassmorphism background style */
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(4px) saturate(180%);
  -webkit-backdrop-filter: blur(28px) saturate(200%);

  color: #fff; /* White text */
  transition: 0.2s ease-in-out;
}

.cv-btn:hover {
  background: rgba(144, 202, 249, 0.1); /* Subtle light blue hover */
  border-color: rgba(144, 202, 249, 0.3);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
}

/* ApexMotor Project Link (was .holo) */
.project-link {
  all: unset;
  cursor: pointer;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%; /* Circle shape */
  text-decoration: none;

  /* Glass background for the link */
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(28px) saturate(200%);
  -webkit-backdrop-filter: blur(28px) saturate(200%);
  border: 1px solid rgba(255, 255, 255, 0.15);

  color: #90caf9; /* Light blue/cyan for the icon */
  transition: 0.2s ease-in-out;
}

.project-link:hover {
  background: rgba(255, 255, 255, 0.1);
  color: #fff;
  transform: scale(1.05);
}

</style>