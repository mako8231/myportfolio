<script setup>
import ProjectItem from './ProjectComponent/ProjectItem.vue';
</script>

<template>
    <section class="project-section" id="projects">
    <div class="container-fluid">
      <h1 class="project-title" >Meus Projetos:</h1>
      <hr>
      <div class="my-3 d-flex flex-xl-row flex-lg-row flex-md-column flex-sm-column flex-xs-column gap-3">
          <ProjectItem titulo="Kai Space" descricao="Uma engine para a criação de forums focado para artistas (ainda em desenvolvimento)" tecnologias="Javascript, PHP, Vue3, Laravel, Docker" url="https://github.com/mako8231/kai-space"></ProjectItem>
          <ProjectItem titulo="Interpretador Brainf@*k" descricao="Clássico interpretador da linguagem de programação BF" tecnologias="Golang" url="https://github.com/mako8231/brainfuck"></ProjectItem>
          <ProjectItem titulo="Clone de Instagram" descricao="Projeto realizado enquanto eu estudava a tecnologia Laravel" tecnologias="PHP, Blade, Vue3, Laravel" url="https://github.com/mako8231/brainfuck"></ProjectItem>
      </div>
      <div class="my-3 d-flex flex-xl-row flex-lg-row flex-md-column flex-sm-column flex-xs-column gap-3">
          <ProjectItem titulo="Projeto Humanoide" descricao="Um boneco humanoide criado em C/OpenGL para a disciplina de Computação Gráfica" tecnologias="C/C++, OpenGL" url="https://github.com/mako8231/kai-space"></ProjectItem>
      </div>
      </div>
  </section>
</template>