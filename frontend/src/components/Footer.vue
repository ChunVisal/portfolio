<template>
  <!-- I changed something -->
  <footer class="portfolio-footer">

    <div class="grid">
      <div class="footer-top-section">

        <div class="footer-col navigate-col">
          <h3 class="col-title">NAVIGATE</h3>
          <ul>
            <li @click="scrollToTop"><font-awesome-icon :icon="['fas', 'star']" style="color: darkorchid;" class="link-bullet" /> Home</li>
            <li @click="scrollToAbout"><font-awesome-icon :icon="['fas', 'star']" style="color: darkorchid;" class="link-bullet" /> About</li>
            <li @click="scrollToProjects"><font-awesome-icon :icon="['fas', 'star']" style="color: darkorchid;" class="link-bullet" /> Projects</li>
            <li><font-awesome-icon :icon="['fas', 'star']" style="color: darkorchid;" class="link-bullet" /> Portfolio</li>
            <li @click="NotAvailableYet"><font-awesome-icon :icon="['fas', 'star']" style="color: darkorchid;" class="link-bullet" /> Services</li>
          </ul>
        </div>

        <div class="footer-col resources-col">
          <h3 class="col-title">RESOURCES</h3>
          <ul>
            <li>
              <a href="/public/chunvisal.pdf" download class="flex items-center gap-2">
                <font-awesome-icon :icon="['fas', 'star']" style="color: darkorchid;" class="link-bullet" />
                Download CV
              </a>
            </li>
            <li><font-awesome-icon :icon="['fas', 'star']" style="color: darkorchid;" class="link-bullet" /> Website Templates</li>
            <form @submit.prevent="submitComment" class="flex gap-3">
              <input 
                v-model="comment" 
                type="text" 
                placeholder="Comment"
                class="p-1 px-2 border-2 border-gray-300 rounded-sm"
              />
              <button type="submit" class="bg-purple-800 px-5 rounded-sm">
                Submit
              </button>
              <button type="button" @click="loadComments"> 
                See Commment </button>
            </form>
          </ul>
        </div>
        
        <div v-if="comments.length" class="mt-3">
          <h3 class="font-bold">Your Comments:</h3>
          <ul>
            <li v-for="c in comments" :key="c.id">
              {{ c.message }}
            </li>
          </ul>
        </div>
        
      </div>

      <div class="footer-bottom-section">
        <div class="copyright-area">
          <p class="reserved-text">ALL RIGHTS RESERVED.</p>
          <p class="copyright-main">JOE NARTHAN CODES</p>
        </div>

        <div class="local-time-area flex items-center gap-2">
          <font-awesome-icon :icon="['fas','clock']" class="text-purple-300" />
          <span>{{ localTime }}</span>
          <font-awesome-icon :icon="['fas','globe-asia']" class="text-blue-300 ml-1" />
        </div>

        <div class="social-links">
          <a href="https://github.com/JoeNarthan" target="_blank">
            <font-awesome-icon :icon="['fab','github']" style="color:#ffffff;" />
            <span>GitHub</span>
          </a>

          <a href="https://www.linkedin.com/in/visal-sal-54b615349" target="_blank">
            <font-awesome-icon :icon="['fab','linkedin']" style="color:#0A66C2;" />
            <span>LinkedIn</span>
          </a>

          <a href="mailto:vsal0882@gmail.com">
            <font-awesome-icon :icon="['fas','envelope']" style="color:#ff4747;" />
            <span>Email</span>
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import {ref, onMounted } from 'vue' // Removed 'watch'

const localTime = ref('')

onMounted(() => {
  updateTime()
  setInterval(updateTime, 1000)
})

function updateTime() {
  const now = new Date()

  const time = now.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true
  })

  // Cambodia = UTC +7 (fixed offset)
  localTime.value = `${time} GMT +7`
}

const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
};

const scrollToAbout = () => {
  document.getElementById("about").scrollIntoView({ behavior: "smooth" });
};

const scrollToProjects = () => {
  document.getElementById("projects").scrollIntoView({ behavior: "smooth" });
};

const NotAvailableYet = () => {
    window.alert("I am not available yet")
} 
const comment = ref('')
const comments = ref([])

// Removed showCommentsModal and loadingComments refs

const BACKEND_URL = 'https://portfolio-backend-production-85fd.up.railway.app';

const submitComment = async () => {
    if (!comment.value.trim()) {
        alert('Please type a comment first')
        return
    }

    try {
        const res = await fetch(`${BACKEND_URL}/add-comment`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ message: comment.value })
        })

        if (!res.ok) {
            const errorData = await res.json().catch(() => ({ details: 'No JSON response body' }));
            alert(`Server Failed: ${res.status} - ${errorData.details || errorData.error}`);
            return
        }

        // Success
        alert('Comment submitted successfully!');
        comment.value = ''

    } catch (err) {
        console.error('Network or CORS error:', err)
        alert('Failed to send to backend. Check console / CORS fix in server.js.');
    }
}

const loadComments = async () => {
    // Removed loadingComments.value = true;
    comments.value = []; // Clear old comments while loading

    try {
        const res = await fetch(`${BACKEND_URL}/comments`);

        if (!res.ok) {
            alert(`Failed to load comments: ${res.status}`);
            return;
        }

        const data = await res.json();
        comments.value = data;

    } catch (err) {
        console.error("Fetch/CORS Error:", err);
        alert('Failed to load comments. Check console for CORS error.');
    } 
    // Removed finally block
};
</script>

<style scoped>
/*
  ==============================================
  AESTHETIC: High-contrast, dark blue gradient, modern/bold typography.
  ==============================================
*/
.portfolio-footer {
    /* Dark blue gradient background matching the image's "vibe" */
    background: linear-gradient(to top, #001f4016 0%, #0000001d 100%); 
    color: #fff;
    padding: 1rem 2rem 2rem 2rem; /* Increased vertical padding */
    min-height: 450px; 
    position: relative;
    overflow: hidden;
}

/* --- TOP SECTION (Links) --- */
.footer-top-section {
    /* Desktop: 2 columns */
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    max-width: 1400px;
    gap: 3rem;
}

/* Mobile Responsiveness: Stacks columns below 768px */
@media (max-width: 768px) {
    .footer-top-section {
        grid-template-columns: 1fr; /* Forces a single column layout */
    }
}

.col-title {
    font-size: 1.25rem;
    font-weight: 700;
    color: #fff;
    margin-bottom: 1.5rem;
    display: inline-flex;
    letter-spacing: 2px;
      background: linear-gradient(135deg, #ffffff 0%, #7a38bc 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

.footer-col ul {
    list-style: none;
    padding: 0;
    margin: 0;
}

.footer-col li {
    font-size: 1rem;
    color: #ccc;
    margin-bottom: 0.75rem;
    transition: color 0.2s;
    cursor: pointer;
}

.footer-col li:hover {
    color: #4FC08D; /* Vue Green accent on hover */
}

.link-bullet {
    color: #4FC08D; /* Small star icon color */
    margin-right: 0.5rem;
    font-size: 0.75rem;
}

/* --- BOTTOM SECTION (Copyright & Time) --- */
.footer-bottom-section {
    /* Desktop: Spaced out */
    display: flex;
    justify-content: space-between;
    align-items: flex-end; 
    max-width: 1400px;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    padding-top: 2rem;
}

/* Tablet/Mobile: Stack elements vertically */
@media (max-width: 1024px) {
    .footer-bottom-section {
        flex-direction: column;
        align-items: flex-start;
        gap: 2rem;
    }
}

/* Copyright Area */
.reserved-text {
    font-size: 0.8rem;
    color: #a0a0a0;
    letter-spacing: 1px;
}

.copyright-main {
    font-size: 1.8rem;
    font-weight: 700;
    line-height: 1.1;
    margin: 0;
    color: #fff;
    white-space: nowrap;

      background: linear-gradient(135deg, #ffffff 0%, #7a38bc 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}
@media (max-width: 768px) {
    .copyright-main {
        font-size: 1.8rem;
    }
}

.grid {
    overflow: hidden;
    position: relative;
    width: 100%;
    margin: 0 auto;
    max-width: 1300px;
}
/* Local Time Area */
.local-time-area {
    text-align: right;
}

/* Scroll to Top Button */
.scroll-to-top-btn {
    /* Fixed position is generally better for this type of utility button */
    position: fixed; 
    right: 20px;
    bottom: 20px;
    background-color: #4FC08D; /* Vue Green accent */
    color: white;
    width: 50px;
    height: 50px;
    border: none;
    border-radius: 50%; /* Make it round */
    cursor: pointer;
    font-size: 1.2rem;
    box-shadow: 0 4px 10px rgba(79, 192, 141, 0.5); 
    z-index: 1000; /* Ensure it's on top */
    transition: background-color 0.2s, transform 0.2s;
}

.scroll-to-top-btn:hover {
    background-color: #3b9e71;
    transform: scale(1.05);
}

.social-links {
    display: flex;
    gap: 1.5rem;
    align-items: center;
    flex-wrap: wrap; /* prevents overflow */
}

.social-links a {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: #ccc;
    font-size: 1rem;
    text-decoration: none;
    transition: 0.2s;
    white-space: nowrap; /* text never breaks weirdly */
}

.social-links a:hover {
    color: #4FC08D;
}

.social-links svg {
    font-size: 1.2rem;
}

</style>