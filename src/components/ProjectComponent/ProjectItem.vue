<script setup>
    const props = defineProps(['descricao', 'titulo', 'tecnologias', 'url'])
</script>

<template>
    <div class="project-item col-lg-4">
        <a target="_blank" class="project-link" :href="props.url">
            <b><h3 class="my-3">{{ props.titulo }}</h3></b>
            <p>{{ props.descricao }}</p>
            <p><b>Tecnologias Utilizadas: </b>{{ props.tecnologias }}</p>
        </a>
    </div>
</template>