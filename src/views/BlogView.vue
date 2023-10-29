<script setup>
import usePosts from '../composables/usePosts';
const { postsCollection } = usePosts();
import Card from '../components/Card.vue';
</script>

<template>
  <div class="max-w-5xl mx-auto md:p-4 md:max-w-7xl">
    <div class="head-container md:flex justify-between items-center">
      <h1 class="text-2xl font-medium md:text-3xl ml-5">Lo más reciente:</h1>
    </div>
    <div
      class="cards-container mt-8 grid md:grid-cols-2 lg:grid-cols-3 md:gap-8"
    >
      <Card
        v-for="blog in postsCollection"
        :key="blog.id"
        :blog="blog"
      />
    </div>
  </div>
</template>
