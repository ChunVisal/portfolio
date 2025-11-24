<template>
  <section class="hero">
    <div class="hero-content">
      <h1 class="hero-title">
        Building <span class="gradient" >Digital Experiences</span>
      </h1>

      <h2 class="hero-subtitle">
        Full-Stack Developer & Future SoftWare Engineer
      </h2>

      <p class="hero-desc">
        I build modern, clean and powerful digital experiences focused on speed, architect,
        design, performance and user experience.
      </p>

      <div class="hero-buttons">
        <button  class="btn-primary">
          View Projects
        </button>
        <button class="btn-outline">Let's Talk</button>
      </div>
      <!-- make items block same width box -->
       <div class="stack mt-8 flex flex-wrap justify-center gap-3">
          <span class="flex-1">React</span>
          <span class="flex-1">Vue Js</span>
          <span class="flex-1">Typescript</span>
          <span class="flex-1">Node.js</span>
          <span class="flex-1">Sql</span>
          <span class="flex-1">Firebase</span>
       </div>
    </div>
  </section>
</template>

<script setup>

</script>

<style scoped>
.hero {
  min-height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 10px;
  text-align: center;
  position: relative;
  z-index: 190;
}

/* Hero.vue CSS - Replace Existing .hero-content */
.hero-content {
  max-width: 800px;
  
}

/* TITLE */
.hero-title {
  font-family: "Exo 2", sans-serif;
  font-size: clamp(3rem, 4vw, 4rem);
  font-weight: 700;
  letter-spacing: -0.03em;
  color: white;
}

.hero-title .gradient {
  background: linear-gradient(90deg, #6ee7b7 0%, #60a5fa 50%, #c7b3ff 100%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  display: inline-block;
  transition: filter 300ms ease, transform 300ms ease;
  font: inherit;
}

/* SUBTITLE */
.hero-subtitle {
  font-family: "Exo 2", sans-serif;
  font-size: clamp(1.2rem, 2.5vw, 1.8rem);
  font-weight: 350;
  opacity: 0.9;
  color: #ffffff;
}

/* DESCRIPTION */
.hero-desc {
  font-family: "Exo 2", sans-serif;
  font-size: 1rem;
  color: #ffffff;
  margin-top: 10px;
  max-width: 540px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.7;
}

/* BUTTONS CONTAINER */
.hero-buttons {
  display: flex;
  justify-content: center;
  gap: 18px;
  margin-top: 20px;
  pointer-events: auto;
}

/* Hero.vue CSS - FULL REPLACEMENT for .btn-primary */

/* PRIMARY BUTTON (Now the transparent wrapper) */
.btn-primary {
  font-size: 16px;
  font-family: "Exo 2";
  color: rgb(255, 255, 255);
  font-weight: 400;
  cursor: pointer;
  padding: 6px 20px;
  background: rgba(73, 119, 168, 0.213);
  backdrop-filter: blur(10px) saturate(180%);
  -webkit-backdrop-filter: blur(40px) saturate(200%);
  box-shadow: 0 4px 10px rgba(29, 29, 29, 0.148);
  
  border-radius: 6px;
  transform: translateZ(0);
  transition: all 0.3s ease-in-out;
}

/* HOVER EFFECT */
.btn-primary:hover {
  background: rgba(144, 202, 249, 0.1); 
  backdrop-filter: blur(20px);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  transform: translate3d(0, 0, 2px); /* Slight lift */
}

/* OUTLINE BUTTON */
.btn-outline {

  font-size: 16px;
  padding: 6px 20px;
  background: transparent;
  border: 1px solid rgba(188, 188, 188, 0.124);
   backdrop-filter: blur(10px) saturate(180%);
  -webkit-backdrop-filter: blur(40px) saturate(200%);
  box-shadow: 0 4px 10px rgba(29, 29, 29, 0.148);
  border-radius: 6px;
  color: rgb(255, 255, 255);
  inset: 0;
  font-family: "Exo 2";
  font-weight: 400;
  cursor: pointer;
  transition: 0.25s ease;
  box-shadow: 0 4px 10px rgba(29, 29, 29, 0.148);
}

.btn-outline:hover {
  background: rgba(255,255,255,0.08);
}

.stack span {
  display: inline-block;
  background: rgba(73, 119, 168, 0.213);
  backdrop-filter: blur(10px) saturate(180%);
  -webkit-backdrop-filter: blur(40px) saturate(200%);
  box-shadow: 0 4px 10px rgba(29, 29, 29, 0.148);
  color: #ffffff;
  padding: 4px 12px;
  margin: 4px;
  border-radius: 20px;
  font-size: 0.8em;
}


</style>
