<template>
  <section class="projects">
    <h2>🏆 My Projects</h2>
    <div class="project-card">
      <h3>ApexMotor Car E-Commerce</h3>
      <p>A competed web application built using **React**.</p>
      <a href="https://apexmotor.shop/" target="_blank">View Project</a>
    </div>
    </section>
</template>

<script setup>
// No script needed
</script>

<style scoped>
.projects {
  border: 1px solid #ddd;
  padding: 20px;
  border-radius: 8px;
  background-color: #fff;
}

.projects h2 {
  border-bottom: 2px solid #28a745;
  padding-bottom: 10px;
  margin-bottom: 15px;
  color: #28a745;
}

.project-card {
  padding: 15px;
  background-color: #f8f9fa;
  border-left: 5px solid #28a745;
  margin-top: 15px;
  border-radius: 4px;
}

.project-card h3 {
  margin-top: 0;
  color: #333;
}

.project-card a {
  color: #007bff;
  text-decoration: none;
  font-weight: bold;
}
</style>