<template>
  <!-- Scroller container - minimal styling -->
  <div class="scroller">
    <!-- Inner container for the animation -->
    <div class="tag-list">
      
      <!-- Repeat the entire tech stack twice for the seamless loop -->
      <div v-for="n in 2" :key="n" class="tech-group">
        
        <!-- Wrapper for each card (New: tech-card-container for positioning the hover info) -->
        <div 
          v-for="tech in allTech" 
          :key="tech + n" 
          class="tech-card-container"
        >
          <span class="tag">
            <!-- Default visible content (Icon and Name) -->
            <div class="tag-content">
              <font-awesome-icon 
                :icon="getTechIcon(tech).icon" 
                size="xl" 
                :style="{ color: getTechIcon(tech).color }" 
                class="tag-icon"
              />
              <span class="tag-name">{{ tech }}</span>
            </div>
          </span>
          
          <!-- Hover Info positioned OUTSIDE and below the tag -->
          <div class="tag-info">
            <p>{{ getTechIcon(tech).info }}</p>
          </div>
        </div>
        
      </div>
      
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

// Define the tech stack data (now combined into one list for simple flowing layout)
const allTech = ref([
  // Frontend
  'HTML', 'CSS', 'JavaScript', 'Vue', 'React', 'Tailwind',
  // Backend
  'Node.js', 'Express', 'SQL', 'Firebase',
  // Tools
  'Postman', 'VS Code', 'Figma', 'Git', 'GitHub',
  // Languages
  'C', 'C++'
]);

// Map technology names to Font Awesome icons, colors, and detailed, experience-based information
const techMap = {
  // Frontend
  'HTML': { 
    icon: ['fab', 'html5'], 
    color: '#E34F26', 
    info: 'I structure web pages using semantic elements like <header>, <nav>, <section>, <aside>, and <footer>. I can plan clean parent–child layouts and organize UI with Grid for strong visual structure.' 
  },

  'CSS': { 
    icon: ['fab', 'css3'], 
    color: '#1572B6', 
    info: 'I build flexible layouts using nested Flexbox structures, ensuring every UI behaves smoothly across zoom levels, desktops, and mobile screens for the best user experience.' 
  },

  'JavaScript': { 
    icon: ['fab', 'js'], 
    color: '#F7DF1E', 
    info: 'I fetch APIs from localhost, handle JSON, manage responses with async/await, and catch errors. I use DOM events, listeners, and manage basic data with localStorage for UI interactions.' 
  },

  'Vue': { 
    icon: ['fab', 'vuejs'], 
    color: '#4FC08D', 
    info: 'I work with Vue Router, props, event handling, and basic API integration. I can build structured, reactive pages across multiple components.' 
  },

  'React': { 
    icon: ['fab', 'react'], 
    color: '#61DAFB', 
    info: 'I build pages using React Router, props, useState, useEffect, and handle API data across components. I also manage form handling and data flow between files.' 
  },

  'Tailwind': { 
    icon: ['fas', 'wind'], 
    color: '#06B6D4', 
    info: 'I customize Tailwind themes, build responsive UIs with breakpoints like sm, md, lg, xl, and create clean layouts using spacing, flex utilities, and responsive visibility classes.' 
  },

  // Backend
  'Node.js': { 
    icon: ['fab', 'node-js'], 
    color: '#339933', 
    info: 'I build backend logic and connect APIs to the frontend using Express, focusing on structured routing and server–client data flow.' 
  },

  'Express': { 
    icon: ['fas', 'server'], 
    color: '#CCCCCC', 
    info: 'I design routes, endpoints, middleware, and CRUD operations to support full functional APIs.' 
  },

  'SQL': { 
    icon: ['fas', 'database'], 
    color: '#00758F', 
    info: 'I create and organize database tables, define relationships, and implement full CRUD operations for structured data management.' 
  },

  'Firebase': { 
    icon: ['fas', 'fire'], 
    color: '#FFCA28', 
    info: 'I set up Firebase, use Authentication (including third-party login), manage Firestore data, and perform CRUD actions with proper user access control.' 
  },

  // Tools
  'Postman': { 
    icon: ['fas', 'bolt'], 
    color: '#FF6C37', 
    info: 'I test APIs, inspect responses, send body payloads, and verify CRUD operations during backend development.' 
  },

  'VS Code': { 
    icon: ['fas', 'code'], 
    color: '#007ACC', 
    info: 'I efficiently work with VS Code using extensions, shortcuts, debugging tools, and workspace management for fast development.' 
  },

  'Figma': { 
    icon: ['fab', 'figma'], 
    color: '#F24E1E', 
    info: 'I convert design concepts and wireframes into functional UIs, keeping layouts clean and matching the original mockups.' 
  },

  'Git': { 
    icon: ['fab', 'git'], 
    color: '#F05032', 
    info: 'I manage commits, branches, merges, and maintain clean version history during development.' 
  },

  'GitHub': { 
    icon: ['fab', 'github'], 
    color: '#FFFFFF', 
    info: 'I collaborate using pull requests, keep repositories organized, and push production-ready code.' 
  },

  // Languages
  'C': { 
    icon: ['fas', 'code'], 
    color: '#A8B9C8', 
    info: 'I understand low-level logic, memory concepts, and data structures, using C to build foundational algorithms.' 
  },

  'C++': { 
    icon: ['fas', 'code'], 
    color: '#00599C', 
    info: 'I work with classes, object-oriented design, and algorithmic structures to build efficient C++ programs.' 
  },

  // Unused — but ready when you're ready
  'AWS': { 
    icon: ['fab', 'aws'], 
    color: '#FF9900', 
    info: 'Currently learning AWS to expand backend and deployment capabilities.' 
  }
};


// Method to safely retrieve icon and color based on technology name
const getTechIcon = (techName) => {
  const normalizedName = techName.includes('.') ? techName : techName;
  return techMap[normalizedName] || { icon: ['fas', 'code'], color: '#AAAAAA', info: 'No information available.' };
};
</script>

<style scoped>
/* =================== */
/* 🛠️ KEY SCROLLING STYLES 🛠️ */
/* =================== */
.scroller {
  overflow: hidden;
  position: relative; 
  /* FIX: Minimal top padding now that hover is at the bottom */
  padding: 1rem 0; 
  /* FIX: Increased bottom padding (150px) to prevent the bottom hover box from being clipped. */
  padding-bottom: 100px; 
  mask-image: linear-gradient(to right, 
    hsl(0 0% 0% / 0), 
    hsl(0 0% 0% / 1) 10%, 
    hsl(0 0% 0% / 1) 90%, 
    hsl(0 0% 0% / 0)
  );
  
  position: relative;
  width: 100%;
  margin: 0 auto;
  max-width: 1300px;
}

.tag-list {
  display: flex;
  animation: scroll 40s linear infinite; 
  width: max-content; 
  gap: 1rem;
}

.tech-group {
  display: flex;
  gap: 1rem;
  flex-shrink: 0; 
}

@keyframes scroll {
  to {
    transform: translate(calc(-50% - 0.5rem)); 
  }
}

.scroller:hover .tag-list {
  animation-play-state: paused;
}


/* =================== */
/* 🎨 ICON, NAME, & HOVER STYLES 🎨 */
/* =================== */

/* Wrapper for positioning the info block */
.tech-card-container {
    position: relative; /* All children are positioned relative to this */
    flex-shrink: 0;
    height: 70px; 
    width: 70px; 
    z-index: 1; /* Establish a default stacking context */
}

/* FIX: Elevate the entire container on hover instantly for correct stacking order */
.tech-card-container:hover {
    z-index: 1000; /* Use a very high z-index to guarantee it's above neighbors */
}


.tag {
  /* Enforcing fixed dimensions, this is the visible card */
  width: 100%; 
  height: 100%; 
  
  /* Styling and Centering */
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 10px; 
  
  /* Center content horizontally (icon + name are wrapped in tag-content) */
  display: flex;
  align-items: center;
  justify-content: center;
  
  transition: background-color 0.2s, transform 0.3s ease;
}

/* Card effect on hover */
.tech-card-container:hover .tag {
  background-color: rgba(255, 255, 255, 0.2);
  /* Optional: Lift the card down slightly */
  transform: translateY(5px) translateZ(10px); 
}


/* Container for the icon and name, stacked vertically */
.tag-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.25rem;
    padding: 5px;
    z-index: 1;
}

.tag-icon {
    transition: transform 0.3s ease;
}

.tag-name {
    font-size: 0.75rem;
    color: #ccc;
    font-weight: 500;
    text-align: center;
}

/* Hover Info Overlay Styles: Positioned absolutely BELOW the tag */
.tag-info {
    position: absolute;
    /* FIX: Position the top of the info block at the bottom of the card (100% down) */
    top: 100%; 
    left: 50%; /* Center it horizontally */
    
    /* Initial state: Hidden and moved slightly further down */
    transform: translateX(-50%) translateY(-10px); 
    width: 200px; /* Wider width for better readability */
    
    /* Styling */
    background: rgba(10, 10, 30, 0.95); /* Darker overlay */
    border-radius: 10px;
    padding: 10px;
    
    /* Layout */
    z-index: 9999; /* Even higher z-index to dominate */
    pointer-events: none; 
    
    /* Hidden state */
    opacity: 0; 
    transition: opacity 0.3s ease, transform 0.3s ease; 
    
    text-align: center;
    color: white;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.5); /* Stronger shadow for pop-up effect */
}

.tag-info p {
    font-size: 0.8rem;
    line-height: 1.3;
    margin: 0;
}

/* Reveal on hover of the container */
.tech-card-container:hover .tag-info {
    opacity: 1;
    /* Final position: 5px BELOW the card */
    transform: translateX(-50%) translateY(5px); 
}
</style>