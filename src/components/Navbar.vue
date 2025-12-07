<template>
  <div class="topbar" :class="{ visible: isVisible, hidden: !isVisible }">
    <button class="x-burger" @click="open = !open" aria-label="Menu">
      <span />
      <span />
      <span />
    </button>

    <div class="right-actions">
      <RouterLink to="/mycv" class="cv-btn">
        <VueFeather type="user" class="icon-spacing" size="14"/>
        CV
      </RouterLink>
    </div>
  </div>

  <div class="x-backdrop" v-if="open" @click="open = false"></div>

  <aside class="x-drawer" :class="{ show: open }">
    <nav>
      <a
        v-for="(item, i) in links"
        :key="i"
        @click.prevent="scrollTo(item)"
      >
        {{ item }}
      </a>
    </nav>
  </aside>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()

const open = ref(false)
const isVisible = ref(false)   // ⭐ Start visible so navbar shows on load
const links = ["Home", "Hero", "About", "Projects", "Contact"]

const scrollTo = async (section) => {
  const id = section.toLowerCase()

  if (section === "Home") {
    // Navigate home first if you're not already on it
    if (router.currentRoute.value.path !== "/") {
      await router.push("/")
      
      // Wait for DOM load
      requestAnimationFrame(() => {
        window.scrollTo({ top: 0, behavior: "smooth" })
      })
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" })
    }

    open.value = false
    return
  }

  // Scroll inside same page
  const el = document.getElementById(id)
  if (el) {
    el.scrollIntoView({ behavior: "smooth" })
  } else {
    // If this section isn't on this page → go home then scroll
    await router.push("/")

    setTimeout(() => {
      const target = document.getElementById(id)
      target?.scrollIntoView({ behavior: "smooth" })
    }, 300)
  }

  open.value = false
}


let scrollTimer = null

const handleScroll = () => {
  isVisible.value = false

  clearTimeout(scrollTimer)
  scrollTimer = setTimeout(() => {
    isVisible.value = true
  }, 150)
}

onMounted(() => {
  window.addEventListener("scroll", handleScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll)
  clearTimeout(scrollTimer)
})
</script>

<style scoped>
/* Topbar base styles with transitions */
.topbar {
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0 15px;
  z-index: 190;

  transition: opacity 0.3s ease, transform 0.3s ease;
  opacity: 0;
  transform: translateY(-10px);
  pointer-events: none;
}

/* Visible state */
.topbar.visible {
  opacity: 1;
  transform: translateY(0);
  pointer-events: auto;
}

/* Hidden state */
.topbar.hidden {
  opacity: 0;
  transform: translateY(-10px);
  pointer-events: none;
}

/* Ensure burger button is always clickable */
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
  padding: 8px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(2px);
  pointer-events: auto;
  transition: opacity 0.3s ease;
}

.topbar.hidden ~ .x-burger {
  opacity: 0.7;
}

.topbar.visible ~ .x-burger {
  opacity: 1;
}

.x-burger span {
  width: 20px;
  height: 2px;
  background: rgba(255,255,255,0.85);
  display: block;
  transition: 0.25s ease;
}

/* BACKDROP */
.x-backdrop {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.25);
  backdrop-filter: blur(4px);
  z-index: 150;
}

/* DRAWER */
.x-drawer {
  position: fixed;
  top: 0;
  left: 0;
  width: 150px;
  height: 100vh;
  padding: 60px 0 0 !important;
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

.x-drawer nav {
  display: flex;
  flex-direction: column;
}

.x-drawer a {
  display: block;
  padding: 10px 0;
  text-indent: 18px;
  color: rgba(255,255,255,0.82);
  font-size: 1rem;
  font-weight: 350;
  font-family: "Exo 2", sans-serif;
}

.x-drawer a:hover {
  background: rgba(255,255,255,0.08);
  color: #fff;
}

.right-actions {
  display: flex;
  gap: 16px;
  pointer-events: auto;
}

/* CV Button */
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
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(2px);
  color: #fff;
  transition: 0.2s ease-in-out;
}

.cv-btn:hover {
  background: rgba(144, 202, 249, 0.1);
  border-color: rgba(144, 202, 249, 0.3);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
}
</style>
