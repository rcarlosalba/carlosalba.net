<script setup>
import { useRoute } from 'vue-router';
import { useFirestore, useDocument } from 'vuefire';
import { doc } from 'firebase/firestore';

const route = useRoute();
const db = useFirestore();
const docRef = doc(db, 'posts', route.params.id);
const post = useDocument(docRef);
</script>

<template>
  <img
    class="w-full h-96 object-cover"
    :src="post?.imagen"
    alt="post.titulo"
  />
  <div class="w-[90%] mx-auto md:w-[80%] lg:max-w-5xl">
    <p class="text-sm my-4">{{ post?.fecha }}</p>
    <h1
      class="text-2xl text-center text-ca-darkblue md:text-4xl font-semibold p-2"
    >
      {{ post?.titulo }}
    </h1>
    <p class="p-4">{{ post?.intro }}</p>
    <p class="p-4">{{ post?.content }}</p>
    <p class="italic my-4 px-6">{{ post?.cta }}</p>
    <p class="text-center">Categoría: {{ post?.categoria }}</p>
  </div>
</template>
