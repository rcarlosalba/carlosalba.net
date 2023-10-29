<script setup>
import useProyectos from '../composables/useProyectos';
const { proyectosCollection } = useProyectos();
import Card from '../components/Card.vue';
</script>

<template>
  <div class="container mx-auto md:max-w-5xl">
    <div class="head-container md:flex justify-between items-center">
      <h1 class="text-2xl font-medium md:text-3xl ml-5">Proyectos:</h1>
    </div>
    <div
      class="cards-container px-4 w-full mx-auto md:px-6 md:grid md:grid-cols-2 md:gap-6 lg:grid-cols-3 md:max-w-5xl"
    >
      <Card
        v-for="project in proyectosCollection"
        :key="project.id"
        :project="project"
      >
      </Card>
    </div>
  </div>
</template>
