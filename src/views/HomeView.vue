<script setup>
import { useFirebaseService } from '../../services/FirebaseService';
const { proyectosCollection, postsCollection } = useFirebaseService();
</script>

<template>
  <div
    class="h-96 bg-ca-darkblue text-white text-center flex justify-center items-center flex-col space-y-2"
  >
    <h1 class="font-semibold text-5xl">Carlos Alba</h1>
    <h2 class="font-medium md:text-2xl">
      Web Developer | Psicólogo | Profesor
    </h2>
  </div>
  <main class="w-full mx-auto mb-4">
    <!-- destacado -->
    <div
      v-for="post in postsCollection.slice(0, 1)"
      :key="post.id"
      class="destacado mx-auto"
    >
      <div
        class="bg-white shadow-md rounded-md p-4 max-w-5xl mx-auto grid items-center md:grid-cols-2 md:gap-4"
      >
        <div class="max-w-xs mx-auto overflow-hidden md:max-w-lg">
          <img
            :src="post.imagen"
            :alt="post.titulo"
            class="rounded-md object-cover"
          />
        </div>
        <div>
          <h3 class="text-xl font-semibold text-ca-darkblue">
            {{ post.titulo }}
          </h3>
          <p class="text-gray-500">{{ post.intro }}</p>
          <RouterLink
            class="text-ca-darkblue font-semibold text-xl block mt-2 hover:text-ca-lightblue transition-all"
            :to="{ name: 'post', params: { id: post.id } }"
            >Leer Más</RouterLink
          >
          <p class="text-sm mt-2">{{ post.publishDate }}</p>
        </div>
      </div>
    </div>
    <section class="max-w-5xl mx-auto px-4 my-8 md:px-8">
      <h2 class="text-3xl font-semibold text-ca-darkblue">
        Lo más reciente del Blog:
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div
          v-for="post in postsCollection.slice(1, 4)"
          :key="post.id"
          class="bg-white shadow-md rounded-md p-4"
        >
          <h3 class="text-xl font-semibold text-ca-darkblue">
            {{ post.titulo }}
          </h3>
          <div class="max-h-44 overflow-hidden">
            <img
              :src="post.imagen"
              :alt="post.titulo"
              class="rounded-md object-cover"
            />
          </div>
          <p class="text-gray-500">{{ post.intro }}</p>
          <RouterLink
            class="text-ca-darkblue font-semibold text-xl block mt-2 hover:text-ca-lightblue transition-all"
            :to="{ name: 'post', params: { id: post.id } }"
            >Leer Más</RouterLink
          >
          <p class="text-sm mt-2">{{ post.publishDate }}</p>
        </div>
      </div>
    </section>
    <!-- destacado -->
    <div
      v-for="proyecto in proyectosCollection.slice(0, 1)"
      :key="proyecto.id"
      class="destacado mx-auto"
    >
      <div
        class="bg-white shadow-md rounded-md p-4 max-w-5xl mx-auto grid items-center md:grid-cols-2 md:gap-4"
      >
        <div class="max-w-xs mx-auto overflow-hidden md:max-w-lg">
          <img
            :src="proyecto.imagen"
            :alt="proyecto.titulo"
            class="rounded-md object-cover"
          />
        </div>
        <div>
          <h3 class="text-xl font-semibold text-ca-darkblue">
            {{ proyecto.titulo }}
          </h3>
          <p class="text-gray-500">{{ proyecto.description }}</p>
          <RouterLink
            class="text-ca-darkblue font-semibold text-xl block mt-2 hover:text-ca-lightblue transition-all"
            :to="{ name: 'project', params: { id: proyecto.id } }"
          >
            Ver Proyecto</RouterLink
          >
        </div>
      </div>
    </div>
    <section class="max-w-5xl mx-auto px-4 my-8 md:px-8">
      <h2 class="text-3xl font-semibold text-ca-darkblue">
        Últimos Proyectos:
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div
          v-for="proyecto in proyectosCollection.slice(1, 4)"
          :key="proyecto.id"
          class="bg-white shadow-md rounded-md p-4"
        >
          <h3 class="text-xl font-semibold text-ca-darkblue">
            {{ proyecto.titulo }}
          </h3>
          <div class="max-h-44 overflow-hidden">
            <img
              :src="proyecto.imagen"
              :alt="proyecto.titulo"
              class="rounded-md object-cover"
            />
          </div>
          <p class="text-gray-500">{{ proyecto.description }}</p>
          <RouterLink
            class="text-ca-darkblue font-semibold text-xl block mt-2 hover:text-ca-lightblue transition-all"
            :to="{ name: 'project', params: { id: proyecto.id } }"
            >Ver Proyecto</RouterLink
          >
        </div>
      </div>
    </section>
  </main>
</template>
