<template>
  <main class="h-full min-h-screen">
    <div class="container mx-auto px-4">
      <h1 class="text-3xl font-bold text-gray-800">Admin</h1>
      <div
        class="flex justify-between max-w-3xl mx-auto text-white font-medium"
      >
        <RouterLink
          :to="{ name: 'new-blog' }"
          class="text-sm py-2 px-10 rounded-full bg-ca-orange"
          >Nuevo Blog</RouterLink
        >
        <RouterLink
          :to="{ name: 'new-project' }"
          class="text-sm py-2 px-10 rounded-full bg-ca-orange"
          >Nuevo Proyecto</RouterLink
        >
      </div>
    </div>
  </main>
</template>
