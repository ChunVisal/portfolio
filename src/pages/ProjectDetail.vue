<template>
  <section class="project-detail">

    <div class="detail-container">

      <div class="left-side">
        <RouterLink to="/" class="btn go-back-btn">
          ← Back to Projects
        </RouterLink>
        <img 
          :src="activeImage" 
          class="main-img"
          @click="openModal" 
        />

        <div class="gallery">
          <img
            v-for="img in allProjectImages" 
            :src="img"
            :key="img"
            @click="activeImage = img"
            class="thumb"
          />
        </div>

      </div>

      <div class="right-side">

        <div class="header">
          <img :src="project.logoBrand" class="brand-logo" />
          <div>
            <h1 class="title">{{ project.title }} </h1>
            <p class="short">{{ project.shortDescription }}</p>
            <p class="meta">{{ project.date }} — {{ project.status }}</p>
          </div>
        </div>

        <div class="links">
          <a v-if="project.demo" :href="project.demo" target="_blank" class="btn primary">Live Demo</a>
            <div>

            </div>

          <a v-if="project.github" :href="project.github" target="_blank" class="btn secondary">GitHub</a>
        </div>

        <div class="section">
          <div class="tech">
            <h2>Technologies</h2>
            <div class="tags">
              <span v-for="t in project.tech" :key="t">
                <font-awesome-icon 
                  :icon="getTechIcon(t).icon" 
                  size="sm" 
                  class="tech-icon"
                  :style="{ color: getTechIcon(t).color }" 
                />
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
            <li v-for="l in project.whatILearned" :key="l"><VueFeather class="arrow-right" size="20" type="arrow-right" />{{ l }}</li>
          </ul>
        </div>

        <div class="section">
          <h2>Features</h2>
          <ul>
            <li v-for="f in project.features" :key="f"><VueFeather class="arrow-right" size="20" type="arrow-right" />{{ f }}</li>
          </ul>
        </div>

      </div>

    </div>
    

  <div v-if="showModal" class="lightbox-overlay" @click.self="closeModal">
    <div class="lightbox-content">
      <button @click="closeModal" class="lightbox-close">X</button>
      <img :src="activeImage" class="lightbox-img" />
    </div>
  </div>
  </section>
</template>

<script>
import { projects } from "../data/project.js";
import VueFeather from 'vue-feather'; // Make sure you have installed: npm install vue-feather

export default {
  components: {
    VueFeather
  },
  data() {
    return {
      project: null,
      activeImage: null,
      showModal: false,
    };
  },
  created() {
    const id = this.$route.params.id;
    const foundProject = projects.find(p => p.id == id);

    if (foundProject) {
        this.project = foundProject;
        // Initialize the main image
        this.activeImage = this.project.thumbnail;
    } else {
        console.error("Project not found with ID:", id);
    }
  },
  computed: {
    allProjectImages() {
      if (!this.project) {
        return [];
      }
      
      let allImages = [];
      const imageSet = new Set();
      
      // 1. Add the main thumbnail first
      if (this.project.thumbnail) {
        const thumbUrl = this.project.thumbnail;
        allImages.push(thumbUrl);
        imageSet.add(thumbUrl);
      }
      
      // 2. Add gallery images, ensuring they are unique and valid
      if (this.project.images && Array.isArray(this.project.images)) {
        for (const imgUrl of this.project.images) {
          if (imgUrl && !imageSet.has(imgUrl)) {
            allImages.push(imgUrl);
            imageSet.add(imgUrl);
          }
        }
      }
      
      return allImages; 
    }
  },
  methods: { 
    getTechIcon(techName) {
      let icon = ['fas', 'star'];
      let color = '#888888';

      switch (techName.toLowerCase()) {
        case 'react':
          icon = ['fab', 'react'];
          color = '#61DAFB';
          break;
        case 'tailwind':
          icon = ['fas', 'wind'];
          color = '#06B6D4';
          break;
        case 'firebase':
          icon = ['fas', 'fire'];
          color = '#FFCA28';
          break;
        case 'node':
          icon = ['fas', 'server'];
          color = '#68A063';
          break;
        case 'vue':
          icon = ['fab', 'vuejs'];
          color = '#4FC08D';
          break;
        case 'gsap':
          icon = ['fas', 'bolt'];
          color = '#88CE02';
          break;
        default:
          break;
      }

      return { icon, color };
    },
    openModal() {
        this.showModal = true;
    },
    closeModal() {
        this.showModal = false;
    },
  }
};
</script>

<style>
/* --- BASE STYLES --- */
.project-detail {
    padding: 4rem 0;
    color: white;
    
    backdrop-filter: blur(1px);
}

.detail-container {
    max-width: 1200px;
    width: 92%;
    margin: auto;
    display: grid;
    /* Desktop two-column layout */
    grid-template-columns: 1.1fr 0.9fr; 
    gap: 2.5rem;
}

.left-side {
  position: sticky;
  top: 1rem;  /* or 0 */
  height: fit-content;
}

.main-img {
    width: 100%;
    border-radius: 8px;
    margin-bottom: 0.8rem;
    cursor: pointer;
}

.gallery {
    display: flex;
    gap: 0.6rem;
}

.thumb {
    width: 30%;
    border-radius: 6px;
    opacity: 0.7;
    cursor: pointer;
    transition: .2s;
}

.thumb:hover {
    opacity: 1;
}

.right-side {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.header {
    padding: 0.5rem 0rem; 
    display: flex;
    gap: 1rem;
    align-items: center;
}

.brand-logo {
    width: 65px;
    height: 65px;
    flex-shrink: 0; 
}

.header > div {
    flex-grow: 1;
    margin: 0;
    padding: 0; 
}

.title {
    font-size: 1.5rem;
    font-weight: 600;
    letter-spacing: -0.01em; 
    line-height: 1.4;
}

.short {
    color: rgba(255,255,255,0.75);
    margin: 0;
    line-height: 1;
}

.meta {
    font-size: clamp(0.9rem, 1.5vw, 1rem);
    color: rgba(255,255,255,0.55);
    margin: 0;
    line-height: 2;
}

.links {
    display: flex;
    gap: .4rem;
}

.btn {
    padding: 0.4rem 1.3rem !important;
    border-radius: 5px !important;
    font-size: .2rem;
    font-weight: 600;
    transition: .2s;
}

.btn.primary {
    background: linear-gradient(135deg, #667eea, #764ba2);
}

.btn.secondary {
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(2px);
    border: 1px solid rgba(255,255,255,0.15);
}

.section h2 {
    font-size: 1rem;
    text-transform: uppercase;
    letter-spacing: .04em;
    color: rgba(255,255,255,0.75);
    margin-bottom: .6rem;
}

.tags {
    display: flex;
    gap: .5rem;
    flex-wrap: wrap;
    text-align: center;
}

.tags span {
    padding: .35rem .8rem !important;
    background: rgba(255,255,255,0.12);
    border-radius: 6px;
    font-size: .9rem;
    cursor: pointer;
}

.section ul {
    margin: 0;
}

.section ul li {
    margin-bottom: .2rem;
    color: rgba(255,255,255,0.8);
    display: flex;
    align-items: center;
    gap:10px
}

/* --- LIGHTBOX/MODAL STYLES --- */
.lightbox-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.9);
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
    max-height: 100%;
    display: block;
    border-radius: 8px;
}

.lightbox-close {
    position: absolute;
    top: -30px;
    right: -10px;
    background: gray;
    border: none;
    color: black;
    padding: 0px 10px;
    border-radius: 50%;
    font-size: 24px;
    cursor: pointer;
    z-index: 1001;
}

/* --- MOBILE RESPONSIVENESS FIX --- */
@media (max-width: 768px) {
    /* Switch to single column */
    .detail-container {
        grid-template-columns: 1fr; 
        gap: 2rem; 
    }
    
    /* Ensure image comes first */
    .left-side {
        order: 1; 
    }
    
    .right-side {
        order: 2; 
    }

    /* Adjust sizing */
    .brand-logo {
        width: 50px;
        height: 50px;
    }

    .title {
        font-size: 1.4rem;
    }
}

.btn {
    padding: 0.4rem 1.3rem !important;
    border-radius: 5px !important;
    font-size: .2rem;
    font-weight: 600;
    transition: .2s;
}

/* 💡 NEW: Style for the Go Back button */
.btn.go-back-btn {
    display: block; /* Make it take full width of its container if needed, or inline-block */
    padding: 0.5rem 1rem !important;
    background: none;
    border: none;
    color: rgba(255, 255, 255, 0.7);
    font-size: 1rem;
    font-weight: 400;
    text-align: left;
    margin-bottom: 0.5rem;
    cursor: pointer;
    transition: color 0.2s;
}

.btn.go-back-btn:hover {
    color: white;
    text-decoration: underline;
}

</style>