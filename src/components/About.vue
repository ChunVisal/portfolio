<template>
 <section
  class="about-section h-screen w-screen relative overflow-hidden "
>
  <div class="mx-auto w-full h-full grid lg:grid-cols-5">

    <!-- LEFT SIDE -->
    <div class="lg:col-span-3 flex flex-col justify-center">

      <!-- Header -->
      <div class="space-y-1">
        <span class="bg-accent/10 border-accent/20 px-2 py-0.5 rounded text-[11px]">
          🚀 Full Stack Developer
        </span>

        <h1 class="leading-tight text-[2.2rem]">
          Hi, I'm <span class="text-gradient">Chun Visal</span>
        </h1>

        <p class="text-[0.8rem] opacity-80">
          Crafting digital experiences that matter
        </p>
      </div>

      <!-- ABOUT SECTIONS -->
      <div class="space-y-1">
        <div v-for="(item, i) in aboutSections" :key="i" class="space-y-0.5">
          <h2 class="flex items-center gap-1 text-[0.9rem]">
            <span class="text-accent text-[12px]">→</span> {{ item.title }}
          </h2>
          <p class="text-[0.75rem] leading-snug" v-html="item.text"></p>
        </div>
      </div>

      <!-- HOBBIES -->
      <div class="space-y-0.5">
        <h2 class="flex items-center gap-1 text-[0.9rem]">
          <span class="text-accent text-[12px]">→</span> Interests
        </h2>

        <div class="hobby-wrapper h-[45px]">
          <div class="hobby-track">
            <div class="hobby-item w-[70px] h-[45px]"
                 v-for="(hobby, i) in duplicatedHobbies"
                 :key="i">
              <img :src="hobby.img" :alt="hobby.alt" />
            </div>
          </div>
        </div>
      </div>

    </div>

    <!-- RIGHT SIDE -->
    <div class="lg:col-span-2 flex flex-col justify-center space-y-2">

      <!-- CODE BLOCK -->
      <div class="card-soft p-2">
        <div class="space-y-1">
          <div class="flex items-center gap-1 mb-1">
            <div class="w-1.5 h-1.5 rounded-full bg-red-500"></div>
            <div class="w-1.5 h-1.5 rounded-full bg-yellow-500"></div>
            <div class="w-1.5 h-1.5 rounded-full bg-green-500"></div>
            <span class="text-[10px] ml-1">developer.ts</span>
          </div>

          <div class="font-mono space-y-0.5">
            <div
              v-for="(line, i) in codeLines"
              :key="i"
              :class="[
                'text-[10px] text-white transition-all',
                i === activeLineIndex ? 'text-accent scale-[1.03] translate-x-1' : 'opacity-75'
              ]"
            >
              {{ line }}
            </div>
          </div>
        </div>
      </div>

      <!-- SKILLS -->
      <div class="card-soft p-3 bg-card/40 space-y-2">
        <h2 class="text-[0.9rem]">Tech Arsenal</h2>

        <div
          v-for="(group, i) in skills"
          :key="group.category"
          class="space-y-1"
          :style="{ animationDelay: i * 0.05 + 's' }"
        >
          <h3 class="teach-stack flex items-center gap-1 uppercase text-[0.65rem]">
            <span class="w-1 h-1 rounded-full bg-accent"></span>
            {{ group.category }}
          </h3>

          <div class="flex flex-wrap gap-1">
            <span
              v-for="skill in group.items"
              :key="skill"
              class="px-2 py-2px bg-secondary/20 rounded text-[10px]"
            >
              {{ skill }}
            </span>
          </div>
        </div>
      </div>

      <!-- STATS -->
      <div class="grid grid-cols-4 gap-1">
        <div
          v-for="stat in stats"
          :key="stat.label"
          class="card-soft p-2 text-center"
        >
          <div class="text-gradient text-[0.9rem] font-bold leading-none">
            {{ stat.value }}
          </div>
          <div class="text-[0.55rem] opacity-70">{{ stat.label }}</div>
        </div>
      </div>

    </div>

  </div>
</section>

</template>

<script setup>
import car from "../../public/hobbies/car.png";
import coding from "../../public/hobbies/coding.png";
import cybersecurity from "../../public/hobbies/cybersecurity.png";
import fast from "../../public/hobbies/fastandfurious.png";
import fortnite from "../../public/hobbies/fortnite.png";
import gym from "../../public/hobbies/gym.png";
import minecraft from "../../public/hobbies/minecraft.png";
import music from "../../public/hobbies/music.png";
import vscode from "../../public/hobbies/vscode.png";
import visal from "../../public/hobbies/visal.jpg";

/* HOBBIES */
const hobbies = [
  { img: car, alt: "Car" },
  { img: coding, alt: "Coding" },
  { img: cybersecurity, alt: "Cybersecurity" },
  { img: fast, alt: "Fast & Furious" },
  { img: fortnite, alt: "Fortnite" },
  { img: gym, alt: "Gym" },
  { img: minecraft, alt: "Minecraft" },
  { img: music, alt: "Music" },
  { img: vscode, alt: "VS Code" },
  { img: visal, alt: "Visal" }
];

const duplicatedHobbies = [...hobbies, ...hobbies, ...hobbies];

/* ABOUT TEXT BLOCKS */
const aboutSections = [
  {
    title: "What I Do",
    text: `I specialize in building <span class='text-accent'>high-performance web apps</span>.`
  },
  {
    title: "My Approach",
    text: `Clean code, fast systems, and <span class='text-accent'>constant improvement</span>.`
  },
  {
    title: "Beyond Code",
    text: `Gaming, hacking, VS Code mods, cars, and sharing knowledge.`
  }
];

/* SKILLS */
const skills = [
  { category: "Frontend", items: ["Vue", "React", "Tailwind", "TypeScript"] },
  { category: "Backend", items: ["Node", "Python", "Express", "SQL"] },
  { category: "DevOps", items: ["Docker", "CI/CD", "Linux"] }
];

/* CODE LINES */
const codeLines = [
  "const developer = {",
  "  name: 'Visal',",
  "  role: 'Full Stack Dev',",
  "  passion: 'Building cool stuff',",
  "  exp: 'No experience, but waiting to learning fast!',",
  "};"
];

const activeLineIndex = 2;

/* STATS */
const stats = [
  { value: "3+", label: "Years" },
  { value: "10+", label: "Projects" },
  { value: "∞", label: "Ideas" },
  { value: "100%", label: "Passion" }
];
</script>

<style scoped>
/* Typography rules for this section ONLY */
.about-section h1 {
  font-size: 2.0.9rem;
}

.about-section h1 span {
  background: linear-gradient(90deg, #6ee7b7 0%, #60a5fa 50%, #c7b3ff 100%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  display: inline-block;
  transition: filter 300ms ease, transform 300ms ease;
  font: inherit;
}

.about-section h2 {
  font-size: 0.9rem; /* 16px */
}

.about-section span {
  font-size: 13px;
}

.about-section p {
  font-size: 0.7rem;
}

/* image scroll horizontal infinty repeact smooth */
.hobby-wrapper {
  width: 70%;
  height: 50px;
  overflow: hidden;
  border-radius: 5px;
  position: relative;
}

.hobby-track {
  display: flex;
  gap: 12px;
  width: max-content;
  animation: scroll 30s linear infinite;
}

.hobby-item {
  width: 100px;
  height: 55px;
  border-radius: 5px;
  overflow: hidden;
  flex-shrink: 0;
}

.hobby-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* Infinite Scroll Animation */
@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}


.card-soft {
  background: rgba(73, 119, 168, 0.213);
  backdrop-filter: blur(10px) saturate(180%);
  -webkit-backdrop-filter: blur(40px) saturate(200%);
  box-shadow: 0 4px 10px rgba(29, 29, 29, 0.148);
  border-radius: 10px;
  color: white;
}

.card-soft h3 {
  font-size: 0.7rem;
}

.card-soft span {
  font-size: 0.65rem;
}

.card-title span {
  font-family: "Exo 2", sans-serif;
  font-weight: 600;
  font-size: 0.5rem;
}

.card-syntax {
  font-size: 0.60rem;
  color: #d4d4d4;
}

.teach-stack {
  font-family: "Source Code Pro", monospace;
  font-size: 0.80rem;
  color: #9cdcfe;
}

.stats div {
  font-family: "Exo 2", sans-serif;
  color: #ffffff;
  font-size: 0.7rem;
}

.stats .text-gradient {
  font-size: 0.9rem;
  font-weight: 700;
  background: linear-gradient(90deg, #6ee7b7 0%, #60a5fa 50%, #c7b3ff 100%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  display: inline-block;
}

</style>