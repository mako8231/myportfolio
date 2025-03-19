<script setup lang="ts">
import NavBar from './components/NavBar.vue';
</script>

<template>
  <NavBar></NavBar>
  <div id="home" class="jumbotron jumbotron-fluid">
    <div class="jumbotron-content container-fluid">
      <img src="./assets/img/photo.jpg" class="profile-landing mx-auto d-block" alt="">
      <h1 class="presenting display-4">
        Olá, me chamo Masao Muraoka
      </h1>
      <p class="brief-presentation lead">Sou estudante de Engenharia da Computação na UFGD, tenho um background sólido em desenvolvimento web, aplicações Backend, game development. Uso Linux como sistema operacional principal e sou familiar com o uso de linguagens de programação como JavaScript, Python, Golang, PHP, Bash, C, C++ e Lua</p>
    </div>
  </div>
  <section class="project-section" id="projects">
    <div class="container-fluid">
      <h1 class="project-title" >Meus Projetos:</h1>
      <hr>
      <div class="d-flex flex-xl-row flex-lg-row flex-md-row flex-sm-column flex-xs-column gap-3">
          <div class="project-item col-lg-4">
            <a class="project-link" href="">
              <h3 class="my-3">Título do projeto</h3>
              <p>Descrição Prévia do Projeto</p>
              <p>Tecnologias: C, C++, OpenGL</p>
            </a>
          </div>
          <div class="project-item col-lg-4">
            <a class="project-link" href="">
              <h3 class="my-3">Título do projeto</h3>
              <p>Descrição Prévia do Projeto</p>
              <p>Tecnologias: C, C++, OpenGL</p>
            </a>
          </div>
          <div class="project-item col-lg-4">
            <a class="project-link" href="">
              <h3 class="my-3">Título do projeto</h3>
              <p>Descrição Prévia do Projeto</p>
              <p>Tecnologias: C, C++, OpenGL</p>
            </a>
          </div>
        </div>
      </div>
  </section>
</template>

