<script setup>
import { useAuthStore } from '../stores/auth';
import { useRoute } from 'vue-router';
import usePosts from '../composables/usePosts';
import useProyectos from '../composables/useProyectos';
const auth = useAuthStore();
const route = useRoute();
const { deletePost } = usePosts();
const { deleteProject } = useProyectos();

defineProps({
  blog: {
    type: Object,
  },
  project: {
    type: Object,
  },
});
</script>

<template>
  <div v-if="route.name === 'blog'">
    <div class="rounded-lg">
      <div class="max-h-44 overflow-hidden p-4">
        <img
          :src="blog.imagen"
          :alt="blog.titulo"
          class="rounded-md object-cover"
        />
      </div>
      <h1
        class="text-lg text-center text-ca-darkblue md:text-xl font-semibold p-2"
      >
        {{ blog.titulo }}
      </h1>
      <div class="max-h-44 overflow-hidden">
        <p class="p-4 h-28 text-clip overflow-hidden ...">{{ blog.intro }}</p>
      </div>
      <div
        v-if="auth.isAuth"
        class="button-container px-2 font-semibold text-white flex justify-around items-center my-2"
      >
        <RouterLink
          :to="{ name: 'edit-blog', params: { id: blog.id } }"
          class="text-sm py-2 px-10 rounded-full bg-ca-orange"
        >
          Editar
        </RouterLink>
        <button
          class="text-sm py-2 px-10 rounded-full bg-ca-darkblue"
          @click="deletePost(blog.id, blog.imagen)"
        >
          Eliminar
        </button>
      </div>
      <div v-else>
        <RouterLink
          :to="{ name: 'post', params: { id: blog.id } }"
          class="bg-ca-darkblue text-white font-semibold rounded-full ml-3 py-2 px-8 inline-block text-center my-4"
        >
          Ver Más
        </RouterLink>
      </div>
    </div>
  </div>
  <div v-if="route.name === 'portfolio'">
    <div class="rounded-lg">
      <div class="max-h-44 overflow-hidden">
        <h1
          class="text-lg text-center text-ca-darkblue md:text-xl font-semibold p-2 truncate"
        >
          {{ project.titulo }}
        </h1>
        <img
          :src="project.imagen"
          :alt="project.titulo"
          class="object-cover"
        />
      </div>
      <div
        v-if="auth.isAuth"
        class="button-container px-2 font-semibold text-white flex justify-around items-center my-2"
      >
        <RouterLink
          :to="{ name: 'edit-project', params: { id: project.id } }"
          class="text-sm py-2 px-10 rounded-full bg-ca-orange"
        >
          Editar
        </RouterLink>
        <button
          class="text-sm py-2 px-10 rounded-full bg-ca-darkblue"
          @click="deleteProject(project.id, project.imagen)"
        >
          Eliminar
        </button>
      </div>
      <div v-else>
        <p class="p-4 truncate">{{ project.description }}</p>
        <RouterLink
          :to="{ name: 'project', params: { id: project.id } }"
          class="bg-ca-darkblue text-white font-semibold rounded-full py-2 px-8 inline-block text-center my-4"
        >
          Ver Más
        </RouterLink>
      </div>
    </div>
  </div>
</template>
