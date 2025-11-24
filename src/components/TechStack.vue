<template>
  <section class="tech-stack">
    <h2>🛠️ My Tech Stack</h2>
    <p>C++, React JS, CSS, JavaScript, Express, Node.js, SQL, Mobile app development.</p>
    <div class="skills-list">
      <span>React.js</span>
      <span>C++</span>
      <span>Node.js</span>
    </div>
  </section>
</template>

<script setup>
// No script needed for this simple component
</script>

<style scoped>
.tech-stack {
  border: 1px solid #ddd;
  padding: 20px;
  border-radius: 8px;
  background-color: #fff;
}

.tech-stack h2 {
  border-bottom: 2px solid #007bff;
  padding-bottom: 10px;
  margin-bottom: 15px;
  color: #007bff;
}

.skills-list span {
  display: inline-block;
  background-color: #e9ecef;
  color: #495057;
  padding: 5px 10px;
  margin-right: 10px;
  margin-top: 10px;
  border-radius: 4px;
  font-size: 0.9em;
}
</style>