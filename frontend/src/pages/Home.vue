<template>
  <img
    src="/seo-preview.png"
    alt="Chun Visal Full-Stack Developer Portfolio"
    width="1200"
    height="630"
    loading="eager"
    style="position: absolute; left: -9999px"
  />

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

import { useHead } from "@vueuse/head";
import { defaultSeo } from "../seo/defaultSeo";

useHead({
  title: defaultSeo.title,
  meta: [
    { name: "description", content: defaultSeo.description },

    { property: "og:type", content: "website" },
    { property: "og:title", content: defaultSeo.title },
    { property: "og:description", content: defaultSeo.description },
    { property: "og:image", content: defaultSeo.image },
    { property: "og:url", content: defaultSeo.url },

    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: defaultSeo.title },
    { name: "twitter:description", content: defaultSeo.description },
    { name: "twitter:image", content: defaultSeo.image },
  ],
  link: [{ rel: "canonical", href: defaultSeo.url }],
});
</script>

<style scoped>
.home-root {
  backdrop-filter: blur(1px);
}
</style>
