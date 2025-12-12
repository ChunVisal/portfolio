<template>
<div class="home-root">
  <!-- <Navbar /> -->
  <section id="home"></section>
  <section id="hero">
    <Hero />
  </section>

  <section id="about">
    <About />
  </section>

  <section id="projects">
    <Projects />
    
  </section>
  <Footer id="contact" />
</div>

</template>

<script setup>
// import Navbar from "../components/Navbar.vue";
import Hero from "../components/Hero.vue";
import About from "../components/About.vue";
import Projects from "../components/Projects.vue";
import Footer from "../components/Footer.vue";
</script>

<style scoped>
 .home-root {
    backdrop-filter: blur(1px);
 }
</style>