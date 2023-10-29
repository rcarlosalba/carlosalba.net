<script setup>
import { useRoute } from 'vue-router';
import { useFirestore, useDocument } from 'vuefire';
import { doc } from 'firebase/firestore';

const route = useRoute();
const db = useFirestore();
const docRef = doc(db, 'proyectos', route.params.id);
const project = useDocument(docRef);
</script>

<template>
  <img
    class="w-full h-96 object-cover"
    :src="project?.imagen"
    alt="project.titulo"
  />
  <div class="w-[90%] mx-auto md:w-[80%] lg:max-w-5xl">
    <h1
      class="text-2xl text-center text-ca-darkblue md:text-4xl font-semibold p-2"
    >
      {{ project?.titulo }}
    </h1>
    <p class="py-4">{{ project?.description }}</p>
    <p>Herramientas para este proyecto:</p>
    <ul v-for="tec in project?.tecnologias">
      <li>- {{ tec }}</li>
    </ul>
    <div
      class="text-white font-semibold rounded-full py-2 px-8 block text-center my-4"
    >
      <a
        target="_blank"
        :href="project?.urlpro"
        class="text-sm py-2 px-10 rounded-full bg-ca-orange"
        >Demo</a
      >
      <span class="px-2"></span>
      <a
        target="_blank"
        :href="project?.urlrepo"
        class="text-sm py-2 px-10 rounded-full bg-ca-darkblue"
        >Código</a
      >
    </div>
  </div>
</template>
