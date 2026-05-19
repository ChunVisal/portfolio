<template>
  <section class="project-detail">
    <div class="detail-container">
      <div class="left-side">
        <RouterLink to="/" class="btn go-back-btn">
          ← Back to Projects
        </RouterLink>
        <div class="image-container">
          <img :src="activeImage" class="main-img" @click="openModal" />
        </div>

        <div class="gallery">
          <img v-for="img in allProjectImages" :src="img" :key="img" @click="activeImage = img; scrollToTop()"
            class="thumb" />
        </div>

        <div class="section">
          <h2>Features</h2>
          <ul>
            <li v-for="f in project.features" :key="f">
              <VueFeather class="arrow-right" size="20" type="arrow-right" />{{ f }}
            </li>
          </ul>
        </div>
      </div>

      <div class="right-side">
        <div class="header">
          <img :src="project.logoBrand" class="brand-logo" />
          <div>
            <h1 class="title">{{ project.title }}</h1>
            <p class="short">{{ project.shortDescription }}</p>
            <p class="meta">{{ project.date }} — {{ project.status }}</p>
          </div>
        </div>

        <div class="links">
          <a v-if="project.demo" :href="project.demo" target="_blank"
            class="btn primary inline-flex items-center justify-center">
            <span>Live Demo</span>
            <VueFeather type="arrow-up-right" size="18" class="btn-icon" />
          </a>
          <a v-if="project.github" :href="project.github" target="_blank" class="btn secondary">
            GitHub
          </a>
        </div>

        <div class="section">
          <div class="tech">
            <h2>Technologies</h2>
            <div class="tags">
              <span v-for="t in project.tech" :key="t">
                <img :src="getTechIconUrl(t)" class="tech-icon-img" :alt="t" />
                {{ t }}
              </span>
            </div>
          </div>
        </div>

        <div class="section">
          <h2>Overview</h2>
          <p>{{ project.longDescription }}</p>
        </div>

        <div class="section">
          <h2>What I Did</h2>
          <ul>
            <li v-for="l in project.whatILearned" :key="l">
              <VueFeather class="arrow-right" size="20" type="arrow-right" />{{ l }}
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div v-if="showModal" class="lightbox-overlay" @click.self="closeModal">
      <div class="lightbox-content">
        <button @click="closeModal" class="lightbox-close">✕</button>
        <img :src="activeImage" class="lightbox-img" />
      </div>
    </div>
  </section>
</template>

<script>
import { projects } from "../data/project.js";
import VueFeather from "vue-feather";
import { techIcons } from "../data/techIcons.js";
import { useHead } from "@vueuse/head";

export default {
  components: { VueFeather },

  data() {
    return {
      project: null,
      activeImage: null,
      showModal: false,
    };
  },

  created() {
    const id = this.$route.params.id;
    const foundProject = projects.find((p) => p.id == id);

    if (!foundProject) {
      console.error("Project not found:", id);
      return;
    }

    this.project = foundProject;
    this.activeImage = this.project.thumbnail;

    useHead({
      title: `${this.project.title} | Chun Visal`,
      meta: [
        { name: "description", content: this.project.shortDescription || this.project.longDescription },
        { property: "og:type", content: "website" },
        { property: "og:title", content: `${this.project.title} | Chun Visal` },
        { property: "og:description", content: this.project.shortDescription },
        { property: "og:image", content: this.project.thumbnail },
        { property: "og:url", content: `https://chunvisal.pro/project/${this.project.id}` },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: `${this.project.title} | Chun Visal` },
        { name: "twitter:description", content: this.project.shortDescription },
        { name: "twitter:image", content: this.project.thumbnail },
      ],
      link: [{ rel: "canonical", href: `https://chunvisal.pro/project/${this.project.id}` }],
    });
  },

  computed: {
    allProjectImages() {
      if (!this.project) return [];
      const images = new Set();
      if (this.project.thumbnail) images.add(this.project.thumbnail);
      if (Array.isArray(this.project.images)) {
        this.project.images.forEach((img) => img && images.add(img));
      }
      return Array.from(images);
    },
  },

  methods: {
    getTechIconUrl(techName) {
      return techIcons[techName]?.url || "";
    },

    scrollToTop() {
      window.scrollTo({ top: 0, behavior: "smooth" });
    },

    openModal() {
      this.showModal = true;
      document.body.style.overflow = "hidden";
    },

    closeModal() {
      this.showModal = false;
      document.body.style.overflow = "";
    },
  },
};
</script>
<style scoped>
.project-detail {
  width: 100%;
  max-width: 100%;
  padding: 60px 20px;
  color: white;
  overflow-x: hidden;
  position: relative;
  background: transparent;
  backdrop-filter: blur(1px);

}

.detail-container {
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  gap: 40px;
  flex-wrap: wrap;
}

/* LEFT SIDE */
.left-side {
  flex: 1.2;
  min-width: 280px;
}

.image-container {
  width: 100%;
  border-radius: 12px;
  overflow: hidden;
}

.main-img {
  width: 100%;
  height: auto;
  max-height: 400px;
  object-fit: cover;
  border-radius: 12px;
  cursor: pointer;
}

.gallery {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
  margin: 15px 0;
}

.thumb {
  width: 100%;
  height: 80px;
  object-fit: cover;
  border-radius: 8px;
  cursor: pointer;
}

/* RIGHT SIDE */
.right-side {
  flex: 0.8;
  min-width: 280px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.header {
  display: flex;
  gap: 1rem;
  align-items: center;
}

.brand-logo {
  width: auto;
  height: 65px;
  flex-shrink: 0;
}

.title {
  font-size: 1.2rem;
}

.short {
  color: #bbb;
  font-size: 0.9rem;
}

.meta {
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.55);
  margin: 4px 0 0;
  padding: 0;
  line-height: 1.2;
}

.links {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}

.btn {
  padding: 8px 10px;
  border-radius: 8px;
  font-size: 0.85rem;
  font-weight: 600;
  text-decoration: none;
  display: inline-block;
  cursor: pointer;
}

.btn.primary {
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: white;
  border: none;
}

.btn.secondary {
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: white;
}

.btn.go-back-btn {
  background: none;
  border: none;
  color: #aaa;
  padding: 0;
  margin-bottom: 15px;
  font-size: 0.9rem;
  cursor: pointer;
  display: inline-block;
}

.btn.go-back-btn:hover {
  color: white;
}


.section h2 {
  font-size: 1rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: #aaa;
  margin-bottom: 10px;
}

.tags {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}

.tags span {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 5px 12px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  font-size: 0.8rem;
}

.tech-icon-img {
  width: 16px;
  height: 16px;
}

.section ul {
  list-style: none;
  padding-left: 0;
}

.section ul li {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 8px;
  color: #ccc;
}

/* LIGHTBOX */
.lightbox-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.95);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.lightbox-content {
  position: relative;
  max-width: 90vw;
  max-height: 90vh;
}

.lightbox-img {
  max-width: 100%;
  max-height: 90vh;
  object-fit: contain;
  border-radius: 8px;
}

.lightbox-close {
  position: absolute;
  top: -40px;
  right: -40px;
  background: #333;
  border: none;
  color: white;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  font-size: 20px;
  cursor: pointer;
}

/* MOBILE */
@media (max-width: 768px) {
  .detail-container {
    flex-direction: column;
    gap: 30px;
  }

  .left-side {
    flex: auto;
  }

  .main-img {
    max-height: 300px;
  }

  .gallery {
    grid-template-columns: repeat(4, 1fr);
  }

  .thumb {
    height: 60px;
  }

  .brand-logo {
    height: 45px;
  }

  .title {
    font-size: 1.4rem;
  }

  .lightbox-close {
    top: -50px;
    right: 0;
  }
}

@media (max-width: 480px) {
  .project-detail {
    padding: 40px 15px;
  }

  .main-img {
    max-height: 220px;
  }

  .thumb {
    height: 50px;
  }

  .title {
    font-size: 1.2rem;
  }

  .header {
    flex-direction: column;
    text-align: center;
  }

  .btn {
    padding: 6px 15px;
    font-size: 0.75rem;
  }
}
</style>