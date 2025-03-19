<script setup>
import ProjectItem from './ProjectComponent/ProjectItem.vue';
</script>

<template>
    <section class="project-section" id="projects">
    <div class="container-fluid">
      <h1 class="project-title" >Meus Projetos:</h1>
      <hr>
      <div class="my-3 d-flex flex-xl-row flex-lg-row flex-md-column flex-sm-column flex-xs-column gap-3">
          <ProjectItem></ProjectItem>
          <ProjectItem></ProjectItem>
          <ProjectItem></ProjectItem>
      </div>
      
      </div>
  </section>
</template>